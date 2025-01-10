import { filterPostsByTag, getAllPostsMeta } from '@/utils/blog';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import Grid from '@mui/material/Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AnimateTextFadeIn from '@/customization/animateTextFadeIn';

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams(): Promise<{ tag: string }[]> {
  const postMeta = await getAllPostsMeta();
  const tags = postMeta.map(post => post.tags).flat();
  return tags.map(tag => ({ tag }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = await getAllPostsMeta();
  const filteredPosts = filterPostsByTag(posts, tag);

  return (
    <Stack gap={2}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        href="/blogs"
        LinkComponent={Link}
        sx={{ alignSelf: 'flex-start' }}
      >
        Back to Blogs
      </Button>
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <AnimateTextFadeIn>{`#${tag}`}</AnimateTextFadeIn>
      </Typography>
      <Typography
        variant="h6"
        color="primary.light"
        fontStyle={'italic'}
        fontWeight="regular"
      >
        <AnimateTextFadeIn>
          {`Showing all items tagged with #${tag}`}
        </AnimateTextFadeIn>
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Stack gap={2}>
            {filteredPosts.map(post => (
              <Card
                key={post.slug}
                variant="outlined"
                sx={{
                  backdropFilter: 'blur(4px)',
                  backgroundColor: 'transparent',
                }}
              >
                <CardActionArea
                  href={`/blogs/${post.filename}`}
                  LinkComponent={Link}
                >
                  <CardContent sx={{ p: 1 }}>
                    <Stack gap={1} direction="column">
                      <Box>
                        <Stack direction={'row'} gap={1}>
                          <Typography variant="body2">
                            Published on {new Date().toLocaleDateString()}
                          </Typography>
                          <Typography variant="body2">
                            • {post.readingTime} read
                          </Typography>
                        </Stack>

                        <Typography variant="body1" fontWeight="bold">
                          {post.title}
                        </Typography>
                        <Typography variant="body2" fontStyle="italic">
                          {post.description}
                        </Typography>
                      </Box>
                      <Stack direction={'row'} gap={1} overflow={'auto'}>
                        {post.tags.map(tag => (
                          <Chip key={tag} label={'#' + tag} size="small" />
                        ))}
                      </Stack>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
