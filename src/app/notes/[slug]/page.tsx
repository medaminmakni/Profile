import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { getNote, notes } from "@/data/notes";
import { profile } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";


export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.summary,
    alternates: { canonical: `/notes/${note.slug}` },
    keywords: note.tags,
    openGraph: {
      type: "article",
      url: `/notes/${note.slug}`,
      title: note.title,
      description: note.summary,
      publishedTime: note.date,
      authors: [profile.name],
      tags: [...note.tags],
    },
    twitter: {
      card: "summary_large_image",
      title: note.title,
      description: note.summary,
    },
  };
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const index = notes.findIndex((item) => item.slug === note.slug);
  const next = notes[index + 1] ?? notes[0];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: note.title,
    description: note.summary,
    datePublished: note.date,
    dateModified: note.date,
    keywords: note.tags.join(", "),
    url: `${siteUrl}/notes/${note.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/notes/${note.slug}` },
    author: {
      "@type": "Person",
      name: profile.name,
      url: siteUrl,
      sameAs: [profile.links.linkedin, profile.links.github],
    },
    publisher: { "@type": "Person", name: profile.name, url: siteUrl },
  };

  return (
    <main id="main" className="note-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article>
        <header className="section note-header">
          <Container>
            <Link className="back-link" href="/notes">
              <ArrowLeft size={16} /> All notes
            </Link>
            <div className="note-card-meta">
              <time dateTime={note.date}>{note.displayDate}</time>
              <span>{note.readingTime}</span>
            </div>
            <h1>{note.title}</h1>
            <p className="note-lead">{note.intro}</p>
            <div className="tags">
              {note.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Container>
        </header>

        <div className="section note-body">
          <Container>
            {note.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
            <aside className="note-takeaway">
              <p className="eyebrow">Takeaway</p>
              <p>{note.takeaway}</p>
            </aside>
          </Container>
        </div>

        <footer className="section note-footer">
          <Container>
            <div className="note-footer-inner">
              <div>
                <p className="eyebrow">Next note</p>
                <Link className="text-link" href={`/notes/${next.slug}`}>
                  {next.title} <ArrowRight size={16} />
                </Link>
              </div>
              <div>
                <p className="eyebrow">Work with me</p>
                <a className="text-link" href={`mailto:${profile.email}`}>
                  {profile.email} <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </article>
    </main>
  );
}
