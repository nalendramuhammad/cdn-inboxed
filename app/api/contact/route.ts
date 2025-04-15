import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { generateEmailTemplate } from "../../../lib/emailTemplate";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, phone, companyName, message } = body;

  if (!firstName || !lastName || !email || !phone || !companyName || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail", // atau sesuaikan dengan provider kamu (contoh: outlook, smtp custom, dsb)
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Inboxed Mail" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "📬 Inboxed Mail - New Contact Form Submission",
    html: generateEmailTemplate({
      firstName,
      lastName,
      email,
      phone,
      companyName,
      message,
    }),
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
