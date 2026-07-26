### Skelvric

> *Deeper Than Code.*

A modern, fully remote software development studio. This repository contains the official Skelvric website — a production-ready full-stack application showcasing our work, team, and services.

### 🎯 Overview

Skelvric's website is built as a sophisticated single-page application featuring:

- **Public-Facing Site** – Hero, services showcase, portfolio projects, team experience, and more.
- **Analytics Dashboard** – Real-time site statistics with 14-day visitor trends.
- **Internationalization** – Seamless English and Turkish language support.
- **Dark/Light Theme** – System-aware theme detection with manual toggle.
- **Production-Ready** – Optimized for performance, SEO, and accessibility.

### 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Database** | MongoDB |
| **Styling** | Custom CSS with Tailwind utilities |
| **Animations** | Framer Motion (scroll-reveal effects) |
| **Fonts** | DM Serif Display & DM Mono (Google Fonts) |
| **i18n** | Custom hook system (English & Turkish) |
| **Authentication** | Edge middleware (jose) + API routes (jsonwebtoken) |
| **Deployment** | Vercel |

### ✨ Key Features

#### Frontend
- **Modern UI** – Cursor.com-inspired dark theme with dot-grid background and glow effects.
- **Responsive Design** – Fully mobile-optimized across all breakpoints.
- **Smooth Animations** – Framer Motion scroll-reveal animations throughout.
- **Accessibility** – Semantic HTML, ARIA labels, keyboard navigation.
- **Contact Modal** – Simple `mailto:` based contact form (no backend required).

#### Technical
- **Single Document Pattern** – MongoDB uses `slug: "main"` for centralized data.
- **Edge Middleware** – jose-based JWT validation at the edge.
- **Modal Portal** – React Portal for clean modal rendering.
- **SEO Optimized** – Meta tags, structured data, sitemaps.
- **Performance** – Code splitting, lazy loading, image optimization.

### 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── privacy-policy/
│   │   └── page.tsx          # /privacy-policy
│   ├── terms-of-use/
│   │   └── page.tsx          # /terms-of-use
│   ├── careers/
│   │   └── page.tsx          # /careers (open positions)
│
├── components/               # React components
│   ├── Navbar.tsx            # Navigation header
│   ├── Hero.tsx              # Hero section
│   ├── Services.tsx          # Services showcase
│   ├── Process.tsx           # Development process
│   ├── Testimonials.tsx      # Client testimonials
│   ├── Pricing.tsx           # Service pricing
│   ├── Portfolio.tsx         # Project showcase
│   ├── Contact.tsx           # Contact form
│   ├── Analytics.tsx         # Dashboard analytics
│   ├── ThemeToggle.tsx       # Dark/Light theme switch
│   ├── Modal.tsx             # Reusable modal component
│   ├── Footer.tsx            # Footer
│   ├── SplashScreen.tsx      # Loading splash screen
│   └── LegalLayout.tsx       # Legal page layout
│
├── hooks/
│   ├── useLanguage.ts        # Language context & hook
│   ├── useTheme.ts           # Theme management
│   └── useAnalytics.ts       # Analytics tracking
│
├── lib/
│   ├── i18n.ts               # All translations (EN + TR)
│   ├── mongodb.ts            # MongoDB connection
│   ├── auth.ts               # JWT utilities
│   └── constants.ts          # App constants & config
│
├── types/
    └── index.ts              # TypeScript type definitions
```

### 🚀 Getting Started

#### Prerequisites
- Node.js 18+
- npm or yarn.
- MongoDB instance.

#### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Skelvric/Skelvric.git
   cd Skelvric
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

### 🌍 Internationalization

The site supports **English** and **Turkish** with seamless language switching.

#### Implementation
- Language context manages global state.
- Hook: `useLanguage()` provides current language and switch function.
- All translations stored in `src/lib/i18n.ts`.
- Automatic browser language detection on first visit.
- User preference persisted in localStorage.

#### Adding Translations
1. Update `src/lib/i18n.ts` with new content.
2. Use `useLanguage()` hook in components.
3. Both languages display automatically.

#### 📧 Contact

Contact form uses simple `mailto:` links (no backend processing):

- **English**: [hello@skelvric.com](mailto:hello@skelvric.com)
- **Turkish**: [merhaba@skelvric.com](mailto:merhaba@skelvric.com)

### 📄 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-use` | Terms of Use |
| `/careers` | Open positions & applications |
| `/admin` | Admin dashboard (protected) |

### 🎨 Design System

#### Theme
- **Primary Color**: Deep blue/purple gradient.
- **Background**: Near-black with subtle dot-grid pattern.
- **Accents**: Glow effects and gradient highlights.
- **Typography**: DM Serif Display (headings) + DM Mono (code).

#### Animations
- Scroll-reveal effects on page load.
- Smooth transitions between sections.
- Framer Motion for complex animations.
- CSS transitions for micro-interactions.

#### 🗄️ Database Schema

MongoDB uses a single-document pattern (`slug: "main"`) containing:

```typescript
{
  _id: ObjectId,
  slug: "main",

  // Site Metadata
  siteName: string,
  description: string,

  // Content Sections
  hero: { title, subtitle, cta },
  services: Service[],
  portfolio: Project[],
  team: TeamMember[],
  testimonials: Testimonial[],
  createdAt: Date,
  updatedAt: Date,
}
```

### ⚡ Performance Optimizations

- **Image Optimization** – Next.js Image component with lazy loading.
- **Code Splitting** – Automatic route-based splitting.
- **CSS Optimization** – Purged and minified production builds.
- **Font Optimization** – Google Fonts loaded efficiently.
- **Compression** – gzip/brotli enabled on Vercel.
- **Caching** – Strategic cache headers for static assets.

### 🚢 Deployment

#### Vercel (Recommended)

1. Push to GitHub.
2. Connect repository to Vercel.
3. Set environment variables in project settings.
4. Deploy automatically on push.

```bash
npm run build
npm run start
```

#### Manual Deployment

```bash
# Build for production
npm run build

# Start server
npm start

# Or use your favorite Node.js host
```

### 📊 Analytics

The admin dashboard tracks:
- Daily visitor count.
- 14-day visitor trends (chart).
- Peak traffic hours.
- Page view distribution.
- Referrer sources.

Data stored in MongoDB with automatic aggregation.

### 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/feature`)
5. Open a Pull Request.

### Code Style
- TypeScript for type safety.
- ESLint configuration enforced.
- Prettier for code formatting.
- Component-based architecture.

### 📜 License

This project is maintained under the Skelvric GitHub organization. See LICENSE file for details.

### 🔗 Links

- **Website**: [skelvric.com](https://skelvric.com)
- **GitHub**: [github.com/Skelvric/Skelvric](https://github.com/Skelvric/Skelvric)
- **Email**: [hello@skelvric.com](mailto:hello@skelvric.com)
- **Issues**: [Report bugs or request features](https://github.com/Skelvric/Skelvric/Issues)

### 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Custom CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Deployed on [Vercel](https://vercel.com)
- Fonts from [Google Fonts](https://fonts.google.com)

Made with ❤️ by **Skelvric**.
