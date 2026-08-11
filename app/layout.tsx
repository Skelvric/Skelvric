import type { Metadata, Viewport } from "next";

import { Space_Grotesk } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skelvric — Software Development Agency",
  description: "End-to-end software development from design to deployment. Scalable, maintainable, and delivered on time.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
