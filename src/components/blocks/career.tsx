import { Reveal } from "@/components/common/reveal";
import { Panel } from "@/components/common/panel";
import { CareerEntry } from "./career-entry";
import { experience } from "@/content/resume";

export function Career() {
  return (
    <Panel
      id="work"
      kicker="Work"
      title="Where I&rsquo;ve worked."
      lead="Enterprise tooling, ed-tech, energy services and healthcare. The work below spans frontend workflows, backend services, integrations and the release validation that decides whether any of it reaches a customer."
    >
      <div className="grid gap-5">
        {experience.map((role, index) => (
          <Reveal key={role.company} delay={index * 60}>
            <CareerEntry role={role} />
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
