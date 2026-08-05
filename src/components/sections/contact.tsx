import Link from "next/link";
import { FileTextIcon, MailIcon, PhoneIcon } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/common/brand-icons";
import { CopyEmail } from "@/components/common/copy-email";
import { Reveal } from "@/components/common/reveal";
import { Eyebrow } from "@/components/common/section";
import { site } from "@/content/site";

const elsewhere = [
  { href: site.socials.github, label: "GitHub", Icon: GithubIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
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
          <div className="bg-ink shadow-raised relative isolate overflow-hidden rounded-2xl p-8 md:p-12">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_28rem_at_85%_0%,oklch(0.5182_0.1367_35.71/0.30),transparent_70%)]"
            />

            <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
              <div className="lg:col-span-7">
                <Eyebrow className="text-white/70">Contact</Eyebrow>
                <h2
                  id="contact-heading"
                  className="mt-4 text-3xl leading-[1.08] font-extrabold tracking-[-0.02em] text-balance text-white sm:text-4xl md:text-5xl"
                >
                  Let&rsquo;s build reliable software that reaches production.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-white/75">
                  I&rsquo;m open to Application Developer and AI Engineer roles
                  building LLM-powered features into real products. The fastest
                  way to reach me is email.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-5">
                <CopyEmail />

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`mailto:${site.email}`}
                    className="text-ink inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-extrabold transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <MailIcon className="size-4" aria-hidden="true" />
                    Email me
                  </Link>
                  {/* prefetch={false}: /resume redirects to a 231KB PDF. */}
                  <Link
                    href={site.resumePath}
                    target="_blank"
                    rel="noopener"
                    prefetch={false}
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 text-sm font-extrabold text-white transition-colors duration-200 hover:bg-white/20"
                  >
                    <FileTextIcon className="size-4" aria-hidden="true" />
                    R&eacute;sum&eacute;
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`tel:${site.phone}`}
                    className="inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-white/25 bg-white/10 px-4 font-mono text-sm text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/20"
                  >
                    <PhoneIcon className="size-4 shrink-0" aria-hidden="true" />
                    {site.phoneDisplay}
                  </Link>

                  {elsewhere.map(({ href, label, Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex size-11 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/20"
                    >
                      <Icon className="size-4" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
