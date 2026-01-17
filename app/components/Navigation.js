"use client";

import Link from "next/link";

export default function Navigation() {
    return (
        <nav style={{display: "flex", gap: "12px", padding: "12px 0" }}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/blog/post">Blog Post</Link>
        </nav>
    );
}