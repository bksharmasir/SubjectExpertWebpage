"use client";

import { FormEvent, useState } from "react";
import {
  contactContent,
  delhiPlaces,
  subjectsByCourse,
  type DemoTrack,
} from "@/content/contact";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ track }: { track: DemoTrack }) {
  const [status, setStatus] = useState<Status>("idle");
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");

  const subjectOptions = subjectsByCourse[course] ?? [];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setCourse("");
      setSubject("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex h-full flex-col rounded-2xl border border-rule bg-paper-soft p-8">
      <span className="w-fit rounded-full bg-brass px-3 py-1 text-xs font-semibold uppercase tracking-wide text-paper">
        {track.badge}
      </span>
      <h2 className="mt-4 font-display text-2xl text-ink">{track.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {track.description}
      </p>

      {status === "success" ? (
        <p className="mt-6 font-display text-xl text-brass">
          Thank you — B.K. Sharma Sir will get back to you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-5">
          <input type="hidden" name="mode" value={track.mode} />
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-ink-soft">
              Name*
            </span>
            <input
              required
              name="name"
              type="text"
              className="border-b border-ink/30 bg-transparent py-2 text-ink focus:border-brass focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-ink-soft">
              Phone*
            </span>
            <input
              required
              name="phone"
              type="tel"
              className="border-b border-ink/30 bg-transparent py-2 text-ink focus:border-brass focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-ink-soft">
              Course*
            </span>
            <select
              required
              name="course"
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
                setSubject("");
              }}
              className="border-b border-ink/30 bg-transparent py-2 text-ink focus:border-brass focus:outline-none"
            >
              <option value="" disabled>
                Select a course
              </option>
              {contactContent.courseOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          {course && (
            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wide text-ink-soft">
                Subject*
              </span>
              <select
                required
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="border-b border-ink/30 bg-transparent py-2 text-ink focus:border-brass focus:outline-none"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          )}

          {track.mode === "Home Tuition" && (
            <label className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-wide text-ink-soft">
                Place in Delhi*
              </span>
              <select
                required
                name="place"
                defaultValue=""
                className="border-b border-ink/30 bg-transparent py-2 text-ink focus:border-brass focus:outline-none"
              >
                <option value="" disabled>
                  Select your area
                </option>
                {delhiPlaces.map((place) => (
                  <option key={place} value={place}>
                    {place}
                  </option>
                ))}
              </select>
            </label>
          )}

          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-ink-soft">
              Message
            </span>
            <textarea
              name="message"
              rows={3}
              className="border-b border-ink/30 bg-transparent py-2 text-ink focus:border-brass focus:outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-auto w-fit rounded-full bg-ink px-8 py-3 text-sm uppercase tracking-wide text-paper transition-colors hover:bg-brass disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : track.ctaLabel}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-700">
              Something went wrong — please call or WhatsApp us directly instead.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
