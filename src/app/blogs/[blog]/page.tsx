import { getAllPostsMeta } from '@/utils/blog';

interface Path {
  blog: string;
}

interface StaticParamsWrapper {
  params: Promise<Path>;
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<Path[]> {
  const postMetadata = await getAllPostsMeta();

  const paths = postMetadata.map(post => {
    return {
      blog: post.filename,
    };
  });
  return paths;
}

export default async function BlogPostPage({ params }: StaticParamsWrapper) {
  const { blog } = await params;
  // Why importing the slug as the file name works?
  const { default: BlogPost } = await import(`@/posts/${blog}.mdx`);
  return <BlogPost />;
}
