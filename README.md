# Imagine Dreams Africa — Official Website

**Building Africa's digital civilisation from Kampala.**

[![Status](https://img.shields.io/badge/status-ready-green)](https://imaginedreams.org)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)

---

## 🎯 Project Overview

The official website of **Imagine Dreams Africa (IDA)** — a systematic intervention in Africa's technological future. Built with brutalist minimalist design, kinetic typography, and African pattern language.

**Tech Stack:** Next.js 14 · TypeScript · GSAP · Framer Motion · Lenis · Tailwind CSS v4

---

## ✨ Features

- **7 Immersive Sections**: Hero, About, Pillars, Ventures, Vision, People, Contact
- **Kinetic Typography**: GSAP-powered word-by-word reveals
- **Smooth Scrolling**: Lenis with physics-based inertia (desktop only)
- **African Patterns**: Kente-inspired SVG backgrounds at 4% opacity
- **Signature Hover Effects**: Complete color inversion on pillar cards
- **Interactive Redaction**: Vision section with hover-to-reveal text
- **Contact Form**: React Hook Form + Zod validation + Resend email API
- **Responsive Design**: Mobile-first breakpoints (320px → 1280px+)
- **Accessibility**: WCAG AA compliance, reduced motion support

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd ida-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your RESEND_API_KEY

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the site.

---

## 📁 Project Structure

```
ida-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── api/contact/        # Contact form API
│   ├── components/             # React components
│   │   ├── sections/           # Page sections
│   │   ├── layout/             # Layout components
│   │   ├── animations/         # Animation wrappers
│   │   └── ui/                 # UI primitives
│   ├── lib/                    # Utilities & config
│   │   ├── fonts.ts            # Font configuration
│   │   ├── patterns.ts         # African SVG patterns
│   │   ├── constants.ts        # All copy & data
│   │   └── utils.ts            # Helper functions
│   └── providers/              # Context providers
│       └── LenisProvider.tsx   # Smooth scroll
└── .env.example                # Environment template
```

---

## 🎨 Design System

### Colours
```css
--black: #080808      /* Primary background */
--white: #F2EFE8      /* Primary text, warm off-white */
--gray: #888880       /* Secondary text */
--border: #CCCCBC     /* Dividers, structural lines */
```

### Typography
- **Display**: Bebas Neue — architectural, condensed authority
- **Body**: Libre Baskerville — serif warmth, cultural humanity
- **Technical**: JetBrains Mono — developer-native credibility

### Motion Easings
```css
--ease-arrival: cubic-bezier(0.16, 1, 0.3, 1)    /* Hero entrances */
--ease-emergence: cubic-bezier(0.25, 0.46, 0.45, 0.94)  /* Section reveals */
```

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 🌍 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy — preview URLs generated for every branch

**Environment Variables Required:**
- `RESEND_API_KEY` — Get from [resend.com](https://resend.com)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` (optional)

### Performance Targets
- Lighthouse: ≥ 90 desktop / ≥ 80 mobile
- LCP: < 2.5s
- CLS: < 0.1
- INP: < 200ms

---

## 📱 Mobile Considerations

**Uganda Mobile Reality:**
- Custom cursor disabled on touch devices
- Lenis smooth scroll disabled on mobile
- Animations respect `prefers-reduced-motion`
- Optimized for 3G connections

---

## 🧩 Component Library

### Layout Components
- `NavBar` — Fixed top nav with mix-blend-mode: difference
- `CustomCursor` — Desktop-only with lerp animation
- `PageIndicator` — Section dots with scroll tracking
- `Footer` — Minimal legal links

### Animation Components
- `SplitTextReveal` — GSAP + SplitType kinetic typography
- `RevealOnScroll` — GSAP ScrollTrigger wrapper
- `MotionCard` — Framer Motion hover states
- `MarqueeText` — Infinite scrolling text

### UI Components
- `Button` — Brutalist variants (primary, secondary, tertiary)
- `Badge` — Status tags with colour coding

---

## 📄 Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `/` | Full scroll experience (7 sections) |
| Privacy | `/privacy` | GDPR-compliant privacy policy |
| Terms | `/terms` | Terms of use |
| Press | `/press` | Media kit & contact info |

---

## 🎯 Success Metrics

Track with Plausible/PostHog:
- Session duration > 90 seconds
- Scroll depth > 55% (>50% scroll)
- Form submission rate > 4%
- Bounce rate < 60%
- Mobile sessions > 60%

---

## 🤝 Contributing

This is the official IDA website. For questions or contributions:
- Email: hello@imaginedreams.org
- Location: Kampala, Uganda

---

## 📝 License

© 2026 Imagine Dreams Africa. All rights reserved.

---

## 🙏 Acknowledgments

**Design Inspiration:**
- Awwwards Site of the Day winners
- Studio Dumbar (grid-breaking typography)
- Linear.app (kinetic scroll reveals)
- Lusion.co (custom cursor interactions)

**Built From:**
- Kampala, Uganda
- For Africa, By Africans

---

**"A movement. A company. A blueprint."**

🌍⚡
