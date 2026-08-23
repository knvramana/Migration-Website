import { MapPinIcon } from "lucide-react";

import { Panel } from "@/components/common/panel";
import { bio } from "@/content/resume";

/**
 * A route rather than a paragraph.
 *
 * Plain dated rows read as a list; this draws the path — a continuous rail
 * with a node per year, and a place marker wherever the city changes. Three
 * cities across nine years is a real part of the story, and it was invisible
 * as prose.
 */
export function Bio() {
  return (
    <Panel id="bio" kicker="Bio" title="How I got here.">
      <ol className="relative">
        {/* The rail. Stops short at the bottom so the path reads as ongoing. */}
        <span
          aria-hidden="true"
          className="bg-border absolute top-2 bottom-6 left-[0.4375rem] w-px"
        />

        {bio.map((entry, index) => (
          <li key={index} className="relative pb-7 pl-8 last:pb-0">
            {/* Node — filled where the city changes, hollow otherwise. */}
            <span
              aria-hidden="true"
              className={
                entry.moved
                  ? "bg-brand ring-background absolute top-1.5 left-0 size-3.5 rounded-full ring-4"
                  : "border-border bg-background absolute top-2 left-[0.1875rem] size-2 rounded-full border-2"
              }
            />

            {entry.moved ? (
              <p className="text-brand mb-1.5 inline-flex items-center gap-1.5 font-mono text-xs">
                <MapPinIcon className="size-3.5" aria-hidden="true" />
                {entry.place}
              </p>
            ) : null}

            <div className="flex flex-wrap items-baseline gap-x-3">
              <span className="text-foreground font-mono text-sm font-semibold tabular-nums">
                {entry.year}
              </span>
            </div>

            <p className="text-muted-foreground mt-1 leading-relaxed text-pretty">
              {entry.text}
            </p>
          </li>
        ))}
      </ol>
    </Panel>
  );
}
