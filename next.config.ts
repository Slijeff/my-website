import createMDX from '@next/mdx';
import { NextConfig } from 'next';
const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'standalone',
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
      {
        source: '/archive',
        destination: '/archive/0',
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      'remark-gfm',
      ['remark-toc', { ordered: true }],
      'remark-frontmatter',
    ],
    rehypePlugins: ['rehype-prism-plus', 'rehype-autolink-headings'],
  },
});

export default withMDX(nextConfig);
