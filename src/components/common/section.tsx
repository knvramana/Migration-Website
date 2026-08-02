import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  /** Widen the heading block for short titles. */
  headingClassName?: string;
}

/**
 * Every section routes through this shell. It owns the vertical rhythm and
 * the scroll-margin that keeps the floating nav from covering anchor targets,
 * so spacing stays consistent instead of being re-decided per section.
 */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className,
  headingClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-28 py-20 md:py-28", className)}
    >
      <div className="container-page">
        <div className={cn("mb-10 max-w-3xl md:mb-14", headingClassName)}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            id={`${id}-heading`}
            className="mt-4 text-3xl leading-[1.08] font-extrabold tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          {lead ? (
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed text-pretty">
              {lead}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-brand-teal font-mono text-xs font-semibold tracking-[0.18em] uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}
