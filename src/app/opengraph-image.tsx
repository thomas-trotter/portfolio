import { ImageResponse } from "next/og";
import { site } from "@/.velite";

export const alt = `${site.name} — ML / Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          background: "#fafaf9",
          color: "#1c1c22",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "#4a5fc1",
              color: "#fafaf9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            TT
          </div>
          <div style={{ fontSize: 42, fontWeight: 700 }}>{site.name}</div>
        </div>
        <div style={{ fontSize: 30, lineHeight: 1.35, maxWidth: 900 }}>
          {site.tagline}
        </div>
      </div>
    ),
    size,
  );
}
