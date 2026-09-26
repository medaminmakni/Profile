export type Link = {
  label: string;
  href: string;
  kind: "github" | "demo" | "linkedin" | "email";
};

export type Metric = {
  label: string;
  value: string;
  note?: string;
};

export type Video = {
  youtubeId: string;
  title: string;
  start?: number;
};

export type Screen = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  role: string;
  challenge: string;
  contribution: string[];
  technologies: string[];
  metrics?: Metric[];
  screens?: Screen[];
  video?: Video;
  links: Link[];
  featured: boolean;
  status: "case-study" | "public-repository" | "project-summary" | "private-repository" | "in-progress";
};

export const profile = {
  name: "Mohamed Amin MAKNI",
  monogram: "MAM",
  headline:
    "AI Engineer building systems that have to be right in operation, not only in evaluation",
  shortHeadline: "AI Engineer · Computer Vision · Document Intelligence · RAG & Agents",
  location: "Sfax, Tunisia",
  email: "mki.medamin@gmail.com",
  phone: "+216 52 855 085",
  portrait: "/images/profile.jpg",
  biography:
    "AI Engineer working across computer vision, document intelligence, RAG and agent systems. I work the full path — dataset preparation, model training and evaluation, backend and API integration, business rules, and the human review paths that catch what the model gets wrong. I also ship complete products: Fytrak is a three-role coaching platform I built end to end, alone.",
  valueProposition:
    "A model that scores well and a system a team can rely on are different things. I build the second, and I test the parts that decide whether it can be trusted.",
  links: {
    linkedin: "https://www.linkedin.com/in/makni-med-amin/",
    github: "https://github.com/medaminmakni",
  },
  cv: {
    available: true,
    path: "/Mohamed-Amin-MAKNI-CV.pdf",
    frenchPath: "/Mohamed-Amin-MAKNI-CV-FR.pdf",
    unavailableLabel: "Updated CV unavailable",
  },
  availability: {
    open: true,
    status: "Open to full-time roles",
    roles: ["AI Engineer", "Applied AI / Machine Learning Engineer"],
    arrangements: "Remote · Hybrid · Open to relocation",
    regions: "Tunisia · European Union · United Kingdom · UAE · Remote",
    startNote: "Available immediately",
  },
} as const;

