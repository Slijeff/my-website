import AnimateTextFadeIn from '@/customization/animateTextFadeIn';
import { Paper, Stack, Typography } from '@mui/material';

export default function Contact() {
  return (
    <Stack gap={4} p={2}>
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <AnimateTextFadeIn>Contact Information</AnimateTextFadeIn>
      </Typography>
      <Paper
        sx={{
          p: 4,
          backdropFilter: 'blur(4px)',
          backgroundColor: 'transparent',
        }}
      >
        <Stack gap={3}>
          <Stack gap={1}>
            <Typography variant="h5" color="primary.light" fontWeight={'bold'}>
              Email
            </Typography>
            <Typography variant="body1">me@slijeff.com</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography variant="h5" color="primary.light" fontWeight={'bold'}>
              Discord
            </Typography>
            <Typography variant="body1">slijeff</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography variant="h5" color="primary.light" fontWeight={'bold'}>
              Steam Friend Code
            </Typography>
            <Typography variant="body1">1058622102</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Stack>
  );
}
