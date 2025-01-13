import { PostMetadata } from '@/types/blog';
import fs from 'fs';

export const slugify = (text: string) => {
  if (typeof text !== 'string') {
    return text;
  }
  return text
    .toLowerCase()
    .replace(/[^\w]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

const calculateReadingTime = (text: string) => {
  const wpm = 200;
  const words = text.trim().split(/\s+/);
  const minutes = Math.ceil(words.length / wpm);
  return minutes === 1 ? `${minutes} minute` : `${minutes} minutes`;
};

export const getAllPostsMeta = async (): Promise<PostMetadata[]> => {
  const posts = fs.readdirSync('./src/posts');

  const allPosts = posts
    .filter(post => post.endsWith('.mdx'))
    .map(async post => {
      const res = await import(`@/posts/${post}`);
      const metadata = res.metadata as Omit<
        PostMetadata,
        'slug' | 'filename' | 'readingTime'
      >;

      const processedMeta: PostMetadata = {
        ...metadata,
        slug: slugify(metadata.title),
        filename: post.replace('.mdx', ''),
        readingTime: calculateReadingTime(
          fs.readFileSync(`./src/posts/${post}`, 'utf-8'),
        ),
      };
      return processedMeta;
    });

  return Promise.all(allPosts);
};

export const filterPostsByTag = (posts: PostMetadata[], tag: string) => {
  return posts.filter(post => post.tags.includes(tag));
};

export function textContent(elem: React.ReactElement | string): string {
  if (!elem) {
    return '';
  }
  if (typeof elem === 'string') {
    return elem;
  }

  if (elem instanceof Array) {
    return elem.map(textContent).join('');
  }

  // @ts-expect-error we cannot determine the type
  const children = elem.props && elem.props.children;
  if (children instanceof Array) {
    return children.map(textContent).join('');
  }
  return textContent(children);
}
