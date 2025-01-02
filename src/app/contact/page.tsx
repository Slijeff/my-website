import { Box, Stack, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Stack gap={2} pt={2}>
      <Typography variant="h3" fontWeight="bold">
        Contact Information
      </Typography>
      <Typography variant="h6" color="primary.light">
        <Box component="span" fontWeight="bold">
          Email:
        </Box>{" "}
        thisisjeff@duck.com
      </Typography>
    </Stack>
  );
}
