import Image from "next/image";

import { Reveal } from "@/components/common/reveal";
import { Panel } from "@/components/common/panel";
import { about } from "@/content/resume";

export function Profile() {
  return (
    <Panel
      id="about"
      kicker="About"
      title="Full-stack engineer for enterprise products."
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-4">
          <div className="bg-card shadow-raised overflow-hidden rounded-xl">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Ramana Koduri"
              width={901}
              height={1309}
              sizes="(max-width: 1024px) 100vw, 380px"
              className="aspect-4/5 w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-8">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 80}>
              <p className="text-foreground/85 mb-5 text-lg leading-[1.75] text-pretty">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={240}>
            <dl className="border-border mt-9 grid gap-px overflow-hidden rounded-xl border sm:grid-cols-3">
              {about.facts.map((fact) => (
                <div key={fact.label} className="bg-card px-5 py-4">
                  <dt className="text-muted-foreground font-mono text-[0.7rem] tracking-[0.12em] uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Panel>
  );
}
