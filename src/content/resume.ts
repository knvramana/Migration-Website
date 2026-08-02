/**
 * Single typed source of truth for all résumé content.
 *
 * Reconciled once, here, from the three résumé versions in the repo root.
 * RamanaKoduri_Resume.pdf (Jul 2026) is canonical where they disagree; the
 * bachelor's degree comes from the legacy site, which is the only source
 * that carries it.
 */

export type Accent = "blue" | "teal" | "gold" | "violet";

/**
 * Highlights are grouped so the two pillars are *visible* rather than
 * asserted. "ai" and "platform" render as separate labelled clusters inside
 * the same role; "core" renders unlabelled for roles with a single thrust.
 */
export type HighlightGroup = "ai" | "platform" | "core";

export interface Highlight {
  group: HighlightGroup;
  text: string;
}

export interface Role {
  company: string;
  title: string;
  team?: string;
  location: string;
  start: string;
  end: string;
  period: string;
  accent: Accent;
  summary: string;
  highlights: Highlight[];
  stack: string[];
  featured?: boolean;
}

export const groupLabels: Record<HighlightGroup, string> = {
  ai: "AI & Agentic Engineering",
  platform: "Platform & Delivery",
  core: "Highlights",
};

export const experience: Role[] = [
  {
    company: "IBM Canada",
    title: "Software Developer",
    team: "Engineering Lifecycle Management (ELM)",
    location: "Canada",
    start: "2025-01",
    end: "Present",
    period: "Jan 2025 — Present",
    accent: "blue",
    featured: true,
    summary:
      "Building and stabilising Rhapsody Model Manager and IBM ELM for Fortune 500 engineering teams, while prototyping the agentic AI layer that lets those users talk to their data in natural language.",
    highlights: [
      {
        group: "ai",
        text: "Built a full-stack agentic AI prototype integrating Large Language Models (IBM watsonx Granite) into the RMM web UI, using Model Context Protocol tool calls to retrieve and ground responses in live RMM/ELM data — spanning React/Dojo frontend, backend orchestration, prompt design and end-to-end request/response handling. Demoed to engineering leadership.",
      },
      {
        group: "ai",
        text: "Extended and modified Model Context Protocol servers to expose RMM/ELM capabilities as agent-callable tools, enabling natural-language, retrieval-grounded interaction with structured enterprise data, services and workflows.",
      },
      {
        group: "ai",
        text: "Designed and iterated on prompts, tool schemas and orchestration logic for AI-assisted workflow generation — evaluating model outputs, refining system prompts, sequencing tool calls and validating responses against domain constraints.",
      },
      {
        group: "ai",
        text: "Provided informal code reviews and technical mentoring for teammates, including architecture walkthroughs of the MCP/agentic prototype to support broader team adoption of AI-assisted development patterns.",
      },
      {
        group: "platform",
        text: "Engineered full-stack enterprise features across RMM and IBM ELM — REST/OSLC service layers, Dojo-based web UI workflows, persistent data models and cross-application integration flows used by Fortune 500 engineering teams.",
      },
      {
        group: "platform",
        text: "Coordinated iFix release readiness for IBM ELM interim-fix deliveries, tracking 15+ candidate defects across validation, backport decisions and release scope to ensure on-time delivery to enterprise customers.",
      },
      {
        group: "platform",
        text: "Resolved 15+ customer-reported production defects spanning indexing, linking, permissions, configuration contexts and cross-application integration, improving platform reliability and reducing recurring validation issues.",
      },
      {
        group: "platform",
        text: "Increased regression coverage by 15–20% for impacted backend-service and integration components using JUnit and Mockito, strengthening defect validation before iFix and final-build gates.",
      },
      {
        group: "platform",
        text: "Accelerated root-cause analysis for complex enterprise issues by correlating server logs, REST/OSLC traces, database records, validation reports and HAR files across frontend, backend, persistence and integration layers.",
      },
    ],
    stack: [
      "Java",
      "REST / OSLC",
      "MCP",
      "watsonx Granite",
      "React",
      "Dojo",
      "JUnit",
      "Mockito",
    ],
  },
  {
    company: "CognitiveBotics",
    title: "Software Developer",
    team: "Ed-tech platform for special-needs education",
    location: "Hyderabad, India",
    start: "2022-03",
    end: "2022-08",
    period: "Mar 2022 — Aug 2022",
    accent: "teal",
    summary:
      "Shipped end-to-end features for a learning platform serving special-needs education, from reusable React components through Django REST APIs to the persistence layer.",
    highlights: [
      {
        group: "core",
        text: "Delivered end-to-end full-stack features across React, Python/Django REST APIs and MongoDB — including a real-time dashboard giving educators live visibility into student learning activity via WebSocket-driven updates.",
      },
      {
        group: "core",
        text: "Cut dashboard response time by ~35% through Redis caching, query optimisation, lazy loading, code splitting and API response compression, reducing repeated data-fetching overhead across data-heavy workflows.",
      },
      {
        group: "core",
        text: "Built 10+ reusable React components with Zustand/Redux state management and shipped 5+ Django REST endpoints with request validation, structured error handling and consistent response formatting.",
      },
      {
        group: "core",
        text: "Containerised application components with Docker and validated frontend/API behaviour with Git, Postman, React DevTools and browser debugging during Agile sprint delivery.",
      },
    ],
    stack: [
      "React",
      "Django",
      "MongoDB",
      "Redis",
      "WebSockets",
      "Zustand",
      "Redux",
      "Docker",
    ],
  },
  {
    company: "Wipro",
    title: "Project Engineer",
    location: "Hyderabad, India",
    start: "2021-03",
    end: "2022-01",
    period: "Mar 2021 — Jan 2022",
    accent: "gold",
    summary:
      "Built and hardened Java Spring Boot services integrating with OSI PI real-time process data for enterprise operations.",
    highlights: [
      {
        group: "core",
        text: "Developed and maintained Java Spring Boot services and REST APIs integrating with OSI PI (PI System) real-time data feeds, supporting enterprise process-data workflows and system integrations across business operations.",
      },
      {
        group: "core",
        text: "Improved OSI PI data-integration stability by debugging data-sync issues and delivering targeted fixes, reducing recurring stability incidents by ~25%.",
      },
      {
        group: "core",
        text: "Resolved 20+ production defects and release issues by analysing logs and validating API behaviour across environments, delivering hotfixes that cut turnaround time on customer-impacting tickets by ~30%.",
      },
      {
        group: "core",
        text: "Partnered with business analysts and QA to translate requirements into scalable, maintainable backend solutions, following Git-based workflows, code reviews and Agile delivery practices.",
      },
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "OSI PI", "SQL", "Agile"],
  },
  {
    company: "LVPEI — Centre for Innovation",
    title: "Software Developer",
    location: "Hyderabad, India",
    start: "2020-01",
    end: "2021-03",
    period: "Jan 2020 — Mar 2021",
    accent: "violet",
    summary:
      "Backend APIs and workflow automation for patient care, EMR and clinical data at a leading eye-care institute, built with data privacy as a first constraint.",
    highlights: [
      {
        group: "core",
        text: "Built backend APIs and workflow automation for patient care management, EMR and clinical data workflows at a leading eye-care institute, with strong attention to data privacy and reliability.",
      },
      {
        group: "core",
        text: "Integrated a payment gateway into patient billing workflows, processing ₹25L+ in secure patient payments during the initial rollout period.",
      },
      {
        group: "core",
        text: "Developed a digital patient ID system that cut average check-in processing time by ~50%, reducing manual verification steps and improving front-desk throughput across clinics.",
      },
      {
        group: "core",
        text: "Integrated backend services with EMR application databases and external systems for dependable data retrieval, processing and reporting across clinical operations.",
      },
    ],
    stack: [
      "Backend APIs",
      "EMR",
      "SQL",
      "Payment Gateway",
      "Workflow Automation",
    ],
  },
];

