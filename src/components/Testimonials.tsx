import type { Translations } from "@/lib/i18n";

interface TestimonialsProps {
  translation: Translations;
}

export default function Testimonials({ translation }: TestimonialsProps) {
  return (
    <section className="section">
      <div className="section-tag">{translation.testimonials.tag}</div>
      <h2>{translation.testimonials.heading}</h2>
      <div className="testimonials-grid">
        {translation.testimonials.items.map((item) => (
          <div key={item.name} className="testimonial">
            <blockquote>
              <p>{item.quote}</p>
            </blockquote>
            <div className="testimonial-author">
              <div className="avatar">{item.initials}</div>
              <div className="author-info">
                <div className="name">{item.name}</div>
                <div className="role">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
