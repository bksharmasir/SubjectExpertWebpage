import type { Metadata } from "next";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { contactContent, demoTracks } from "@/content/contact";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a demo class with B.K. Sharma — free for Online Tuition, or Home Tuition at half the course rate.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-2">
          <ScrollReveal>
            <p className="font-script text-3xl text-brass sm:text-4xl">
              {contactContent.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
              {contactContent.headline}
            </h1>
            <p className="mt-6 text-ink-soft">{contactContent.intro}</p>

            <div className="mt-10 flex flex-col gap-3 text-ink">
              <a href={siteConfig.telLink} className="hover:text-brass transition-colors">
                Call: {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brass transition-colors"
              >
                WhatsApp: {siteConfig.phoneDisplay}
              </a>
              <span className="text-ink-soft">{siteConfig.locality}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <MapEmbed
              query={`${siteConfig.businessName}, ${siteConfig.locality}`}
              label={siteConfig.businessName}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {demoTracks.map((track, index) => (
            <ScrollReveal key={track.mode} delay={index * 0.1}>
              <ContactForm track={track} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
