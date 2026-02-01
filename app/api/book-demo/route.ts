import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import { escapeHtml, isValidEmail, LIMITS, trimToLimit } from '@/lib/sanitize';

const BOOK_DEMO_RATE_LIMIT = 10; // requests per minute per IP

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  if (!rateLimit(ip, BOOK_DEMO_RATE_LIMIT)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a minute.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const raw = {
      name: body?.name,
      email: body?.email,
      phone: body?.phone,
      company: body?.company,
      message: body?.message,
    };

    const name = trimToLimit(raw.name, LIMITS.name);
    const email = trimToLimit(raw.email, LIMITS.email);
    const phone = trimToLimit(raw.phone, LIMITS.phone);
    const company = trimToLimit(raw.company, LIMITS.company);
    const message = trimToLimit(raw.message, LIMITS.message);

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Get Gmail credentials from environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error('Gmail credentials not configured');
      return NextResponse.json(
        { success: true, message: 'Demo request received' },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company || 'Not provided');
    const safeMessage = escapeHtml(message || 'No message provided');

    const emailSubject = `🎯 New Demo Request from ${name}`;
    const emailBody = `
New Demo Request Received!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Contact Information:
   Name: ${name}
   Email: ${email}
   Phone: ${phone}
   Company: ${company || 'Not provided'}

💬 Message:
${message || 'No message provided'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Submitted: ${new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'long',
    })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this email to contact ${name}.
    `.trim();

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #059669; }
    .value { color: #333; margin-left: 10px; }
    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">🎯 New Demo Request</h2>
      <p style="margin: 5px 0 0 0;">Voice.hypeon.ai</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name:</span>
        <span class="value">${safeName}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value"><a href="mailto:${safeEmail}">${safeEmail}</a></span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value"><a href="tel:${safePhone}">${safePhone}</a></span>
      </div>
      <div class="field">
        <span class="label">Company:</span>
        <span class="value">${safeCompany}</span>
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${safeMessage}
        </div>
      </div>
      <div class="footer">
        <p>Submitted on ${new Date().toLocaleString('en-US', {
          timeZone: 'America/New_York',
          dateStyle: 'full',
          timeStyle: 'long',
        })}</p>
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();

    await transporter.sendMail({
      from: `"Voice.hypeon.ai Demo" <${gmailUser}>`,
      to: 'yash@hypeon.ai',
      replyTo: email,
      subject: emailSubject,
      text: emailBody,
      html: emailHtml,
    });

    console.log('Email sent successfully to yash@hypeon.ai');

    return NextResponse.json(
      { success: true, message: 'Demo request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 }
    );
  }
}
