import { Block } from "@/components/common/block";
import { certifications, education } from "@/content/resume";

export function Education() {
  return (
    <Block id="education" title="Education & Certifications">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((entry) => (
          <article
            key={entry.degree}
            className="border-border bg-card rounded-xl border p-5"
          >
            <time className="text-faint font-mono text-[0.8125rem]">
              {entry.period}
            </time>
            <h3 className="mt-2 font-semibold tracking-tight">
              {entry.degree}
            </h3>
            <p className="text-muted-foreground mt-1 text-[0.9375rem]">
              {entry.institution}
            </p>
            <p className="text-faint text-[0.875rem]">{entry.location}</p>
          </article>
        ))}

        {certifications.map((cert) => (
          <article
            key={cert.code}
            className="border-border bg-card rounded-xl border p-5 md:col-span-2"
          >
            <span className="text-accent-fg font-mono text-[0.8125rem]">
              {cert.code}
            </span>
            <h3 className="mt-2 font-semibold tracking-tight">{cert.name}</h3>
            <p className="text-muted-foreground mt-1 text-[0.9375rem]">
              {cert.issuer}
            </p>
          </article>
        ))}
      </div>
    </Block>
  );
}
