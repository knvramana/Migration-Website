"use client";

import Link from "next/link";
import { useMemo } from "react";

import { ThemeToggle } from "./theme-toggle";
import { site } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

/**
 * The one structural idea on the page.
 *
 * A sticky lowercase label rail and a single hairline, replacing a floating
 * pill header plus nine repeated section eyebrows. The rail is a functional
 * index — every entry is a real anchor with a current state — rather than
 * decoration sitting above a heading.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  const ids = useMemo(
    () => site.nav.map((item) => item.href.replace("#", "")),
    [],
  );
  const active = useActiveSection(ids);

  return (
    <div className="shell mx-auto max-w-5xl">
      <nav aria-label="Sections" className="rail">
        <Link
          href="#top"
          className="text-foreground mr-auto font-semibold lg:mr-0 lg:mb-3"
        >
          {site.firstName.toLowerCase()}
        </Link>

        {site.nav.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = active === id;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "transition-colors duration-150",
                isActive
                  ? "text-foreground"
                  : "text-faint hover:text-foreground",
              )}
            >
              {item.label.toLowerCase()}
            </Link>
          );
        })}

        <div className="ml-auto lg:mt-4 lg:ml-0" data-print-hide="">
          <ThemeToggle />
        </div>
      </nav>

      <main id="main" className="measure">
        {children}
      </main>
    </div>
  );
}
