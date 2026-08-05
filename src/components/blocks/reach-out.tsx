import Link from "next/link";
import { FileTextIcon, MailIcon } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/common/brand-icons";
import { CopyEmail } from "@/components/common/copy-email";
import { Kicker } from "@/components/common/panel";
import { Reveal } from "@/components/common/reveal";
import { site } from "@/content/site";

/**
 * Icons, not a panel of rows.
 *
 * This was a dark slab holding a heading, a paragraph, two buttons and a 2x2
 * grid of labelled contact rows — four competing treatments for what is
 * really a handful of links. One row of targets does the whole job.
 */
const links = [
  { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon, out: false },
  {
    label: "LinkedIn",
    href: site.socials.linkedin,
    Icon: LinkedinIcon,
    out: true,
  },
  { label: "GitHub", href: site.socials.github, Icon: GithubIcon, out: true },
  { label: "Résumé", href: site.resumePath, Icon: FileTextIcon, out: true },
];

export function ReachOut() {
  return (
    <section
      id="hello"
      aria-labelledby="hello-heading"
      className="scroll-mt-28 pt-14 pb-24 md:pt-16 md:pb-28"
    >
      <div className="container-page">
        <Reveal>
          <Kicker>Say hello</Kicker>

          <h2
            id="hello-heading"
            className="font-display decoration-brand/40 mt-4 text-3xl leading-[1.12] font-extrabold tracking-[-0.02em] text-balance underline decoration-[3px] underline-offset-[7px]"
          >
            Get in touch.
          </h2>

          <p className="text-muted-foreground mt-5 max-w-md leading-relaxed text-pretty">
            {site.availability.text}. Email is the fastest way to reach me.
          </p>

          <ul className="mt-9 flex flex-wrap items-center gap-3">
            {links.map(({ label, href, Icon, out }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  title={label}
                  prefetch={href.startsWith("/") ? false : undefined}
                  {...(out
                    ? {
                        target: "_blank",
                        rel: href.startsWith("http")
                          ? "noopener noreferrer"
                          : "noopener",
                      }
                    : {})}
                  className="border-border bg-card text-muted-foreground hover:border-brand hover:text-brand hover:shadow-card group inline-flex size-14 items-center justify-center rounded-full border transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="size-5 transition-transform duration-200 group-hover:scale-110" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <CopyEmail />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
