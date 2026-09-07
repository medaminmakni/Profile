import type { MetadataRoute } from "next";
import { notes } from "@/data/notes";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteUrl}/projects/optiflow-precal-insight`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${siteUrl}/notes`, changeFrequency: "weekly", priority: 0.7 },
    ...notes.map((note) => ({
      url: `${siteUrl}/notes/${note.slug}`,
      lastModified: new Date(note.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
