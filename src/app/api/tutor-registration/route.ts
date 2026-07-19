import { NextResponse } from "next/server";
import { appendTutorApplication } from "@/lib/googleSheets";
import { notifyTutorApplicationByEmail } from "@/lib/notifyEmail";

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

  const classLevels = Array.isArray(body.classLevels)
    ? body.classLevels.join(", ")
    : body.classLevels?.trim() || "Not specified";

  const application = {
    name: body.name.trim(),
    phone: body.phone.trim(),
    email: body.email?.trim() || "",
    qualification: body.qualification?.trim() || "Not specified",
    experience: body.experience?.trim() || "Not specified",
    classLevels,
    subjects: body.subjects?.trim() || "Not specified",
    mode: body.mode?.trim() || "Not specified",
    message: body.message?.trim() || "",
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
