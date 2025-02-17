import AnimateTextFadeIn from '@/customization/animateTextFadeIn';
import { getAllPostsMeta } from '@/utils/blog';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TagIcon from '@mui/icons-material/Tag';
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
import Grid from '@mui/material/Grid2';
import Link from 'next/link';

export default async function Blogs() {
  const postsData = (await getAllPostsMeta()).sort((a, b) => {
    if (new Date(a.time) < new Date(b.time)) {
      return 1;
    }
    return -1;
  });
  const allTags = [...new Set(postsData.map(post => post.tags).flat())];
  return (
    <Stack gap={2}>
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <AnimateTextFadeIn>Blogs</AnimateTextFadeIn>
      </Typography>
      <Typography
        variant="h6"
        color="primary.light"
        fontStyle="italic"
        fontWeight="regular"
      >
        <AnimateTextFadeIn>Insights and Stories</AnimateTextFadeIn>
      </Typography>
      <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Stack gap={2}>
            {postsData.map(post => (
              <Card
                key={post.slug}
                variant="outlined"
                sx={{
                  backdropFilter: 'blur(4px)',
                  backgroundColor: 'transparent',
                }}
              >
                <CardActionArea
                  key={post.slug}
                  href={`/blogs/${post.filename}`}
                  LinkComponent={Link}
                >
                  <CardContent sx={{ p: 1 }}>
                    <Stack gap={1} direction="column">
                      <Box>
                        <Stack direction={'row'} gap={1}>
                          <Typography variant="body2">
                            Published on{' '}
                            {new Date(post.time).toLocaleDateString()}
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
        <Grid size={{ xs: 12, sm: 4 }}>
          <Stack direction="column" gap={2} alignItems="flex-start">
            <Stack direction={'row'} alignItems={'center'}>
              <TagIcon sx={{ fontSize: '24px' }} />
              <Typography variant="h6" fontWeight="bold">
                Tags
              </Typography>
            </Stack>
            <Stack gap={1} direction="row" flexWrap="wrap">
              {allTags.map(tag => (
                <Chip
                  key={tag}
                  label={'#' + tag}
                  variant="outlined"
                  clickable
                  component={Link}
                  href={`/blogs/tag/${tag}`}
                />
              ))}
            </Stack>
            <Button
              variant="text"
              endIcon={<NavigateNextIcon />}
              LinkComponent={Link}
              href="/blogs/tag"
            >
              See all tags
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
