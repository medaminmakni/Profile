import { ImageResponse } from "next/og";

export const alt = "Mohamed Amin MAKNI — AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #07111f 0%, #0d1e33 55%, #102a44 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#38bdf8",
              display: "flex",
            }}
          />
          <div style={{ color: "#7dd3fc", fontSize: 26, letterSpacing: 6, display: "flex" }}>
            AI ENGINEER · SOFTWARE ENGINEER
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ color: "#f8fafc", fontSize: 82, fontWeight: 700, lineHeight: 1.05, display: "flex" }}>
            Mohamed Amin MAKNI
          </div>
          <div style={{ color: "#cbd5e1", fontSize: 34, lineHeight: 1.35, display: "flex", maxWidth: 900 }}>
            Document intelligence, computer vision, and RAG systems built to run in production.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(148,163,184,0.28)",
            paddingTop: 28,
            color: "#94a3b8",
            fontSize: 25,
          }}
        >
          <div style={{ display: "flex" }}>med-amin-makni.vercel.app</div>
          <div style={{ display: "flex" }}>Sfax, Tunisia · Open to opportunities</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
