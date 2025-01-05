import AnimateTextFadeIn from "@/customization/animateTextFadeIn";
import { CollectionRaindrops } from "@/types/archive";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { limitWords } from "@/utils/utils";

export const revalidate = 60;

export default async function Archive() {
  const data: CollectionRaindrops = await fetch(
    "https://api.raindrop.io/rest/v1/raindrops/51239720",
    {
      headers: {
        Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
      },
    }
  ).then((res) => res.json());
  const items = data.items;
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
      {items.map((item) => (
        <Card
          key={item._id}
          variant="outlined"
          sx={{ backdropFilter: "blur(4px)", backgroundColor: "transparent" }}
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
                    Archived on {new Date(item.created).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body1" fontWeight={"bold"}>
                    {item.title}
                    <LinkIcon
                      sx={{ color: "primary.lighter", fontSize: "inherit" }}
                    />
                  </Typography>
                  <Typography variant="body2" fontStyle={"italic"}>
                    {limitWords(item.excerpt, 25)}
                  </Typography>
                </Box>

                <Stack direction={"row"} gap={1}>
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
  );
}
