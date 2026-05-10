import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/E-commerce',
  images: { unoptimized: true },
};

export default nextConfig;
