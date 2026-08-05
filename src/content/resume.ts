/**
 * Single typed source of truth for all résumé content.
 *
 * Reconciled from the three résumé versions in the repo root, with the most
 * recent taken as canonical; the bachelor's degree comes from the legacy
 * site, which is the only source that carries it.
 *
 * Scope note: this site covers shipped, customer-facing work only. Internal
 * prototypes and unreleased evaluations are deliberately not described here.
 */

export interface Role {
  company: string;
  title: string;
  team?: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experience: Role[] = [
  {
    company: "IBM Canada",
    title: "Software Developer",
    team: "Engineering Lifecycle Management",
    location: "Canada",
    period: "Jan 2025 — Present",
    summary:
      "Building and stabilising Rhapsody Model Manager and IBM ELM for Fortune 500 engineering teams — shipping customer-facing fixes across the full request path and coordinating what goes into each interim-fix release.",
    highlights: [
      "Engineered full-stack enterprise features across RMM and IBM ELM — REST/OSLC service layers, Dojo web UI workflows, persistent data models and cross-application integration flows.",
      "Resolved 15+ customer-reported production defects spanning indexing, linking, permissions and configuration contexts, reducing recurring validation issues.",
      "Coordinated iFix release readiness, tracking 15+ candidate defects across validation, backport decisions and release scope for on-time delivery to enterprise customers.",
      "Raised regression coverage 15–20% on impacted backend-service and integration components with JUnit and Mockito, tightening the gate before final build.",
      "Cut root-cause time on cross-layer defects by correlating server logs, REST/OSLC traces, database records and HAR files rather than bisecting blind.",
    ],
    stack: ["Java", "REST / OSLC", "React", "Dojo", "JUnit", "Mockito", "DB2"],
  },
  {
    company: "CognitiveBotics",
    title: "Software Developer",
    team: "Ed-tech platform for special-needs education",
    location: "Hyderabad, India",
    period: "Mar 2022 — Aug 2022",
    summary:
      "Shipped end-to-end features for a learning platform serving special-needs education, from reusable React components through Django REST APIs to the persistence layer.",
    highlights: [
      "Built a real-time dashboard giving educators live visibility into student learning activity over WebSocket-driven updates.",
      "Cut dashboard response time ~35% through Redis caching, query optimisation, lazy loading, code splitting and response compression.",
      "Shipped 10+ reusable React components with Zustand/Redux state and 5+ Django REST endpoints with request validation and consistent error handling.",
      "Containerised the application with Docker and validated frontend/API behaviour across Agile sprint delivery.",
    ],
    stack: ["React", "Django", "MongoDB", "Redis", "WebSockets", "Docker"],
  },
  {
    company: "Wipro",
    title: "Project Engineer",
    location: "Hyderabad, India",
    period: "Mar 2021 — Jan 2022",
    summary:
      "Built and hardened Java Spring Boot services integrating with OSI PI real-time process data for enterprise operations.",
    highlights: [
      "Developed Spring Boot services and REST APIs against OSI PI real-time data feeds supporting enterprise process-data workflows.",
      "Reduced recurring OSI PI data-sync stability incidents ~25% by tracing and fixing the underlying integration faults.",
      "Resolved 20+ production defects and cut turnaround on customer-impacting tickets ~30% through log analysis and cross-environment API validation.",
      "Worked with business analysts and QA to turn requirements into maintainable backend solutions under Git-based review.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "OSI PI", "SQL", "Agile"],
  },
  {
    company: "LVPEI — Centre for Innovation",
    title: "Software Developer",
    location: "Hyderabad, India",
    period: "Jan 2020 — Mar 2021",
    summary:
      "Backend APIs and workflow automation for patient care, EMR and clinical data at a leading eye-care institute, built with data privacy as a first constraint.",
    highlights: [
      "Built backend APIs and workflow automation for patient care management, EMR and clinical data workflows.",
      "Integrated a payment gateway into patient billing, processing ₹25L+ in secure payments during the initial rollout.",
      "Shipped a digital patient ID system that cut average check-in processing ~50% by removing manual verification steps.",
      "Integrated backend services with EMR databases and external systems for dependable retrieval and reporting.",
    ],
    stack: ["Backend APIs", "EMR", "SQL", "Payment Gateway", "Automation"],
  },
];

/* -------------------------------------------------------------------------- */

/**
 * Grouped by domain with a line of context each, rather than a wall of tag
 * pills. The context line is what makes a group readable as experience
 * instead of as keywords.
 */
export interface SkillGroup {
  title: string;
  context: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & APIs",
    context:
      "Service layers other teams build against, including the REST/OSLC surface behind IBM ELM.",
    items: [
      "Java",
      "Spring Boot",
      "Python / Django",
      "Node.js",
      "Express",
      "REST",
      "OSLC",
      "Microservices",
      "WebSockets",
      "Celery",
    ],
  },
  {
    title: "Frontend",
    context:
      "Product workflows rather than landing pages — long-lived UI where state, permissions and configuration context matter.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Dojo",
      "Angular",
      "Redux",
      "Zustand",
      "Tailwind",
    ],
  },
  {
    title: "Data & Persistence",
    context:
      "Relational, document and real-time process data, plus the indexing that makes it queryable at scale.",
    items: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "DB2",
      "Derby",
      "MongoDB",
      "OSI PI",
      "Redis",
    ],
  },
  {
    title: "Cloud & Delivery",
    context:
      "Containerised delivery and the pipelines around it. Microsoft Certified: Azure Data Engineer Associate.",
    items: [
      "Azure",
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
    title: "Testing & Quality",
    context:
      "Regression coverage that gates a release, not tests written after the fact.",
    items: [
      "JUnit",
      "Mockito",
      "Jest",
      "Postman",
      "Code review",
      "Agile / Scrum",
    ],
  },
  {
    title: "Machine Learning",
    context:
      "Applied work from my own projects — retrieval grounded in a knowledge graph, and image classification.",
    items: [
      "PyTorch",
      "NLP",
      "Knowledge Graphs",
      "SPARQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
];

/* -------------------------------------------------------------------------- */

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export const education: Education[] = [
  {
    degree: "Master of Applied Computer Science",
    institution: "Concordia University",
    location: "Montreal, Canada",
    period: "2022 — 2024",
  },
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Geethanjali College of Engineering and Technology",
    location: "Hyderabad, India",
    period: "2016 — 2020",
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
 * Scannable outcomes. Where the résumé supports a before/after the shape is
 * kept, because a delta is far more credible than a bare figure.
 */
export interface Impact {
  value: string;
  label: string;
  context: string;
}

export const impact: Impact[] = [
  {
    value: "15+",
    label: "Production defects resolved",
    context:
      "Indexing, linking, permissions and configuration contexts, IBM ELM",
  },
  {
    value: "+15–20%",
    label: "Regression coverage",
    context: "JUnit and Mockito across backend service and integration layers",
  },
  {
    value: "~35%",
    label: "Faster dashboard response",
    context: "Redis caching, query optimisation and code splitting",
  },
  {
    value: "₹25L+",
    label: "Patient payments processed",
    context: "Payment gateway integrated into clinical billing at LVPEI",
  },
];

export const about = {
  paragraphs: [
    "I work on enterprise systems — the kind with a decade of history, real customers waiting on a fix, and a defect that never surfaces where it was caused. At IBM I build and stabilise Engineering Lifecycle Management: REST and OSLC services, the web workflows on top of them, and the release validation that decides whether a fix actually ships.",
    "Before that I shipped product across ed-tech, energy services and healthcare — a real-time dashboard for educators, Spring Boot services reading live OSI PI process data, and a payment gateway inside clinical billing at an eye-care institute. Four years, four domains, and the same lesson each time: the interesting part is the constraint, not the framework.",
  ],
} as const;
