import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Get Gmail credentials from environment variables
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error('Gmail credentials not configured');
      // Return success anyway to not expose configuration issues to users
      return NextResponse.json(
        { success: true, message: 'Demo request received' },
        { status: 200 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Email content
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
  timeStyle: 'long'
})}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this email to contact ${name}.
    `.trim();

    // HTML version for better formatting
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
        <span class="value">${name}</span>
      </div>
      <div class="field">
        <span class="label">Email:</span>
        <span class="value"><a href="mailto:${email}">${email}</a></span>
      </div>
      <div class="field">
        <span class="label">Phone:</span>
        <span class="value"><a href="tel:${phone}">${phone}</a></span>
      </div>
      <div class="field">
        <span class="label">Company:</span>
        <span class="value">${company || 'Not provided'}</span>
      </div>
      <div class="field">
        <span class="label">Message:</span>
        <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${message || 'No message provided'}
        </div>
      </div>
      <div class="footer">
        <p>Submitted on ${new Date().toLocaleString('en-US', { 
          timeZone: 'America/New_York',
          dateStyle: 'full',
          timeStyle: 'long'
        })}</p>
      </div>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Send email
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
