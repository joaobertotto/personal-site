import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/seo/site"

const routes = [
  { path: "", priority: 1 },
  { path: "/portfolio", priority: 0.8 },
  { path: "/contact", priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }))
}
