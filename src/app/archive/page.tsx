import AnimateTextFadeIn from "@/customization/animateTextFadeIn";
import { CollectionRaindrops, RaindropTag } from "@/types/archive";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import Grid from "@mui/material/Grid2";
import { limitWords } from "@/utils/utils";
import TagIcon from "@mui/icons-material/Tag";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const revalidate = 60;

export default async function Archive() {
  const collectionData: CollectionRaindrops = await fetch(
    "https://api.raindrop.io/rest/v1/raindrops/51239720",
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    }
  ).then((res) => res.json());
  const items = collectionData.items;

  const tagsData: { result: boolean; items: RaindropTag[] } = await fetch(
    "https://api.raindrop.io/rest/v1/tags/51239720",
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    }
  ).then((res) => res.json());
  const tags = tagsData.items;
  return (
    <Stack gap={2}>
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <AnimateTextFadeIn>The Archive</AnimateTextFadeIn>
      </Typography>
      <Typography
        variant="h6"
        color="primary.light"
        fontStyle={"italic"}
        fontWeight="regular"
      >
        <AnimateTextFadeIn>
          A place for me to share other links that I find interesting or useful.
          Hope you like it!
        </AnimateTextFadeIn>
      </Typography>
      <Grid container spacing={2} direction={{ xs: "column", sm: "row" }}>
        <Grid size={{ xs: 12, sm: 8 }}>
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
        <Grid size={{ xs: 12, sm: 4 }}>
          <Stack direction={"column"} gap={2} alignItems={"flex-start"}>
            <Stack direction={"row"} alignItems={"center"}>
              <TagIcon sx={{ fontSize: "24px" }} />
              <Typography variant="h6" fontWeight="bold">
                Tags
              </Typography>
            </Stack>
            <Stack gap={1} direction={"row"} flexWrap={"wrap"}>
              {tags.map((tag) => (
                <Chip
                  key={tag._id}
                  label={"#" + tag._id}
                  variant="outlined"
                  clickable
                  component="a"
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
