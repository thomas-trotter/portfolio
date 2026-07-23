import type { NextConfig } from "next";
import { withBotId } from "botid/next/config";

const isDev = process.argv.indexOf("dev") !== -1;
const isBuild = process.argv.indexOf("build") !== -1;

if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = "1";
  import("velite").then(({ build }) => build({ watch: isDev, clean: !isDev }));
}

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
};

export default withBotId(nextConfig);
