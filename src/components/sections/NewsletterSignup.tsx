"use client";

import { FormEvent, useState } from "react";
import { newsletter } from "@/content/footer";

type Status = "idle" | "loading" | "submitted" | "error";

export function NewsletterSignup() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const email = new FormData(form).get("email");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("submitted");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="border-t border-rule bg-paper-soft">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <p className="font-display text-xl text-ink sm:max-w-md">
          {newsletter.heading}
        </p>
        {status === "submitted" ? (
          <p className="font-display text-brass">You&apos;re on the list. Thank you!</p>
        ) : (
          <div className="flex w-full flex-col gap-2 sm:w-auto">
            <div className="flex w-full items-center gap-3 border-b border-ink/30 pb-2 sm:w-auto sm:min-w-[320px]">
              <input
                required
                name="email"
                type="email"
                placeholder="Enter email*"
                className="w-full bg-transparent font-body text-ink placeholder:text-ink-soft/60 focus:outline-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-brass disabled:opacity-60"
              >
                {status === "loading" ? "Signing Up…" : newsletter.ctaLabel}
              </button>
            </div>
            {status === "error" && (
              <p className="text-sm text-red-700">
                Something went wrong — please try again in a moment.
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
}
