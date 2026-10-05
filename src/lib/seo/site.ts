import type { Metadata } from "next"

import { contact } from "@/content/contact"
import type { Locale } from "@/lib/i18n/config"

export const siteUrl = contact.website
export const siteName = "João Bertotto"

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "João Bertotto — Software Engineer",
}

const ogLocales: Record<Locale, string> = {
  en: "en_US",
  "pt-BR": "pt_BR",
}

type PageMetaInput = {
  title: string
  description: string
  path: string
  locale: Locale
}

/**
 * Next shallow-merges metadata, so a page's `openGraph` replaces the root
 * layout's wholesale. Every page builds its full block here instead. The image
 * itself comes from `app/opengraph-image.tsx`, which applies to all routes.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  locale,
}: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName,
      url: path,
      title,
      description,
      images: [ogImage],
      locale: ogLocales[locale],
      alternateLocale: Object.entries(ogLocales)
        .filter(([key]) => key !== locale)
        .map(([, value]) => value),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}
