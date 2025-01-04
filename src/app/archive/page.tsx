import AnimateTextFadeIn from "@/customization/animateTextFadeIn";
import { Stack, Typography } from "@mui/material";

export default function Archive() {
  return (
    <Stack gap={1} p={2}>
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <AnimateTextFadeIn>The Archive</AnimateTextFadeIn>
      </Typography>
      <Typography variant="h6" color="primary.light">
        <AnimateTextFadeIn>
          The archive is a place for me to share other people&apos;s blog or
          articles that I find interesting or useful. Hope you like it!
        </AnimateTextFadeIn>
      </Typography>
    </Stack>
  );
}
