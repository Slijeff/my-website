import { CollectionRaindrops } from "@/types/archive";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import Grid from "@mui/material/Grid2";
import { limitWords } from "@/utils/utils";
import AnimateTextFadeIn from "@/customization/animateTextFadeIn";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const revalidate = 60;

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams(): Promise<{ tag: string }[]> {
  const tagsData: { result: boolean; items: { _id: string }[] } = await fetch(
    "https://api.raindrop.io/rest/v1/tags/51239720",
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    }
  ).then((res) => res.json());

  return tagsData.items.map((tag) => ({
    tag: tag._id,
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const collectionData: CollectionRaindrops = await fetch(
    `https://api.raindrop.io/rest/v1/raindrops/51239720?search=[{"key":"tag","val":"${tag}"}]`,
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    }
  ).then((res) => res.json());

  const items = collectionData.items;

  return (
    <Stack gap={2}>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        href="/archive"
        sx={{ alignSelf: "flex-start" }}
      >
        Back to Archive
      </Button>
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <AnimateTextFadeIn>{`#${tag}`}</AnimateTextFadeIn>
      </Typography>
      <Typography
        variant="h6"
        color="primary.light"
        fontStyle={"italic"}
        fontWeight="regular"
      >
        <AnimateTextFadeIn>
          {`Showing all items tagged with #${tag}`}
        </AnimateTextFadeIn>
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Stack gap={2}>
            {items.map((item) => (
              <Card
                key={item._id}
                variant="outlined"
                sx={{
                  backdropFilter: "blur(4px)",
                  backgroundColor: "transparent",
                }}
              >
                <CardActionArea
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardContent sx={{ p: 1 }}>
                    <Stack gap={1} direction={"column"}>
                      <Box>
                        <Typography variant="body2">
                          Archived on{" "}
                          {new Date(item.created).toLocaleDateString()}
                        </Typography>
                        <Typography variant="body1" fontWeight={"bold"}>
                          {item.title}
                          <LinkIcon
                            sx={{
                              color: "primary.lighter",
                              fontSize: "inherit",
                            }}
                          />
                        </Typography>
                        <Typography variant="body2" fontStyle={"italic"}>
                          {limitWords(item.excerpt, 25)}
                        </Typography>
                      </Box>

                      <Stack direction={"row"} gap={1} overflow={"auto"}>
                        {item.tags.map((tag) => (
                          <Chip key={tag} label={"#" + tag} size="small" />
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
