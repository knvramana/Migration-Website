import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";
import { ExperienceCard } from "./experience-card";
import { experience } from "@/content/resume";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Four years of shipping software that had to hold up."
      lead="Enterprise tooling, ed-tech, energy services and healthcare — the work below spans frontend workflows, backend services, integrations and the release validation that decides whether any of it reaches a customer."
    >
      <div className="grid gap-5">
        {experience.map((role, index) => (
          <Reveal key={role.company} delay={index * 60}>
            <ExperienceCard role={role} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
