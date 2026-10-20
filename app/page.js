import Link from "next/link";

const features = [
  { icon: "01", title: "Consent Sandbox", text: "Try cookie banners and preference centers without touching production." },
  { icon: "02", title: "Data Mapping Lab", text: "Model data inventories using fake records in a safe space." },
  { icon: "03", title: "Deployment Testing", text: "Validate Next.js builds running on Webflow Cloud's edge runtime." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="eyebrow">Sandbox environment</span>
          <h1>
            Build trust, <span>test safely.</span>
          </h1>
          <p>
            OneTrust Sandbox Inc is a fictional company used to test Next.js and React apps
            connected to Webflow and deployed on Webflow Cloud.
          </p>
          <div className="btn-row">
            <Link href="/resources" className="btn">Download resources</Link>
            <Link href="/contact" className="btn outline">Contact us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What we do</h2>
          <div className="grid">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <div className="icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="stats">
            <div className="stat"><strong>5</strong><span>Test pages</span></div>
            <div className="stat"><strong>1</strong><span>Downloadable PDF</span></div>
            <div className="stat"><strong>100%</strong><span>Fake data</span></div>
            <div className="stat"><strong>0</strong><span>Production risk</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Looking for something?</h2>
              <p>Search pages, services, and resources across the sandbox.</p>
            </div>
            <Link href="/search" className="btn">Search the site</Link>
          </div>
        </div>
      </section>
    </>
  );
}
