import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type PillButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid";
  className?: string;
};

export function PillButton({
  href,
  children,
  variant = "outline",
  className,
}: PillButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:");

  const classes = clsx(
    "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm tracking-wide transition-colors duration-200",
    variant === "outline" &&
      "border-ink/30 text-ink hover:border-brass hover:text-brass",
    variant === "solid" && "border-ink bg-ink text-paper hover:bg-brass hover:border-brass",
    className
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
