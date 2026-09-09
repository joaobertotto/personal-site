"use client"

import { useEffect, useState } from "react"

import { useDictionary } from "@/components/i18n/language-provider"
import { LocaleText } from "@/components/i18n/locale-text"
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const STORAGE_KEY = "personal-site:wip-notice-dismissed"

export function WipNotice() {
  const { ui } = useDictionary()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (window.localStorage.getItem(STORAGE_KEY) === "1") {
      return
    }

    setOpen(true)
  }, [])

  return (
    <Dialog
      isOpen={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) {
          window.localStorage.setItem(STORAGE_KEY, "1")
        }
      }}
      className="sm:max-w-md"
    >
      <DialogHeader>
        <DialogTitle className="text-display text-xl font-normal">
          <span aria-hidden>🚧 </span>
          <LocaleText>{ui.wipNotice.title}</LocaleText>
        </DialogTitle>
        <DialogDescription>
          <LocaleText>{ui.wipNotice.body}</LocaleText>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose variant="default">
          <LocaleText>{ui.wipNotice.action}</LocaleText>
        </DialogClose>
      </DialogFooter>
    </Dialog>
  )
}