/* -------------------------------------------------------------------------- */

export type SkillIcon =
  | "brain"
  | "server"
  | "layout"
  | "database"
  | "cloud"
  | "code"
  | "flask"
  | "network"
  | "chart";

export interface SkillGroup {
  title: string;
  icon: SkillIcon;
  items: string[];
  /** Tailwind span classes for the bento grid. */
  span: string;
  /** Pulls the AI cell forward visually. */
  featured?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & LLM Engineering",
    icon: "brain",
    featured: true,
    span: "md:col-span-6 lg:col-span-7 lg:row-span-2",
    items: [
      "LLM Integration (watsonx Granite, Claude, OpenAI)",
      "Model Context Protocol (MCP) Servers",
      "Tool-Based Retrieval-Grounded Workflows",
      "Agentic Workflows",
      "Prompt Engineering",
      "LLM Orchestration",
      "Tool / Function Calling",
      "GitHub Copilot",
      "IBM Bob",
    ],
  },
  {
    title: "Backend",
    icon: "server",
    span: "md:col-span-6 lg:col-span-5",
    items: [
      "Python / Django",
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "OSLC",
      "Microservices",
      "WebSockets",
      "Celery",
      "Redis",
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    span: "md:col-span-6 lg:col-span-5",
    items: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "Redux",
      "Zustand",
      "Tailwind",
      "Dojo",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Databases & Data Systems",
    icon: "database",
    span: "md:col-span-3 lg:col-span-4",
    items: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "DB2",
      "Derby",
      "MongoDB",
      "OSI PI (PI System)",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    span: "md:col-span-3 lg:col-span-4",
    items: [
      "Azure (DP-203 certified)",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    title: "Languages",
    icon: "code",
    span: "md:col-span-3 lg:col-span-4",
    items: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    title: "Testing & Tools",
    icon: "flask",
    span: "md:col-span-3 lg:col-span-4",
    items: [
      "JUnit",
      "Mockito",
      "Jest",
      "Postman",
      "Git / GitHub",
      "Agile / Scrum",
      "Code Reviews & Mentoring",
    ],
  },
  {
    title: "Data & ML",
    icon: "chart",
    span: "md:col-span-3 lg:col-span-4",
    items: ["Pandas", "NumPy", "Scikit-learn", "Data Analysis"],
  },
  {
    title: "Architecture",
    icon: "network",
    span: "md:col-span-6 lg:col-span-4",
    items: [
      "System Design",
      "Distributed Systems",
      "Microservices",
      "Caching Strategies",
      "Performance Optimisation",
      "Scalable Web Applications",
    ],
  },
];

/* -------------------------------------------------------------------------- */

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  accent: Accent;
}

