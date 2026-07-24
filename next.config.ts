import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

function bootstrapVelite() {
  if (process.env.VELITE_STARTED) {
    return;
  }

  const isDev = process.argv.includes("dev");
  const isBuild = process.argv.includes("build");
  if (!isDev && !isBuild) {
    return;
  }

  process.env.VELITE_STARTED = "1";

  void import("velite").then(({ build }) => {
    void build({ watch: isDev, clean: !isDev });
  });
}

bootstrapVelite();

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
};

export default withBotId(nextConfig);
