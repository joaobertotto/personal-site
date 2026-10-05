import type { Metadata } from "next"

import { ContactPanel } from "@/components/contact/contact-panel"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getRequestLocale } from "@/lib/i18n/get-locale"
import { buildPageMetadata } from "@/lib/seo/site"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  const dictionary = await getDictionary(locale)

  return buildPageMetadata({
    ...dictionary.meta.contact,
    path: "/contact",
    locale,
  })
}

export default function ContactPage() {
  return <ContactPanel />
}
