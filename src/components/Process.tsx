import type { Translations } from "@/lib/i18n";

interface ProcessProps {
  translation: Translations;
}

export default function Process({ translation }: ProcessProps) {
  return (
    <section id="process" className="section">
      <div className="section-tag">{translation.process.tag}</div>
      <h2>{translation.process.heading}</h2>
      <div className="how-steps">
        {translation.process.steps.map((step) => (
          <div key={step.number} className="step">
            <div className="step-number">{step.number}</div>
            <div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
