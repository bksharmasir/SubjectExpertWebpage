import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { PillButton } from "@/components/ui/PillButton";
import { services } from "@/content/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <ScrollReveal className="mx-auto max-w-2xl">
        <p className="font-script text-3xl text-brass">What We Teach</p>
        <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          {service.detail}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {service.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-rule px-4 py-1.5 text-sm text-ink-soft"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <PillButton href="/contact" variant="solid">
            BOOK A FREE DEMO
          </PillButton>
        </div>
      </ScrollReveal>
    </section>
  );
}
