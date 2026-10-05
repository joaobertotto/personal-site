import type { Metadata } from "next"
import localFont from "next/font/local"
import Script from "next/script"

import { LanguageProvider } from "@/components/i18n/language-provider"
import { WipNotice } from "@/components/layout/wip-notice"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { contact } from "@/content/contact"
import type { Dictionary } from "@/content/types"
import { locales } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getRequestLocale } from "@/lib/i18n/get-locale"
import { siteName, siteUrl } from "@/lib/seo/site"
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
/**
 * Umami analytics. Only rendered when both env vars are set, so local dev and
 * preview builds stay untracked unless explicitly configured.
 */
const umamiSrc = process.env.NEXT_PUBLIC_UMAMI_SRC
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
}

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

  const { intro } = dictionaries.en
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: intro.name,
    jobTitle: intro.role,
    url: siteUrl,
    image: `${siteUrl}/avatar.png`,
    email: `mailto:${contact.email}`,
    sameAs: [
      `https://github.com/${contact.github}`,
      ...(contact.linkedin
        ? [`https://www.linkedin.com/in/${contact.linkedin}`]
        : []),
    ],
  }

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
        <script
          type="application/ld+json"
          // Escape `<` so a stray "</script>" in content can't break out.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>
          <LanguageProvider initialLocale={locale} dictionaries={dictionaries}>
            {children}
            <WipNotice />
          </LanguageProvider>
        </ThemeProvider>
        {umamiSrc && umamiWebsiteId && (
          <Script
            src={umamiSrc}
            data-website-id={umamiWebsiteId}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}
