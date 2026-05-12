"use client";

import { useEffect, useState } from "react";

import type { Translations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

interface NavbarProps {
  translation: Translations;
  locale: Locale;
  onToggleLocale: () => void;
  onToggleTheme: () => void;
  theme: "light" | "dark";
}

export default function Navbar({
  translation,
  locale,
  onToggleLocale,
  onToggleTheme,
  theme,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: translation.nav.services },
    { href: "#process",  label: translation.nav.process  },
    { href: "#pricing",  label: translation.nav.pricing  },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        {/* Logo */}
        <a href="/" className="logo">
          Skelvric
          <span>Deeper Than Code.</span>
        </a>

        <nav>
          {/* Desktop Links */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta">
              {translation.nav.contact}
            </a>
          </div>

          {/* Language Toggle */}
          <button className="language-toggle" onClick={onToggleLocale} title="Switch Language">
            {locale === "en" ? "TR" : "EN"}
          </button>

          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={onToggleTheme} title="Toggle Theme">
            {theme === "dark" ? "☾" : "☀"}
          </button>

          {/* Hamburger (Mobile Only) */}
          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open Menu / Close Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`nav-drawer${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contact" onClick={closeMenu}>
          {translation.nav.contact}
        </a>
      </div>
    </>
  );
}
