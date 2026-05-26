import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Roy Bar — Frontend & Full-Stack Developer";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(60% 50% at 20% 0%, rgba(34,211,238,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 80% 10%, rgba(168,85,247,0.35) 0%, transparent 60%), #07070a",
          color: "#ededf2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#22d3ee",
            fontSize: 24,
            fontFamily: "monospace",
          }}
        >
          {"</> roy.bar"}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
            }}
          >
            Roy Bar
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              color: "#9a9aa8",
              letterSpacing: -1,
            }}
          >
            Frontend & Full-Stack Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#9a9aa8",
            fontSize: 22,
            fontFamily: "monospace",
          }}
        >
          <span>React · Next.js · TypeScript</span>
          <span>roy-bar-dev.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
