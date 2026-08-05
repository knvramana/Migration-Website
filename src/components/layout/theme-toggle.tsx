"use client";

import { useTheme } from "next-themes";

import { useMounted } from "@/hooks/use-mounted";

type DocumentWithViewTransition = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

/** A text control, not an icon in a rounded square. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  // Fixed-size placeholder until mounted, or the label flips on hydration.
  if (!mounted) {
    return <span className="block h-5 w-10" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    const doc = document as DocumentWithViewTransition;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!doc.startViewTransition || reduced) {
      setTheme(next);
      return;
    }
    doc.startViewTransition(() => setTheme(next));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      className="text-faint hover:text-foreground text-[0.8125rem] transition-colors duration-150"
    >
      {isDark ? "light" : "dark"}
      <span className="sr-only"> theme</span>
    </button>
  );
}
