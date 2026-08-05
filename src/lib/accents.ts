import type { Accent } from "@/content/resume";

/**
 * Categorical hues, used to tell roles and layers apart at a glance.
 *
 * These used to come in two families — decorative `--rail-*` and a darkened
 * text-safe `--brand-*` — because the legacy teal (3.74:1) and gold (3.64:1)
 * failed AA as body text. On the warm palette all four clear 4.5:1 on every
 * surface, so there is now one set that works for both rules and words.
 *
 * Static maps rather than template strings, so Tailwind can see the classes.
 */

export const railBorder: Record<Accent, string> = {
  rust: "border-l-rail-rust",
  teal: "border-l-rail-teal",
  amber: "border-l-rail-amber",
  indigo: "border-l-rail-indigo",
};

export const railBg: Record<Accent, string> = {
  rust: "bg-rail-rust",
  teal: "bg-rail-teal",
  amber: "bg-rail-amber",
  indigo: "bg-rail-indigo",
};

export const textAccent: Record<Accent, string> = {
  rust: "text-rail-rust",
  teal: "text-rail-teal",
  amber: "text-rail-amber",
  indigo: "text-rail-indigo",
};
