import { NextResponse } from "next/server";

export async function GET() {
  try {
    const uid = crypto.randomUUID();
    return NextResponse.json({ uid }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate uid" },
      { status: 500 }
    );
  }
}

export const dynamic = "force-dynamic";
