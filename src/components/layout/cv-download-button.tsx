import { Download } from "lucide-react"

import { LocaleText } from "@/components/i18n/locale-text"
import { buttonVariants } from "@/components/ui/button"
import { cv } from "@/content/contact"
import { cn } from "@/lib/utils"

type CvDownloadButtonProps = {
  label: string
  size?: "xs" | "sm" | "default"
  className?: string
}

export function CvDownloadButton({
  label,
  size = "sm",
  className,
}: CvDownloadButtonProps) {
  return (
    <a
      href={cv.href}
      download={cv.filename}
      data-umami-event="resume:download"
      className={cn(buttonVariants({ variant: "outline", size }), className)}
    >
      <Download data-icon="inline-start" />
      <LocaleText>{label}</LocaleText>
    </a>
  )
}
