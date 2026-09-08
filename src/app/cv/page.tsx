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
    role: "AI & Software Engineer — Graduation Project",
    company: "Essilor SIVO (EssilorLuxottica)",
    period: "Feb – Jul 2026",
    location: "Sfax, Tunisia",
    bullets: [
      "Owned requirements analysis, mobile and backend development, AI architecture, dataset preparation, model evaluation, integration, and quality assurance for confidential PRECAL form processing.",
      "Built a modular pipeline combining YOLO11 field detection, EfficientNetV2-S classification, TrOCR and GLM-OCR recognition, checkbox analysis, RapidFuzz resolution, business rules, and human review.",
      "Reached 92.66% precision, 92.79% recall, and 95.16% mAP@50 for YOLO11 field detection.",
    ],
    stack: "Python · YOLO11 · EfficientNetV2-S · TrOCR · GLM-OCR · RapidFuzz",
  },
  {
    role: "Backend Developer Intern",
    company: "Altavo Partners",
    period: "Jun – Oct 2025",
    location: "Remote · Paris, France",
    bullets: [
      "Developed Node.js API services, PostgreSQL persistence, and Hedera SDK integration for a distributed-ledger platform.",
      "Improved backend reliability through robust endpoints, database-query optimization, and a Docker-based environment.",
    ],
    stack: "Node.js · PostgreSQL · Docker · Hedera SDK · REST APIs",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Infotech Consulting Services (ICS)",
    period: "Jun – Aug 2024",
    location: "Sfax, Tunisia",
    bullets: [
      "Developed Geex administration workflows for university schedules, examinations, students, classes, professors, and resources.",
    ],
    stack: "Laravel · Vue.js · PHP · MySQL",
  },
] as const;

const selectedProjects = [
  {
    title: "SmartWarehouse AI",
    description:
      "Built a logistics platform combining YOLO and Gemini vision, a ChromaDB-backed RAG engine, FastAPI services, inventory workflows, and a Next.js interface.",
    stack: "FastAPI · Next.js · YOLO · Gemini · RAG · ChromaDB · Docker",
  },
  {
    title: "Intelligent Online Classroom",
    description:
      "Created a multimodal learning application with synchronized quiz and webcam data, YOLO-based face detection, expression analysis, and NLP interaction.",
    stack: "Angular · Python · YOLO · TensorFlow · NLP · Computer Vision",
  },
] as const;

const skillGroups = [
  ["AI & computer vision", "Python, PyTorch, TensorFlow, YOLO, OCR, model evaluation"],
  ["Generative AI", "RAG, LLMs, intelligent agents, ChromaDB, grounded workflows"],
  ["Backend & data", "FastAPI, Node.js, REST APIs, PostgreSQL, MySQL, MongoDB"],
  ["Delivery & web", "Docker, Linux, Git, GitHub, TypeScript, Next.js, React"],
] as const;

export default function CvPage() {
  return (
    <main className="cv-page">
      <article className="cv-sheet">
        <header className="cv-header">
          <div>
            <p className="cv-kicker">AI Engineer · Software Engineer</p>
            <h1>{profile.name}</h1>
            <p className="cv-title">Computer Vision · Document Intelligence · RAG & Intelligent Agents</p>
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
              AI Engineer and Software Engineer who builds intelligent applications that have to be
              right in operation, not only in evaluation. I work across the full path—dataset
              preparation, model training and evaluation, backend and API integration, business
              validation rules, and human review paths—so that model output becomes data a business
              can act on. Specialised in computer vision, document intelligence, RAG, and agent systems.
            </p>
            <p className="cv-availability">
              <b>Open to full-time roles:</b> AI Engineer · Applied AI / ML Engineer · Computer Vision
              Engineer · Generative AI Engineer. Remote, hybrid, or relocation. Available immediately.
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
          <h2>Selected AI projects</h2>
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
                <span>Graduated · 18 July 2026</span>
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
            <p>Arabic <b>Native</b> · English <b>Fluent</b> · French <b>Fluent</b> · German <b>Basic proficiency</b></p>
          </section>
        </div>
      </article>
    </main>
  );
}
