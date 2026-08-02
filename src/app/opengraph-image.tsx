import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Uses next/og's built-in font rather than loading a TTF from disk — one less
 * file-tracing dependency to break on Vercel, and this card is all Latin text.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        backgroundColor: "#111827",
        backgroundImage:
          "radial-gradient(1000px 600px at 20% 0%, rgba(36,87,214,0.45), transparent 70%)",
        color: "white",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#2dd4bf",
          }}
        >
          {site.role}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -3,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 32,
            lineHeight: 1.35,
            color: "rgba(255,255,255,0.78)",
            maxWidth: 900,
          }}
        >
          Enterprise systems at IBM ELM · Agentic AI with MCP and watsonx
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          {["#2457d6", "#0d9488", "#b7791f", "#6d5bd0"].map((color) => (
            <div
              key={color}
              style={{
                width: 72,
                height: 8,
                borderRadius: 4,
                backgroundColor: color,
              }}
            />
          ))}
        </div>
        <div style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    </div>,
    size,
  );
}
