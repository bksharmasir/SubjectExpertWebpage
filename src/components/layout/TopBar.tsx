import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site-config";
import { topBarLinks } from "@/content/nav";

export function TopBar() {
  return (
    <div className="bg-ink text-paper text-xs tracking-wide">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.telLink}
            aria-label="Call Subject Expert Commerce Academy"
            className="flex items-center gap-1.5 hover:text-brass-bright transition-colors"
          >
            <Phone className="size-3.5" aria-hidden />
            <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
          </a>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Subject Expert Commerce Academy"
            className="flex items-center gap-1.5 hover:text-brass-bright transition-colors"
          >
            <MessageCircle className="size-3.5" aria-hidden />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
        <div className="flex items-center gap-5 uppercase">
          {topBarLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-brass-bright transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
