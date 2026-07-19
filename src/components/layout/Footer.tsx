import Image from "next/image";
import { Accordion } from "@/components/ui/Accordion";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import { footerColumns } from "@/content/footer";
import { siteConfig, trustBadges } from "@/content/site-config";

export function Footer() {
  const accordionItems = footerColumns.map((column) => ({
    title: column.heading,
    content: (
      <ul className="flex flex-col gap-2">
        {column.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-brass-bright transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <footer className="bg-ink text-paper">
      <NewsletterSignup />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pt-14 sm:px-6">
        <Image
          src={siteConfig.logo.src}
          alt={siteConfig.logo.alt}
          width={64}
          height={64}
          className="size-14 rounded-full object-cover sm:size-16"
        />
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-4 sm:px-6">
        <Accordion items={accordionItems} tone="inverted" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-xs text-paper/60 sm:px-6">
        <p>
          {siteConfig.businessName} — {siteConfig.tutorFullName} ({siteConfig.credentials}).
        </p>
        <p className="mt-1">
          © {new Date().getFullYear()} All rights reserved, {siteConfig.businessName}.
        </p>
      </div>

      <div className="border-t border-paper/10 py-8 text-center">
        <p className="font-script text-2xl text-brass-bright sm:text-3xl">
          {siteConfig.motto.devanagari}
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-paper/50">
          {siteConfig.motto.transliteration} · {siteConfig.motto.translation}
        </p>
      </div>

      <div className="border-t border-paper/10 bg-paper-soft py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-xs uppercase tracking-wide text-ink-soft sm:px-6">
          {trustBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
