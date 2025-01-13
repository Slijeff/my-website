import AnimateTextFadeIn from '@/customization/animateTextFadeIn';
import { getAllPostsMeta } from '@/utils/blog';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TagIcon from '@mui/icons-material/Tag';
import { Button, Chip, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default async function TagsPage() {
  const postMeta = await getAllPostsMeta();
  const tags = postMeta.map(post => post.tags).flat();
  const tagCount = new Map<string, number>();
  tags.forEach(tag => {
    if (tagCount.has(tag)) {
      tagCount.set(tag, tagCount.get(tag)! + 1);
    } else {
      tagCount.set(tag, 1);
    }
  });
  return (
    <Stack gap={2}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        href="/blogs"
        sx={{ alignSelf: 'flex-start' }}
      >
        Back to Blogs
      </Button>
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <AnimateTextFadeIn>All Tags</AnimateTextFadeIn>
      </Typography>
      <Typography
        variant="h6"
        color="primary.light"
        fontStyle={'italic'}
        fontWeight="regular"
      >
        <AnimateTextFadeIn>
          Browse through all the tags in my blogs
        </AnimateTextFadeIn>
      </Typography>

      <Stack direction={'column'} gap={2}>
        <Stack direction={'row'} alignItems={'center'}>
          <TagIcon sx={{ fontSize: '24px' }} />
          <Typography variant="h6" fontWeight="bold">
            Available Tags
          </Typography>
        </Stack>
        <Stack gap={1} direction={'row'} flexWrap={'wrap'}>
          {Array.from(tagCount.entries()).map(([tag, count]) => (
            <Chip
              key={tag}
              label={`#${tag} (${count})`}
              clickable
              variant="outlined"
              component={Link}
              href={`/blogs/tag/${tag}`}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
