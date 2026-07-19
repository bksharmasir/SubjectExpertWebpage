"use client";

import { FormEvent, useState } from "react";
import { classLevelOptions, teachingModeOptions, tutorsContent } from "@/content/tutors";

type Status = "idle" | "loading" | "success" | "error";

export function TutorForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [classLevels, setClassLevels] = useState<string[]>([]);

  function toggleClassLevel(level: string) {
    setClassLevels((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/tutor-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, classLevels }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setClassLevels([]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="flex h-full flex-col rounded-2xl border border-rule bg-paper-soft p-8">
      <span className="w-fit rounded-full bg-brass px-3 py-1 text-xs font-semibold uppercase tracking-wide text-paper">
        Tutor Application
      </span>
      <h2 className="mt-4 font-display text-2xl text-ink">{tutorsContent.formHeading}</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {tutorsContent.formIntro}
      </p>

      {status === "success" ? (
        <p className="mt-6 font-display text-xl text-brass">
          Thank you — B.K. Sharma Sir will personally review your application and get in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-1 flex-col gap-5">
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
              Email
            </span>
            <input
              name="email"
              type="email"
              className="border-b border-ink/30 bg-transparent py-2 text-ink focus:border-brass focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-ink-soft">
              Highest Qualification*
            </span>
            <input
              required
              name="qualification"
              type="text"
              placeholder="e.g. M.Com, B.Ed, MBA"
              className="border-b border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink-soft/50 focus:border-brass focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-ink-soft">
              Teaching Experience*
            </span>
            <input
              required
              name="experience"
              type="text"
              placeholder="e.g. 5 years"
              className="border-b border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink-soft/50 focus:border-brass focus:outline-none"
            />
          </label>

          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-ink-soft">
              Class Levels You Can Teach*
            </span>
            <div className="flex flex-wrap gap-2">
              {classLevelOptions.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => toggleClassLevel(level)}
                  className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                    classLevels.includes(level)
                      ? "border-brass bg-brass text-paper"
                      : "border-ink/30 text-ink-soft hover:border-brass"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
            {classLevels.length === 0 && (
              <p className="text-xs text-ink-soft/70">Select at least one level.</p>
            )}
          </div>

          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-ink-soft">
              Subjects You Can Teach*
            </span>
            <input
              required
              name="subjects"
              type="text"
              placeholder="e.g. Accounts, Maths, English, Science"
              className="border-b border-ink/30 bg-transparent py-2 text-ink placeholder:text-ink-soft/50 focus:border-brass focus:outline-none"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-wide text-ink-soft">
              Preferred Mode*
            </span>
            <select
              required
              name="mode"
              defaultValue=""
              className="border-b border-ink/30 bg-transparent py-2 text-ink focus:border-brass focus:outline-none"
            >
              <option value="" disabled>
                Select a mode
              </option>
              {teachingModeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

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
            disabled={status === "loading" || classLevels.length === 0}
            className="mt-auto w-fit rounded-full bg-ink px-8 py-3 text-sm uppercase tracking-wide text-paper transition-colors hover:bg-brass disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Submit Application"}
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
