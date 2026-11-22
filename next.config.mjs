const isGithubActions = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGithubActions ? "/nastya-lms" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
