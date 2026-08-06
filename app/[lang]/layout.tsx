import { Geist, Geist_Mono } from "next/font/google"
import { notFound } from "next/navigation"

import { ThemeProvider } from "@/components/theme-provider"
import { isLocale, locales } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

import "../globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        fontMono.variable,
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
