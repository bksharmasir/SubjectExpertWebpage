import { NextResponse } from "next/server";
import { appendNewsletterSignup } from "@/lib/googleSheets";

type NewsletterPayload = {
  email?: string;
  website?: string; // honeypot — real users never fill this in
};

export async function POST(request: Request) {
  const body: NewsletterPayload = await request.json();

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  if (!body.email?.trim()) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  try {
    await appendNewsletterSignup(body.email.trim());
  } catch (error) {
    console.error("[newsletter-signup] failed to save signup:", error);
    return NextResponse.json(
      { error: "Something went wrong signing you up. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
