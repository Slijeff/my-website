import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  // distDir: "build",
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ['@emotion/react', '@emotion/styled'],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
