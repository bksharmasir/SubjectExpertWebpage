import { NextResponse } from "next/server";
import { appendLead } from "@/lib/googleSheets";
import { notifyLeadByEmail } from "@/lib/notifyEmail";

type ContactPayload = {
  name?: string;
  phone?: string;
  course?: string;
  subject?: string;
  mode?: string;
  place?: string;
  message?: string;
  website?: string; // honeypot — real users never fill this in
};

export async function POST(request: Request) {
  const body: ContactPayload = await request.json();

  // Honeypot: bots fill every field, including ones hidden from real users.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  if (!body.name?.trim() || !body.phone?.trim()) {
    return NextResponse.json(
      { error: "Name and phone number are required." },
      { status: 400 }
    );
  }

  const lead = {
    name: body.name.trim(),
    phone: body.phone.trim(),
    course: body.course?.trim() || "Not specified",
    subject: body.subject?.trim() || "Not specified",
    mode: body.mode?.trim() || "Not specified",
    place: body.place?.trim() || "",
    message: body.message?.trim() || "",
  };

  try {
    await appendLead(lead);
  } catch (error) {
    console.error("[contact-enquiry] failed to save lead:", error);
    return NextResponse.json(
      { error: "Something went wrong saving your enquiry. Please call or WhatsApp instead." },
      { status: 500 }
    );
  }

  // Notification failures should never fail the request — the lead is
  // already safely saved in the sheet above.
  await notifyLeadByEmail(lead);

  return NextResponse.json({ ok: true });
}
