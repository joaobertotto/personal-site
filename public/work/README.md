# Work screenshots

Every image slot referenced by `src/content/dictionaries/*.ts` lives here. The
files are **not** committed yet — the site renders fine without them, and each
one lights up the moment you drop it in at the right path.

Both dictionaries point at the same files, so a screenshot is added once and
serves the English and Portuguese pages alike. Only the `alt` text and captions
are translated.

## Where each file goes

| Path | Used on | Notes |
| ---- | ------- | ----- |
| `legion-sabers/storefront.png` | Home tile cover + portfolio | Home page above the fold |
| `legion-sabers/product.png` | Portfolio | A saber product detail page |
| `legion-sabers/mobile.png` | Portfolio | Narrow viewport, same storefront |
| `legion-sabers/collections.png` | Portfolio | A collection listing page |
| `wotan-brindes/home.png` | Home tile cover + portfolio | Home page above the fold |
| `wotan-brindes/catalog.png` | Portfolio | Catalog / listing view |
| `wotan-brindes/product.png` | Portfolio | Product detail page |
| `wotan-brindes/mobile.png` | Portfolio | Narrow viewport |
| `fulfillment/orders.png` | Home tile cover + portfolio | Orders dashboard — **scrub client data** |
| `fulfillment/warehouse.png` | Portfolio | Warehouse status view |
| `fulfillment/manufacturing.png` | Portfolio | Manufacturing handoff |
| `stand-it-up/home.png` | Portfolio only | Not on the home page |
| `stand-it-up/catalog.png` | Portfolio only | |
| `stand-it-up/mobile.png` | Portfolio only | |
| `stand-it-up/models.png` | Portfolio only | 3D model examples |

## Capture spec

- **Format** — `.png`. Next optimises to WebP/AVIF at request time, so don't
  pre-convert. If you change the extension, update the `src` in *both*
  dictionaries.
- **Desktop shots** — 2560×1440 or 1920×1080, standard browser window, no
  browser chrome. The portfolio frame is 36rem × 420px and the home tile crops
  to `object-top`, so **keep the important content in the top half**.
- **Mobile shots** — 750×1334 or similar 9:16-ish portrait. Device frames are
  fine if you like the look, just be consistent across projects.
- **Weight** — aim under 500 KB each before optimisation. `pngquant` or
  `oxipng` will halve most screenshots with no visible loss.
- **Consistency** — same browser, same zoom, same light/dark mode across a
  project's set. Mixed themes inside one carousel look accidental.

## Before you commit the fulfillment shots

That tool is internal. Scrub or fake anything identifying before it goes into a
public repo: customer names, addresses, order numbers, supplier names, pricing,
internal URLs, and anything in a browser tab title or bookmark bar.

## Adding a project

1. Create `public/work/<project-id>/` and drop the files in.
2. Add the project to the `work` array in **both** `en.ts` and `pt-BR.ts`,
   with `src` pointing at the new paths.
3. Add a tile to `mosaic.work` in both files if it should appear on the home
   page — check the grid still fills (4 columns on md+, 2 on mobile).
