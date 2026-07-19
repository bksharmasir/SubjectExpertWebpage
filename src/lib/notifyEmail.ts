import { Resend } from "resend";
import type { LeadRow } from "./googleSheets";

export async function notifyLeadByEmail(lead: LeadRow) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.NOTIFY_EMAIL;

  if (!apiKey || !notifyTo) {
    console.warn("[notify-email] Skipped — RESEND_API_KEY or NOTIFY_EMAIL not set.");
    return;
  }

  const resend = new Resend(apiKey);

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Course", lead.course],
    ["Subject", lead.subject],
    ["Mode", lead.mode],
    ["Place", lead.place || "—"],
    ["Message", lead.message || "—"],
  ];

  const textBody = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;color:#666;font-weight:600;">${label}</td><td style="padding:4px 0;">${value}</td></tr>`
    )
    .join("");

  try {
    await resend.emails.send({
      from: "Subject Expert Website <onboarding@resend.dev>",
      to: notifyTo,
      subject: `New Demo Booking — ${lead.name} (${lead.mode})`,
      text: textBody,
      html: `<table style="font-family:sans-serif;font-size:14px;">${htmlRows}</table>`,
    });
  } catch (error) {
    // Don't let an email failure break the lead-saving flow — just log it.
    console.error("[notify-email] failed to send:", error);
  }
}
