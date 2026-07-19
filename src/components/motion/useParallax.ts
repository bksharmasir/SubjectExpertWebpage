"use client";

import { useScroll, useTransform, MotionValue } from "motion/react";
import { RefObject } from "react";

type ParallaxOutput = {
  imageY: MotionValue<string>;
  imageScale: MotionValue<number>;
  imageBlur: MotionValue<string>;
  overlayOpacity: MotionValue<number>;
};

/**
 * Drives the hero image as it scrolls out of view: subtle parallax rise,
 * a slow blur-in, and a rising ink-colored overlay — mirrors the
 * photo-to-gradient scroll transition used across the reference layout.
 */
export function useHeroParallax(targetRef: RefObject<HTMLElement | null>): ParallaxOutput {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const imageBlurAmount = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const imageBlur = useTransform(imageBlurAmount, (v) => `blur(${v}px)`);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.35, 0.85]);

  return { imageY, imageScale, imageBlur, overlayOpacity };
}
