import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
  image: string;
  caption: string;
}
const MarkdownImageWrapper = ({ image, caption }: Props) => {
  return (
    <Stack
      width={'100%'}
      direction={'column'}
      justifyContent={'center'}
      my={1}
      gap={1}
    >
      <Image
        src={image}
        alt="image"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '8px',
        }}
      />
      <Typography
        variant="body2"
        sx={{ textAlign: 'start', fontWeight: 300 }}
        color="primary.lighter"
      >
        {caption}
      </Typography>
    </Stack>
  );
};

export default MarkdownImageWrapper;
