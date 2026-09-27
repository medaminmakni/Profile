import type { Metadata } from "next";
import { certifications, education, profile } from "@/data/portfolio";
import { siteDomain, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Professional CV",
  description: `Professional CV of ${profile.name}, AI Engineer.`,
  robots: { index: false, follow: false },
};

const experiences = [
  {
    role: "AI & Software Engineer — Final-Year Engineering Project",
    company: "Essilor SIVO (EssilorLuxottica)",
    period: "Feb – Jul 2026",
    location: "Sfax, Tunisia",
    bullets: [
      "Built a document-intelligence pipeline that reads the confidential PRECAL forms, now deployed at SIVO: YOLO11 object detection, EfficientNetV2-S classification, TrOCR and GLM-OCR text recognition, business rules and human review.",
      "Owned it from requirements to backend integration, including the confidence threshold below which a form goes to a person rather than automatic processing. Detection reached 95.16% mAP@50.",
    ],
    stack: "Python · YOLO11 · EfficientNetV2-S · TrOCR · GLM-OCR · RapidFuzz",
  },
  {
    role: "Backend Developer Intern",
    company: "Altavo Partners",
    period: "Jul – Aug 2025",
    location: "Remote · Paris, France",
    bullets: [
      "Built the bank/arbiter side of Hex-Port, a Hedera trade-finance platform for African exporters: KYC review, document validation, disputes, bank authentication and the approvals releasing escrowed payment on shipment then delivery.",
      "Every order state change is written to a Hedera consensus topic, so the audit trail is verifiable rather than asserted.",
    ],
    stack: "TypeScript · Node.js · Express · Prisma · PostgreSQL · Hedera SDK · Solidity",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Infotech Consulting Services (ICS)",
    period: "Jul – Aug 2024",
    location: "Sfax, Tunisia",
    bullets: [
      "Built REST endpoints for the examinations and teaching-assignment side of a university administration platform — exam sessions, invigilation, teacher workload and timetables, student enrolment — and wrote the API documentation the team integrated against.",
    ],
    stack: "Laravel · Vue.js · PHP · MySQL",
  },
] as const;

const selectedProjects = [
  {
    title: "Fytrak — Coaching Platform",
    description:
      "Three-role platform (trainee, coach, admin) built end to end, solo: React Native app, admin console, and a Cloud Functions backend covering coach assignment, write-time aggregation and scheduled reporting. EN/FR/AR with RTL. The Firestore security rules have their own test suite running against the emulator.",
    stack: "TypeScript · React Native (Expo) · Firebase · Cloud Functions · i18n",
  },
  {
    title: "ORYS — Business Management Platform",
    description:
      "Multi-tenant SaaS for small companies — invoicing, stock, clients, staff. Building its AI layer in a team of four: agents that act as the signed-in user, holding no database credential and inheriting that user's permissions, behind one provider interface with OpenAI and Anthropic adapters.",
    stack: "TypeScript · Anthropic & OpenAI SDKs · Zod · Vitest",
  },
  {
    title: "SmartWarehouse AI",
    description:
      "Logistics agent deciding gate assignment from plate recognition, with the facts it queries in SQL and the rules it follows in vector retrieval — so a policy change is a document edit, not a redeploy.",
    stack: "FastAPI · Next.js · ChromaDB · YOLO · RAG · Docker",
  },
] as const;

const skillGroups = [
  ["Machine learning", "Python, PyTorch, TensorFlow, deep learning, pandas, scikit-learn, NumPy"],
  ["Computer vision", "YOLO11, EfficientNetV2, OCR, TrOCR, object detection"],
  ["Generative AI & NLP", "Natural language processing (NLP), LLMs, RAG, AI agents, transformers, ChromaDB, vector databases"],
  ["Backend & cloud", "Google Cloud (Firebase, Cloud Functions, Firestore), FastAPI, Node.js, REST APIs, SQL, PostgreSQL, MySQL, MongoDB"],
  ["Delivery & web", "Docker, Git, CI/CD, Agile/Scrum, TypeScript, Next.js, React, React Native"],
] as const;

export default function CvPage() {
  return (
    <main className="cv-page">
      <article className="cv-sheet">
        <header className="cv-header">
          <div>
            <p className="cv-kicker">AI Engineer · Software Engineer</p>
            <h1>{profile.name}</h1>
            <p className="cv-title">Computer Vision · Document Intelligence · RAG & Agent Systems</p>
          </div>
          <address>
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replaceAll(" ", "")}`}>{profile.phone}</a>
            <a href={siteUrl}>{siteDomain}</a>
            <a href={profile.links.linkedin}>linkedin.com/in/makni-med-amin</a>
            <a href={profile.links.github}>github.com/medaminmakni</a>
          </address>
        </header>

        <section className="cv-summary">
          <h2>Profile</h2>
          <div>
            <p>
              AI Engineer building systems that have to be right in operation, not only in
              evaluation. Computer vision and document intelligence in Python and PyTorch; LLM, RAG
              and agent systems on FastAPI backends. I work the full path — dataset preparation,
              model evaluation, backend integration, business rules, and the human review paths that
              catch what the model misses.
            </p>
            <p className="cv-availability">
              <b>Open to:</b> AI Engineer · Applied AI / Machine Learning Engineer. Based in Sfax —
              open to Tunis, remote, or relocation. Available immediately.
            </p>
          </div>
        </section>

        <section className="cv-section">
          <h2>Professional experience</h2>
          <div className="cv-experience-list">
            {experiences.map((item) => (
              <article className="cv-experience" key={`${item.company}-${item.role}`}>
                <div className="cv-experience-heading">
                  <div><h3>{item.role}</h3><p>{item.company}</p></div>
                  <div className="cv-date"><b>{item.period}</b><span>{item.location}</span></div>
                </div>
                <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                <p className="cv-tech">{item.stack}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cv-section cv-projects-section">
          <h2>Selected projects</h2>
          <div className="cv-projects-grid">
            {selectedProjects.map((project) => (
              <article key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.stack}</span>
              </article>
            ))}
          </div>
        </section>

        <div className="cv-columns cv-lower-columns">
          <section className="cv-section">
            <h2>Technical skills</h2>
            <dl className="cv-skills">
              {skillGroups.map(([label, skills]) => <div key={label}><dt>{label}</dt><dd>{skills}</dd></div>)}
            </dl>
          </section>

          <section className="cv-section">
            <h2>Education</h2>
            <div className="cv-education">
              <article>
                <h3>National Engineering Degree in Computer Engineering</h3>
                <p>Software Engineering & Business Intelligence</p>
                <p>{education[0].institution}</p>
                <span>Graduated July 2026</span>
              </article>
              <article>
                <h3>Engineering Preparatory Program</h3>
                <p>{education[1].institution}</p>
                <span>2021–2023</span>
              </article>
            </div>
          </section>
        </div>

        <div className="cv-footer-grid">
          <section className="cv-section cv-certifications">
            <h2>Certifications</h2>
            <div>
              {certifications.map((item) => (
                <article key={item.title}><h3>{item.title}</h3><p>{item.issuer} · {item.year}{item.score ? ` · ${item.score}` : ""}</p></article>
              ))}
            </div>
          </section>
          <section className="cv-section cv-languages">
            <h2>Languages</h2>
            <p>Arabic <b>Native</b> · English <b>Fluent</b> · French <b>Fluent</b> · German <b>Basic</b></p>
          </section>
        </div>
      </article>
    </main>
  );
}
