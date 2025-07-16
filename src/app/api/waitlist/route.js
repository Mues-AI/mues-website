import { NextResponse } from 'next/server';

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_TOKEN = process.env.NOTION_TOKEN;

if (!NOTION_DATABASE_ID || !NOTION_TOKEN) {
  console.error('Missing required environment variables: NOTION_DATABASE_ID or NOTION_TOKEN');
}

// Validate domain format
function isValidDomain(domain) {
  if (!domain || typeof domain !== 'string') return false;
  
  const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
  
  // Basic domain validation regex
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.([a-zA-Z]{2,}\.)*[a-zA-Z]{2,}$/;
  
  return domainRegex.test(cleanDomain) && cleanDomain.length <= 253;
}

// Sanitize domain input
function sanitizeDomain(domain) {
  if (!domain) return '';
  
  return domain
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '')
    .slice(0, 253);
}

export async function POST(request) {
  try {
    if (!NOTION_DATABASE_ID || !NOTION_TOKEN) {
      console.error('Missing Notion configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Parse request body
    const body = await request.json();
    const { domain } = body;

    // Validate and sanitize domain
    const sanitizedDomain = sanitizeDomain(domain);
    
    if (!isValidDomain(sanitizedDomain)) {
      return NextResponse.json(
        { error: 'Invalid domain format' },
        { status: 400 }
      );
    }

    // Current timestamp
    const submissionDate = new Date().toISOString();

    // Prepare Notion API payload for database row
    const notionPayload = {
      parent: {
        database_id: NOTION_DATABASE_ID
      },
      properties: {
        Domain: {
          url: `https://${sanitizedDomain}`
        },
        'Created at': {
          date: {
            start: submissionDate
          }
        }
      }
    };

    // Add new row to database
    const NOTION_API_URL = 'https://api.notion.com/v1/pages';
    const notionResponse = await fetch(NOTION_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
      },
      body: JSON.stringify(notionPayload)
    });

    if (!notionResponse.ok) {
      const errorData = await notionResponse.text();
      console.error('Notion API error:', notionResponse.status, errorData);
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      );
    }

    const notionData = await notionResponse.json();
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Domain added to database successfully',
        submissionId: notionData.id,
        domain: sanitizedDomain,
        submissionDate
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
} 