import type { Metadata } from "next";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Certifications } from "@/components/sections/Certifications";
import { TutorForm } from "@/components/sections/TutorForm";
import { tutorsContent } from "@/content/tutors";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Tutor's Section",
  description:
    "Join Subject Expert Commerce Academy as a tutor — teach Classes 1 to 12 and college-level subjects alongside B.K. Sharma Sir's four decades of trust.",
};

export default function TutorsPage() {
  return (
    <>
      <section className="bg-ink px-4 pb-20 pt-20 text-paper sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-script text-3xl text-brass-bright sm:text-4xl">
            {tutorsContent.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
            {tutorsContent.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-paper/80">
            {tutorsContent.intro}
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <ScrollReveal
          variant="stagger"
          className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2"
        >
          {tutorsContent.trustPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-rule bg-paper-soft p-6"
            >
              <h2 className="font-display text-xl text-ink">{point.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {point.body}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </section>

      <Certifications />

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <ScrollReveal>
            <TutorForm />
          </ScrollReveal>
          <p className="mt-8 text-center text-sm text-ink-soft">
            Prefer to talk first? Call or WhatsApp {siteConfig.tutorName} directly at{" "}
            <a href={siteConfig.telLink} className="text-brass hover:underline">
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
