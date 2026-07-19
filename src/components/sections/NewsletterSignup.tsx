"use client";

import { useState } from "react";
import { newsletter } from "@/content/footer";

export function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  return (
    <div className="border-t border-rule bg-paper-soft">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStatus("submitted");
        }}
        className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <p className="font-display text-xl text-ink sm:max-w-md">
          {newsletter.heading}
        </p>
        {status === "idle" ? (
          <div className="flex w-full items-center gap-3 border-b border-ink/30 pb-2 sm:w-auto sm:min-w-[320px]">
            <input
              required
              type="email"
              placeholder="Enter email*"
              className="w-full bg-transparent font-body text-ink placeholder:text-ink-soft/60 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-brass"
            >
              {newsletter.ctaLabel}
            </button>
          </div>
        ) : (
          <p className="font-display text-brass">You&apos;re on the list. Thank you!</p>
        )}
      </form>
    </div>
  );
}
