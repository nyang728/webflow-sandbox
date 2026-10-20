import { resources } from "@/lib/content";
import { withBase } from "@/lib/basePath";

export const metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Resources</span>
          <h1>Resources & downloads</h1>
          <p>Guides and documents about the OneTrust Sandbox Inc test environment.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gap: 16 }}>
          {resources.map((r) => (
            <div className="card resource" key={r.id}>
              <div>
                <span className="tag">{r.category}</span>
                <h3 style={{ display: "inline" }}>{r.title}</h3>
                <p style={{ marginTop: 8 }}>{r.description}</p>
                <div className="meta">{r.type} · {r.size}</div>
              </div>
              <div className="btn-row">
                <a className="btn" href={withBase(r.file)} download>
                  Download PDF
                </a>
                <a className="btn dark" href={withBase(r.file)} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
