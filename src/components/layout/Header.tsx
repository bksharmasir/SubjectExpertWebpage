import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";
import { siteConfig } from "@/content/site-config";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-4 sm:px-6">
        <MobileMenu />
        <Link href="/" className="flex min-w-0 items-center justify-center gap-3">
          <Image
            src={siteConfig.logo.src}
            alt={siteConfig.logo.alt}
            width={40}
            height={40}
            className="size-9 shrink-0 rounded-full object-cover sm:size-10"
          />
          <span className="flex flex-col items-center leading-tight text-ink">
            <span className="whitespace-nowrap font-display text-sm tracking-[0.08em] sm:text-lg sm:tracking-[0.12em] lg:text-xl lg:tracking-[0.15em]">
              {siteConfig.shortName.toUpperCase()}
            </span>
            <span className="whitespace-nowrap font-display text-[10px] tracking-[0.2em] text-ink-soft sm:text-xs sm:tracking-[0.25em] lg:text-sm">
              {siteConfig.nameSuffix.toUpperCase()}
            </span>
          </span>
        </Link>
        <div aria-hidden className="size-9 sm:size-10" />
      </div>
    </header>
  );
}
