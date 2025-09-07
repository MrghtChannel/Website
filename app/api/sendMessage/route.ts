import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstname, lastname, email, subject, message } = await req.json();

    if (!firstname || !lastname || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const telegramMessage = `
New contact form submission:
Name: ${firstname} ${lastname}
Email: ${email}
Subject: ${subject}
Message: ${message}
    `;

    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
    const token = process.env.TELEGRAM_BOT_TOKEN;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: telegramMessage }),
    });

    return NextResponse.json({ message: "Message sent to Email" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}
