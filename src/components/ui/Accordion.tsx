"use client";

import { useId, useState, ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import clsx from "clsx";

export type AccordionItemData = {
  title: string;
  content: ReactNode;
};

type Tone = "default" | "inverted";

export function Accordion({
  items,
  defaultOpenIndex,
  tone = "default",
}: {
  items: AccordionItemData[];
  defaultOpenIndex?: number;
  tone?: Tone;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(
    defaultOpenIndex ?? null
  );

  const dividerClass =
    tone === "inverted"
      ? "divide-y divide-paper/15 border-t border-b border-paper/15"
      : "divide-y divide-rule border-t border-b border-rule";

  return (
    <div className={dividerClass}>
      {items.map((item, index) => (
        <AccordionRow
          key={item.title}
          item={item}
          isOpen={openIndex === index}
          tone={tone}
          onToggle={() =>
            setOpenIndex((current) => (current === index ? null : index))
          }
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  isOpen,
  onToggle,
  tone,
}: {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
  tone: Tone;
}) {
  const contentId = useId();
  const titleClass = tone === "inverted" ? "text-paper" : "text-ink";
  const contentClass = tone === "inverted" ? "text-paper/70" : "text-ink-soft";
  const iconClass = tone === "inverted" ? "text-brass-bright" : "text-brass";

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className={clsx("font-display text-xl sm:text-2xl", titleClass)}>
          {item.title}
        </span>
        <Plus
          className={clsx(
            "size-5 shrink-0 transition-transform duration-300",
            iconClass,
            isOpen && "rotate-45"
          )}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className={clsx("pb-6 pr-10 leading-relaxed", contentClass)}>
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
