import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Configure your email service here
// For Gmail: Create an App Password and use those credentials
// Visit: https://myaccount.google.com/apppasswords

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL || 'your-email@gmail.com',
    pass: process.env.GMAIL_PASSWORD || 'your-app-password',
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate inputs
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email
    const mailOptions = {
      from: process.env.GMAIL_EMAIL || 'noreply@stephenbacani.com',
      to: 'bacanistephen1@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #00d4ff; margin: 0;">New Message from Your Portfolio</h2>
          </div>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p style="margin: 0;"><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #1f2937;">Message:</h3>
            <p style="color: #374151; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          
          <div style="text-align: center; color: #6b7280; font-size: 12px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Reply to this email to respond to the sender directly.</p>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const confirmationEmail = {
      from: process.env.GMAIL_EMAIL || 'noreply@stephenbacani.com',
      to: email,
      subject: 'Message Received - Stephen Bacani',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #00d4ff; margin: 0;">Thank You!</h2>
          </div>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
            <p>Hi ${escapeHtml(name)},</p>
            <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible.</p>
            <p style="margin: 20px 0;">
              <strong>Your Message:</strong><br>
              Subject: ${escapeHtml(subject)}<br>
              <br>
              <em>${escapeHtml(message)}</em>
            </p>
            <p>I appreciate your interest and look forward to connecting with you!</p>
            <p>Best regards,<br><strong>Stephen Bacani</strong></p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
