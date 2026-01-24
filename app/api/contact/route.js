import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const { name, message } = body;

  if (!name || !message) {
    return NextResponse.json(
        { error: "Name and message are required." },
        { status: 400 }
    );
    }
    return NextResponse.json(
        { success: true, message: "Contact message received." },
        { status: 201 }
    );
}
