"use client"

import { useDictionary } from "@/components/i18n/language-provider"
import { ProjectGroup } from "@/components/portfolio/project-group"

export function ProjectGroups() {
  const { ui, work, maker, fun } = useDictionary()

  return (
    <>
      <ProjectGroup
        label={ui.work}
        projects={work}
        visitLabel={ui.visitProject}
      />
      <ProjectGroup
        label={ui.maker}
        projects={maker}
        visitLabel={ui.visitProject}
      />
      <ProjectGroup
        label={ui.fun}
        projects={fun}
        visitLabel={ui.visitProject}
      />
    </>
  )
}
