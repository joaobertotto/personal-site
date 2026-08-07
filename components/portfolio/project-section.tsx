import Image from "next/image"

import type { Project } from "@/lib/i18n/types"

type ProjectSectionProps = {
  project: Project
  visitLabel: string
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
          <h2
            id={`${project.id}-title`}
            className="text-xl font-medium tracking-tight"
          >
            {project.title}
          </h2>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              {visitLabel}
            </a>
          ) : null}
        </div>
        <p className="max-w-3xl text-muted-foreground">{project.description}</p>
      </header>

      <div className="w-screen max-w-[100vw] overflow-x-auto overflow-y-visible py-4 [scrollbar-width:none]">
        <ul className="flex list-none items-start gap-x-4 p-0 pe-20 ps-[max(1rem,calc((100vw-48rem)/2+1rem))] sm:ps-[max(1.5rem,calc((100vw-48rem)/2+1.5rem))]">
          {project.images.map((image) => (
            <li
              key={`${project.id}-${image.caption}`}
              className="flex shrink-0 flex-col gap-2"
            >
              <figure className="flex flex-col gap-2">
                <div className="relative h-[216px] w-[min(80vw,28rem)] overflow-hidden rounded-xl bg-muted sm:h-[420px] sm:w-[36rem]">
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 80vw, 36rem"
                    />
                  ) : (
                    <div
                      className="size-full"
                      role="img"
                      aria-label={image.alt}
                    />
                  )}
                </div>
                <figcaption className="pl-1 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:text-sm">
                  {image.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
