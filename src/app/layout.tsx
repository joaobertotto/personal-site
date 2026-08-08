import localFont from "next/font/local"

import { LanguageProvider } from "@/components/i18n/language-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import type { Dictionary } from "@/content/types"
import { locales } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getRequestLocale } from "@/lib/i18n/get-locale"
import { cn } from "@/lib/utils"

import "./globals.css"

/**
 * Display face. Self-hosted rather than pulled from `next/font/google` so the
 * build has no network dependency and visitors make no third-party request.
 *
 * This is the *full* variable build — all four axes (opsz, wght, SOFT, WONK).
 * SOFT and WONK are what stop Fraunces reading as a generic serif; see the
 * `text-display` utility in globals.css.
 */
const fontSerif = localFont({
  variable: "--font-serif",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
  src: [
    {
      path: "./fonts/Fraunces-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
})

/**
 * Commit Mono — SIL OFL, self-hosted from `src/app/fonts/`.
 *
 * These files came from the stock Fontsource build. To swap in a custom build
 * from commitmono.com (adjusted spacing, alternate glyphs, cursive italics),
 * drop the .woff2 files in the same directory under the same names — nothing
 * else needs to change.
 */
const fontMono = localFont({
  variable: "--font-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
  src: [
    { path: "./fonts/CommitMono-400.woff2", weight: "400", style: "normal" },
    {
      path: "./fonts/CommitMono-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
    { path: "./fonts/CommitMono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/CommitMono-700.woff2", weight: "700", style: "normal" },
  ],
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getRequestLocale()
  const dictionaries = Object.fromEntries(
    await Promise.all(
      locales.map(async (item) => [item, await getDictionary(item)] as const)
    )
  ) as Record<(typeof locales)[number], Dictionary>

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        fontMono.variable,
        fontSerif.variable
      )}
    >
      <body>
        <ThemeProvider>
          <LanguageProvider initialLocale={locale} dictionaries={dictionaries}>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
