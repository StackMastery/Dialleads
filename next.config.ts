import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
