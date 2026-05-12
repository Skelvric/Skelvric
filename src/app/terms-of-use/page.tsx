"use client";

import LegalLayout from "@/components/LegalLayout";

import { useEffect, useState } from "react";

export default function TermsPage() {
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
      title="Terms of Use"
      lastUpdated="Last updated: May 8, 2026"
      intro="Please read these Terms of Use carefully before using our website or engaging our services. By accessing our website or entering into a service agreement with us, you agree to be bound by these terms."
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: "By accessing or using the Skelvric website (skelvric.com) or any of our services, you confirm that you are at least 18 years old, have read and understood these Terms, and agree to be bound by them. If you do not agree, please do not use our website or services.",
        },
        {
          heading: "2. Services",
          body: [
            "Skelvric provides custom software development, cloud architecture, mobile application development, data engineering, and related technology consulting services. The specific scope, deliverables, timelines, and fees for any engagement are defined in a separate written agreement or Statement of Work (SOW) signed by both parties.",
            "We reserve the right to refuse service to anyone for any reason at any time.",
          ],
        },
        {
          heading: "3. Intellectual Property",
          body: [
            "Upon full payment of all fees, and as specified in the applicable SOW, Skelvric transfers ownership of the custom-developed work product to the client. This transfer does not include any pre-existing tools, frameworks, libraries, or methodologies owned by Skelvric.",
            "Skelvric retains the right to use general knowledge, skills, and experience gained during the engagement, and may use non-confidential aspects of the work as portfolio references unless otherwise agreed in writing.",
          ],
        },
        {
          heading: "4. Confidentiality",
          body: "Both parties agree to keep confidential any non-public information disclosed during an engagement, including but not limited to business strategies, technical specifications, and client data. This obligation survives termination of any service agreement for a period of three (3) years.",
        },
        {
          heading: "5. Payment Terms",
          body: [
            "Payment terms are defined in each individual SOW. Unless otherwise agreed, invoices are due within fourteen (14) days of issuance. Late payments may incur a monthly interest charge of 1.5% or the maximum permitted by law, whichever is less.",
            "Skelvric reserves the right to suspend work on any project where invoices remain unpaid beyond the due date.",
          ],
        },
        {
          heading: "6. Limitation of Liability",
          body: "To the fullest extent permitted by applicable law, Skelvric shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability for any claim related to a service engagement shall not exceed the total fees paid by you for that specific engagement in the three months preceding the claim.",
        },
        {
          heading: "7. Warranties & Disclaimers",
          body: "Skelvric warrants that it will perform services in a professional and workmanlike manner consistent with industry standards. The website and its content are provided 'as is' without warranty of any kind. We do not warrant that the website will be error-free or uninterrupted.",
        },
        {
          heading: "8. Termination",
          body: "Either party may terminate a service agreement as specified in the applicable SOW. Upon termination, the client shall pay for all work completed up to the termination date. Skelvric will deliver all completed work product upon receipt of final payment.",
        },
        {
          heading: "9. Governing Law",
          body: "These Terms and any disputes arising from them shall be governed by and construed in accordance with the laws of the Republic of Turkey. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bilecik, Turkey.",
        },
        {
          heading: "10. Changes to Terms",
          body: "We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the new Terms.",
        },
        {
          heading: "11. Contact",
          body: "For questions about these Terms, please contact us at legal@skelvric.com.",
        },
      ]}
    />
  );
}
