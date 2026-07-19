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
          <span className="hidden whitespace-nowrap font-display text-lg tracking-[0.12em] text-ink md:inline lg:text-xl lg:tracking-[0.15em]">
            {siteConfig.businessName.toUpperCase()}
          </span>
          <span className="font-display text-lg tracking-[0.1em] text-ink md:hidden">
            {siteConfig.shortName.toUpperCase()}
          </span>
        </Link>
        <div aria-hidden className="size-9 sm:size-10" />
      </div>
    </header>
  );
}
