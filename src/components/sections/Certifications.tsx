import Image from "next/image";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { about } from "@/content/about";

export function Certifications() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24">
      <ScrollReveal className="mx-auto max-w-4xl text-center">
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
    </section>
  );
}
