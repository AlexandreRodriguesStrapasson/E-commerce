import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === 'true'

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: 'export',
    basePath: '/E-commerce',
    images: { unoptimized: true },
  }),
};

export default nextConfig;
