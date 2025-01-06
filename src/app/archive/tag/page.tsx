import AnimateTextFadeIn from "@/customization/animateTextFadeIn";
import { RaindropTag } from "@/types/archive";
import { Button, Chip, Stack, Typography } from "@mui/material";
import TagIcon from "@mui/icons-material/Tag";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const revalidate = 60;

export default async function TagsPage() {
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
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        href="/archive"
        sx={{ alignSelf: "flex-start" }}
      >
        Back to Archive
      </Button>
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <AnimateTextFadeIn>All Tags</AnimateTextFadeIn>
      </Typography>
      <Typography
        variant="h6"
        color="primary.light"
        fontStyle={"italic"}
        fontWeight="regular"
      >
        <AnimateTextFadeIn>
          Browse through all the tags in my archive
        </AnimateTextFadeIn>
      </Typography>

      <Stack direction={"column"} gap={2}>
        <Stack direction={"row"} alignItems={"center"}>
          <TagIcon sx={{ fontSize: "24px" }} />
          <Typography variant="h6" fontWeight="bold">
            Available Tags
          </Typography>
        </Stack>
        <Stack gap={1} direction={"row"} flexWrap={"wrap"}>
          {tags.map((tag) => (
            <Chip
              key={tag._id}
              label={`#${tag._id} (${tag.count})`}
              variant="outlined"
              clickable
              component="a"
              href={`/archive/tag/${tag._id}`}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
