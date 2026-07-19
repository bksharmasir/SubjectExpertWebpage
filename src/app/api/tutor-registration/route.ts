import { NextResponse } from "next/server";
import { appendTutorApplication } from "@/lib/googleSheets";
import { notifyTutorApplicationByEmail } from "@/lib/notifyEmail";
import { capLength, isValidEmail, isValidPhone } from "@/lib/security";
import { getClientIp, isRateLimited } from "@/lib/rateLimit";

type TutorPayload = {
  name?: string;
  phone?: string;
  email?: string;
  qualification?: string;
  experience?: string;
  classLevels?: string[] | string;
  subjects?: string;
  mode?: string;
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

  const body: TutorPayload = await request.json();

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

  const email = body.email?.trim() || "";
  if (email && !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const classLevels = Array.isArray(body.classLevels)
    ? body.classLevels.join(", ")
    : body.classLevels?.trim() || "Not specified";

  const application = {
    name: capLength(body.name.trim(), 200),
    phone: capLength(body.phone.trim(), 20),
    email: capLength(email, 200),
    qualification: capLength(body.qualification?.trim() || "Not specified", 200),
    experience: capLength(body.experience?.trim() || "Not specified", 200),
    classLevels: capLength(classLevels, 300),
    subjects: capLength(body.subjects?.trim() || "Not specified", 300),
    mode: capLength(body.mode?.trim() || "Not specified", 200),
    message: capLength(body.message?.trim() || "", 2000),
  };

  try {
    await appendTutorApplication(application);
  } catch (error) {
    console.error("[tutor-application] failed to save application:", error);
    return NextResponse.json(
      { error: "Something went wrong saving your application. Please call or WhatsApp instead." },
      { status: 500 }
    );
  }

  await notifyTutorApplicationByEmail(application);

  return NextResponse.json({ ok: true });
}
