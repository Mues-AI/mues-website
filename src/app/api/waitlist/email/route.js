import { NextResponse } from "next/server";
import { knownRegex } from "@/../const/knownRegex";

const { NOTION_DATABASE_ID, NOTION_TOKEN } = process.env;
const isNotionConfigured = NOTION_DATABASE_ID && NOTION_TOKEN;

async function findNotionPageByUid(uid) {
  const response = await fetch(
    `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        filter: { property: "UID", rich_text: { equals: uid } },
        page_size: 1,
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.text();
    console.error("Notion query error:", response.status, errorData);
    throw new Error("Failed to query Notion database.");
  }

  const { results } = await response.json();
  if (!results || results.length === 0) {
    return null;
  }

  return results[0].id;
}

async function updateNotionPageWithEmail(pageId, email) {
  const response = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28",
    },
    body: JSON.stringify({
      properties: { Email: { email: email.trim().toLowerCase() } },
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    console.error("Notion update error:", response.status, errorData);
    throw new Error("Failed to update Notion page with email.");
  }
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
    const { uid, email } = await request.json();

    if (!uid || typeof uid !== "string" || uid.length > 128) {
      return NextResponse.json(
        { error: "Invalid UID provided." },
        { status: 400 }
      );
    }
    if (!email || !knownRegex.email.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    const pageId = await findNotionPageByUid(uid);
    if (!pageId) {
      return NextResponse.json(
        { error: "No record found for the provided UID." },
        { status: 404 }
      );
    }

    await updateNotionPageWithEmail(pageId, email);

    return NextResponse.json({ success: true, pageId }, { status: 200 });
  } catch (error) {
    console.error("API error in /api/waitlist/email:", error.message);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
