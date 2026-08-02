/**
 * The signature element of the site: one request travelling through the
 * agentic layer built at IBM.
 *
 * This is an illustration of the architecture, not a live model — the section
 * says so on the page. Every stage names the real technology that handles it,
 * because the point is to show the seams a hiring manager cares about: where
 * the model stops guessing and starts calling tools, and where the answer
 * gets tied back to records that actually exist.
 */

export type PayloadKind = "prose" | "json" | "http" | "answer";

export interface TraceStep {
  /** Order carries meaning here — a request genuinely moves through these. */
  id: string;
  label: string;
  /** Where this happens in the stack. */
  layer: string;
  headline: string;
  detail: string;
  payloadKind: PayloadKind;
  payload: string;
}

export const traceSteps: TraceStep[] = [
  {
    id: "ask",
    label: "Ask",
    layer: "React / Dojo UI in RMM",
    headline: "A question in plain English",
    detail:
      "The engineer never leaves the product. No query language, no report builder — the request goes in the way they would say it out loud.",
    payloadKind: "prose",
    payload: `Which requirements changed since the 7.0.3 baseline,
and which of them have no linked test case?`,
  },
  {
    id: "plan",
    label: "Plan",
    layer: "IBM watsonx Granite",
    headline: "The model picks tools, not answers",
    detail:
      "The system prompt gives the model the tool schemas the MCP server advertises and a hard constraint: it may not answer from recall. It can only decide which tools to call and in what order.",
    payloadKind: "prose",
    payload: `Needs two lookups, second depends on the first.

  1. rmm.query_requirements   → changed since baseline
  2. rmm.expand_links         → validatedBy, per requirement

No tool covers "has no test case" directly,
so that is derived after step 2.`,
  },
  {
    id: "call",
    label: "Tool call",
    layer: "MCP server",
    headline: "A typed, validated tool call",
    detail:
      "This is the contract I extended — RMM and ELM capabilities exposed as agent-callable tools. The schema constrains the arguments, so a malformed or out-of-scope call fails here rather than reaching the product.",
    payloadKind: "json",
    payload: `{
  "tool": "rmm.query_requirements",
  "arguments": {
    "configuration": "7.0.3",
    "changedSince": "2026-05-01",
    "expand": ["links.validatedBy"],
    "limit": 200
  }
}`,
  },
  {
    id: "execute",
    label: "Execute",
    layer: "ELM REST / OSLC services",
    headline: "Real services, real permissions",
    detail:
      "The tool resolves to an OSLC query against live ELM data, running as the signed-in user. Configuration context and access control are enforced by the platform, not by the prompt.",
    payloadKind: "http",
    payload: `GET /rm/oslc/queries?oslc.where=
      dcterms:modified>"2026-05-01"
  &oslc.select=dcterms:identifier,oslc_rm:validatedBy
  &oslc.configurationContext=stream:7.0.3

200 OK · 24 requirements · 61 link records · 340ms`,
  },
  {
    id: "ground",
    label: "Ground",
    layer: "Back to the UI",
    headline: "An answer that cites its records",
    detail:
      "Every claim maps to an identifier the engineer can open. If a tool returns nothing, the answer says so — the failure mode is an empty result, not a confident invention.",
    payloadKind: "answer",
    payload: `24 requirements changed since the 7.0.3 baseline.
19 have a linked test case. 5 do not:

  REQ-4471  Session timeout on federated login
  REQ-4488  Baseline compare across streams
  REQ-4502  TRS feed re-index on rename
  REQ-4510  OSLC link validity after merge
  REQ-4533  Permission check on config switch`,
  },
];

export const traceMeta = {
  eyebrow: "Agentic AI",
  title: "Anatomy of a tool call.",
  lead: "The prototype I built at IBM lets engineers ask Rhapsody Model Manager a question in plain English and get an answer grounded in live records. Here is one request moving through it.",
  disclaimer:
    "An illustration of the architecture I built — the payloads are representative, not a live model.",
} as const;
