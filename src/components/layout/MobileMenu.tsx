"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { primaryNav } from "@/content/nav";
import { siteConfig } from "@/content/site-config";
import { Portal } from "@/components/ui/Portal";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="flex items-center justify-center rounded-full p-2 hover:text-brass transition-colors"
      >
        <Menu className="size-6" aria-hidden />
      </button>

      <Portal>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink text-paper"
          >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
              <span className="font-display text-lg">{siteConfig.shortName}</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="flex items-center justify-center rounded-full p-2 hover:text-brass-bright transition-colors"
              >
                <X className="size-6" aria-hidden />
              </button>
            </div>

            <motion.nav
              className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pt-10 sm:px-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
            >
              {primaryNav.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-paper/10 py-4 font-display text-3xl sm:text-4xl hover:text-brass-bright transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <div className="mx-auto max-w-6xl px-4 pt-10 text-sm text-paper/70 sm:px-6">
              <a href={siteConfig.telLink} className="hover:text-brass-bright">
                {siteConfig.phoneDisplay}
              </a>
              <span className="mx-2">·</span>
              <span>{siteConfig.locality}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </Portal>
    </>
  );
}
