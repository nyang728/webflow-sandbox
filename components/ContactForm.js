"use client";

import { useState } from "react";
import { withBase } from "@/lib/basePath";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ state: "sending", message: "" });

    try {
      const res = await fetch(withBase("/api/contact"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus({ state: "sent", message: json.message });
      form.reset();
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Name
          <input name="name" required placeholder="Jane Doe" />
        </label>
        <label>
          Email
          <input name="email" type="email" required placeholder="jane@example.com" />
        </label>
      </div>
      <label>
        Topic
        <select name="topic" defaultValue="General">
          <option>General</option>
          <option>Consent Sandbox</option>
          <option>Data Mapping Lab</option>
          <option>Deployment Testing</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows={6} required placeholder="How can we help?" />
      </label>
      <div>
        <button className="btn" type="submit" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending..." : "Send message"}
        </button>
      </div>
      {status.state === "sent" && <div className="notice" role="status">{status.message}</div>}
      {status.state === "error" && <div className="notice error" role="alert">{status.message}</div>}
    </form>
  );
}
