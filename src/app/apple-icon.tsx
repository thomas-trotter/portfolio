import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 72,
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
