import { Paper, Stack, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Stack gap={4} pt={2}>
      <Typography variant="h3" fontWeight="bold">
        Contact Information
      </Typography>
      <Paper
        sx={{
          p: 4,
          backdropFilter: "blur(4px)",
          backgroundColor: "transparent",
        }}
      >
        <Stack gap={3}>
          <Stack gap={1}>
            <Typography variant="h5" color="primary.light" fontWeight={"bold"}>
              Email
            </Typography>
            <Typography variant="body1">thisisjeff@duck.com</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography variant="h5" color="primary.light" fontWeight={"bold"}>
              Discord
            </Typography>
            <Typography variant="body1">slijeff</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography variant="h5" color="primary.light" fontWeight={"bold"}>
              Phone
            </Typography>
            <Typography variant="body1">(608) 616-5191</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography variant="h5" color="primary.light" fontWeight={"bold"}>
              Steam Friend Code
            </Typography>
            <Typography variant="body1">1058622102</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
