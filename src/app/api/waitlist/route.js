import { NextResponse } from "next/server";
import { knownRegex } from "@/../const/knownRegex";

const { NOTION_DATABASE_ID, NOTION_TOKEN } = process.env;
const isNotionConfigured = NOTION_DATABASE_ID && NOTION_TOKEN;

function sanitizeAndValidateDomain(domain) {
  if (!domain || typeof domain !== "string") {
    return { isValid: false, sanitized: null };
  }

  const sanitized = domain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "")
    .slice(0, 253);

  const isValid = knownRegex.domain.test(sanitized);

  return { isValid, sanitized };
}

async function createNotionEntry(domain, uid) {
  const payload = {
    parent: { database_id: NOTION_DATABASE_ID },
    properties: {
      Domain: { url: `https://${domain}` },
      UID: { rich_text: [{ type: "text", text: { content: uid } }] },
      "Created at": { date: { start: new Date().toISOString() } },
    },
  };

  const response = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error("Notion API error on create:", response.status, errorData);
    throw new Error("Failed to save submission to Notion.");
  }

  return response.json();
}

export async function POST(request) {
  if (!isNotionConfigured) {
    console.error("Notion API is not configured. Check environment variables.");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    let { domain, uid } = body;

    const { isValid, sanitized: sanitizedDomain } =
      sanitizeAndValidateDomain(domain);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid domain format" },
        { status: 400 }
      );
    }

    if (!uid) {
      uid = crypto.randomUUID();
    }

    const notionData = await createNotionEntry(sanitizedDomain, uid);

    return NextResponse.json(
      {
        success: true,
        message: "Domain added to database successfully",
        submissionId: notionData.id,
        domain: sanitizedDomain,
        uid,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error in /api/waitlist:", error.message);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
