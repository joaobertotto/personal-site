import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { getDictionary } from "@/lib/i18n/get-dictionary"
import { siteUrl } from "@/lib/seo/site"

export const alt = "João Bertotto — Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/**
 * Shared preview card for every route. Always English: crawlers fetch it
 * without a meaningful Accept-Language, and it's rendered once at build time.
 * Uses next/og's bundled sans — Satori can't read the site's woff2 fonts.
 */
export default async function Image() {
  const { intro } = await getDictionary("en")
  const avatar = await readFile(join(process.cwd(), "public/avatar.png"))
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "#faf9f6",
          color: "#1c1b19",
        }}
      >
        <img
          src={avatarSrc}
          alt=""
          width={280}
          height={280}
          style={{ borderRadius: 9999 }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2 }}>
            {intro.name}
          </div>
          <div style={{ fontSize: 40, color: "#5c5a55" }}>{intro.role}</div>
          <div style={{ fontSize: 28, color: "#8a8780", marginTop: 24 }}>
            {siteUrl.replace(/^https?:\/\//, "")}
          </div>
        </div>
      </div>
    ),
    size
  )
}
