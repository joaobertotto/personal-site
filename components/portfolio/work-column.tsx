import { ScrollColumn } from "@/components/layout/scroll-column"
import type { Dictionary } from "@/lib/i18n/types"

type WorkColumnProps = {
  dictionary: Dictionary
}

export function WorkColumn({ dictionary }: WorkColumnProps) {
  const { ui } = dictionary

  return (
    <ScrollColumn
      ariaLabel={ui.projectGallery}
      className="size-full md:h-dvh"
      contentClassName="flex w-full flex-col gap-6 px-6 py-10 md:pr-8 md:pl-0"
    >
      <p className="text-sm text-muted-foreground md:sr-only">{ui.work}</p>

      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="flex aspect-[4/3] w-full items-end rounded-xl bg-muted p-4"
        >
          <span className="text-sm text-muted-foreground">
            {ui.project} {index + 1}
          </span>
        </div>
      ))}
    </ScrollColumn>
  )
}
