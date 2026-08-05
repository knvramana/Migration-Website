import Link from "next/link";

import { Block } from "@/components/common/block";
import { CopyEmail } from "@/components/common/copy-email";
import { site } from "@/content/site";

/**
 * Contact is not a section with an inverted dark panel — that is a
 * landing-page tic. It is a list of ways to reach someone, at the end,
 * plus the address already given in the opening paragraph.
 */
const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "GitHub", value: "github.com/knvramana", href: site.socials.github },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ramanakoduri",
    href: site.socials.linkedin,
  },
  { label: "Résumé", value: "PDF", href: site.resumePath },
  { label: "Phone", value: site.phoneDisplay, href: `tel:${site.phone}` },
];

export function Elsewhere() {
  return (
    <Block id="contact" title="Elsewhere">
      <p className="text-muted-foreground mb-6">
        {site.availability.text}. The fastest way to reach me is email.
      </p>

      <dl className="rows">
        {links.map(({ label, value, href }) => (
          <div
            key={label}
            className="flex flex-wrap items-baseline gap-x-4 py-3 first:pt-0 last:pb-0"
          >
            <dt className="text-faint w-24 shrink-0 text-[0.8125rem]">
              {label}
            </dt>
            <dd className="min-w-0">
              <Link
                href={href}
                prefetch={href.startsWith("/") ? false : undefined}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="link break-words"
              >
                {value}
              </Link>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6" data-print-hide="">
        <CopyEmail />
      </div>
    </Block>
  );
}
