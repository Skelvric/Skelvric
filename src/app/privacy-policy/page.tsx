"use client";

import LegalLayout from "@/components/LegalLayout";

import { useEffect, useState } from "react";

export default function PrivacyPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Sync Theme Attribute
  useEffect(() => {
    const saved = localStorage.getItem("skelvric-theme") as "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  return (
    <LegalLayout
      eyebrow="// Legal"
      title="Privacy Policy"
      lastUpdated="Last updated: May 8, 2026"
      intro="At Skelvric, we are committed to protecting your privacy. This policy explains what information we collect, how we use it, and the choices you have."
      sections={[
        {
          heading: "1. Information We Collect",
          body: [
            "We collect information you provide directly to us, such as your name, email address, company name, and project details when you fill out our contact form or communicate with us via email.",
            "We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages visited. This information is collected through standard server logs and analytics tools.",
          ],
        },
        {
          heading: "2. How We Use Your Information",
          body: [
            "We use the information we collect to respond to your inquiries and provide the services you request, to communicate with you about projects, updates, and relevant news, to improve our website and services, and to comply with legal obligations.",
            "We do not sell, rent, or share your personal information with third parties for their marketing purposes. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.",
          ],
        },
        {
          heading: "3. Data Retention",
          body: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are typically retained for up to three years.",
        },
        {
          heading: "4. Cookies & Tracking",
          body: "Our website uses minimal cookies — primarily for analytics purposes to understand how visitors interact with our site. We do not use advertising cookies or cross-site tracking. You can disable cookies in your browser settings at any time without affecting your ability to use our site.",
        },
        {
          heading: "5. Data Security",
          body: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
        },
        {
          heading: "6. Your Rights",
          body: [
            "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data, the right to object to or restrict processing, and the right to data portability.",
            "To exercise any of these rights, please contact us at privacy@skelvric.com. We will respond to your request within 30 days.",
          ],
        },
        {
          heading: "7. Third-Party Links",
          body: "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.",
        },
        {
          heading: "8. Changes to This Policy",
          body: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.",
        },
        {
          heading: "9. Contact Us",
          body: "If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at privacy@skelvric.com.",
        },
      ]}
    />
  );
}
