"use client";
import { motion, MotionProps } from "motion/react";

interface AnimateTextFadeInProps extends MotionProps {
  children: string;
  additionalDelay?: number;
}
export default function AnimateTextFadeIn({
  children,
  additionalDelay = 0,
  ...props
}: AnimateTextFadeInProps) {
  const splittedText = children.split(" ");

  return (
    <>
      {splittedText.map((el, i) => {
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: additionalDelay + i / 6,
              ease: "easeIn",
            }}
            {...props}
          >
            {el + " "}
          </motion.span>
        );
      })}
    </>
  );
}
