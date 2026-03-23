import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, country, state, place, message, _subject, type } = body;

    // Validate environment variables
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_EMAIL) {
      console.error('Missing SMTP configuration in environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured correctly.' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: parseInt(SMTP_PORT) === 465, // true for 465, false for others
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Prepare email content
    const isSampleRequest = _subject?.toLowerCase().includes('sample');
    const subject = _subject || `New message from ${name}`;
    
    const htmlContent = `
      <h2>${isSampleRequest ? 'New Sample Test Request' : 'New Contact Form Submission'}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Location:</strong> ${place}, ${state}, ${country}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr />
      <p>This email was sent from the SM ELECTRICAL website contact form.</p>
    `;

    // Send mail
    await transporter.sendMail({
      from: `"${name}" <${SMTP_USER}>`, // Recommended to use SMTP_USER as sender to avoid spam filters
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: subject,
      html: htmlContent,
    });

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
