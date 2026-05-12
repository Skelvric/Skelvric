"use client";

import { useState, useRef } from "react";

import type { Translations } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

interface ContactProps {
  translation: Translations;
  locale: Locale;
}

const MAIL_ADDRESS: Record<Locale, string> = {
  en: "hello@skelvric.com",
  tr: "merhaba@skelvric.com",
};

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

// Email Regex (Simple Version For Basic Validation)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact({ translation, locale }: ContactProps) {
  const [focused, setFocused] = useState<string | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  const nameReference = useRef<HTMLInputElement>(null);
  const emailReference = useRef<HTMLInputElement>(null);
  const budgetReference = useRef<HTMLSelectElement>(null);
  const messageReference = useRef<HTMLTextAreaElement>(null);

  const validate = (name: string, email: string, message: string): Errors => {
    const error: Errors = {};

    // Name Validation
    if (!name) {
      error.name = locale === "tr"
        ? "Ad alanı zorunludur."
        : "Name is required.";
    }

    // Email Validation
    if (!email) {
      error.email = locale === "tr"
        ? "E-Posta zorunludur."
        : "Email is required.";
    } else if (!EMAIL_REGEX.test(email)) {
      error.email = locale === "tr"
        ? "Lütfen geçerli bir e-posta adresi girin."
        : "Please enter a valid email address.";
    }

    // Message Validation
    if (!message) {
      error.message = locale === "tr"
        ? "Mesaj alanı zorunludur."
        : "Message is required.";
    }

    return error;
  };

  const handleSubmit = () => {
    const name = nameReference.current?.value.trim() ?? "";
    const email = emailReference.current?.value.trim() ?? "";
    const budget = budgetReference.current?.value ?? "";
    const message = messageReference.current?.value.trim() ?? "";

    const newErrors = validate(name, email, message);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const to = MAIL_ADDRESS[locale];
    const subject = locale === "tr"
      ? `Yeni Proje Talebi — ${name}`
      : `New Project Inquiry — ${name}`;

    const body = locale === "tr"
      ? `Ad: ${name}\nE-Posta: ${email}\nBütçe: ${budget}\n\nMesaj:\n${message}`
      : `Name: ${name}\nEmail: ${email}\nBudget: ${budget}\n\nMessage:\n${message}`;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const clearError = (field: keyof Errors) => {
    if (errors[field]) setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  return (
    <section id="contact" className="section">
      <div className="section-tag">{translation.contact.tag}</div>
      <h2>{translation.contact.heading}</h2>

      <div className="contact-grid">
        {/* Form */}
        <div>
          <div className="form-group">
            <label>{translation.contact.labels.name}</label>
            <input
              ref={nameReference}
              type="text"
              placeholder={translation.contact.placeholders.name}
              className={focused === "name" ? "focused" : ""}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              onChange={() => clearError("name")}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>{translation.contact.labels.email}</label>
            <input
              ref={emailReference}
              type="email"
              placeholder={translation.contact.placeholders.email}
              className={focused === "email" ? "focused" : ""}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              onChange={() => clearError("email")}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>{translation.contact.labels.budget}</label>
            <select ref={budgetReference}>
              {translation.contact.budgetOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>{translation.contact.labels.message}</label>
            <textarea
              ref={messageReference}
              placeholder={translation.contact.placeholders.message}
              rows={5}
              className={focused === "message" ? "focused" : ""}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              onChange={() => clearError("message")}
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          <button
            type="button"
            className="button button-primary"
            style={{ width: "100%", justifyContent: "center" }}
            onClick={handleSubmit}
          >
            {translation.contact.labels.submit}
          </button>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p style={{ marginBottom: "2rem" }}>{translation.contact.subtitle}</p>

          {translation.contact.details.map((detail) => (
            <div key={detail.label} className="contact-detail">
              <strong>{detail.label}</strong>
              <span>{detail.value}</span>
            </div>
          ))}

          <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "2rem 0" }} />

          <p style={{ fontSize: "0.8rem", color: "var(--text-subtle)", marginBottom: "1rem" }}>
            {translation.contact.remote}
          </p>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["github.com/skelvric"].map((handle) => (
              <span key={handle} className="code-tag">{handle}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
