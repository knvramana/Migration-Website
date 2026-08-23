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

export interface Highlight {
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
  summary: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
}

export const experience: Role[] = [
  {
    company: "IBM Canada",
    title: "Software Developer",
    team: "Engineering Lifecycle Management (ELM)",
    location: "Canada",
    start: "2025-01",
    end: "Present",
    period: "Jan 2025 – Present",
    featured: true,
    summary:
      "Building and stabilising Rhapsody Model Manager and IBM ELM for Fortune 500 engineering teams, shipping customer-facing fixes across the full request path and coordinating what goes into each interim-fix release.",
    highlights: [
      "Engineered full-stack enterprise features across RMM and IBM ELM: REST/OSLC service layers, Dojo-based web UI workflows, persistent data models and cross-application integration flows used by Fortune 500 engineering teams.",
      "Resolved 15+ customer-reported production defects spanning indexing, linking, permissions, configuration contexts and cross-application integration, improving platform reliability and reducing recurring validation issues.",
      "Coordinated iFix release readiness for IBM ELM interim-fix deliveries, tracking 15+ candidate defects across validation, backport decisions and release scope to ensure on-time delivery to enterprise customers.",
      "Increased regression coverage by 15–20% for impacted backend-service and integration components using JUnit and Mockito, strengthening defect validation before iFix and final-build gates.",
      "Accelerated root-cause analysis for complex enterprise issues by correlating server logs, REST/OSLC traces, database records, validation reports and HAR files across frontend, backend, persistence and integration layers.",
      "Provided code reviews and technical walkthroughs for teammates, and worked with QA, L2 support and release managers to communicate technical risk within sprint timelines.",
    ],
    stack: [
      "Java",
      "REST / OSLC",
      "React",
      "Dojo",
      "JUnit",
      "Mockito",
      "DB2",
      "Agile",
    ],
  },
  {
    company: "CognitiveBotics",
    title: "Software Developer",
    team: "Ed-tech platform for special-needs education",
    location: "Hyderabad, India",
    start: "2022-03",
    end: "2022-08",
    period: "Mar 2022 – Aug 2022",
    summary:
      "Shipped end-to-end features for a learning platform serving special-needs education, from reusable React components through Django REST APIs to the persistence layer.",
    highlights: [
      "Delivered end-to-end full-stack features across React, Python/Django REST APIs and MongoDB, including a real-time dashboard giving educators live visibility into student learning activity via WebSocket-driven updates.",
      "Cut dashboard response time by ~35% through Redis caching, query optimisation, lazy loading, code splitting and API response compression, reducing repeated data-fetching overhead across data-heavy workflows.",
      "Built 10+ reusable React components with Zustand/Redux state management and shipped 5+ Django REST endpoints with request validation, structured error handling and consistent response formatting.",
      "Containerised application components with Docker and validated frontend/API behaviour with Git, Postman, React DevTools and browser debugging during Agile sprint delivery.",
    ],
    stack: [
      "React",
      "Django",
      "MongoDB",
      "Redis",
      "WebSockets",
      "Zustand",
      "Docker",
    ],
  },
  {
    company: "Wipro",
    title: "Project Engineer",
    location: "Hyderabad, India",
    start: "2021-03",
    end: "2022-01",
    period: "Mar 2021 – Jan 2022",
    summary:
      "Built and hardened Java Spring Boot services integrating with OSI PI real-time process data for enterprise operations.",
    highlights: [
      "Developed and maintained Java Spring Boot services and REST APIs integrating with OSI PI (PI System) real-time data feeds, supporting enterprise process-data workflows and system integrations across business operations.",
      "Improved OSI PI data-integration stability by debugging data-sync issues and delivering targeted fixes, reducing recurring stability incidents by ~25%.",
      "Resolved 20+ production defects and release issues by analysing logs and validating API behaviour across environments, delivering hotfixes that cut turnaround time on customer-impacting tickets by ~30%.",
      "Partnered with business analysts and QA to translate requirements into scalable, maintainable backend solutions, following Git-based workflows, code reviews and Agile delivery practices.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "OSI PI", "SQL", "Agile"],
  },
  {
    company: "LVPEI, Centre for Innovation",
    title: "Software Developer",
    location: "Hyderabad, India",
    start: "2020-01",
    end: "2021-03",
    period: "Jan 2020 – Mar 2021",
    summary:
      "Backend APIs and workflow automation for patient care, EMR and clinical data at a leading eye-care institute, built with data privacy as a first constraint.",
    highlights: [
      "Built backend APIs and workflow automation for patient care management, EMR and clinical data workflows at a leading eye-care institute, with strong attention to data privacy and reliability.",
      "Integrated a payment gateway into patient billing workflows, processing ₹25L+ in secure patient payments during the initial rollout period.",
      "Developed a digital patient ID system that cut average check-in processing time by ~50%, reducing manual verification steps and improving front-desk throughput across clinics.",
      "Integrated backend services with EMR application databases and external systems for dependable data retrieval, processing and reporting across clinical operations.",
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
  | "server"
  | "layout"
  | "database"
  | "cloud"
  | "code"
  | "flask"
  | "network"
  | "chart"
  | "brain";

export interface SkillGroup {
  title: string;
  icon: SkillIcon;
  /**
   * What this group is actually used for. A bare tag list says nothing a
   * hundred other portfolios don't; the line of context is what makes it
   * readable as experience rather than as keywords.
   */
  context: string;
  items: string[];
  /** Tailwind span classes for the bento grid. */
  span: string;
  featured?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    icon: "server",
    featured: true,
    context:
      "Service layers and APIs that other teams build against, including the OSLC surface behind IBM ELM.",
    span: "md:col-span-6 lg:col-span-7",
    items: [
      "Java",
      "Spring Boot",
      "Python / Django",
      "Node.js",
      "Express.js",
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
    context:
      "Product workflows, not landing pages: long-lived UI in React and Dojo where state and permissions matter.",
    span: "md:col-span-6 lg:col-span-5",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Angular",
      "Redux",
      "Zustand",
      "Tailwind",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Databases & Data Systems",
    icon: "database",
    context:
      "Relational, document and real-time process data, including OSI PI feeds at Wipro.",
    span: "md:col-span-3 lg:col-span-4",
    items: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "DB2",
      "Derby",
      "MongoDB",
      "OSI PI",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    context:
      "Containerised delivery and CI/CD pipelines. Azure certified (DP-203).",
    span: "md:col-span-3 lg:col-span-4",
    items: [
      "Azure (DP-203)",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    title: "Languages",
    icon: "code",
    context: "Java and Python daily; TypeScript across the frontend work.",
    span: "md:col-span-3 lg:col-span-4",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Testing & Tooling",
    icon: "flask",
    context:
      "Regression coverage that gates a release, not tests written after the fact.",
    span: "md:col-span-3 lg:col-span-4",
    items: [
      "JUnit",
      "Mockito",
      "Jest",
      "Postman",
      "Git / GitHub",
      "Agile / Scrum",
      "Code Reviews",
    ],
  },
  {
    title: "Machine Learning",
    icon: "brain",
    context:
      "Applied work from my own projects: NLP and knowledge-graph retrieval, and image classification in PyTorch.",
    span: "md:col-span-6 lg:col-span-4",
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
  {
    title: "Platform",
    icon: "network",
    context:
      "Reasoning about distributed systems well enough to find the defect in them.",
    span: "md:col-span-6 lg:col-span-4",
    items: [
      "System Design",
      "Distributed Systems",
      "Microservices",
      "Caching Strategies",
      "Performance Optimisation",
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
    period: "2022 – 2024",
  },
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Geethanjali College of Engineering and Technology",
    location: "Hyderabad, India",
    period: "2016 – 2020",
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
 * What a hiring manager can scan in five seconds. Every tile traces to a
 * specific bullet in the experience above, nothing rounded up for effect.
 *
 * Deliberately no defect count: the same work covers Sev cases and new
 * releases, so a tally of "defects fixed" describes the job badly.
 */
export interface Outcomes {
  value: string;
  label: string;
  context: string;
}

export const impact: Outcomes[] = [
  {
    value: "Fortune 500",
    label: "Engineering teams served",
    context: "IBM ELM and Rhapsody Model Manager",
  },
  {
    value: "~35%",
    label: "Faster dashboard response",
    context: "Redis caching, query optimisation and code splitting",
  },
  {
    value: "~30%",
    label: "Faster hotfix turnaround",
    context: "Log analysis and cross-environment validation at Wipro",
  },
  {
    value: "~25%",
    label: "Fewer stability incidents",
    context: "OSI PI data-sync debugging and targeted fixes at Wipro",
  },
];

export const about = {
  paragraphs: [
    "I build and stabilise software across frontend workflows, backend services, API integrations, persistence layers and release validation. My work at IBM centres on Engineering Lifecycle Management, where I debug distributed enterprise systems, coordinate interim-fix readiness and ship customer-facing fixes under sprint timelines.",
    "Before IBM I shipped product across ed-tech, energy services and healthcare: a real-time dashboard for educators, Spring Boot services reading live OSI PI process data, and a payment gateway inside clinical billing at an eye-care institute.",
    "What I care about is the unglamorous part: the defect that turns out to be three layers below where it surfaced, and the fix that actually reaches production and holds up.",
  ],
  facts: [
    { label: "Based in", value: "Toronto, Canada" },
    {
      label: "Education",
      value: "Master of Applied Computer Science, Concordia University",
    },
    { label: "Certified", value: "Azure Data Engineer (DP-203)" },
  ],
} as const;

/* -------------------------------------------------------------------------- */

/** A dated line per turning point, with the city so the path is visible. */
export interface BioEntry {
  year: string;
  text: string;
  place: string;
  /** True on the first entry in a new city — draws the place marker. */
  moved?: boolean;
}

export const bio: BioEntry[] = [
  {
    year: "2016",
    place: "Hyderabad, India",
    moved: true,
    text: "Began a B.Tech in Computer Science and Engineering at Geethanjali College.",
  },
  {
    year: "2020",
    place: "Hyderabad, India",
    text: "Graduated, and joined LVPEI Centre for Innovation building backend APIs for clinical and EMR workflows.",
  },
  {
    year: "2021",
    place: "Hyderabad, India",
    text: "Joined Wipro as a Project Engineer on Spring Boot services reading live OSI PI process data.",
  },
  {
    year: "2022",
    place: "Montreal, Canada",
    moved: true,
    text: "Moved to Montreal for a Master of Applied Computer Science at Concordia University.",
  },
  {
    year: "2024",
    place: "Montreal, Canada",
    text: "Completed the Master of Applied Computer Science and became Microsoft Certified: Azure Data Engineer Associate.",
  },
  {
    year: "2025",
    place: "Toronto, Canada",
    moved: true,
    text: "Joined IBM Canada in January, working on Engineering Lifecycle Management from Toronto.",
  },
];
  {
    year: "2022",
    place: "Hyderabad, India",
    text: "Shipped an ed-tech platform for special-needs education at CognitiveBotics.",
  },
