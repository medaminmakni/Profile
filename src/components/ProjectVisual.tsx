type ProjectVisualProps = {
  variant: "optiflow" | "warehouse" | "classroom" | "agent" | "escrow";
};

export default function ProjectVisual({ variant }: ProjectVisualProps) {
  if (variant === "optiflow") {
    return (
      <div className="project-visual optiflow-visual" aria-label="OptiFlow processing pipeline illustration" role="img">
        <div className="form-sheet">
          <span className="sheet-line wide" />
          <span className="sheet-line" />
          <span className="sheet-box active" />
          <span className="sheet-box" />
          <span className="sheet-box" />
        </div>
        <div className="scan-line" />
        <div className="model-node">AI</div>
        <div className="confidence-card"><b>95.16%</b><span>mAP@50</span></div>
      </div>
    );
  }

  if (variant === "escrow") {
    return (
      <div className="project-visual escrow-visual" aria-label="Three-party escrow illustration" role="img">
        <svg viewBox="0 0 420 220" aria-hidden="true">
          <path d="M96 60H324M96 160H324M210 60V160" />
          <rect x="60" y="40" width="72" height="40" rx="6" />
          <rect x="288" y="40" width="72" height="40" rx="6" />
          <rect x="174" y="92" width="72" height="40" rx="6" />
          <rect x="60" y="140" width="72" height="40" rx="6" />
          <rect x="288" y="140" width="72" height="40" rx="6" />
        </svg>
        <span className="ledger-label">ARBITER RELEASES</span>
      </div>
    );
  }

  if (variant === "agent") {
    return (
      <div className="project-visual agent-visual" aria-label="Model provider abstraction illustration" role="img">
        <svg viewBox="0 0 420 220" aria-hidden="true">
          <path d="M40 110H130M290 74H380M290 146H380" />
          <rect x="130" y="72" width="160" height="76" rx="8" />
          <path d="M210 72V148M170 92h80M170 128h80" />
        </svg>
        <span className="ledger-label">ONE INTERFACE · TWO ADAPTERS</span>
      </div>
    );
  }

  if (variant === "warehouse") {
    return (
      <div className="project-visual warehouse-visual" aria-label="Smart warehouse system illustration" role="img">
        <div className="warehouse-grid">
          {["CAM", "API", "RAG", "DB"].map((label) => <span key={label}>{label}</span>)}
        </div>
        <svg viewBox="0 0 420 220" aria-hidden="true">
          <path d="M80 65H180M240 65H340M210 95V155M80 175H180M240 175H340" />
        </svg>
      </div>
    );
  }

  return (
    <div className="project-visual classroom-visual" aria-label="Multimodal classroom AI illustration" role="img">
      <svg viewBox="0 0 420 220" aria-hidden="true">
        <path d="M66 50H178V144H66ZM242 50H354V144H242ZM122 144V182M298 144V182M122 182H298M178 97H242" />
        <circle cx="122" cy="87" r="22" />
        <circle cx="298" cy="87" r="22" />
        <path d="M108 87h28M284 87h28M122 73v28M298 73v28" />
      </svg>
      <span className="ledger-label">VISION + NLP</span>
    </div>
  );
}
