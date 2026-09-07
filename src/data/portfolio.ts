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
  links: Link[];
  featured: boolean;
  status: "case-study" | "public-repository" | "project-summary";
};

export const profile = {
  name: "Mohamed Amin MAKNI",
  monogram: "MAM",
  headline:
    "AI Engineer building document intelligence, computer vision, and RAG systems that hold up outside the notebook",
  shortHeadline: "AI Engineer · Computer Vision · Document Intelligence · RAG & Agents",
  location: "Sfax, Tunisia",
  email: "mki.medamin@gmail.com",
  phone: "+216 52 855 085",
  portrait: "/images/profile.jpg",
  biography:
    "AI Engineer and Software Engineer focused on computer vision, document intelligence, RAG, LLMs, and intelligent agents. I design complete AI-enabled applications—from datasets and model evaluation to backend integration, human validation, and reliable delivery.",
  valueProposition:
    "I turn complex AI capabilities into usable software systems—combining model pipelines, backend architecture, business rules, and human feedback around a measurable operational need.",
  links: {
    linkedin: "https://www.linkedin.com/in/makni-med-amin/",
    github: "https://github.com/xAminxxx",
  },
  cv: {
    available: true,
    path: "/Mohamed-Amin-MAKNI-CV.pdf",
    unavailableLabel: "Updated CV unavailable",
  },
  availability: {
    open: true,
    status: "Open to full-time roles",
    roles: [
      "AI Engineer",
      "Applied AI / Machine Learning Engineer",
      "Computer Vision Engineer",
      "Generative AI / RAG Engineer",
    ],
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
    role: "AI & Software Engineering Graduation Project",
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
      "Developed backend services for a Hedera-based platform created in the context of the Hedera Africa Hackathon.",
    highlights: [
      "Implemented API services and integrated the Hedera SDK.",
      "Worked with PostgreSQL persistence and Docker-based environments.",
    ],
    technologies: ["Node.js", "PostgreSQL", "Docker", "Hedera SDK"],
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
        href: "https://github.com/xAminxxx/smartWareHouse",
        kind: "github",
      },
    ],
    featured: true,
    status: "public-repository",
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
    featured: true,
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
    degree: "Engineering Preparatory Program",
    institution: "Engineering Preparatory Institute of Sfax (IPEIS)",
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
