import type { Translations } from "@/lib/i18n";

interface CTABandProps {
  translation: Translations;
}

export default function CTABand({ translation }: CTABandProps) {
  return (
    <section className="cta-band">
      <h2>{translation.cta.heading}</h2>
      <div className="actions">
        <a href="#contact" className="button button-primary">
          {translation.cta.button}
        </a>
      </div>
    </section>
  );
}
