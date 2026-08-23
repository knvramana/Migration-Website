import Link from "next/link";
import { MailIcon } from "lucide-react";

import { LinkedinIcon } from "@/components/common/brand-icons";
import { site } from "@/content/site";

const links = [
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-border border-t">
      <div className="container-page flex min-h-24 flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-extrabold">{site.name}</p>
          <p className="text-muted-foreground mt-1 font-mono text-xs">
            {site.location}
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <Link
                href={href}
                aria-label={label}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="border-border bg-card hover:border-primary hover:text-primary inline-flex size-10 items-center justify-center rounded-lg border transition-colors duration-200"
              >
                <Icon className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
