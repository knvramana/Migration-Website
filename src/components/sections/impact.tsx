import { Reveal } from "@/components/common/reveal";
import { impact } from "@/content/resume";
import { railBg, textAccent } from "@/lib/accents";
import { cn } from "@/lib/utils";

/**
 * A quiet band between the hero and the trace. No heading — the numbers are
 * the content, and a "Impact" title above them would say nothing extra.
 */
export function Impact() {
  return (
    <section aria-label="Selected outcomes" className="border-b py-10 md:py-12">
      <div className="container-page">
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map((item, index) => (
            <Reveal key={item.label} delay={index * 60} as="li">
              <div className="relative pl-4">
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-y-1 left-0 w-0.5 rounded-full",
                    railBg[item.accent],
                  )}
                />
                <p
                  className={cn(
                    "font-mono text-2xl font-bold tracking-tight tabular-nums md:text-3xl",
                    textAccent[item.accent],
                  )}
                >
                  {item.value}
                </p>
                <p className="mt-1.5 text-sm font-bold">{item.label}</p>
                <p className="text-muted-foreground mt-1 text-sm leading-snug text-pretty">
                  {item.context}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
