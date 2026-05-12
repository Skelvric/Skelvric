"use client";

import { useState, useCallback, useEffect } from "react";

import { translations, type Locale, type Translations } from "@/lib/i18n";

export function useLanguage(defaultLocale: Locale = "en") {
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = localStorage.getItem("language") as Locale | null;
    if (stored && translations[stored]) {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const translation: Translations = translations[locale];

  const toggle = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "tr" : "en"));
  }, []);

  return { locale, translation, toggle };
}
