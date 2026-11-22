import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubActions ? "/nastya-lms" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
