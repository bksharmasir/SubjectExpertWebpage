import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { articles } from "@/content/resources";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="px-4 py-20 sm:px-6 sm:py-28">
      <ScrollReveal className="mx-auto max-w-2xl">
        <p className="text-xs uppercase tracking-wide text-brass">
          {article.readTime} · {article.date} · {article.category}
        </p>
        <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
          {article.title}
        </h1>

        <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-xl bg-ink">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 672px, 100vw"
          />
        </div>

        <div className="mt-10 flex flex-col gap-6">
          {article.body.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </ScrollReveal>
    </article>
  );
}
