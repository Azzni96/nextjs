import { NextResponse } from "next/server";
import { users } from "./data";

export async function GET() {
    return NextResponse.json(users);
}

export async function POST(req) {
    const body = await req.json();
    const { name } = body;

    if (!name) {
        return NextResponse.json(
            { error: "Name is required." },
            { status: 400 }
        );
    }
    if (users.find(user => user.name === name)) {
        return NextResponse.json(
            { error: "User already exists." },
            { status: 409 }
        );
    }
    
    const newUser = {
        id: users.length + 1,
        name,
    };
    users.push(newUser);
    return NextResponse.json(newUser, { status: 201 });
}