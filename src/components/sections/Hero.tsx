"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useHeroParallax } from "@/components/motion/useParallax";
import { hero } from "@/content/hero";
import { siteConfig } from "@/content/site-config";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { imageY, imageScale, imageBlur, overlayOpacity } =
    useHeroParallax(sectionRef);

  return (
    <section ref={sectionRef} className="relative h-[100svh] overflow-hidden bg-ink">
      <motion.div
        style={{ y: imageY, scale: imageScale, filter: imageBlur }}
        className="absolute inset-0"
      >
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-ink"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-ink/80" />

      <div className="relative z-10 flex h-full flex-col justify-between px-4 py-8 sm:px-8 sm:py-10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between text-paper">
          <span className="text-xs uppercase tracking-[0.25em]">
            {hero.eyebrow}
          </span>
          <span className="text-xs uppercase tracking-[0.25em]">
            {siteConfig.locality}
          </span>
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-center text-paper sm:gap-3 lg:gap-4">
          <p className="font-display text-3xl tracking-[0.03em] sm:text-5xl md:text-6xl lg:text-7xl lg:tracking-[0.08em]">
            {hero.wordmarkLine1}
          </p>
          <p className="font-display text-base tracking-[0.12em] text-brass-bright sm:text-2xl md:text-3xl lg:text-4xl lg:tracking-[0.35em]">
            {hero.wordmarkLine2}
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-paper lg:flex-row lg:items-end lg:justify-between">
          <p className="font-display text-3xl italic sm:text-4xl lg:text-5xl">
            {hero.headlineParts[0]}
          </p>
          <p className="font-display text-3xl italic text-brass-bright sm:text-4xl lg:text-5xl">
            {hero.headlineParts[1]}
          </p>
        </div>
      </div>
    </section>
  );
}
