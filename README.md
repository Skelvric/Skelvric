### Skelvric

> *Deeper Than Code.*

Fully remote software development studio.

#### Tech Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Custom CSS |
| Fonts | DM Serif Display & DM Mono (Google Fonts) |
| i18n | Custom Hook — English & Turkish |
| Contact | `mailto:` Based (No Backend) |
| Deployment | Vercel |

#### Project Structure

```bash
src/
├── app/
│   ├── page.tsx          # Home
│   ├── layout.tsx
│   ├── globals.css
│   ├── privacy-policy/
│   │   └── page.tsx      # /privacy-policy
│   ├── terms-of-use/
│   │   └── page.tsx      # /terms-of-use
│   └── careers/
│       └── page.tsx      # /careers
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── CTABand.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── SplashScreen.tsx
│   └── LegalLayout.tsx   # For Privacy Policy, Terms of Use, Careers
│
├── hooks/
│   └── useLanguage.ts
│
└── lib/
    └── i18n.ts           # All Translations (English + Turkish)
```

### Getting Started

#### Prerequisites

- Node.js 18+

#### Installation

```bash
git clone https://github.com/Skelvric/Skelvric.git
cd Skelvric
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

#### Internationalization

Supports **English** and **Turkish**.

Language switching is handled with the `useLanguage` hook. All translations are located in `src/lib/i18n.ts`.

#### Contact

Contact form uses simple `mailto:` links.
- English hello@skelvric.com
- Turkish merhaba@skelvric.com

#### Pages

| Route              | Description                    |
|--------------------|--------------------------------|
| `/`                | Home                           |
| `/privacy-policy`  | Privacy Policy                 |
| `/terms-of-use`    | Terms of Use                   |
| `/careers`         | Open Positions & Applications  |

#### Deployment

Optimized for **Vercel**

```bash
npm run build
npm run start
```

#### License

This repository is **public** and maintained under the Skelvric GitHub organization.
