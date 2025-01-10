import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  async rewrites() {
    return [
      {
        source: '/:code',
        destination: '/redirect',
      },
    ];
  },
};

export default nextConfig;
