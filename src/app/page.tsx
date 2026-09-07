import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import Container from "@/components/layout/Container";
import ProjectVisual from "@/components/ProjectVisual";
import { notes } from "@/data/notes";
import { siteUrl } from "@/lib/site";
import {
  approach,
  certifications,
  education,
  experience,
  expertise,
  profile,
  projects,
} from "@/data/portfolio";

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    givenName: "Mohamed Amin",
    familyName: "MAKNI",
    jobTitle: "AI Engineer",
    description: profile.biography,
    address: { "@type": "PostalAddress", addressLocality: "Sfax", addressCountry: "TN" },
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    url: siteUrl,
    image: `${siteUrl}/images/profile.jpg`,
    sameAs: [profile.links.linkedin, profile.links.github],
    alumniOf: education.map((item) => ({
      "@type": "CollegeOrUniversity",
      name: item.institution,
      address: { "@type": "PostalAddress", addressLocality: "Sfax", addressCountry: "TN" },
    })),
    hasCredential: certifications.map((item) => ({
      "@type": "EducationalOccupationalCredential",
      name: item.title,
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: item.issuer },
    })),
    seeks: profile.availability.roles.map((role) => ({
      "@type": "Demand",
      name: role,
      availableAtOrFrom: {
        "@type": "Place",
        address: { "@type": "PostalAddress", addressLocality: "Sfax", addressCountry: "TN" },
      },
    })),
    knowsLanguage: ["Arabic", "English", "French"],
    knowsAbout: [
      "Artificial intelligence",
      "Computer vision",
      "Document intelligence",
      "Optical character recognition",
      "Retrieval-augmented generation",
      "Large language models",
      "Intelligent agents",
      "Model evaluation",
      "Human-in-the-loop systems",
      "Python",
      "FastAPI",
      "Software architecture",
    ],
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${profile.name} — Engineering Portfolio`,
    url: siteUrl,
    mainEntity: personSchema,
  };

  return (
    <main id="main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />

      <section className="hero" id="top">
        <Container className="hero-grid">
          <div className="hero-copy">
            <p className="status-line"><span /> AI Engineer · Software Engineer · Sfax, Tunisia</p>
            <h1>{profile.name}</h1>
            <p className="hero-headline">{profile.headline}</p>
            <p className="hero-value">{profile.valueProposition}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={18} /></a>
              <a className="button button-secondary" href="#contact">Contact me <ArrowRight size={18} /></a>
            </div>
            <div className="hero-meta">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href={profile.links.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <span><MapPin size={17} /> {profile.location}</span>
            </div>
            {profile.availability.open ? (
              <div className="availability-strip" role="status">
                <span className="availability-dot" aria-hidden="true" />
                <div>
                  <b>{profile.availability.status}</b>
                  <span>
                    {profile.availability.roles.slice(0, 3).join(" · ")} —{" "}
                    {profile.availability.arrangements}. {profile.availability.startNote}.
                  </span>
                </div>
              </div>
            ) : null}
            <div className="hero-proof" aria-label="Primary engineering focus">
              <div><span>01</span><b>Applied AI</b><small>Vision · OCR · Evaluation</small></div>
              <div><span>02</span><b>Generative AI</b><small>RAG · LLMs · Agents</small></div>
              <div><span>03</span><b>AI product delivery</b><small>Backend · APIs · MLOps</small></div>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-coordinate">MODEL · DATA · FEEDBACK · DELIVERY</div>
            <div className="portrait-frame">
              <Image src={profile.portrait} alt={`Portrait of ${profile.name}`} fill sizes="(max-width: 760px) 82vw, 390px" priority />
            </div>
            <div className="portrait-label"><span>Focus</span><b>Applied AI<br />& intelligent software</b></div>
          </div>
        </Container>
      </section>

      <section className="section section-rule" id="about">
        <Container className="about-grid">
          <div>
            <p className="eyebrow">01 / Positioning</p>
            <p className="display-statement">Engineering useful AI across <em>models, software, and human workflows.</em></p>
          </div>
          <div className="about-copy">
            <p>{profile.biography}</p>
            <div className="operating-principles">
              <span>Secure by design</span><span>Observable in operation</span><span>Measured by outcomes</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="section muted-section" id="experience">
        <Container>
          <SectionHeading eyebrow="02 / Experience" title="Work shaped by real workflows" description="Selected engagements that demonstrate system ownership, backend delivery, and applied engineering." />
          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="timeline-meta"><p>{item.period}</p><p>{item.location}</p></div>
                <div className="timeline-content">
                  <p className="company">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p className="mission">{item.mission}</p>
                  <ul>{item.highlights.map((highlight) => <li key={highlight}><Check size={15} />{highlight}</li>)}</ul>
                  <div className="tags">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" id="expertise">
        <Container>
          <SectionHeading eyebrow="03 / Expertise" title="A focused engineering toolkit" description="Capabilities are grouped by the systems they help deliver—not presented as an undifferentiated technology wall." />
          <div className="expertise-grid">
            {expertise.map((group, index) => (
              <article className="expertise-card" key={group.title}>
                <div className="card-number">0{index + 1}</div>
                <h3>{group.title}</h3>
                <p>{group.focus}</p>
                <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section projects-section" id="projects">
        <Container>
          <SectionHeading eyebrow="04 / Selected work" title="Proof through engineering decisions" description="Three projects selected for relevance, architectural depth, and available evidence." />
          <div className="projects-list">
            {projects.map((project, index) => (
              <article className={`project-row ${index === 0 ? "project-row-featured" : ""}`} key={project.slug}>
                <div className="project-information">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                  <dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Challenge</dt><dd>{project.challenge}</dd></div></dl>
                  {project.metrics ? (
                    <div className="metric-strip">
                      {project.metrics.slice(0, 3).map((metric) => <div key={metric.label}><b>{metric.value}</b><span>{metric.label}</span></div>)}
                    </div>
                  ) : null}
                  <div className="tags">{project.technologies.slice(0, 6).map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <div className="project-actions">
                    {project.slug === "optiflow-precal-insight" ? (
                      <Link className="text-link" href="/projects/optiflow-precal-insight">View case study <ArrowRight size={17} /></Link>
                    ) : null}
                    {project.links.map((link) => (
                      <a className="text-link" key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={15} /></a>
                    ))}
                  </div>
                </div>
                <ProjectVisual variant={index === 0 ? "optiflow" : index === 1 ? "warehouse" : "classroom"} />
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section approach-section" id="approach">
        <Container>
          <SectionHeading eyebrow="05 / Engineering approach" title="From problem framing to operational feedback" />
          <div className="approach-grid">
            {approach.map(([number, title, detail]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" id="credentials">
        <Container>
          <SectionHeading eyebrow="06 / Credentials" title="Education and verified certifications" />
          <div className="credentials-grid">
            <div>
              <p className="column-label">Education</p>
              {education.map((item) => (
                <article className="credential" key={item.degree}><p>{item.status}</p><h3>{item.degree}</h3><span>{item.institution} · {item.location}</span></article>
              ))}
            </div>
            <div>
              <p className="column-label">Certifications</p>
              {certifications.map((item) => (
                <article className="credential" key={item.title}><p>{item.year}</p><h3>{item.title}</h3><span>{item.issuer} · Score {item.score}</span></article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section muted-section" id="notes">
        <Container>
          <SectionHeading
            eyebrow="07 / Engineering notes"
            title="How I think about building these systems"
            description="Short write-ups on evaluating document-AI pipelines, designing review steps people can use, and what I would do differently next time."
          />
          <div className="notes-teaser">
            {notes.slice(0, 3).map((note) => (
              <article key={note.slug}>
                <div className="note-card-meta">
                  <time dateTime={note.date}>{note.displayDate}</time>
                  <span>{note.readingTime}</span>
                </div>
                <h3>
                  <Link href={`/notes/${note.slug}`}>{note.title}</Link>
                </h3>
                <p>{note.summary}</p>
              </article>
            ))}
          </div>
          <Link className="text-link" href="/notes">
            Read all notes <ArrowRight size={17} />
          </Link>
        </Container>
      </section>

      <section className="contact-section" id="contact">
        <Container className="contact-inner">
          <div><p className="eyebrow">08 / Contact</p><h2>Let’s build systems that are ready to operate.</h2></div>
          <div className="contact-copy">
            <p>For AI engineering, computer vision, RAG, intelligent-agent, backend, or software architecture opportunities, reach me directly.</p>
            <p className="availability-detail">
              <b>{profile.availability.status}:</b> {profile.availability.roles.join(", ")}.{" "}
              {profile.availability.arrangements}. Considering {profile.availability.regions}.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowRight size={22} /></a>
            <div className="contact-links">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} />LinkedIn</a>
              <a href={profile.links.github} target="_blank" rel="noreferrer"><Github size={18} />GitHub</a>
              <span><MapPin size={18} />{profile.location}</span>
            </div>
            <div className="cv-downloads">
              <a className="cv-download" href={profile.cv.path} download><Mail size={17} /><span>Download CV — English</span></a>
              <a className="cv-download" href={profile.cv.frenchPath} download hrefLang="fr"><Mail size={17} /><span>Télécharger le CV — Français</span></a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
