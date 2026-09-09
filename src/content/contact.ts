import type { Contact } from "@/content/types"

export const contact: Contact = {
  email: "joaobertottoneto@gmail.com",
  website: "https://joaobertotto.com",
  github: "jbertotto",
  linkedin: "joaobertotto",
}

/** Drop the file at `public/cv.pdf`. */
export const cv = {
  href: "/cv.pdf",
  filename: "Joao-Bertotto-CV.pdf",
} as const
