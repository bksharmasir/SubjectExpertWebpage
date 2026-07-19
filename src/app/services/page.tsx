import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { servicesIntro, services } from "@/content/services";

export const metadata: Metadata = {
  title: "What We Teach",
  description:
    "Commerce tuition for Class XI–XII, B.Com, BBA, MBA, CA, CS and CMA, plus Income Tax and GST practice.",
};

export default function ServicesPage() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <p className="font-script text-3xl text-brass sm:text-4xl">
          {servicesIntro.eyebrow}
        </p>
        <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
          {servicesIntro.headline}
        </h1>
        <p className="mt-6 text-ink-soft">{servicesIntro.body}</p>
      </ScrollReveal>

      <ScrollReveal
        variant="stagger"
        className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2"
      >
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group flex flex-col gap-4 rounded-2xl border border-rule bg-paper-soft p-8 transition-colors hover:border-brass"
          >
            <h2 className="font-display text-2xl text-ink group-hover:text-brass transition-colors">
              {service.title}
            </h2>
            <p className="text-ink-soft">{service.summary}</p>
            <span className="mt-auto text-sm font-medium text-brass">
              View details →
            </span>
          </Link>
        ))}
      </ScrollReveal>
    </section>
  );
}
