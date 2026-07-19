import { Hero } from "@/components/sections/Hero";
import { MissionQuote } from "@/components/sections/MissionQuote";
import { ServicesIntro } from "@/components/sections/ServicesIntro";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { Certifications } from "@/components/sections/Certifications";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PillButton } from "@/components/ui/PillButton";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionQuote />
      <ServicesIntro />
      <TestimonialSlider />
      <Certifications />

      <section className="px-4 pb-20 sm:px-6 sm:pb-28">
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-rule bg-paper-soft p-10 text-center">
          <p className="text-xs uppercase tracking-wide text-ink-soft">
            Are You a Tutor?
          </p>
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Join Subject Expert Commerce Academy
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-ink-soft">
            We're inviting tutors to teach Classes 1–12 and college-level
            subjects alongside four decades of trust.
          </p>
          <PillButton href="/tutors" variant="solid">
            TUTOR&apos;S SECTION
          </PillButton>
        </ScrollReveal>
      </section>
    </>
  );
}
