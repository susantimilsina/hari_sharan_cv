import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: wire up a real email provider (e.g. Resend, SendGrid, Nodemailer)
  // For now, log to console and return success
  console.log("Contact form submission:", { name, email, subject, message });

  return NextResponse.json({ ok: true });
}
