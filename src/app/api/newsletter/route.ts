import { NextResponse } from "next/server";
import { appendNewsletterSignup } from "@/lib/googleSheets";
import { capLength, isValidEmail } from "@/lib/security";
import { getClientIp, isRateLimited } from "@/lib/rateLimit";

type NewsletterPayload = {
  email?: string;
  website?: string; // honeypot — real users never fill this in
};

export async function POST(request: Request) {
  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const body: NewsletterPayload = await request.json();

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim() || "";
  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    await appendNewsletterSignup(capLength(email, 200));
  } catch (error) {
    console.error("[newsletter-signup] failed to save signup:", error);
    return NextResponse.json(
      { error: "Something went wrong signing you up. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
