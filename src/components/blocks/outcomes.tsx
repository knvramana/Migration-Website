import { Reveal } from "@/components/common/reveal";
import { impact } from "@/content/resume";
import { cn } from "@/lib/utils";

/**
 * A quiet band between the hero and the stack. No heading — the numbers are
 * the content, and an "Outcomes" title above them would say nothing extra.
 */
export function Outcomes() {
  return (
    <section aria-label="Selected outcomes" className="py-10 md:py-12">
      <div className="container-page">
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item, index) => (
            <Reveal key={item.label} delay={index * 60} as="li">
              {/*
                container-page caps at 48rem, so a lg column is ~168px. A
                percentage fits at text-3xl; a word-length value like
                "Fortune 500" does not, and wrapping would push this tile's
                label below the other three. Step the long ones down instead.
              */}
              <p
                className={cn(
                  "text-brand font-mono font-extrabold tracking-tight tabular-nums",
                  item.value.length > 6
                    ? "text-xl md:text-2xl"
                    : "text-2xl md:text-3xl",
                )}
              >
                {item.value}
              </p>
              <p className="mt-2 text-sm font-extrabold">{item.label}</p>
              <p className="text-muted-foreground mt-1 text-sm leading-snug text-pretty">
                {item.context}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
