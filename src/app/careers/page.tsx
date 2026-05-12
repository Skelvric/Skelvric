"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    type: "Full-time · Remote",
    stack: "Node.js · React · PostgreSQL",
    description:
      "We're looking for an experienced full-stack engineer to lead complex client projects end-to-end — from architecture decisions to production deployments.",
    requirements: [
      "5+ years of full-stack development experience",
      "Strong proficiency in Node.js and React",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Excellent written and verbal communication in English",
      "Ability to work independently and manage client relationships",
    ],
  },
  {
    title: "Mobile Engineer (React Native)",
    type: "Full-time · Remote",
    stack: "React Native · TypeScript · iOS · Android",
    description:
      "Build high-quality cross-platform mobile applications for clients across fintech, e-commerce, and SaaS verticals.",
    requirements: [
      "3+ years of React Native development",
      "Experience shipping apps to the App Store and Google Play",
      "Familiarity with native modules and platform-specific APIs",
      "Strong TypeScript skills",
    ],
  },
  {
    title: "DevOps / Cloud Engineer",
    type: "Full-time · Remote",
    stack: "AWS · Terraform · Docker · Kubernetes",
    description:
      "Design and maintain cloud infrastructure for our clients — from CI/CD pipelines and container orchestration to monitoring and cost optimization.",
    requirements: [
      "3+ years of DevOps or cloud engineering experience",
      "Hands-on experience with Terraform and AWS",
      "Strong understanding of container orchestration (Kubernetes or ECS)",
      "Experience with observability tools (Datadog, Grafana, etc.)",
    ],
  },
  {
    title: "Data Engineer",
    type: "Full-time · Remote",
    stack: "Python · dbt · Spark · BigQuery",
    description:
      "Build robust data pipelines and warehouses that power analytics and machine learning for our clients.",
    requirements: [
      "3+ years of data engineering experience",
      "Proficiency in Python and SQL",
      "Experience with dbt and modern data stack tools",
      "Familiarity with BigQuery, Snowflake, or Redshift",
    ],
  },
];

const values = [
  {
    icon: "◈",
    title: "Remote-first",
    desc: "We are a fully distributed team. Work from anywhere, on a schedule that fits your life.",
  },
  {
    icon: "⬡",
    title: "Ownership",
    desc: "Every team member owns their work end-to-end. No micromanagement — just trust and accountability.",
  },
  {
    icon: "◻",
    title: "Craft",
    desc: "We care deeply about code quality, communication, and doing things right — not just fast.",
  },
  {
    icon: "◈",
    title: "Growth",
    desc: "We invest in our people. Conference budget, learning resources, and time to build side projects.",
  },
];

export default function CareersPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Sync Theme Attribute
  useEffect(() => {
    const saved = localStorage.getItem("skelvric-theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  return (
    <>
      {/* Header */}
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
        {/* Hero */}
        <section className="legal-hero">
          <div className="legal-hero-eyebrow">// Careers</div>
          <h1>Work with us.</h1>
          <p className="legal-intro">
            We're a small, senior, fully remote team building software for ambitious clients worldwide.
            We move fast, care about craft, and give everyone real ownership of their work.
          </p>
        </section>

        {/* Values */}
        <section className="legal-article" style={{ paddingBottom: 0 }}>
          <div className="legal-section-label">// How we work</div>
          <div className="careers-values">
            {values.map((value) => (
              <div key={value.title} className="careers-value-card">
                <div className="service-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Roles */}
        <section className="legal-article">
          <div className="legal-section-label">// Open positions</div>
          <div className="careers-roles">
            {openRoles.map((role) => (
              <div key={role.title} className="careers-role">
                <div className="careers-role-header">
                  <div>
                    <h3>{role.title}</h3>
                    <div className="careers-role-meta">
                      <span className="careers-badge">{role.type}</span>
                      <span className="service-tag">{role.stack}</span>
                    </div>
                  </div>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{role.description}</p>
                <ul className="careers-requirements">
                  {role.requirements.map((requirement) => (
                    <li key={requirement}>{requirement}</li>
                  ))}
                </ul>
                <a
                  href={`mailto:careers@skelvric.com?subject=Application: ${role.title}`}
                  className="button button-secondary"
                >
                  Apply for this role →
                </a>
              </div>
            ))}
          </div>

          {/* No Role? */}
          <div className="careers-open-app">
            <h3>Don't see a fit?</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "48ch" }}>
              We occasionally hire for roles not listed here. Send us your CV and a brief note about
              what you'd like to work on.
            </p>
            <a
              href="mailto:careers@skelvric.com?subject=Open Application"
              className="button button-primary"
            >
              Send an open application →
            </a>
          </div>
        </section>
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
