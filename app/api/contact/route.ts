import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
require("dotenv").config();

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, email, phone, message } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    secure: true,
    auth: {
      user: process.env.FROM,
      pass: process.env.PASS,
    },
  });

  const mailData = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: `Formularz na stronie: Wiadomość od "${name}"`,
    html: `<p>${message}</p><div>${name} <br />email: ${email} <br />tel: ${phone}</div>`,
  };

  try {
    await transporter.sendMail(mailData);
    return NextResponse.json({ email: req.body }, { status: 200 });
  } catch (error) {
    console.error("W trakcie wysyłania email wystąpił błąd:", error);
    return NextResponse.json(
      { error: "Błąd wysyłania email" },
      { status: 500 }
    );
  }
}