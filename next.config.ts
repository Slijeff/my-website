import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrism from 'rehype-prism-plus';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
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
    ];
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      [remarkToc, { ordered: true }],
      remarkFrontmatter,
    ],
    rehypePlugins: [rehypePrism, rehypeAutolinkHeadings],
  },
});

export default withMDX(nextConfig);
