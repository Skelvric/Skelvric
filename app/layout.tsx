import type { Metadata, Viewport } from "next";

import { Space_Grotesk } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import Cursor from '@/components/Cursor/Cursor';

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skelvric.com"),

  title: "Skelvric — Software Development Agency",

  description:
    "End-To-End Software Development From Design To Deployment. Scalable, Maintainable, And Delivered On Time.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://www.skelvric.com",
    siteName: "Skelvric",
    title: "Skelvric — Software Development Agency",
    description:
      "End-To-End Software Development From Design To Deployment.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Skelvric",
  description:
    "End-To-End Software Development From Design To Deployment. Scalable, Maintainable, And Delivered On Time.",
  url: "https://www.skelvric.com",
  logo: "https://www.skelvric.com/Logo.png",
  sameAs: [
    "https://github.skelvric.com",
    "https://linkedin.skelvric.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Cursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
