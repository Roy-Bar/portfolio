# Roy Bar — Portfolio

Personal portfolio site. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Framer Motion · React Three Fiber.

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Editing content

All copy, projects, skills, experience, and social links live in **one file**:

- `lib/content.ts`

To swap the CV download, drop a `cv.pdf` into `public/`.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. On https://vercel.com → **Add New → Project → Import** the repo.
3. Accept defaults (Next.js auto-detected). First deploy → live at `*.vercel.app`.
4. Every push to `main` deploys; every PR gets a preview URL.

### Adding a custom domain later

Vercel → Project → **Settings → Domains → Add**. Point DNS at Vercel (A `76.76.21.21` for apex; CNAME `cname.vercel-dns.com` for `www`). SSL auto-provisions. No code change needed.

## Project structure

```
app/                  # routes, layout, metadata, OG image, sitemap, robots
components/
  Nav.tsx
  sections/           # one file per page section
  three/HeroScene.tsx # R3F scene (lazy-loaded, respects prefers-reduced-motion)
  ui/                 # small shared bits (SectionHeading, TiltCard, CopyEmail)
lib/content.ts        # single source of truth for content
public/               # static assets (cv.pdf, avatar.png, favicon)
```

## TODO before going live

- [ ] Add real `public/cv.pdf`
- [ ] Fill bio paragraphs, project blurbs, employment dates in `lib/content.ts`
- [ ] Update the canonical URL in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` once a custom domain is set
