import type { Translations } from "@/lib/i18n";

interface FooterProps {
  translation: Translations;
}

export default function Footer({ translation }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-copy">{translation.footer.copy}</span>
        <div className="footer-links">
          {translation.footer.links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
