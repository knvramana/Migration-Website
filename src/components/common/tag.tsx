import { cn } from "@/lib/utils";

/** The legacy pill tag: #f0f7ff fill, #cfe3ff border, blue label. */
export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-tag border-tag-border text-brand inline-flex min-h-7 items-center rounded-full border px-2.5 font-mono text-[0.7rem] font-semibold tracking-tight",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagRow({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
