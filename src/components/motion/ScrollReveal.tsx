"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ReactNode } from "react";
import { fadeUp, blurIn, staggerContainer } from "./variants";

type ScrollRevealProps = {
  children: ReactNode;
  variant?: "fadeUp" | "blurIn" | "stagger";
  className?: string;
  as?: "div" | "section";
  delay?: number;
};

const variantMap: Record<string, Variants> = {
  fadeUp,
  blurIn,
  stagger: staggerContainer,
};

export function ScrollReveal({
  children,
  variant = "fadeUp",
  className,
  as = "div",
  delay = 0,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = as === "section" ? motion.section : motion.div;

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={variantMap[variant]}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
