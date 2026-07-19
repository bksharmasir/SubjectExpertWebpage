"use client";

import { useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

/**
 * Renders children into document.body. Needed for fixed-position overlays
 * that live inside Header, since Header's backdrop-blur creates a new
 * containing block for `position: fixed` descendants (per the CSS spec,
 * same as `filter`) — without this, inset-0 resolves against Header's
 * own box instead of the viewport.
 */
export function Portal({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(children, document.body);
}
