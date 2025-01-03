import theme from "@/theme";
import { Box } from "@mui/material";
import { motion, useScroll, useSpring } from "motion/react";

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const springX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Box
      component={motion.div}
      sx={{
        position: "fixed",
        top: "64px",
        left: 0,
        right: 0,
        height: "4px",
        background: theme.palette.primary.lighter,
        transformOrigin: "0%",
        zIndex: 999,
      }}
      style={{
        scaleX: springX,
      }}
    />
  );
};
