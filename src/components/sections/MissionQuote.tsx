import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PillButton } from "@/components/ui/PillButton";
import { missionQuote } from "@/content/hero";

export function MissionQuote() {
  return (
    <section className="bg-paper px-4 py-24 sm:px-6 sm:py-32">
      <ScrollReveal
        as="div"
        className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center"
      >
        <p className="font-display text-2xl leading-snug text-ink sm:text-3xl md:text-4xl">
          {missionQuote.text}
        </p>
        <PillButton href={missionQuote.ctaHref}>
          {missionQuote.ctaLabel.toUpperCase()}
        </PillButton>
      </ScrollReveal>
    </section>
  );
}
