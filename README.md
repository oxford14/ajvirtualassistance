# A&J Virtual Assistance Services — Marketing Website

A modern, responsive marketing site for A&J Virtual Assistance Services, built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn-style UI components.

## Brand colors

- **Primary:** `#101F24` (deep teal/charcoal) — dominant for text, headers, nav
- **Accent:** `#B29E84` (warm beige/gold) — buttons, highlights, borders, icons

Edit these in `tailwind.config.ts` and `app/globals.css` if you need to adjust.

## Prerequisites

- Node.js 18+
- npm (or pnpm/yarn)

## Run locally

1. **Install dependencies**

   ```bash
   npm install
   ```

   If you see path or install errors (e.g. due to special characters in the project path), try moving the project to a folder without characters like `&` (e.g. `A-JVirtualAssistanceServices`) and run `npm install` again.

2. **Start the dev server**

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Edit content

All copy and navigation live in **`lib/content.ts`**. Edit that file to change headlines, service descriptions, testimonials, FAQ, footer links, and SEO titles/descriptions. No CMS required.

## Build for production

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Project structure

- **`app/`** — App Router pages (Home, Services, How It Works, About, Testimonials, For VAs, Contact, Apply)
- **`components/`** — Header, Footer, SectionHeading, FeatureCard, TestimonialCard, CTASection, forms, and `ui/` (button, card, accordion, tabs, input, label, textarea)
- **`lib/content.ts`** — All site content and nav
- **`lib/utils.ts`** — `cn()` and helpers
- **`lib/icons.tsx`** — Icon key to Lucide component map
