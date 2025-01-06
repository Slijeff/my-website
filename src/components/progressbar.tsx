'use client';
import theme from '@/theme';
import { Box } from '@mui/material';
import { motion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [needsScroll, setNeedsScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setNeedsScroll(
        document.documentElement.scrollHeight > window.innerHeight,
      );
    };

    // Check on mount and window resize
    checkScroll();
    window.addEventListener('resize', checkScroll);

    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!needsScroll) return null;

  return (
    <Box
      component={motion.div}
      style={{ scaleX }}
      sx={{
        position: 'fixed',
        top: '64px',
        left: 0,
        right: 0,
        height: '4px',
        background: theme.palette.primary.lighter,
        transformOrigin: '0%',
        zIndex: 1000,
      }}
    />
  );
};
