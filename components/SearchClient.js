"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { searchIndex } from "@/lib/content";

const types = ["All", ...new Set(searchIndex.map((item) => item.type))];

function highlight(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? <mark key={i}>{part}</mark> : part
  );
}

export default function SearchClient() {
  const router = useRouter();
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const [type, setType] = useState("All");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return searchIndex.filter((item) => {
      if (type !== "All" && item.type !== type) return false;
      if (!q) return true;
      return `${item.title} ${item.body}`.toLowerCase().includes(q);
    });
  }, [query, type]);

  function handleSubmit(event) {
    event.preventDefault();
    const q = query.trim();
    router.replace(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  return (
    <>
      <form className="search-box" role="search" onSubmit={handleSubmit}>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pages, services, resources..."
          aria-label="Search"
          autoFocus
        />
        <button className="btn" type="submit">Search</button>
      </form>

      <div className="filters">
        {types.map((t) => (
          <button
            key={t}
            type="button"
            className={`chip${type === t ? " active" : ""}`}
            onClick={() => setType(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <p style={{ color: "var(--muted)", marginTop: 20 }}>
        {results.length} result{results.length === 1 ? "" : "s"}
        {query.trim() && <> for “{query.trim()}”</>}
      </p>

      <ul className="results">
        {results.map((item) => (
          <li className="result" key={`${item.type}-${item.title}`}>
            <span className="tag">{item.type}</span>
            <Link href={item.href}>{highlight(item.title, query.trim())}</Link>
            <p>{highlight(item.body, query.trim())}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
