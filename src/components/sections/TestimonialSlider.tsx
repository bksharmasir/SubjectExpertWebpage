"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/content/testimonials";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section className="bg-paper-soft px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <p className="font-script text-3xl text-brass sm:text-4xl">Results</p>

        <div className="relative h-56 w-full overflow-hidden sm:h-44">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.name}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4"
            >
              <p className="font-display text-2xl italic leading-snug text-ink sm:text-3xl">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="text-sm uppercase tracking-wide text-ink-soft">
                {current.name} · {current.course}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex size-10 items-center justify-center rounded-full border border-ink/20 text-ink hover:border-brass hover:text-brass transition-colors"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={`size-2 rounded-full transition-colors ${
                  i === index ? "bg-brass" : "bg-ink/20"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex size-10 items-center justify-center rounded-full border border-ink/20 text-ink hover:border-brass hover:text-brass transition-colors"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
