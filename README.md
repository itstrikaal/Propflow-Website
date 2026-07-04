# PropFlow Website

The public marketing site for [PropFlow](https://propflow.in) — the AI operating system for Indian property brokers.

Built with [Next.js 16](https://nextjs.org) (App Router), React 19, Tailwind v4, TypeScript (strict), and MDX.

---

## Stack

- **Framework:** Next.js 16.2 (App Router, Turbopack, RSC)
- **UI:** React 19 + Tailwind CSS v4 + Radix UI primitives
- **Animation:** framer-motion / `motion` (respects `prefers-reduced-motion`)
- **Content:** MDX files under `content/blog/` parsed at build time
- **Forms:** react-hook-form + zod (shared schema between client and API)
- **Validation:** zod (single source of truth in `src/lib/contact-schema.ts`)
- **Theming:** next-themes (system / light / dark)
- **Deployment:** Vercel
- **Node:** 20+ (see `.nvmrc`)

## Project layout

```
.
├── content/
│   └── blog/                     # MDX blog posts (frontmatter + body)
├── public/
│   ├── favicon.svg
│   ├── apple-touch-icon.svg
│   ├── images/
│   │   ├── avatars/              # Testimonial avatars (SVG)
│   │   └── logos/                # Trusted-by brokerages (SVG)
│   └── press/                    # Press mentions logos (SVG)
├── src/
│   ├── app/                      # Next.js App Router pages
│   │   ├── api/                  # Route handlers (contact form)
│   │   ├── blog/                 # Blog index + [slug]
│   │   ├── compare/[slug]/       # Comparison pages
│   │   ├── opengraph-image.tsx   # Dynamic OG image
│   │   ├── twitter-image.tsx     # Dynamic Twitter card
│   │   ├── manifest.ts           # PWA manifest
│   │   ├── error.tsx             # Route-level error boundary
│   │   ├── global-error.tsx      # Root error boundary
│   │   ├── loading.tsx           # Global loading state
│   │   ├── sitemap.ts            # /sitemap.xml
│   │   └── robots.ts             # /robots.txt
│   ├── components/
│   │   ├── animations/           # (reserved)
│   │   ├── layout/               # Navbar, Footer
│   │   ├── sections/             # Home page sections + sub-page sections
│   │   ├── shared/               # SkipToContent, ThemeProvider, CookieConsent…
│   │   └── ui/                   # Design system primitives (Button, Card, Badge)
│   ├── hooks/
│   │   └── use-reduced-motion.ts # SSR-safe reduced-motion hook
│   ├── lib/
│   │   ├── blog.ts               # MDX loader + frontmatter parser
│   │   ├── contact-schema.ts     # Shared zod schema
│   │   ├── constants.ts          # siteConfig, navigation, stats, pricing, FAQs
│   │   ├── metadata.ts           # Page-level metadata factory
│   │   ├── schema.ts             # JSON-LD schema.org generators
│   │   └── utils.ts              # cn(), formatters
│   ├── styles/                   # (reserved)
│   ├── types/                    # Shared TypeScript types
│   └── middleware.ts             # CSP nonce + security headers
├── data/                         # Local contact-form fallback (gitignored)
├── next.config.ts
├── tailwind via @tailwindcss/postcss
├── tsconfig.json
└── package.json
```

## Getting started

```bash
# Use Node 20+
nvm use

# Install deps
npm install

# Run dev server (Turbopack)
npm run dev

# Open http://localhost:3000
```

## Scripts

| Script                 | Purpose                                                |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Start the dev server with Turbopack                    |
| `npm run build`        | Production build (runs TypeScript check implicitly)    |
| `npm run start`        | Run the production build                               |
| `npm run lint`         | Lint with ESLint (Next + TypeScript configs)           |
| `npm run lint:fix`     | Lint with auto-fix                                     |
| `npm run type-check`   | Run `tsc --noEmit`                                     |
| `npm run format`       | Format everything with Prettier                        |
| `npm run format:check` | Verify formatting without writing                      |
| `npm run validate`     | type-check + lint + format check (run before a commit) |
| `npm run clean`        | Remove `.next/` and `out/`                             |

## Environment variables

Copy `.env.example` (or `.env.local`) and fill in the values you need. **All are optional** — the site works without them; features that require keys degrade gracefully.

| Variable                        | Purpose                                                                  |
| ------------------------------- | ------------------------------------------------------------------------ |
| `RESEND_API_KEY`                | Send contact-form emails via Resend                                      |
| `CONTACT_TO_EMAIL`              | Recipient address for contact submissions (default: `hello@propflow.in`) |
| `CONTACT_FROM_EMAIL`            | Sender envelope (default: `PropFlow <noreply@propflow.in>`)              |
| `HCAPTCHA_SECRET`               | Verify hCaptcha tokens server-side                                       |
| `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` | hCaptcha widget on the client form                                       |
| `NEXT_PUBLIC_STATUS_PAGE_URL`   | URL of the public status page polled by the footer indicator             |

Contact messages are also written to `data/contact-messages.json` as a durable fallback when `RESEND_API_KEY` isn't configured. The folder is gitignored.

## Content authoring

### Blog posts

Drop an MDX file into `content/blog/<slug>.mdx`:

```mdx
---
title: "Your article title"
slug: your-slug
description: "Used for SEO + cards."
date: 2026-07-01
author: Your Name
category: Guides
readingTime: "5 min"
featured: false
tags: [crm, whatsapp]
---

Your markdown body here.
```

The post will appear on `/blog` automatically. The frontmatter parser (`src/lib/blog.ts`) handles YAML-ish frontmatter; the body is rendered with a small built-in markdown renderer. Replace that with `next-mdx-remote` if you need GFM, code blocks, or components.

### Trusted-by logos

Add an SVG to `public/images/logos/logo-<name>.svg` and append an entry to the `logos` array in `src/components/sections/trusted-by.tsx`.

### Press mentions

Add an SVG to `public/press/<name>.svg` and append to `mentions` in `src/components/sections/press-mentions.tsx`. Swap with the publication's real wordmark once coverage is live.

## Security model

- **CSP** is set in `src/middleware.ts` with a per-request nonce. Production CSP **drops `unsafe-eval`** and uses nonce-based script whitelisting. Dev mode relaxes this for HMR.
- **HSTS, COOP, CORP** headers are set in middleware (production only).
- **Contact form** validates on both client and server with the same zod schema (`src/lib/contact-schema.ts`).
- **Rate limiting** is in-memory per process (5 req / 10 min per IP). Swap for Upstash Redis in production.

## Deployment

The site is configured for [Vercel](https://vercel.com). Push to the connected branch and Vercel will:

1. Run `npm run build`
2. Deploy the static + dynamic routes
3. Invalidate the CDN edge cache

## License

Proprietary — © PropFlow. See `LICENSE` for details.
