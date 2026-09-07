import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import ProjectVisual from "@/components/ProjectVisual";
import { optiFlowMetrics, projects } from "@/data/portfolio";
import { optiFlowChallenges, optiFlowLearnings, optiFlowPipeline } from "@/data/optiflow";

const project = projects[0];

export const metadata: Metadata = {
  title: "OptiFlow Precal Insight Case Study",
  description:
    "Engineering case study for OptiFlow Precal Insight: a multi-model PRECAL form-processing workflow with validation and human review.",
  alternates: { canonical: "/projects/optiflow-precal-insight" },
};

export default function OptiFlowCaseStudy() {
  return (
    <main id="main" className="case-study">
      <section className="case-hero">
        <Container>
          <Link className="back-link" href="/#projects"><ArrowLeft size={16} /> Back to selected work</Link>
          <div className="case-hero-grid">
            <div>
              <p className="eyebrow">Confidential case study / Document intelligence</p>
              <h1>OptiFlow<br />Precal Insight</h1>
              <p className="case-lead">{project.summary}</p>
              <p className="confidential-notice">
                Confidential final-year engineering project delivered at Essilor SIVO
                (EssilorLuxottica), Sfax. Source code, product screenshots, implementation
                artifacts, and demonstrations are not public.
              </p>
              <div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </div>
            <ProjectVisual variant="optiflow" />
          </div>
        </Container>
      </section>

      <section className="section case-overview">
        <Container className="case-overview-grid">
          <div><p className="eyebrow">The business problem</p><h2>Manual transcription created a bottleneck between paper forms and usable data.</h2></div>
          <div>
            <p>PRECAL optical forms contain multiple field types that need to be detected, interpreted, matched to catalogue data, and checked against business rules. The previous workflow depended on manual reading and entry.</p>
            <p>The proposed system captures a form from mobile, routes each region to the right recognition task, pre-fills structured data, and keeps an operator in control whenever confidence or domain rules require review.</p>
          </div>
        </Container>
      </section>

      <section className="section muted-section">
        <Container>
          <div className="case-section-heading"><p className="eyebrow">My role</p><h2>End-to-end ownership across product, software, and AI</h2></div>
          <div className="responsibility-grid">
            {project.contribution.concat(["Human-in-the-loop validation", "Testing and quality assurance"]).map((item, index) => (
              <div key={item}><span>0{index + 1}</span><p>{item}</p></div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="case-section-heading"><p className="eyebrow">System architecture</p><h2>A staged pipeline with explicit review boundaries</h2><p>Each stage has one responsibility, produces inspectable output, and can route uncertainty forward without hiding it.</p></div>
          <div className="pipeline">
            {optiFlowPipeline.map((item) => (
              <article key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><ArrowRight className="pipeline-arrow" size={20} /></article>
            ))}
          </div>
          <div className="architecture-map" aria-label="OptiFlow architecture flow">
            <div><small>INPUT</small><b>Mobile capture</b><span>PRECAL form</span></div>
            <i>→</i>
            <div><small>DETECTION</small><b>YOLO11</b><span>Field regions</span></div>
            <i>→</i>
            <div className="architecture-stack"><small>RECOGNITION</small><b>EfficientNetV2-S</b><b>TrOCR · GLM-OCR</b><b>Checkbox model</b></div>
            <i>→</i>
            <div><small>DECISION</small><b>Rules + RapidFuzz</b><span>Confidence gates</span></div>
            <i>→</i>
            <div><small>OUTPUT</small><b>Reviewed pre-fill</b><span>Feedback memory</span></div>
          </div>
        </Container>
      </section>

      <section className="section results-section">
        <Container>
          <div className="case-section-heading"><p className="eyebrow">Validation</p><h2>Measured at model and workflow level</h2></div>
          <div className="results-grid">
            {optiFlowMetrics.map((metric) => (
              <article key={metric.label}><b>{metric.value}</b><h3>{metric.label}</h3><p>{metric.note}</p></article>
            ))}
          </div>
          <p className="validation-note"><CheckCircle2 size={20} /> The validation program combined detector metrics with end-to-end human-in-the-loop workflow checks.</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="case-section-heading"><p className="eyebrow">Engineering decisions</p><h2>Three decisions that shaped the system</h2></div>
          <div className="challenge-grid">
            {optiFlowChallenges.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="section muted-section">
        <Container className="learning-grid">
          <div><p className="eyebrow">What I learned</p><h2>Good AI engineering is system engineering.</h2></div>
          <ul>{optiFlowLearnings.map((learning) => <li key={learning}><CheckCircle2 size={18} />{learning}</li>)}</ul>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="case-section-heading">
            <p className="eyebrow">Related writing</p>
            <h2>The reasoning behind two of these decisions</h2>
          </div>
          <div className="case-related">
            <Link href="/notes/map50-is-not-a-promise">
              <b>mAP@50 is not a promise: reading detection metrics before you ship</b>
              <span>Why the detector metrics above diverge, and which one predicts the outcome.</span>
            </Link>
            <Link href="/notes/human-in-the-loop-is-a-product-decision">
              <b>Human-in-the-loop is a product decision, not a fallback</b>
              <span>Designing the review step so it is faster than the process it replaced.</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="case-cta"><Container><p>Need an engineer who can connect AI pipelines, backend architecture, and reliable product delivery?</p><a className="button button-primary" href={`mailto:mki.medamin@gmail.com`}>Start a conversation <ArrowRight size={18} /></a></Container></section>
    </main>
  );
}
