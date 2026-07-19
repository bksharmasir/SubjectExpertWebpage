import { NextResponse } from "next/server";
import { appendLead } from "@/lib/googleSheets";
import { notifyLeadByEmail } from "@/lib/notifyEmail";
import { capLength, isValidPhone } from "@/lib/security";
import { getClientIp, isRateLimited } from "@/lib/rateLimit";

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
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

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

  if (!isValidPhone(body.phone.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 400 }
    );
  }

  const lead = {
    name: capLength(body.name.trim(), 200),
    phone: capLength(body.phone.trim(), 20),
    course: capLength(body.course?.trim() || "Not specified", 200),
    subject: capLength(body.subject?.trim() || "Not specified", 200),
    mode: capLength(body.mode?.trim() || "Not specified", 200),
    place: capLength(body.place?.trim() || "", 200),
    message: capLength(body.message?.trim() || "", 2000),
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
