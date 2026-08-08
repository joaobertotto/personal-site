import { cn } from "@/lib/utils"

/**
 * Ambient analog face for the local-time tile. Sits behind the digital readout
 * rather than replacing it — the digits are the information, this is the
 * texture that makes the tile feel alive.
 *
 * Hands are positioned by transform, not animation, so they stay in step with
 * the same one-second tick that drives the digits. No independent timer.
 */

type AnalogClockProps = {
  hours: number
  minutes: number
  seconds: number
  className?: string
}

type HandProps = {
  angle: number
  length: number
  width: number
  className?: string
}

function Hand({ angle, length, width, className }: HandProps) {
  return (
    <span
      className={cn(
        "absolute bottom-1/2 left-1/2 origin-bottom rounded-full",
        className
      )}
      style={{
        height: `${length}%`,
        width: `${width}px`,
        transform: `translateX(-50%) rotate(${angle}deg)`,
      }}
    />
  )
}

export function AnalogClock({
  hours,
  minutes,
  seconds,
  className,
}: AnalogClockProps) {
  // Hour and minute hands move continuously — a minute hand that jumps only on
  // the minute looks broken next to a sweeping second hand.
  const secondAngle = seconds * 6
  const minuteAngle = minutes * 6 + seconds * 0.1
  const hourAngle = (hours % 12) * 30 + minutes * 0.5

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -right-6 -bottom-6 size-32",
        className
      )}
    >
      <div className="relative size-full rounded-full border border-foreground/15">
        {/* Quarter ticks only. Twelve ticks at this size turns into noise. */}
        {[0, 90, 180, 270].map((angle) => (
          <span
            key={angle}
            className="absolute top-1/2 left-1/2 h-full w-px origin-center"
            style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
          >
            <span className="absolute inset-x-0 top-0 h-1.5 rounded-full bg-foreground/25" />
          </span>
        ))}

        <Hand
          angle={hourAngle}
          length={26}
          width={2}
          className="bg-foreground/45"
        />
        <Hand
          angle={minuteAngle}
          length={38}
          width={1.5}
          className="bg-foreground/35"
        />
        <Hand
          angle={secondAngle}
          length={42}
          width={1}
          className="bg-foreground/60 motion-reduce:hidden"
        />

        <span className="absolute top-1/2 left-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/60" />
      </div>
    </div>
  )
}
