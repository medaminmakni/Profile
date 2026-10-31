# Mohamed Amin MAKNI — Engineering Portfolio

A dark-first, responsive engineering portfolio built with Next.js 16, TypeScript, Tailwind CSS 4, and Lucide icons.

## Positioning

The site presents Mohamed Amin MAKNI as an AI Engineer and Software Engineer focused on computer vision, document intelligence, RAG, LLMs, intelligent agents, backend architecture, and reliable AI delivery. OptiFlow Precal Insight is the primary engineering case study.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Content maintenance

Professional content is centralized in `src/data/portfolio.ts`, including the `availability` block that drives the open-to-work signal in the hero and contact section — set `open: false` to remove it everywhere. Engineering notes live in `src/data/notes.ts` and render at `/notes`; adding an entry there publishes a page and adds it to the sitemap automatically. The social share card is generated at `src/app/opengraph-image.tsx`. Approved CV PDFs are published at `public/Mohamed-Amin-MAKNI-CV.pdf` (English) and `public/Mohamed-Amin-MAKNI-CV-FR.pdf` (French). The `/cv` route redirects to the approved English PDF so it cannot display a different, outdated CV. Replace these two assets when the approved CVs change; keep their URLs stable. OptiFlow case-study details are in `src/data/optiflow.ts`; the project is confidential, so source code, screenshots, implementation artifacts, and demos must remain unpublished.
