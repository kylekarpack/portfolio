import { withRedact } from "@tanstack/redact/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withRedact(nextConfig);
