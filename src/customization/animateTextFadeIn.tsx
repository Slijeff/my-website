'use client';
import { motion, MotionProps } from 'motion/react';

interface AnimateTextFadeInProps extends MotionProps {
  children: string;
  duration?: number;
  speed?: number;
  additionalDelay?: number;
}
export default function AnimateTextFadeIn({
  children,
  duration = 0.4,
  additionalDelay = 0,
  ...props
}: AnimateTextFadeInProps) {
  const splittedText = children.split(' ');

  return (
    <>
      {splittedText.map((el, i) => {
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: duration,
              delay: additionalDelay + i / splittedText.length,
              ease: 'easeIn',
            }}
            {...props}
          >
            {el + ' '}
          </motion.span>
        );
      })}
    </>
  );
}
