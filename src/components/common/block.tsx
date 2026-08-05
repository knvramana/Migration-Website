import { cn } from "@/lib/utils";

/**
 * Section wrapper. The heading is a real heading again — the previous pass
 * flattened everything to body size, which read as an unstyled document.
 * Hierarchy without shouting: 24px semibold, no uppercase eyebrow above it.
 */
export function Block({
  id,
  title,
  lead,
  children,
  className,
}: {
  id: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("border-border scroll-mt-8 border-t py-14", className)}
    >
      <h2
        id={`${id}-heading`}
        className="text-[1.5rem] leading-tight font-semibold tracking-[-0.02em]"
      >
        {title}
      </h2>
      {lead ? (
        <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
          {lead}
        </p>
      ) : null}
      <div className="mt-8">{children}</div>
    </section>
  );
}
