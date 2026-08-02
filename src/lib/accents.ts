import type { Accent } from "@/content/resume";

/**
 * Accent colours come in two families that are NOT interchangeable.
 *
 *   rail*  — decoration only (6px rails, watermarks, large bold display type).
 *            These are the legacy hexes; teal (3.74:1) and gold (3.64:1) fail
 *            WCAG AA against white for body-sized text.
 *   text*  — the darkened, text-safe ramp. Anything where the accent colour
 *            carries an actual word uses these.
 *
 * Static maps rather than template strings, so Tailwind can see the class names.
 */

export const railBorder: Record<Accent, string> = {
  blue: "border-l-rail-blue",
  teal: "border-l-rail-teal",
  gold: "border-l-rail-gold",
  violet: "border-l-rail-violet",
};

export const railBg: Record<Accent, string> = {
  blue: "bg-rail-blue",
  teal: "bg-rail-teal",
  gold: "bg-rail-gold",
  violet: "bg-rail-violet",
};

export const textAccent: Record<Accent, string> = {
  blue: "text-brand-blue",
  teal: "text-brand-teal",
  gold: "text-brand-gold",
  violet: "text-brand-violet",
};

export const ringAccent: Record<Accent, string> = {
  blue: "ring-rail-blue/25",
  teal: "ring-rail-teal/25",
  gold: "ring-rail-gold/25",
  violet: "ring-rail-violet/25",
};
