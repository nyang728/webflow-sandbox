import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch</h1>
          <p>Send the sandbox team a message. This form is for testing and nothing is actually sent.</p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <ContactForm />
          <aside className="card">
            <h3>Sandbox HQ</h3>
            <p>
              123 Test Avenue<br />
              Suite 404<br />
              Cloud City, CA 00000
            </p>
            <p style={{ marginTop: 16 }}>
              hello@sandbox.example<br />
              +1 (555) 010-0000
            </p>
            <p style={{ marginTop: 16 }}>Mon–Fri, 9am–5pm PT</p>
          </aside>
        </div>
      </section>
    </>
  );
}
