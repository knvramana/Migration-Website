"use client";

import { useEffect, useRef, type CSSProperties, type ElementType } from "react";

import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger offset in ms, applied via the --reveal-delay custom property. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/**
 * The only animation primitive in the app.
 *
 * It flips `data-revealed` when the element scrolls into view; every bit of
 * the actual motion lives in globals.css. That keeps this deterministic in
 * all browsers (including Firefox, which still lacks scroll-driven CSS
 * animations) and costs no animation library.
 *
 * Wrap leaf groups *inside* section components — never a whole section — so
 * the client boundary stays at the bottom of the tree.
 */
export function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.revealed = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.revealed = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      data-revealed="false"
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={cn(className)}
    >
      {children}
    </Tag>
  );
}
