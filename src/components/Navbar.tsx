"use client";

import { useEffect, useState, useRef } from "react";
import type { Translations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

interface NavbarProps {
  translation: Translations;
  locale: Locale;
  onToggleLocale: () => void;
  onToggleTheme: () => void;
  theme: "light" | "dark";
}

const CheckIcon = () => (
  <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function Navbar({
  translation,
  locale,
  onToggleLocale,
  onToggleTheme,
  theme,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: translation.nav.services },
    { href: "#process", label: translation.nav.process },
    { href: "#pricing", label: translation.nav.pricing },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <a href="/" className="logo">
          Skelvric
          <span>Deeper Than Code.</span>
        </a>

        <nav>
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

      <div className={`settings-widget ${theme}`} ref={settingsRef}>

        <div className={`settings-menu ${settingsOpen ? "open" : ""}`}>

          <div className="settings-section">
            <span className="settings-label">
              {locale === "tr" ? "Dil" : "Language"}
            </span>
            <button
              className={`settings-option ${locale === "tr" ? "selected" : ""}`}
              onClick={() => {
                if (locale !== "tr") onToggleLocale();
                setSettingsOpen(false);
              }}
            >
              <span>TR / Türkçe</span>
              <CheckIcon />
            </button>
            <button
              className={`settings-option ${locale === "en" ? "selected" : ""}`}
              onClick={() => {
                if (locale !== "en") onToggleLocale();
                setSettingsOpen(false);
              }}
            >
              <span>EN / English</span>
              <CheckIcon />
            </button>
          </div>

          <div className="settings-section">
            <span className="settings-label">
              {locale === "tr" ? "Görünüm" : "Appearance"}
            </span>
            <button
              className={`settings-option ${theme === "light" ? "selected" : ""}`}
              onClick={() => {
                if (theme !== "light") onToggleTheme();
                setSettingsOpen(false);
              }}
            >
              <span>{locale === "tr" ? "Açık Tema" : "Light Mode"}</span>
              <CheckIcon />
            </button>
            <button
              className={`settings-option ${theme === "dark" ? "selected" : ""}`}
              onClick={() => {
                if (theme !== "dark") onToggleTheme();
                setSettingsOpen(false);
              }}
            >
              <span>{locale === "tr" ? "Koyu Tema" : "Dark Mode"}</span>
              <CheckIcon />
            </button>
          </div>
        </div>

        <button
          className={`settings-fab ${settingsOpen ? "active" : ""}`}
          onClick={() => setSettingsOpen((prev) => !prev)}
          aria-label="Settings"
        >
          <svg
            viewBox="0 0 24 24"
            style={{
              width: "22px",
              height: "22px",
              minWidth: "22px",
              minHeight: "22px",
              flexShrink: 0,
              display: "block",
              fill: "none",
              stroke: "currentColor",
            }}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </button>

      </div>
    </>
  );
}