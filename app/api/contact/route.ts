import { Resend } from "resend";
import { NextResponse } from "next/server";
import { env } from "@/lib/env";

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["fbi0258zzz@gmail.com"],
      subject: `聯絡表單: ${subject}`,
      html: `
        <h2>新的聯絡表單訊息</h2>
        <p><strong>姓名:</strong> ${name}</p>
        <p><strong>電子郵件:</strong> ${email}</p>
        <p><strong>主旨:</strong> ${subject}</p>
        <p><strong>訊息:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
