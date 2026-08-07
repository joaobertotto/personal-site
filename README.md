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
  app/                    Next.js App Router. Every route owns a layout + page.
    layout.tsx              root: fonts, theme + language providers
    (home)/               route group — URL stays "/"
      layout.tsx            two-column shell, about column on the left
      page.tsx              project mosaic
    portfolio/
      layout.tsx            header, avatar, bio
      page.tsx              project groups
    contact/
      layout.tsx            header, heading, availability badge
      page.tsx              contact form + links
  components/
    home/                 about-column, work-column, fun-bento
      tiles/                bento tiles: weather, map, status, local-time, coffee
    portfolio/            project groups and sections
    contact/              contact form, links, availability badge
    layout/               shared chrome — site header, nav, scroll columns
    i18n/                 language provider, switcher, animated LocaleText
    providers/            theme provider
    ui/                   shadcn/ui primitives (generated — avoid hand-editing)
  content/                site copy and data, edit these to change the site
    dictionaries/en.ts      English copy
    dictionaries/pt-BR.ts   Portuguese copy
    contact.ts              email, GitHub, LinkedIn handles
    types.ts                schema both dictionaries must satisfy
  hooks/
    use-availability.ts   current availability, ticking every minute
  lib/
    availability.ts       time-zone-derived availability + dot colours
    i18n/                 locale config, dictionary loader, request locale
    utils.ts              `cn` class merger
  proxy.ts                strips legacy /en and /pt-BR path prefixes
public/                   static assets (avatar, map images)
```

The `@/*` import alias points at `src/*`.

Each route's `layout.tsx` holds the chrome and page-level framing; its
`page.tsx` holds the content and `generateMetadata`. Because metadata is a
server concern and the copy comes from a client-side language provider, pages
stay server components and delegate to a thin client component that calls
`useDictionary()`.

## Contact form

The form on `/contact` composes a `mailto:` URL and hands off to the visitor's
mail client — there is no API route, no third-party service, and no secrets. If
you later want real submissions, swap `ContactForm`'s `handleSubmit` for a POST
to a service like Resend or Formspree.

## Editing content

All user-facing text lives in `src/content/dictionaries/`. `en.ts` and `pt-BR.ts`
both implement the `Dictionary` type from `src/content/types.ts`, so adding a
field to one and not the other is a type error — which is the point.

## Adding UI components

```bash
npx shadcn@latest add <component>
```

Components land in `src/components/ui/`.
