import { AwardIcon, GraduationCapIcon } from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";
import { certifications, education } from "@/content/resume";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education & credentials."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((entry, index) => (
          <Reveal key={entry.degree} delay={index * 70}>
            <article className="border-border bg-card h-full rounded-xl border p-6 md:p-7">
              <div className="flex items-start gap-3">
                <GraduationCapIcon
                  className="text-muted-foreground mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="text-muted-foreground font-mono text-xs tracking-tight">
                    {entry.period}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold tracking-tight text-balance">
                    {entry.degree}
                  </h3>
                  <p className="text-muted-foreground mt-1.5 text-sm">
                    {entry.institution}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {entry.location}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={140}>
        <ul className="mt-4 grid gap-4">
          {certifications.map((cert) => (
            <li
              key={cert.code}
              className="border-border bg-card flex items-start gap-3 rounded-xl border p-6"
            >
              <AwardIcon
                className="text-muted-foreground mt-0.5 size-5 shrink-0"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="text-muted-foreground font-mono text-xs tracking-tight">
                  Certification · {cert.code}
                </p>
                <h3 className="mt-2 font-extrabold tracking-tight text-balance">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  {cert.issuer}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