export const education: Education[] = [
  {
    degree: "Master of Applied Computer Science",
    institution: "Concordia University",
    location: "Montreal, Canada",
    period: "2022 — 2024",
    accent: "violet",
  },
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Geethanjali College of Engineering and Technology",
    location: "Hyderabad, India",
    period: "2016 — 2020",
    accent: "blue",
  },
];

export interface Certification {
  name: string;
  issuer: string;
  code: string;
}

export const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure Data Engineer Associate",
    issuer: "Microsoft",
    code: "DP-203",
  },
];

/* -------------------------------------------------------------------------- */

/**
 * Numbers a hiring manager can scan in five seconds. Every one traces to a
 * specific bullet in the experience below — nothing rounded up for effect.
 */
export interface Impact {
  value: string;
  label: string;
  context: string;
  accent: Accent;
}

export const impact: Impact[] = [
  {
    value: "15+",
    label: "Production defects resolved",
    context:
      "Indexing, linking, permissions and config contexts across IBM ELM",
    accent: "blue",
  },
  {
    value: "15–20%",
    label: "Regression coverage added",
    context: "JUnit and Mockito on backend service and integration components",
    accent: "teal",
  },
  {
    value: "~35%",
    label: "Faster dashboard response",
    context: "Redis caching, query optimisation and code splitting",
    accent: "gold",
  },
  {
    value: "₹25L+",
    label: "Patient payments processed",
    context: "Payment gateway integrated into clinical billing at LVPEI",
    accent: "violet",
  },
];

export const about = {
  paragraphs: [
    "I build and stabilise software across frontend workflows, backend services, API integrations, persistence layers and release validation. My work at IBM centres on Engineering Lifecycle Management, where I debug distributed enterprise systems, coordinate interim-fix readiness and ship customer-facing fixes under sprint timelines.",
    "Alongside that, I build the agentic AI layer for those same products — integrating watsonx Granite through Model Context Protocol servers so engineers can query live enterprise data in natural language, with responses grounded in real tool calls rather than model recall.",
    "I have shipped product across enterprise tooling, ed-tech, energy services and healthcare, and I care most about the unglamorous part: the fix that actually reaches production and holds up.",
  ],
  facts: [
    { label: "Based in", value: "Toronto, Canada" },
    { label: "Education", value: "M.ACS, Concordia University" },
    { label: "Certified", value: "Azure Data Engineer (DP-203)" },
  ],
} as const;
