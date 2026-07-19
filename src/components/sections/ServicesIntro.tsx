import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { Accordion } from "@/components/ui/Accordion";
import { servicesIntro, services } from "@/content/services";

export function ServicesIntro() {
  const accordionItems = services.map((service) => ({
    title: service.title,
    content: (
      <div className="flex flex-col gap-3">
        <p>{service.summary}</p>
        <Link
          href={`/services/${service.slug}`}
          className="w-fit text-sm font-medium text-brass hover:text-ink transition-colors"
        >
          View details →
        </Link>
      </div>
    ),
  }));

  return (
    <section>
      <div className="relative overflow-hidden bg-gradient-to-br from-ink via-ink-soft to-brass px-4 py-20 text-paper sm:px-6 sm:py-28">
        <ScrollReveal className="mx-auto max-w-3xl">
          <p className="font-script text-3xl text-brass-bright sm:text-4xl">
            {servicesIntro.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
            {servicesIntro.headline}
          </h2>
          <p className="mt-6 max-w-xl text-paper/85">{servicesIntro.body}</p>
        </ScrollReveal>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
        <Accordion items={accordionItems} />
      </div>
    </section>
  );
}
