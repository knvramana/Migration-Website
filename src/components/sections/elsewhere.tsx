import Link from "next/link";

import { Block } from "@/components/common/block";
import { CopyEmail } from "@/components/common/copy-email";
import { site } from "@/content/site";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phoneDisplay, href: `tel:${site.phone}` },
  { label: "GitHub", value: "github.com/knvramana", href: site.socials.github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ramanakoduri",
    href: site.socials.linkedin,
  },
];

export function Elsewhere() {
  return (
    <Block
      id="contact"
      title="Get in touch"
      lead={`${site.availability.text}. The fastest way to reach me is email.`}
    >
      <div className="border-border bg-card rounded-xl border p-6 md:p-7">
        <dl className="grid gap-4 sm:grid-cols-2">
          {links.map(({ label, value, href }) => (
            <div key={label}>
              <dt className="text-faint font-mono text-[0.6875rem] tracking-[0.1em] uppercase">
                {label}
              </dt>
              <dd className="mt-1 min-w-0">
                <Link
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="link text-[0.9375rem] break-words"
                >
                  {value}
                </Link>
              </dd>
            </div>
          ))}
        </dl>

        <div
          className="border-border mt-6 flex flex-wrap items-center gap-3 border-t pt-5"
          data-print-hide=""
        >
          <Link
            href={site.resumePath}
            target="_blank"
            rel="noopener"
            prefetch={false}
            className="bg-foreground text-background inline-flex min-h-10 items-center rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90"
          >
            Download résumé
          </Link>
          <CopyEmail />
        </div>
      </div>
    </Block>
  );
}
