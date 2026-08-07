import { Geist, Geist_Mono } from "next/font/google"

import { LanguageProvider } from "@/components/i18n/language-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"
import type { Dictionary } from "@/content/types"
import { locales } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getRequestLocale } from "@/lib/i18n/get-locale"
import { cn } from "@/lib/utils"

import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
      className={cn("font-sans antialiased", fontMono.variable, geist.variable)}
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
