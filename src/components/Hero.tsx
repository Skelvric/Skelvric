import type { Translations } from "@/lib/i18n";

interface HeroProps {
  translation: Translations;
}

const MARQUEE_ITEMS = [
  "Web & API Development",
  "High-performance Backend Systems",
  "REST APIs",
  "GraphQL APIs",
  "Microservice Architectures",
  "Node.js",
  "Python",
  "Go",
  "Mobile Applications",
  "Cross-platform Mobile Development",
  "iOS Development",
  "Android Development",
  "React Native",
  "Swift",
  "Kotlin",
  "Cloud & DevOps",
  "Cloud Infrastructure Design",
  "AWS",
  "Google Cloud Platform",
  "Microsoft Azure",
  "CI/CD Pipelines",
  "Docker",
  "Terraform",
  "Monitoring Systems",
  "Data & Analytics",
  "Data Warehouses",
  "ETL Pipelines",
  "Dashboard Design",
  "Machine Learning Integration",
  "Apache Spark",
  "dbt",
  "Python Analytics",
];

export default function Hero({ translation }: HeroProps) {
  return (
    <>
      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track" style={{ animationDuration: "64s" }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, index) => (
            <span key={index} className={index % 2 !== 0 ? "dot" : undefined}>
              {index % 2 === 0 ? item : "·"}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-eyebrow">{translation.hero.eyebrow}</div>

        <h1>
          {translation.hero.heading}{" "}
          <em>{translation.hero.headingItalic}</em>{" "}
          {translation.hero.headingEnd}
        </h1>

        <p className="hero-subtitle">{translation.hero.subtitle}</p>

        <div className="hero-actions">
          <a href="#contact" className="button button-primary">
            {translation.hero.cta}
          </a>
          <a href="#services" className="button button-secondary">
            {translation.hero.ctaSecondary}
          </a>
        </div>

        {/* Metrics */}
        <div className="hero-metrics">
          {translation.hero.metrics.map((metric) => (
            <div key={metric.label} className="metric">
              <div className="metric-number">{metric.number}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
