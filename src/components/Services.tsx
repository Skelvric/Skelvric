import type { Translations } from "@/lib/i18n";

interface ServicesProps {
  translation: Translations;
}

export default function Services({ translation }: ServicesProps) {
  return (
    <section id="services" className="section">
      <div className="section-tag">{translation.services.tag}</div>
      <h2>{translation.services.heading}</h2>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "52ch" }}>
        {translation.services.subtitle}
      </p>
      <div className="services-grid">
        {translation.services.items.map((item) => (
          <ServiceCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  item,
}: {
  item: { icon: string; title: string; description: string; tag: string };
}) {
  return (
    <div className="service-card">
      <div className="service-icon">{item.icon}</div>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <span className="service-tag">{item.tag}</span>
    </div>
  );
}
