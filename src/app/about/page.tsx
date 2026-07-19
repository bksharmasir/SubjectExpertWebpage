import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PillButton } from "@/components/ui/PillButton";
import { about } from "@/content/about";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "B.K. Sharma has taught Commerce since 1986 — the story behind Subject Expert Commerce Academy.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[70svh] min-h-[420px] overflow-hidden bg-ink">
        <Image
          src={about.image.src}
          alt={about.image.alt}
          fill
          priority
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
        <div className="relative z-10 flex h-full flex-col justify-end px-4 pb-16 text-paper sm:px-6">
          <div className="mx-auto w-full max-w-4xl">
            <p className="font-script text-3xl text-brass-bright">{about.eyebrow}</p>
            <h1 className="mt-2 font-display text-4xl leading-tight sm:text-6xl">
              {about.headline}
            </h1>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <ScrollReveal className="mx-auto flex max-w-3xl flex-col gap-6">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </ScrollReveal>

        <ScrollReveal
          variant="stagger"
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-rule pt-10 md:grid-cols-4"
        >
          {about.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-display text-2xl text-brass sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink-soft">
                {stat.label}
              </p>
            </div>
          ))}
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-16 max-w-3xl border-t border-rule pt-10 text-center">
          <p className="text-xs uppercase tracking-wide text-ink-soft">
            Certified By
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {about.certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col items-center gap-3">
                <div className="relative aspect-[10/7] w-full overflow-hidden rounded-lg border border-rule bg-ink">
                  <Image
                    src={cert.image.src}
                    alt={cert.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <p className="text-sm font-medium text-ink-soft">{cert.name}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mx-auto mt-16 flex max-w-3xl justify-center">
          <PillButton href="/contact" variant="solid">
            BOOK A FREE DEMO
          </PillButton>
        </div>
      </section>
    </>
  );
}
