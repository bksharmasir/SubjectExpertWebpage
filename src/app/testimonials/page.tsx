import type { Metadata } from "next";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PillButton } from "@/components/ui/PillButton";
import { testimonials } from "@/content/testimonials";
import { trustBadges } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Results",
  description: "What students say about learning Commerce with B.K. Sharma.",
};

export default function TestimonialsPage() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <p className="font-script text-3xl text-brass sm:text-4xl">Results</p>
        <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
          Marks Are the Byproduct. Understanding Is the Point.
        </h1>
      </ScrollReveal>

      <ScrollReveal
        variant="stagger"
        className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col gap-4 rounded-2xl border border-rule bg-paper-soft p-8"
          >
            <p className="font-display text-xl italic leading-snug text-ink">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="mt-auto text-sm uppercase tracking-wide text-ink-soft">
              {t.name} · {t.course}
            </p>
          </div>
        ))}
      </ScrollReveal>

      <div className="mx-auto mt-16 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-rule pt-10 text-xs uppercase tracking-wide text-ink-soft">
        {trustBadges.map((badge) => (
          <span key={badge}>{badge}</span>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-3xl justify-center">
        <PillButton href="/contact" variant="solid">
          BOOK A FREE DEMO
        </PillButton>
      </div>
    </section>
  );
}
