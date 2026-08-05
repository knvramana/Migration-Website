import { Block } from "@/components/common/block";
import { certifications, education } from "@/content/resume";

/** Two rows and a certification line. Not two cards. */
export function Education() {
  return (
    <Block id="education" title="Education">
      <div className="rows">
        {education.map((entry) => (
          <div key={entry.degree} className="py-4 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-foreground font-medium">{entry.degree}</h3>
              <time className="text-faint text-[0.8125rem] whitespace-nowrap">
                {entry.period}
              </time>
            </div>
            <p className="text-muted-foreground mt-1 text-[0.9375rem]">
              {entry.institution} · {entry.location}
            </p>
          </div>
        ))}

        {certifications.map((cert) => (
          <div key={cert.code} className="py-4 last:pb-0">
            <h3 className="text-foreground font-medium">{cert.name}</h3>
            <p className="text-muted-foreground mt-1 text-[0.9375rem]">
              {cert.issuer} · {cert.code}
            </p>
          </div>
        ))}
      </div>
    </Block>
  );
}
