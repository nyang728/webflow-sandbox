import { Suspense } from "react";
import SearchClient from "@/components/SearchClient";

export const metadata = { title: "Search" };

export default function SearchPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Search</span>
          <h1>Search the sandbox</h1>
          <p>Find pages, services, and downloadable resources.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Suspense fallback={<p>Loading search...</p>}>
            <SearchClient />
          </Suspense>
        </div>
      </section>
    </>
  );
}
