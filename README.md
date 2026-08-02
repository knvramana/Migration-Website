# Ramana Koduri — Portfolio

Personal portfolio site. Migrated from a static HTML/CSS page
(`knvramana/ramanakoduri.github.io`) to Next.js.

**Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript ·
Tailwind CSS v4 · shadcn/ui (Radix) · next-themes · cmdk · deployed on Vercel.

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script              | Does                                        |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Dev server with Turbopack                   |
| `npm run build`     | Production build                            |
| `npm run start`     | Serve the production build                  |
| `npm run lint`      | ESLint (`next lint` was removed in Next 16) |
| `npm run typecheck` | `tsc --noEmit`                              |
| `npm run format`    | Prettier                                    |

## Editing content

All copy lives in `src/content/` — no JSX edits needed for routine updates.

| File          | Holds                                                           |
| ------------- | --------------------------------------------------------------- |
| `site.ts`     | Name, role, email, phone, socials, nav, hero stat chips         |
| `resume.ts`   | Experience, skill groups, education, certifications, About copy |
| `projects.ts` | Project cards                                                   |

Replace `public/ramana-koduri-resume.pdf` to update the résumé. The `/resume`
route redirects to it, so the public URL never changes.

## Design tokens

Everything is in `src/app/globals.css`. Tailwind v4 has no
`tailwind.config.js`; tokens are CSS custom properties exposed to Tailwind
through `@theme inline`.

Accent colours come in **two families that are not interchangeable**:

- `--rail-*` — decoration only (left rails, watermarks, large display type).
  These are the original brand hexes. Teal `#0d9488` (3.74:1) and gold
  `#b7791f` (3.64:1) fail WCAG AA against white for body-sized text.
- `--brand-*` — text-safe. Any accent colour carrying an actual word uses
  these. Teal darkens to `#0f766e` (5.47:1), gold to `#8f6114` (5.40:1).

All foreground/background pairs pass WCAG AA in both themes.

`@custom-variant dark (&:where(.dark, .dark *))` near the top of the file is
load-bearing — without it Tailwind v4 emits no `dark:` rules at all.

## Motion

One primitive: `src/components/common/reveal.tsx`. It flips a `data-revealed`
attribute via `IntersectionObserver`; all the animation lives in CSS. No
animation library. `prefers-reduced-motion` is honoured in both the JS and the
stylesheet, and a `<noscript>` rule in `layout.tsx` restores visibility when JS
never runs.

## Deploying

Vercel, from the GitHub repo. Set `NEXT_PUBLIC_SITE_URL` for Production,
Preview and Development — a wrong value silently breaks `metadataBase`,
canonicals, the sitemap and every OG image URL.

Enable Analytics and Speed Insights in the Vercel dashboard; the components are
already mounted in `layout.tsx` but stay inert until you do.
