import type { Translations } from "@/lib/i18n";

interface PricingProps {
  translation: Translations;
}

export default function Pricing({ translation }: PricingProps) {
  return (
    <section id="pricing" className="section">
      <div className="section-tag">{translation.pricing.tag}</div>
      <h2>{translation.pricing.heading}</h2>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: "52ch", marginBottom: 0 }}>
        {translation.pricing.subtitle}
      </p>
      <div className="pricing-grid">
        {translation.pricing.plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}

function PlanCard({
  plan,
}: {
  plan: {
    name: string;
    price: string;
    priceSuffix: string;
    period: string;
    featured: boolean;
    badge?: string;
    cta: string;
    features: readonly string[];
  };
}) {
  return (
    <div className={`plan${plan.featured ? " featured" : ""}`}>
      {plan.badge && <div className="plan-badge">{plan.badge}</div>}
      <div className="plan-name">{plan.name}</div>
      <div className="plan-price">
        {plan.price}
        {plan.priceSuffix && <sub>{plan.priceSuffix}</sub>}
      </div>
      <div className="plan-period">{plan.period}</div>
      <ul className="plan-features">
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a
        href="#contact"
        className={`button ${plan.featured ? "button-primary" : "button-secondary"}`}
        style={{ width: "100%", justifyContent: "center" }}
      >
        {plan.cta}
      </a>
    </div>
  );
}
