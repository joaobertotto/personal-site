# personal-site

João Bertotto's personal site — work, maker projects, and assorted for-fun things.

Built with Next.js (App Router), React 19, Tailwind CSS v4, and shadcn/ui.
Fully bilingual (English / Brazilian Portuguese) with locale detection and a
client-side language switcher.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script              | What it does                     |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start the dev server             |
| `npm run build`     | Production build                 |
| `npm run start`     | Serve the production build       |
| `npm run lint`      | ESLint                           |
| `npm run typecheck` | `tsc --noEmit`                   |
| `npm run format`    | Prettier over all `.ts` / `.tsx` |

## Project structure

```
src/
  app/                    Next.js App Router — routes, metadata, global styles
    layout.tsx              root layout: fonts, theme + language providers
    page.tsx                home
    portfolio/page.tsx      portfolio
  components/
    home/                 home page: bento tiles, status/weather/map/coffee cards
    portfolio/            portfolio page: about column, project sections
    layout/               shared chrome — site nav, scroll columns
    i18n/                 language provider, switcher, animated LocaleText
    providers/            theme provider
    ui/                   shadcn/ui primitives (generated — avoid hand-editing)
  content/                site copy and data, edit these to change the site
    dictionaries/en.ts      English copy
    dictionaries/pt-BR.ts   Portuguese copy
    contact.ts              email, website, GitHub handle
    types.ts                schema both dictionaries must satisfy
  lib/
    i18n/                 locale config, dictionary loader, request locale
    utils.ts              `cn` class merger
  hooks/                  shared React hooks
  proxy.ts                strips legacy /en and /pt-BR path prefixes
public/                   static assets (avatar, map images)
```

The `@/*` import alias points at `src/*`.

## Editing content

All user-facing text lives in `src/content/dictionaries/`. `en.ts` and `pt-BR.ts`
both implement the `Dictionary` type from `src/content/types.ts`, so adding a
field to one and not the other is a type error — which is the point.

## Adding UI components

```bash
npx shadcn@latest add <component>
```

Components land in `src/components/ui/`.
