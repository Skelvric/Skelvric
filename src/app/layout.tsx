import type { Metadata } from "next";

import "./globals.css";

import SplashScreen from '@/components/SplashScreen';

export const metadata: Metadata = {
  title: "Skelvric — Deeper Than Code.",
  description: "End-to-end software development from design to deployment. Scalable, maintainable, and delivered on time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="favicon.png"
          type="image/png"
        />
      </head>
      <body>
        {children}
        <SplashScreen />
      </body>
    </html>
  );
}
