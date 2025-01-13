import { Divider, Stack, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Stack
      gap={2}
      margin={'auto'}
      marginBottom={4}
      width={{ xs: '90%', sm: '70%', lg: '40%' }}
    >
      <Divider variant="fullWidth" />
      <Typography
        variant="body2"
        sx={{ textAlign: 'start', fontWeight: 300 }}
        color="primary.lighter"
      >
        © 2025 Slijeff&apos;s Realm. All rights reserved. Any and all opinions
        listed here are my own and not representative of any of my employers,
        past, future, and/or present.
      </Typography>
    </Stack>
  );
}