export const expertise = [
  {
    title: "Applied AI Engineering",
    focus: "Model pipelines designed around measurable application outcomes",
    skills: ["Python", "PyTorch", "TensorFlow", "YOLO", "OCR", "Model evaluation"],
  },
  {
    title: "Generative AI Systems",
    focus: "Grounded AI workflows for retrieval, reasoning, and assistance",
    skills: ["RAG", "LLMs", "Intelligent agents", "Vector search", "Human-in-the-loop"],
  },
  {
    title: "Computer Vision & Documents",
    focus: "Detection, recognition, classification, and validation workflows",
    skills: ["YOLO11", "TrOCR", "GLM-OCR", "EfficientNetV2", "RapidFuzz"],
  },
  {
    title: "Backend & Architecture",
    focus: "Maintainable APIs, services, data flows, and integration boundaries",
    skills: ["FastAPI", "Node.js", "REST APIs", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "AI Software Delivery",
    focus: "Containerized AI services and repeatable engineering workflows",
    skills: ["Docker", "Linux", "Git", "GitHub", "API integration"],
  },
  {
    title: "Full-Stack Engineering",
    focus: "Product interfaces connected to production-oriented services",
    skills: ["Next.js", "React", "Angular", "TypeScript", "WebSocket"],
  },
] as const;

export const experience = [
  {
    role: "AI & Software Engineer — Final-Year Engineering Project",
    company: "Essilor SIVO (EssilorLuxottica)",
    period: "Feb – Jul 2026",
    location: "Sfax, Tunisia",
    mission:
      "Designed and delivered OptiFlow Precal Insight, a mobile and AI workflow for processing PRECAL optical forms.",
    highlights: [
      "Owned requirements analysis, software and AI architecture, mobile and backend implementation, and end-to-end integration.",
      "Built a multi-model document pipeline with confidence scoring, business validation, and human correction loops.",
      "Validated the system through model evaluation and end-to-end human-in-the-loop workflow checks.",
    ],
    technologies: ["YOLO11", "EfficientNetV2-S", "TrOCR", "GLM-OCR", "RapidFuzz"],
  },
  {
    role: "Backend Developer Intern",
    company: "Altavo Partners",
    period: "Jun – Oct 2025",
    location: "Remote · Paris, France",
    mission:
      "Built the bank and arbiter side of Hex-Port, a Hedera trade-finance platform for African exporters, in a team of five.",
    highlights: [
      "The bank service and its REST controllers: KYC review, document validation, dispute handling and order approvals.",
      "The approvals that release escrowed payment in two tranches, on shipment and on delivery.",
      "Cookie-based bank authentication, the order workflow, and the merge of two divergent branches into the build that shipped.",
    ],
    technologies: ["TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Hedera SDK", "Solidity"],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Infotech Consulting Services (ICS)",
    period: "Jun – Aug 2024",
    location: "Sfax, Tunisia",
    mission:
      "Developed features for Geex, a university operations platform covering schedules, examinations, users, and resources.",
    highlights: [
      "Built administration workflows for students, classes, and professors.",
      "Implemented scheduling, examination logistics, and resource-management features.",
    ],
    technologies: ["Laravel", "Vue.js", "PHP", "MySQL"],
  },
] as const;

export const optiFlowMetrics: Metric[] = [
  { label: "Precision", value: "92.66%", note: "YOLO11 field detection" },
  { label: "Recall", value: "92.79%", note: "YOLO11 field detection" },
  { label: "mAP@50", value: "95.16%", note: "Detection evaluation" },
  { label: "mAP@75", value: "68.45%", note: "Detection evaluation" },
  { label: "mAP@50–95", value: "62.69%", note: "Detection evaluation" },
];

export const projects: Project[] = [
  {
    slug: "fytrak",
    title: "Fytrak",
    eyebrow: "Personal project · Shipped solo · Mobile platform",
    summary:
      "A three-role coaching platform — trainee, coach, admin — built end to end on my own: mobile app, admin console, cloud backend.",
    role: "Sole engineer, end to end",
    challenge:
      "Give a coach and their client one place to run a programme together, with an access model strict enough that neither can see what the other should not.",
    contribution: [
      "React Native app for both trainee and coach",
      "Admin web console for coach verification and moderation",
      "Fifteen Cloud Functions: assignment lifecycle, write-time aggregation, scheduled reporting, subscription webhook",
      "698 lines of Firestore security rules, with a test suite that runs them against the emulator",
      "English, French and Arabic including right-to-left layout",
    ],
    technologies: [
      "TypeScript",
      "React Native (Expo)",
      "Firebase",
      "Cloud Functions",
      "Firestore",
      "i18n / RTL",
    ],
    metrics: [
      { label: "Roles", value: "3", note: "Trainee, coach, administrator" },
      { label: "Cloud Functions", value: "15", note: "Callable, triggered, scheduled and webhook" },
      { label: "Security rules", value: "698 lines", note: "Covered by an emulator test suite" },
    ],
    screens: [
      {
        src: "/images/fytrak/today.webp",
        alt: "Fytrak trainee home screen showing a pending coach request and the day's calorie and protein targets",
        caption: "Trainee home — targets, and a coach request still pending",
      },
      {
        src: "/images/fytrak/coach-marketplace.webp",
        alt: "Fytrak coach directory listing coaches with specialisms, ratings and client counts",
        caption: "Trainees browse coaches and send a request",
      },
      {
        src: "/images/fytrak/pr-detected.webp",
        alt: "Fytrak workout logging screen with a personal-record notification derived from the logged sets",
        caption: "A PR is derived from the logged sets, not entered by hand",
      },
      {
        src: "/images/fytrak/meal-log.webp",
        alt: "Fytrak meal search showing Tunisian dishes with Arabic names and calorie values",
        caption: "Meal logging on a Tunisian food database",
      },
      {
        src: "/images/fytrak/coach-assign.webp",
        alt: "Fytrak coach view confirming that a prescribed workout has been assigned to a client's day",
        caption: "Coach side — a prescription lands in the client's day",
      },
      {
        src: "/images/fytrak/coach-daily-report.webp",
        alt: "Fytrak coach reading a client's daily report with nutrition summary and completed session",
        caption: "and the coach reads back what actually happened",
      },
    ],
    links: [
      { label: "Source on GitHub", href: "https://github.com/medaminmakni/Fytrak", kind: "github" },
    ],
    featured: true,
    status: "public-repository",
  },
  {
    slug: "optiflow-precal-insight",
    title: "OptiFlow Precal Insight",
    eyebrow: "Confidential case study · Document intelligence",
    summary:
      "A mobile and AI system that turns photographed PRECAL optical forms into reviewed, business-ready data.",
    role: "End-to-end software and AI engineering",
    challenge:
      "Replace a slow, error-prone manual transcription flow while preserving expert control over uncertain predictions.",
    contribution: [
      "Requirements and architecture",
      "Mobile and backend delivery",
      "Dataset preparation and model evaluation",
      "AI pipeline integration",
      "Testing and quality assurance",
    ],
    technologies: [
      "YOLO11",
      "EfficientNetV2-S",
      "TrOCR",
      "GLM-OCR",
      "RapidFuzz",
      "Human-in-the-loop",
    ],
    metrics: optiFlowMetrics,
    links: [],
    featured: true,
    status: "case-study",
  },
  {
    slug: "hex-port",
    title: "Hex-Port",
    eyebrow: "Altavo Partners · Team of five · Blockchain trade finance",
    summary:
      "A trade-finance platform for African exporters where a bank arbitrates a three-party escrow on Hedera, and every state change is written to an immutable audit trail.",
    role: "Bank and arbiter side, end to end",
    challenge:
      "A buyer will not pay before shipment and a seller will not ship before payment. Put a bank in the middle, and the software has to be trustworthy enough that neither side has to trust the other.",
    contribution: [
      "The bank service: KYC review, document validation, dispute handling, order approvals",
      "Cookie-based bank authentication and its REST controllers",
      "The approvals that release escrowed payment in two tranches, on shipment and on delivery — the functions the Solidity contract gates behind onlyArbiter",
      "Merged two divergent feature branches into the build that shipped",
    ],
    technologies: [
      "TypeScript",
      "Node.js / Express",
      "Prisma",
      "PostgreSQL",
      "Hedera SDK",
      "Solidity",
    ],
    metrics: [
      { label: "Parties", value: "3", note: "Buyer, seller, bank as arbiter" },
      { label: "Release", value: "2 tranches", note: "On shipment, then on delivery" },
      { label: "Audit trail", value: "HCS", note: "Every state change, immutable" },
    ],
    video: {
      youtubeId: "F2wRcFhlHmg",
      title: "Hex-Port demo — Hedera Africa Hackathon",
      start: 14,
    },
    links: [],
    featured: false,
    status: "project-summary",
  },
  {
    slug: "smartwarehouse-ai",
    title: "SmartWarehouse AI",
    eyebrow: "Public repository · RAG & computer vision",
    summary:
      "A logistics platform that combines vehicle-image processing, grounded AI decisions, and warehouse operations.",
    role: "Full-stack and AI engineering",
    challenge:
      "Connect inbound and outbound warehouse workflows to vision, inventory data, and context-aware assistance.",
    contribution: [
      "FastAPI service and Next.js interface",
      "YOLO and Gemini vision workflow",
      "ChromaDB-backed RAG engine",
      "Dockerized MySQL environment",
    ],
    technologies: ["FastAPI", "Next.js", "YOLO", "Gemini", "ChromaDB", "MySQL", "Docker"],
    links: [
      {
        label: "View repository",
        href: "https://github.com/medaminmakni/smartWareHouse",
        kind: "github",
      },
    ],
    featured: true,
    status: "public-repository",
  },
  {
    slug: "orys-ai-layer",
    title: "ORYS — AI layer",
    eyebrow: "Team of 4 · In progress · Agent infrastructure",
    summary:
      "The model and agent layer of a multi-tenant business platform. I am responsible for this layer; the platform is built by a team of four.",
    role: "Responsible for the AI layer",
    challenge:
      "Let an assistant take real actions inside a business system without ever becoming a privileged database user, and without depending on a single model vendor.",
    contribution: [
      "Model-provider abstraction: one interface, two adapters — OpenAI-compatible (Ollama, OpenAI, OpenRouter) and Anthropic Messages",
      "Both adapters derived from the vendors' published SDK types rather than their documentation, which exposed three defects the existing tests all passed — two would have reached production",
      "Agent tools that each wrap one API call as the acting user: no database credential, no SQL, so every action inherits that user's permissions and audit trail",
      "Token and cost accounting normalised across providers",
    ],
    technologies: ["TypeScript", "Anthropic SDK", "OpenAI SDK", "Zod", "Vitest", "NestJS"],
    links: [],
    featured: true,
    status: "in-progress",
  },
  {
    slug: "intelligent-online-classroom",
    title: "Intelligent Online Classroom",
    eyebrow: "Multimodal AI · Learning analytics",
    summary:
      "A multimodal learning system connecting quiz responses, webcam data, facial analysis, and NLP-driven interaction.",
    role: "Full-stack and AI engineering",
    challenge:
      "Synchronize behavioral and textual learning signals while keeping the application workflow secure and usable.",
    contribution: [
      "Interactive Angular learning experience",
      "Synchronized quiz and webcam data collection",
      "YOLO-based face detection",
      "Expression analysis and NLP interaction",
    ],
    technologies: ["Angular", "Python", "YOLO", "TensorFlow", "NLP", "Computer Vision"],
    links: [],
    featured: false,
    status: "project-summary",
  },
];

export const education = [
  {
    degree: "National Engineering Degree in Computer Engineering",
    institution: "International Institute of Technology (IIT)",
    location: "Sfax, Tunisia",
    status: "Software Engineering & Business Intelligence",
  },
  {
    degree: "Preparatory Classes for Engineering Schools",
    institution: "Preparatory Institute for Engineering Studies of Sfax (IPEIS)",
    location: "Sfax, Tunisia",
    status: "Completed · 2021–2023",
  },
] as const;

export const certifications = [
  {
    title: "Information Technology Specialist — Artificial Intelligence",
    issuer: "Certiport",
    year: "14 October 2024",
    score: "889 / 1000",
  },
  {
    title: "Hashgraph Developer",
    issuer: "The Hashgraph Association",
    year: "June 2025",
    score: "",
  },
  {
    title: "Information Technology Specialist — Python",
    issuer: "Certiport",
    year: "27 March 2024",
    score: "880 / 1000",
  },
] as const;

export const approach = [
  ["01", "Frame the problem", "Clarify the workflow, constraints, users, and definition of success."],
  ["02", "Design the system", "Define service boundaries, data paths, security controls, and failure modes."],
  ["03", "Build for delivery", "Implement maintainable services and automate repeatable build and release work."],
  ["04", "Observe and improve", "Validate outcomes, expose useful signals, and iterate from operational feedback."],
] as const;

// Deliberately not rendered. These items require first-party evidence before publication.
export const contentNeeds = [
  "Verified monitoring, observability, and DevSecOps tool names",
  "OptiFlow remains confidential; source code, screenshots, implementation artifacts, and demo links must not be published",
] as const;
