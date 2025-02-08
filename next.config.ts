import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["drive.google.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow images from any domain (or specify exact domains)
      },
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
    ],
  },
};

module.exports = nextConfig;

export default nextConfig;
