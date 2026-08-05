import type { Accent } from "./resume";

/**
 * The stack behind the agentic work, drawn as one system.
 *
 * The point this makes that a skills list cannot: the LLM layer did not
 * replace the enterprise product, it sits on top of it across a protocol
 * boundary — and the same person works on both sides of that boundary.
 * That is the whole "full-stack + AI" claim, in one picture.
 */

export type Involvement = "built" | "extended" | "owned" | "debugged";

export const involvementLabels: Record<Involvement, string> = {
  built: "Built",
  extended: "Extended",
  owned: "Built & owned",
  debugged: "Debugged & fixed",
};

export interface Layer {
  name: string;
  description: string;
  tech: string[];
  involvement: Involvement;
  accent: Accent;
}

/** Above the protocol boundary — the part that did not exist before. */
export const agenticLayer: Layer = {
  name: "Agentic layer",
  description:
    "Natural-language interface over the product. Plans which tools to call, sequences them, and refuses to answer from model recall.",
  tech: [
    "IBM watsonx Granite",
    "Prompt design",
    "Tool schemas",
    "Orchestration",
  ],
  involvement: "built",
  accent: "indigo",
};

/** The seam itself — the reason the two halves can talk. */
export const boundary = {
  name: "Model Context Protocol",
  description:
    "The contract between them. Product capabilities exposed as agent-callable tools, with schema validation and the signed-in user's permissions carried through.",
  involvement: "extended" as Involvement,
};

/** Below the boundary — the enterprise product that was already there. */
export const productLayers: Layer[] = [
  {
    name: "Web UI",
    description:
      "Rhapsody Model Manager workflows used by Fortune 500 engineering teams.",
    tech: ["React", "Dojo", "TypeScript"],
    involvement: "owned",
    accent: "rust",
  },
  {
    name: "Services",
    description:
      "REST and OSLC service layers — the API surface the tools ultimately resolve to.",
    tech: ["Java", "REST", "OSLC", "JUnit"],
    involvement: "owned",
    accent: "rust",
  },
  {
    name: "Persistence & indexing",
    description:
      "Model store, configuration contexts and the indexing flows that make any of it queryable.",
    tech: ["Model store", "Indexing", "DB2", "Derby"],
    involvement: "debugged",
    accent: "teal",
  },
  {
    name: "Integration",
    description:
      "TRS feeds and cross-application links between ELM products — where most production defects actually live.",
    tech: ["TRS feeds", "Cross-app links", "Permissions"],
    involvement: "debugged",
    accent: "amber",
  },
];

export const architectureMeta = {
  eyebrow: "Architecture",
  title: "One system, both sides of the boundary.",
  lead: "The AI layer did not replace the product — it sits on top of it, across a protocol. I work on both sides: the tools and orchestration above the line, and the services, data and integrations below it.",
} as const;
