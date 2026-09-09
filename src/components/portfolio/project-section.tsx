"use client"

import Image from "next/image"
import { useState } from "react"

import { LocaleText } from "@/components/i18n/locale-text"
import type { Project, ProjectImage } from "@/content/types"

type ProjectSectionProps = {
  project: Project
  visitLabel: string
}

/**
 * One frame in the horizontal strip. Screenshots arrive in `public/work/` over
 * time, so a slot may be declared before its file exists — an image that fails
 * to load collapses back to the empty plate rather than a broken-image box.
 */
function ProjectFrame({ image }: { image: ProjectImage }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(image.src) && !failed

  return (
    <div className="relative h-[216px] w-[min(80vw,28rem)] overflow-hidden rounded-xl bg-muted sm:h-[420px] sm:w-[36rem]">
      {showImage && image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          onError={() => setFailed(true)}
          className="object-cover object-top"
          sizes="(max-width: 640px) 80vw, 36rem"
        />
      ) : (
        <div className="size-full" role="img" aria-label={image.alt} />
      )}
    </div>
  )
}

export function ProjectSection({ project, visitLabel }: ProjectSectionProps) {
  return (
    <article
      id={project.id}
      className="flex w-full flex-col gap-4"
      aria-labelledby={`${project.id}-title`}
    >
      <header className="mx-auto flex w-full max-w-3xl flex-col gap-1 px-4 sm:px-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 id={`${project.id}-title`} className="text-display text-2xl">
            <LocaleText>{project.title}</LocaleText>
          </h2>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              <LocaleText>{visitLabel}</LocaleText>
            </a>
          ) : null}
        </div>
        <p className="max-w-3xl text-muted-foreground">
          <LocaleText>{project.description}</LocaleText>
        </p>
      </header>

      <div className="w-screen max-w-[100vw] [scrollbar-width:none] overflow-x-auto overflow-y-visible py-4">
        <ul className="flex list-none items-start gap-x-4 p-0 ps-[max(1rem,calc((100vw-48rem)/2+1rem))] pe-20 sm:ps-[max(1.5rem,calc((100vw-48rem)/2+1.5rem))]">
          {project.images.map((image) => (
            <li
              key={`${project.id}-${image.caption}`}
              className="flex shrink-0 flex-col gap-2"
            >
              <figure className="flex flex-col gap-2">
                <ProjectFrame image={image} />
                <figcaption className="pl-1 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:text-sm">
                  <LocaleText>{image.caption}</LocaleText>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
