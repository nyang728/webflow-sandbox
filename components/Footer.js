import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          © {new Date().getFullYear()} OneTrust Sandbox Inc. Fictional test site for Webflow Cloud.
        </div>
        <nav aria-label="Footer">
          <Link href="/about">About</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/search">Search</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
