'use client';

import { useState, useEffect } from "react";

import { Locale } from "@/data/content";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import Work from "@/components/Work/Work";
import Services from "@/components/Services/Services";
import Approach from "@/components/Approach/Approach";
import Process from "@/components/Process/Process";
import Clients from "@/components/Clients/Clients";
import CTA from "@/components/CTA/CTA";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [lang, setLang] = useState<Locale>('en');

  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('skelvric-theme') as 'light' | 'dark') || 'dark';

    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('skelvric-theme', newTheme);
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'tr' : 'en');
  };

  if (!mounted) return null;

  return (
    <main className="main-wrapper">
      <Navbar lang={lang} toggleLang={toggleLang} toggleTheme={toggleTheme} theme={theme} />
      <Hero lang={lang} />
      <Marquee lang={lang} />
      <Work lang={lang} />
      <Services lang={lang} />
      <Approach lang={lang} />
      <Process lang={lang} />
      <Clients lang={lang} />
      <CTA lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
