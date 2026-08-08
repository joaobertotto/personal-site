import { cn } from "@/lib/utils"

/**
 * Ambient layer behind the weather readout, driven by the same WMO code the
 * text label uses. Deliberately monochrome and low-contrast — it should read as
 * texture at a glance, not as an illustration competing with the temperature.
 *
 * All positions and delays are hardcoded rather than randomised: this renders
 * on the server, and `Math.random()` here would mismatch on hydration.
 */

type WeatherVisualProps = {
  code: number
  className?: string
}

type Kind = "clear" | "cloud" | "fog" | "drizzle" | "rain" | "snow" | "storm"

/** Mirrors the buckets in `conditionFromCode`. */
function kindFromCode(code: number): Kind {
  if (code === 0) return "clear"
  if (code <= 3) return "cloud"
  if (code <= 48) return "fog"
  if (code <= 57) return "drizzle"
  if (code <= 67) return "rain"
  if (code <= 77) return "snow"
  if (code <= 82) return "rain"
  return "storm"
}

/** left %, delay s, duration s, height rem */
const DROPS: Array<[number, number, number, number]> = [
  [8, 0, 1.1, 1.4],
  [21, 0.45, 1.35, 1],
  [34, 0.15, 0.95, 1.7],
  [47, 0.8, 1.25, 1.2],
  [59, 0.3, 1.05, 1.5],
  [71, 0.65, 1.4, 0.9],
  [84, 0.1, 1.15, 1.3],
  [93, 0.55, 1, 1.6],
]

/** left %, delay s, duration s, size rem */
const FLAKES: Array<[number, number, number, number]> = [
  [12, 0, 5.5, 0.28],
  [28, 1.4, 6.5, 0.2],
  [43, 0.6, 5, 0.32],
  [58, 2.1, 7, 0.22],
  [72, 1, 5.8, 0.26],
  [88, 1.8, 6.2, 0.18],
]

/** top %, delay s, duration s, height rem, width % */
const BANDS: Array<[number, number, number, number, number]> = [
  [22, 0, 26, 1.6, 55],
  [45, 6, 34, 2.2, 70],
  [66, 3, 30, 1.2, 45],
]

function Rain({ dense }: { dense: boolean }) {
  const drops = dense ? DROPS : DROPS.filter((_, index) => index % 2 === 0)

  return (
    <>
      {drops.map(([left, delay, duration, height]) => (
        <span
          key={left}
          className="absolute top-0 w-px rounded-full bg-foreground/25"
          style={{
            left: `${left}%`,
            height: `${height}rem`,
            animation: `tile-fall ${duration}s linear ${delay}s infinite`,
          }}
        />
      ))}
    </>
  )
}

function Clouds() {
  return (
    <>
      {BANDS.map(([top, delay, duration, height, width]) => (
        <span
          key={top}
          className="absolute rounded-full bg-foreground/10 blur-[2px]"
          style={{
            top: `${top}%`,
            width: `${width}%`,
            height: `${height}rem`,
            animation: `tile-drift ${duration}s linear ${delay}s infinite`,
          }}
        />
      ))}
    </>
  )
}

export function WeatherVisual({ code, className }: WeatherVisualProps) {
  const kind = kindFromCode(code)

  return (
    <div
      aria-hidden
      className={cn(
        "tile-motion pointer-events-none absolute inset-0 overflow-hidden rounded-xl",
        className
      )}
    >
      {kind === "clear" ? (
        <>
          <span className="absolute top-1/2 right-4 size-16 -translate-y-1/2 rounded-full bg-foreground/10" />
          <span
            className="absolute top-1/2 right-4 size-16 -translate-y-1/2 rounded-full border border-foreground/20"
            style={{ animation: "tile-breathe 6s ease-in-out infinite" }}
          />
        </>
      ) : null}

      {kind === "cloud" ? <Clouds /> : null}

      {kind === "fog" ? (
        <>
          {BANDS.map(([top, delay, duration, height]) => (
            <span
              key={top}
              className="absolute inset-x-0 bg-foreground/10 blur-[3px]"
              style={{
                top: `${top}%`,
                height: `${height}rem`,
                animation: `tile-drift ${duration * 1.6}s linear ${delay}s infinite`,
              }}
            />
          ))}
        </>
      ) : null}

      {kind === "drizzle" ? <Rain dense={false} /> : null}
      {kind === "rain" ? <Rain dense /> : null}

      {kind === "storm" ? (
        <>
          <Clouds />
          <Rain dense />
          <span
            className="absolute inset-0 bg-foreground/70"
            style={{ animation: "tile-flash 7s linear infinite" }}
          />
        </>
      ) : null}

      {kind === "snow" ? (
        <>
          {FLAKES.map(([left, delay, duration, size]) => (
            <span
              key={left}
              className="absolute top-0 rounded-full bg-foreground/30"
              style={{
                left: `${left}%`,
                width: `${size}rem`,
                height: `${size}rem`,
                animation: `tile-settle ${duration}s linear ${delay}s infinite`,
              }}
            />
          ))}
        </>
      ) : null}
    </div>
  )
}
