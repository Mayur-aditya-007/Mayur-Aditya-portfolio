import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, organization, phone, service, budget, details } = body;

    if (!name || !phone || !details) {
      return NextResponse.json(
        { error: 'Name, phone number, and project details are required.' },
        { status: 400 }
      );
    }

    // Clean phone number for WhatsApp deep link
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const waPhone = cleanPhone.startsWith('91') && cleanPhone.length === 12
      ? cleanPhone
      : cleanPhone.length === 10
      ? `91${cleanPhone}`
      : cleanPhone;

    const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(
      `Hi ${name}, thank you for reaching out via my portfolio regarding ${service}. Let's discuss your project requirements.`
    )}`;

    // Console logging
    console.log('════════════════════════════════════════════════════');
    console.log('🚀 NEW CLIENT LEAD INQUIRY RECEIVED');
    console.log(`👤 Client: ${name} (${organization || 'Individual'})`);
    console.log(`📱 WhatsApp/Phone: ${phone}`);
    console.log(`🛠️ Service Requested: ${service}`);
    console.log(`💰 Budget: ${budget}`);
    console.log(`📝 Details: ${details}`);
    console.log(`⏰ Timestamp: ${new Date().toISOString()}`);
    console.log('════════════════════════════════════════════════════');

    // Setup SMTP Transporter
    const host = process.env.SMTP_HOST || 'smtp.gmail.com';
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER || 'campusbridge007@gmail.com';
    const pass = process.env.SMTP_PASS || 'dlvp mkzs oziu embd';
    const from = process.env.SMTP_FROM || `"Portfolio Lead Alert" <${user}>`;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || 'mayuraditya07@outlook.com';

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for 587
      auth: {
        user,
        pass,
      },
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f2e9e4; color: #22223b; padding: 24px; }
          .card { background-color: #ffffff; border: 2px solid #c9ada7; border-radius: 16px; padding: 28px; max-width: 580px; margin: 0 auto; box-shadow: 0 4px 16px rgba(34,34,59,0.08); }
          .header { border-bottom: 2px solid #f2e9e4; padding-bottom: 16px; margin-bottom: 20px; }
          .badge { background-color: #22223b; color: #f2e9e4; font-size: 11px; font-weight: bold; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px; }
          .title { font-size: 20px; font-weight: 800; color: #22223b; margin-top: 12px; margin-bottom: 4px; }
          .field-group { margin-bottom: 14px; }
          .label { font-size: 11px; font-weight: bold; color: #4a4e69; text-transform: uppercase; margin-bottom: 2px; }
          .value { font-size: 15px; font-weight: 600; color: #22223b; }
          .details-box { background-color: #f2e9e4; border: 1px solid #c9ada7; border-radius: 12px; padding: 16px; margin-top: 16px; font-size: 14px; color: #22223b; line-height: 1.5; white-space: pre-wrap; }
          .btn-wa { display: inline-block; background-color: #128C7E; color: #ffffff !important; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: bold; font-size: 14px; margin-top: 20px; }
          .footer { font-size: 11px; color: #9a8c98; text-align: center; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <span class="badge">🔥 New Portfolio Lead</span>
            <div class="title">${name} is requesting a project quote</div>
          </div>

          <div class="field-group">
            <div class="label">Client Name:</div>
            <div class="value">${name}</div>
          </div>

          <div class="field-group">
            <div class="label">Organization / Business:</div>
            <div class="value">${organization || 'Not Specified (Individual)'}</div>
          </div>

          <div class="field-group">
            <div class="label">WhatsApp Number / Phone:</div>
            <div class="value"><a href="tel:${phone}" style="color: #22223b; text-decoration: none;">${phone}</a></div>
          </div>

          <div class="field-group">
            <div class="label">Service Needed:</div>
            <div class="value">${service}</div>
          </div>

          <div class="field-group">
            <div class="label">Estimated Budget:</div>
            <div class="value" style="color: #128C7E;">${budget}</div>
          </div>

          <div class="field-group">
            <div class="label">Project Details & Requirements:</div>
            <div class="details-box">${details}</div>
          </div>

          <div style="text-align: center;">
            <a href="${waLink}" class="btn-wa">💬 Click to Open WhatsApp Chat with Client</a>
          </div>

          <div class="footer">
            Submitted via Mayur Aditya Rawat Portfolio • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
          </div>
        </div>
      </body>
      </html>
    `;

    // Send Mail via SMTP
    const info = await transporter.sendMail({
      from,
      to: [receiver, user], // Send to receiver (mayuraditya07@outlook.com) and keep user in copy
      subject: `🚀 Lead: ${name} (${service}) - ${budget}`,
      text: `New Lead:\nName: ${name}\nOrg: ${organization}\nPhone: ${phone}\nService: ${service}\nBudget: ${budget}\nDetails: ${details}\nWhatsApp: ${waLink}`,
      html: htmlContent,
    });

    console.log('✅ Email notification dispatched successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      message: 'Inquiry received and notification email sent successfully.',
      messageId: info.messageId,
    });
  } catch (error: unknown) {
    const err = error as Error;
    console.error('API /contact error sending email:', err);
    return NextResponse.json(
      { error: 'Failed to dispatch email notification', details: err?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
