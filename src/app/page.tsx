"use client";

import { useEffect, useState } from "react";

import { useLanguage } from "@/hooks/useLanguage";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTABand from "@/components/CTABand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  const { locale, translation, toggle: toggleLocale } = useLanguage("en");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Sync Theme Attribute
  useEffect(() => {
    const saved = localStorage.getItem("skelvric-theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("skelvric-theme", next);
  };

  return (
    <>
      <Navbar
        translation={translation}
        locale={locale}
        onToggleLocale={toggleLocale}
        onToggleTheme={toggleTheme}
        theme={theme}
      />
      <main>
        <Hero translation={translation} />
        <Services translation={translation} />
        <Process translation={translation} />
        <Testimonials translation={translation} />
        <Pricing translation={translation} />
        <CTABand translation={translation} />
        <Contact translation={translation} locale={locale} />
      </main>
      <Footer translation={translation} />
    </>
  );
}
