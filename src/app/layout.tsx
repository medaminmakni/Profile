import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { profile } from "@/data/portfolio";
import { siteUrl } from "@/lib/site";
import "./globals.css";



export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | AI Engineer`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Mohamed Amin MAKNI is an AI Engineer in Sfax, Tunisia, building computer-vision, document-intelligence, RAG and LLM agent systems end to end \u2014 from dataset and model evaluation through backend integration and human-in-the-loop delivery. Open to AI engineering roles, remote or relocation.",
  alternates: { canonical: "/" },
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Mohamed Amin MAKNI",
    "Amin Makni AI Engineer",
    "AI Engineer",
    "Applied AI Engineer",
    "Machine Learning Engineer",
    "Computer Vision Engineer",
    "Document Intelligence",
    "Document AI",
    "OCR pipeline",
    "RAG Engineer",
    "LLM Engineer",
    "Intelligent agents",
    "Human-in-the-loop AI",
    "Python FastAPI engineer",
    "AI Engineer Tunisia",
    "AI Engineer remote",
    "Software Engineer Sfax",
  ],
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: `${profile.name} | AI Engineer`,
    description: profile.valueProposition,
    siteName: profile.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | AI Engineer`,
    description: profile.valueProposition,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07111f" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{const t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||((matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark')}catch(e){}`}
        </Script>
        <a className="skip-link" href="#main">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
