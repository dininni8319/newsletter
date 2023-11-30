import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  res: NextResponse
) {
 
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  console.log("🚀 ~ file: route.ts:19 ~ apiKey:", apiKey)

  if (!apiKey) {
    throw new Error('SENDGRID_API_KEY is missing')
  }

  sendgrid.setApiKey(apiKey);

  const { email } = await req.json();
  console.log("🚀 ~ file: route.ts:24 ~ email:", email)

  // Basic input validation
  if (!email) {
    return NextResponse.json({ error: "All fields are required" });
  }
  const subject = "Thank you for subscribing!"
  const message = `Thank you for subscribing to my newsletter.
    I will send you an email when I publish a new article.`

  const emailMessage = `
    Subject: ${subject}\r\n
    Email: ${email}\r\n
    Message: ${message}\r\n
  `;

  try {
    await sendgrid.send({
      to: 's.dininni@yahoo.com',
      from: 'salvatoredininni1@gmail.com',
      subject: `New message from ${subject}`,
      html: emailMessage.replace(/\r\n/g, '<br />'),
    });

    return NextResponse.json({ message: 'OK' });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error.message }
    );
  }
}
