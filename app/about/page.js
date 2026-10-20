import Link from "next/link";

export const metadata = { title: "About Us" };

const values = [
  { title: "Transparency", text: "Every test is documented and every result is shared." },
  { title: "Privacy first", text: "We only ever use fake, generated data." },
  { title: "Ship safely", text: "Break things in the sandbox so production stays calm." },
];

const services = [
  { title: "Consent Sandbox", text: "Cookie banners, preference centers, and consent logging." },
  { title: "Data Mapping Lab", text: "Data inventories and processing records with fake datasets." },
  { title: "Deployment Testing", text: "Next.js on Webflow Cloud: base paths, edge runtime, and assets." },
];

const team = [
  { name: "Alex Rivera", role: "Sandbox Lead" },
  { name: "Jordan Kim", role: "Frontend Engineer" },
  { name: "Sam Patel", role: "QA & Release" },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">About us</span>
          <h1>About OneTrust Sandbox Inc</h1>
          <p>
            We are a fictional company that exists purely to test websites, apps, and
            deployments on Webflow and Webflow Cloud.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <h2>Our mission</h2>
            <p>
              OneTrust Sandbox Inc gives teams a safe place to try new ideas. Our Next.js
              and React site is deployed to Webflow Cloud and mounted alongside a Webflow
              site, so designers and developers can validate the full publishing flow
              end to end.
            </p>
            <p>
              Nothing here is real: the people, numbers, and documents are placeholders
              used for testing.
            </p>
          </div>
          <div className="card">
            <h3>Quick facts</h3>
            <p>Founded: 2026<br />HQ: The Cloud<br />Stack: Next.js, React, Webflow Cloud</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Our values</h2>
          <div className="grid">
            {values.map((v) => (
              <div className="card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <h2>Services</h2>
          <div className="grid">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>The team</h2>
          <div className="grid">
            {team.map((t) => (
              <div className="card" key={t.name}>
                <div className="icon">{t.name.split(" ").map((n) => n[0]).join("")}</div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 32 }}>
            <Link href="/contact" className="btn dark">Work with us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
