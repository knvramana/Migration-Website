"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "lucide-react";

import { CodeBlock } from "@/components/common/code-block";
import { Eyebrow } from "@/components/common/section";
import { traceMeta, traceSteps } from "@/content/trace";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

const ADVANCE_MS = 5200;

export function AgenticTrace() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reducedMotion = usePrefersReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const autoplay = playing && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % traceSteps.length),
      ADVANCE_MS,
    );
    return () => window.clearInterval(timer);
  }, [autoplay]);

  // Selecting a step by hand is a statement of intent — stop moving under them.
  const select = useCallback((index: number) => {
    setActive(index);
    setPlaying(false);
  }, []);

  // WAI-ARIA tabs keyboard pattern.
  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = traceSteps.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;

    if (next === null) return;
    event.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  const step = traceSteps[active];

  return (
    <section
      id="agentic"
      aria-labelledby="agentic-heading"
      className="scroll-mt-28 py-20 md:py-28"
    >
      <div className="container-page">
        <div className="mb-10 max-w-3xl md:mb-14">
          <Eyebrow>{traceMeta.eyebrow}</Eyebrow>
          <h2
            id="agentic-heading"
            className="mt-4 text-3xl leading-[1.08] font-extrabold tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl"
          >
            {traceMeta.title}
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed text-pretty">
            {traceMeta.lead}
          </p>
        </div>

        <div className="bg-card shadow-card overflow-hidden rounded-2xl border">
          <div className="grid lg:grid-cols-12">
            {/* Steps. Order is real information here: a request moves through
                these in sequence, so the numbering earns its place. */}
            <div
              role="tablist"
              aria-label="Stages of a tool call"
              aria-orientation="vertical"
              className="bg-muted/40 flex overflow-x-auto border-b lg:col-span-4 lg:flex-col lg:overflow-visible lg:border-r lg:border-b-0"
            >
              {traceSteps.map((traceStep, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={traceStep.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    role="tab"
                    id={`trace-tab-${traceStep.id}`}
                    aria-selected={isActive}
                    aria-controls={`trace-panel-${traceStep.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(index)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    className={cn(
                      "group relative shrink-0 px-5 py-4 text-left transition-colors duration-200 lg:px-6 lg:py-5",
                      isActive
                        ? "bg-card"
                        : "hover:bg-card/60 text-muted-foreground",
                    )}
                  >
                    {/* Progress rail: horizontal on mobile, vertical on desktop */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute transition-colors duration-200",
                        "inset-x-0 bottom-0 h-0.5 lg:inset-y-0 lg:right-0 lg:left-auto lg:h-auto lg:w-0.5",
                        isActive ? "bg-rail-teal" : "bg-transparent",
                      )}
                    />
                    <span className="flex items-baseline gap-3">
                      <span
                        className={cn(
                          "font-mono text-[0.7rem] tabular-nums",
                          isActive
                            ? "text-brand-teal"
                            : "text-muted-foreground",
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-extrabold tracking-tight whitespace-nowrap",
                          isActive && "text-foreground",
                        )}
                      >
                        {traceStep.label}
                      </span>
                    </span>
                    <span className="text-muted-foreground mt-1 hidden font-mono text-[0.68rem] lg:block">
                      {traceStep.layer}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={`trace-panel-${step.id}`}
              aria-labelledby={`trace-tab-${step.id}`}
              tabIndex={0}
              className="min-w-0 p-6 md:p-8 lg:col-span-8"
            >
              <p className="text-brand-teal font-mono text-[0.7rem] tracking-[0.14em] uppercase lg:hidden">
                {step.layer}
              </p>
              <h3 className="mt-2 text-xl font-extrabold tracking-tight text-balance lg:mt-0">
                {step.headline}
              </h3>
              <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed text-pretty">
                {step.detail}
              </p>

              <div className="bg-muted/50 mt-6 rounded-xl border p-4 md:p-5">
                <CodeBlock code={step.payload} kind={step.payloadKind} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t px-5 py-3">
            <p className="text-muted-foreground text-xs">
              {traceMeta.disclaimer}
            </p>
            {reducedMotion ? null : (
              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                className="text-muted-foreground hover:text-foreground inline-flex min-h-8 items-center gap-1.5 rounded-md px-2 font-mono text-xs transition-colors"
              >
                {playing ? (
                  <PauseIcon className="size-3.5" aria-hidden="true" />
                ) : (
                  <PlayIcon className="size-3.5" aria-hidden="true" />
                )}
                {playing ? "Pause" : "Play"}
                <span className="sr-only"> automatic stepping</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
