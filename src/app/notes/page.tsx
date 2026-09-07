import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { notes } from "@/data/notes";
import { profile } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engineering notes",
  description:
    "Notes on document intelligence, computer-vision evaluation, human-in-the-loop design, and retrieval-augmented generation, written by Mohamed Amin MAKNI.",
  alternates: { canonical: "/notes" },
  openGraph: {
    type: "website",
    url: "/notes",
    title: `Engineering notes | ${profile.name}`,
    description:
      "Notes on document intelligence, computer-vision evaluation, human-in-the-loop design, and retrieval-augmented generation.",
    // A child route's openGraph replaces the parent's, so the generated card
    // has to be named again here or the page ships with no og:image.
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Engineering notes | ${profile.name}`,
    description:
      "Notes on document intelligence, computer-vision evaluation, human-in-the-loop design, and retrieval-augmented generation.",
    images: ["/opengraph-image"],
  },
};

export default function NotesIndexPage() {
  const listSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Engineering notes — ${profile.name}`,
    url: `${siteUrl}/notes`,
    author: { "@type": "Person", name: profile.name },
    blogPost: notes.map((note) => ({
      "@type": "BlogPosting",
      headline: note.title,
      description: note.summary,
      datePublished: note.date,
      url: `${siteUrl}/notes/${note.slug}`,
    })),
  };

  return (
    <main id="main" className="notes-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
      <section className="section notes-hero">
        <Container>
          <p className="eyebrow">Engineering notes</p>
          <h1>Working notes on building AI systems that have to be right</h1>
          <p className="notes-lead">
            Short, specific write-ups from the systems I build: how I evaluate document-AI
            pipelines, how I design review steps that people can actually use, and what I got
            wrong the first time.
          </p>
        </Container>
      </section>

      <section className="section notes-list-section">
        <Container>
          <div className="notes-list">
            {notes.map((note) => (
              <article className="note-card" key={note.slug}>
                <div className="note-card-meta">
                  <time dateTime={note.date}>{note.displayDate}</time>
                  <span>{note.readingTime}</span>
                </div>
                <h2>
                  <Link href={`/notes/${note.slug}`}>{note.title}</Link>
                </h2>
                <p>{note.summary}</p>
                <div className="tags">
                  {note.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Link className="text-link" href={`/notes/${note.slug}`}>
                  Read the note <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
