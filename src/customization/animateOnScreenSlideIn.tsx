"use client";
import { motion, MotionProps } from "motion/react";

interface AnimateOnScreenSlideInProps extends MotionProps {
  children: React.ReactNode;
}
export default function AnimateOnScreenSlideIn({
  children,
  ...props
}: AnimateOnScreenSlideInProps) {
  return (
    <motion.div
      {...props}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: "some" }}
      variants={{
        offscreen: {
          x: "100%",
          opacity: 0,
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
