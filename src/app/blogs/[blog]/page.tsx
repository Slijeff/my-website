import { getAllPostsMeta } from '@/utils/blog';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

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

  return (
    <>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        href="/blogs"
        LinkComponent={Link}
        sx={{ alignSelf: 'flex-start' }}
      >
        Back to Blogs
      </Button>
      <BlogPost />{' '}
    </>
  );
}
