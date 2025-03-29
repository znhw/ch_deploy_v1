import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Forces static HTML export
  trailingSlash: true, // Ensures proper routing
};

export default nextConfig;
