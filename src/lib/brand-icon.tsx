import { ImageResponse } from "next/og";

type IconSize = { width: number; height: number };

const BRAND_COLOR = "#4a5fc1";
const BRAND_TEXT_COLOR = "#fafaf9";
const BRAND_INITIALS = "TT";

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
          background: BRAND_COLOR,
          color: BRAND_TEXT_COLOR,
          fontSize,
          fontWeight: 700,
          borderRadius: "50%",
        }}
      >
        {BRAND_INITIALS}
      </div>
    ),
    size,
  );
}
