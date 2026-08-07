"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const SCRAMBLE_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789áàâãéêíóôõúçÁÀÂÃÉÊÍÓÔÕÚÇ"

/** Keep short labels snappy and long paragraphs from dragging. */
const MIN_DURATION_MS = 240
const MAX_DURATION_MS = 480
const SCRAMBLE_WAVE = 8

function segmentGraphemes(text: string): string[] {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    return [
      ...new Intl.Segmenter(undefined, { granularity: "grapheme" }).segment(
        text
      ),
    ].map((part) => part.segment)
  }

  return Array.from(text)
}

function randomChar() {
  return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]!
}

function durationForLength(length: number) {
  if (length <= 12) {
    return MIN_DURATION_MS
  }

  return Math.min(
    MAX_DURATION_MS,
    MIN_DURATION_MS + Math.round((length - 12) * 1.2)
  )
}

type LocaleTextProps = {
  children: string
  className?: string
}

export function LocaleText({ children, className }: LocaleTextProps) {
  const [display, setDisplay] = React.useState(children)
  const displayRef = React.useRef(children)
  const frameRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    displayRef.current = display
  }, [display])

  React.useEffect(() => {
    if (children === displayRef.current) {
      return
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches

    if (reduceMotion) {
      setDisplay(children)
      displayRef.current = children
      return
    }

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current)
    }

    const from = segmentGraphemes(displayRef.current)
    const to = segmentGraphemes(children)
    const length = Math.max(from.length, to.length)
    const duration = durationForLength(length)
    const startedAt = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startedAt

      if (elapsed >= duration) {
        setDisplay(children)
        displayRef.current = children
        frameRef.current = null
        return
      }

      const progress = elapsed / duration
      const head = Math.floor(progress * (length + SCRAMBLE_WAVE))
      const next: string[] = []

      for (let index = 0; index < length; index += 1) {
        const target = to[index]
        const source = from[index]

        if (target !== undefined && source === target) {
          next.push(target)
          continue
        }

        if (index < head - SCRAMBLE_WAVE) {
          if (target !== undefined) {
            next.push(target)
          }
          continue
        }

        if (index >= head) {
          if (source !== undefined) {
            next.push(source)
          }
          continue
        }

        if (target === undefined) {
          continue
        }

        if (target === " " || target === "\n" || target === "\t") {
          next.push(target)
          continue
        }

        next.push(randomChar())
      }

      const value = next.join("")
      setDisplay(value)
      displayRef.current = value
      frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [children])

  return <span className={cn(className)}>{display}</span>
}
