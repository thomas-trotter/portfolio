import { ImageResponse } from "next/og";

type IconSize = { width: number; height: number };

export function createBrandIcon(size: IconSize, fontSize: number) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4a5fc1",
          color: "#fafaf9",
          fontSize,
          fontWeight: 700,
          borderRadius: "50%",
        }}
      >
        TT
      </div>
    ),
    size,
  );
}
