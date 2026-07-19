import type { Metadata } from "next";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PillButton } from "@/components/ui/PillButton";

export const metadata: Metadata = {
  title: "Exam Notes",
  description: "Commerce, Tax and CA/CS/CMA exam notes from B.K. Sharma — coming soon.",
};

export default function ResourcesPage() {
  return (
    <section className="flex min-h-[60svh] items-center px-4 py-20 sm:px-6 sm:py-28">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <p className="font-script text-3xl text-brass sm:text-4xl">Exam Notes</p>
        <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
          Notes Coming Soon.
        </h1>
        <p className="mt-6 text-ink-soft">
          B.K. Sharma Sir is putting together exam notes and study tips for
          Commerce, Tax and CA/CS/CMA students — check back soon, or reach out
          directly for help in the meantime.
        </p>
        <div className="mt-10 flex justify-center">
          <PillButton href="/contact" variant="solid">
            BOOK A FREE DEMO
          </PillButton>
        </div>
      </ScrollReveal>
    </section>
  );
}
