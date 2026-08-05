import Link from "next/link";
import { ArrowUpRightIcon, FileTextIcon } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/common/brand-icons";
import { CopyEmail } from "@/components/common/copy-email";
import { Reveal } from "@/components/common/reveal";
import { Eyebrow } from "@/components/common/section";
import { site } from "@/content/site";

/**
 * One consistent list of contact methods.
 *
 * The previous version stacked three different button treatments in a
 * cramped column — a full-width mono button, a two-up button row, then a
 * phone button beside two icon squares — under a 48px slogan. Every item
 * here shares one shape, and the slogan is gone.
 */
const methods = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: null,
  },
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
    Icon: null,
  },
  {
    label: "GitHub",
    value: "github.com/knvramana",
    href: site.socials.github,
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    value: "in/ramanakoduri",
    href: site.socials.linkedin,
    Icon: LinkedinIcon,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-28 pt-8 pb-20 md:pb-28"
    >
      <div className="container-page">
        <Reveal>
          <div className="bg-ink relative isolate overflow-hidden rounded-2xl p-8 md:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_24rem_at_80%_-10%,oklch(1_0_0/0.07),transparent_70%)]"
            />

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <Eyebrow className="text-white/60">Contact</Eyebrow>
                <h2
                  id="contact-heading"
                  className="mt-3 text-2xl leading-tight font-bold tracking-[-0.02em] text-balance text-white sm:text-3xl"
                >
                  Get in touch
                </h2>
                <p className="mt-4 max-w-sm leading-relaxed text-pretty text-white/70">
                  {site.availability.text}. Email is the fastest way to reach me
                  — I read everything.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link
                    href={site.resumePath}
                    target="_blank"
                    rel="noopener"
                    prefetch={false}
                    className="text-ink inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold transition-opacity duration-200 hover:opacity-90"
                  >
                    <FileTextIcon className="size-4" aria-hidden="true" />
                    Download résumé
                  </Link>
                  <CopyEmail />
                </div>
              </div>

              {/* One shape, four times. */}
              <ul className="grid gap-px overflow-hidden rounded-xl border border-white/12 bg-white/12 sm:grid-cols-2 lg:col-span-7">
                {methods.map(({ label, value, href, Icon }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group bg-ink flex h-full min-h-[5.25rem] flex-col justify-center gap-1 px-5 py-4 transition-colors duration-200 hover:bg-white/6"
                    >
                      <span className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-white/50 uppercase">
                        {Icon ? <Icon className="size-3 shrink-0" /> : null}
                        {label}
                      </span>
                      <span className="flex items-center gap-1.5 text-[0.9375rem] break-words text-white">
                        {value}
                        <ArrowUpRightIcon
                          className="size-3.5 shrink-0 text-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
