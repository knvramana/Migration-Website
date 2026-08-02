"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the reading band.
 *
 * One IntersectionObserver over all targets, not a scroll listener calling
 * getBoundingClientRect — that pattern forces synchronous layout on every
 * scroll event and is a reliable way to tank INP on a long page.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.boundingClientRect.top);
          } else {
            visible.delete(entry.target.id);
          }
        }

        // Topmost intersecting section wins.
        const topmost = [...visible.entries()].sort((a, b) => a[1] - b[1])[0];
        setActive(topmost ? topmost[0] : null);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
