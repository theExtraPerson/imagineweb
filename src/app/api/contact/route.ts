import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please provide a valid email address'),
  role: z.string().min(1, 'Please tell us what you do'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Send email via Resend
    await resend.emails.send({
      from: 'IDA Contact Form <hello@imaginedreams.org>',
      to: 'founder@imaginedreams.org',
      subject: `New contact from ${validated.name} — ${validated.role}`,
      html: `
        <div style="font-family: monospace; line-height: 1.6;">
          <h2 style="font-size: 18px; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="margin-bottom: 20px;">
            <strong>Name:</strong> ${validated.name}<br/>
            <strong>Email:</strong> ${validated.email}<br/>
            <strong>Role:</strong> ${validated.role}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-left: 3px solid #080808;">
            <strong>Message:</strong><br/><br/>
            ${validated.message.replace(/\n/g, '<br/>')}
          </div>
          
          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            Submitted from imaginedreams.org
          </div>
        </div>
      `,
      replyTo: validated.email,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}
