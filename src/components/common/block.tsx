import { cn } from "@/lib/utils";

/**
 * A block, not a "section".
 *
 * The previous Section component made `eyebrow` a required prop, so nine
 * blocks were forced through an identical shape — mono uppercase label, then
 * a 48px extrabold heading, then bordered cards. Nine repetitions of one
 * rhythm is what made the page read as a template.
 *
 * Here the heading is body size at weight 600, the label is gone, and the
 * only structure is a hairline and space.
 */
export function Block({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("block scroll-mt-10", className)}
    >
      <h2 id={`${id}-heading`} className="text-foreground mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
