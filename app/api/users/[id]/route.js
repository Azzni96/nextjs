import { NextResponse } from "next/server";
import { users } from "../data";

export async function GET(req, { params }) {
  const { id } = await params;      // ✅ لازم await
  const idNum = Number(id);

  const user = users.find((u) => u.id === idNum);

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
}