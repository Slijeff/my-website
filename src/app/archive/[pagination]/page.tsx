import { ArchiveCard } from '@/components/archiveCard';
import AnimateTextFadeIn from '@/customization/animateTextFadeIn';
import {
  CollectionInfo,
  CollectionRaindrops,
  RaindropTag,
} from '@/types/archive';
import { Stack, Typography, Chip, Button } from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TagIcon from '@mui/icons-material/Tag';
import Grid from '@mui/material/Grid2';
import { ArchivePagination } from '@/components/archivePagination';

const PAGE_SIZE = 10;

export async function generateStaticParams(): Promise<
  { pagination: string }[]
> {
  const collectionData: CollectionInfo = await fetch(
    'https://api.raindrop.io/rest/v1/collection/51239720',
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    },
  ).then(res => res.json());
  const numRaindrops = collectionData.item.count;
  const numPages = Math.ceil(numRaindrops / PAGE_SIZE);
  return Array.from({ length: numPages }, (_, i) => ({
    pagination: i.toString(),
  }));
}

interface ArchivePageProps {
  params: Promise<{ pagination: string }>;
}

export const revalidate = 60;

export default async function Archive({ params }: ArchivePageProps) {
  const { pagination } = await params;
  const collectionInfo: CollectionInfo = await fetch(
    'https://api.raindrop.io/rest/v1/collection/51239720',
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    },
  ).then(res => res.json());
  const numRaindrops = collectionInfo.item.count;
  const numPages = Math.ceil(numRaindrops / PAGE_SIZE);
  const collectionData: CollectionRaindrops = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/51239720?page=${pagination}&perpage=${PAGE_SIZE}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    },
  ).then(res => res.json());
  const items = collectionData.items;

  const tagsData: { result: boolean; items: RaindropTag[] } = await fetch(
    'https://api.raindrop.io/rest/v1/tags/51239720',
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    },
  ).then(res => res.json());
  const tags = tagsData.items;
  return (
    <Stack gap={2}>
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <AnimateTextFadeIn>The Archive</AnimateTextFadeIn>
      </Typography>
      <Typography
        variant="h6"
        color="primary.light"
        fontStyle={'italic'}
        fontWeight="regular"
      >
        <AnimateTextFadeIn>
          A place for me to share other links that I find interesting or useful.
          Hope you like it!
        </AnimateTextFadeIn>
      </Typography>
      <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Stack gap={2}>
            {items.map(item => (
              <ArchiveCard key={item._id} item={item} />
            ))}
            <ArchivePagination totalPage={numPages} />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Stack direction={'column'} gap={2} alignItems={'flex-start'}>
            <Stack direction={'row'} alignItems={'center'}>
              <TagIcon sx={{ fontSize: '24px' }} />
              <Typography variant="h6" fontWeight="bold">
                Tags
              </Typography>
            </Stack>
            <Stack gap={1} direction={'row'} flexWrap={'wrap'}>
              {tags.map(tag => (
                <Chip
                  key={tag._id}
                  label={'#' + tag._id}
                  variant="outlined"
                  clickable
                  component={Link}
                  href={`/archive/tag/${tag._id}`}
                />
              ))}
            </Stack>
            <Button
              variant="text"
              endIcon={<NavigateNextIcon />}
              LinkComponent={Link}
              href="/archive/tag"
            >
              See all tags
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
