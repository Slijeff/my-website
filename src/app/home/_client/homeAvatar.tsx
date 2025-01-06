'use client';
import { useColorScheme } from '@mui/material';
import Image from 'next/image';
export default function HomeAvatar() {
  const { mode } = useColorScheme();
  return (
    <Image
      style={{
        borderRadius: '10px',
        boxShadow:
          mode === 'light' ? '0 5px 10px var(--mui-palette-primary-main)' : '',
      }}
      src="/avatar.png"
      alt="Avatar"
      width={200}
      height={200}
      priority
    />
  );
}
