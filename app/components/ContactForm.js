"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setResult(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setResult({ type: "error", text: data.error || "Something went wrong" });
      } else {
        setResult({ type: "success", text: data.message });
        setName("");
        setMessage("");
      }
    } catch {
      setResult({ type: "error", text: "Network error" });
    }
  }

  return (
    <div style={{ marginTop: 16 }}>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          style={{ padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 14px",
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>

      {result && (
        <p style={{ marginTop: 12 }}>
          {result.type === "success" ? "✅ " : "❌ "}
          {result.text}
        </p>
      )}
    </div>
  );
}
