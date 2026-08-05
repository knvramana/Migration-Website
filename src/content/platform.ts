/**
 * The stack, drawn top to bottom.
 *
 * The point a skills list cannot make: these are not four separate
 * competencies, they are one request path, and the same person works every
 * layer of it. That is the full-stack claim as a picture.
 */

export type Involvement = "owned" | "debugged";

export const involvementLabels: Record<Involvement, string> = {
  owned: "Built & owned",
  debugged: "Debugged & fixed",
};

export interface Layer {
  name: string;
  description: string;
  tech: string[];
  involvement: Involvement;
}

export const productLayers: Layer[] = [
  {
    name: "Web UI",
    description:
      "Product workflows used daily by Fortune 500 engineering teams — long-lived interfaces where state, permissions and configuration context all matter.",
    tech: ["React", "Dojo", "TypeScript", "Redux"],
    involvement: "owned",
  },
  {
    name: "Services",
    description:
      "The REST and OSLC service layers behind those workflows, plus the regression coverage that gates a release.",
    tech: ["Java", "Spring Boot", "REST", "OSLC", "JUnit", "Mockito"],
    involvement: "owned",
  },
  {
    name: "Persistence & indexing",
    description:
      "Model storage, configuration contexts and the indexing flows that make any of it queryable at scale.",
    tech: ["DB2", "Derby", "PostgreSQL", "MongoDB", "Indexing"],
    involvement: "debugged",
  },
  {
    name: "Integration",
    description:
      "Cross-application links and feeds between products — where most customer-reported defects actually live, and the hardest layer to reason about.",
    tech: ["TRS feeds", "Cross-app links", "Permissions", "OSI PI"],
    involvement: "debugged",
  },
];

export const architectureMeta = {
  eyebrow: "Stack",
  title: "One request path, every layer.",
  lead: "Most of my work is not confined to one tier. A customer-reported defect starts as a UI symptom, resolves to a service call, and is usually caused three layers down — so the job is being able to follow it the whole way.",
} as const;
