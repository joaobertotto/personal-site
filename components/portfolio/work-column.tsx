import { ScrollColumn } from "@/components/layout/scroll-column"

export function WorkColumn() {
  return (
    <ScrollColumn
      ariaLabel="Project gallery"
      className="size-full md:h-dvh"
      contentClassName="flex w-full flex-col gap-6 px-6 py-10 md:pr-8 md:pl-0"
    >
      <p className="text-sm text-muted-foreground md:sr-only">Work</p>

      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className="flex aspect-[4/3] w-full items-end rounded-xl bg-muted p-4"
        >
          <span className="text-sm text-muted-foreground">
            Project {index + 1}
          </span>
        </div>
      ))}
    </ScrollColumn>
  )
}
