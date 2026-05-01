import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shreevishnudiagnostics.com",
        pathname: "/assets/imgs/**",
      },
    ],
    qualities: [75, 85, 100],
  },
};

export default nextConfig;
