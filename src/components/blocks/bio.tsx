import { Panel } from "@/components/common/panel";
import { bio } from "@/content/resume";

/**
 * A dated timeline rather than a portrait beside three paragraphs. Each row
 * is one turning point, so the whole path is scannable in a few seconds.
 */
export function Bio() {
  return (
    <Panel id="bio" kicker="Bio" title="How I got here.">
      <dl className="grid gap-3">
        {bio.map((entry) => (
          <div
            key={entry.year}
            className="grid gap-1 sm:grid-cols-[4rem_1fr] sm:gap-5"
          >
            <dt className="text-brand font-mono text-sm tabular-nums">
              {entry.year}
            </dt>
            <dd className="text-muted-foreground leading-relaxed text-pretty">
              {entry.text}
            </dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}
