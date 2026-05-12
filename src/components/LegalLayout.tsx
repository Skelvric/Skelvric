import Link from "next/link";

interface Section {
  heading: string;
  body: string | string[];
}

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string;
  sections: Section[];
}

export default function LegalLayout({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalLayoutProps) {
  return (
    <>
      {/* Minimal Header */}
      <header className="site-header">
        <Link href="/" className="logo">
          Skelvric
          <span>Deeper Than Code.</span>
        </Link>
        <nav>
          <Link href="/" className="nav-link">← Back to Home</Link>
        </nav>
      </header>

      <main>
        {/* Page Hero */}
        <section className="legal-hero">
          <div className="legal-hero-eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="legal-last-updated">{lastUpdated}</p>
          <p className="legal-intro">{intro}</p>
        </section>

        {/* Content */}
        <article className="legal-article">
          {sections.map((section, index) => (
            <div key={index} className="legal-section">
              <h2>{section.heading}</h2>
              {Array.isArray(section.body)
                ? section.body.map((parameter, index) => <p key={index}>{parameter}</p>)
                : <p>{section.body}</p>}
            </div>
          ))}
        </article>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <span className="footer-copy">© 2026 Skelvric — Deeper Than Code.</span>
          <div className="footer-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/careers">Careers</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
