import { ImageResponse } from "next/og";

import { site } from "@/content/site";

export const alt = `${site.name} | ${site.role}`;
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
        backgroundColor: "#fdfdfc",
        backgroundImage:
          "radial-gradient(900px 520px at 15% 0%, rgba(168,69,43,0.10), transparent 70%)",
        color: "#21201c",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#a8452b",
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
            color: "#5f5e58",
            // The card is 1200 wide with 80px side padding, so 1040 is the
            // content box. Anything less orphans the last word of the line.
            maxWidth: 1040,
          }}
        >
          Enterprise systems at IBM · REST/OSLC · Java · Python · React
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
          {["#a8452b", "#0f6e62", "#8a5a16", "#43458f"].map((color) => (
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
        <div style={{ fontSize: 24, color: "#5f5e58" }}>
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    </div>,
    size,
  );
}
