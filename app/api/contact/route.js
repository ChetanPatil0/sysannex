
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, company, message } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const logoUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`;
    const currentYear = new Date().getFullYear();

    const baseStyle = `
      body { margin:0; padding:0; background:#f8fafc; font-family: Arial, Helvetica, sans-serif; }
      .container { max-width: 620px; margin: 20px auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
      .header { background: #0f172a; padding: 25px; text-align: center; }
      .content { padding: 32px 28px; }
      .heading { font-size: 22px; color: #0f172a; margin: 0 0 16px 0; }
      .text { font-size: 15px; line-height: 1.65; color: #475569; }
      .table { width: 100%; border-collapse: collapse; margin: 20px 0; }
      .table td { padding: 11px 0; vertical-align: top; border-bottom: 1px solid #f1f5f9; }
      .label { color: #64748b; width: 140px; font-weight: 500; }
      .value { color: #0f172a; font-weight: 500; }
      .footer { background: #0f172a; color: #cbd5e1; text-align: center; padding: 24px 20px; font-size: 13px; line-height: 1.5; }
      .footer a { color: #60a5fa; text-decoration: none; }
      .note { background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; margin: 24px 0; border-radius: 6px; font-size: 14px; color: #475569; }
      @media only screen and (max-width: 600px) {
        .content { padding: 24px 18px; }
        .label { display: block; width: 100%; margin-bottom: 4px; }
        .value { display: block; }
      }
    `;

    await Promise.all([
      transporter.sendMail({
        from: `"SysAnnex Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECEIVER,
        replyTo: email,
        subject: `New Enquiry from ${name}`,
        html: `
        <style>${baseStyle}</style>
        <div class="container">
          <div class="content">
            <h2 style="margin:0 0 24px 0; color:#0f172a;">New Contact Enquiry</h2>
            <table class="table">
              <tr><td class="label">Name</td><td class="value"><b>${name}</b></td></tr>
              <tr><td class="label">Email</td><td class="value"><b>${email}</b></td></tr>
              <tr><td class="label">Phone</td><td class="value"><b>${phone}</b></td></tr>
              <tr><td class="label">Company</td><td class="value"><b>${company || '—'}</b></td></tr>
              <tr><td class="label">Message</td><td class="value"><b>${message || '—'}</b></td></tr>
            </table><br>
            <div class="note">
              <strong>System Note:</strong> This enquiry was submitted via the SysAnnex website contact form on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}.
            </div>
          </div><br>
          <div class="footer">
            SysAnnex © ${currentYear} • All Rights Reserved<br>
            This is an automated notification from the website.
          </div>
        </div>
        `,
      }),

      transporter.sendMail({
        from: `"SysAnnex Team" <${process.env.SMTP_USER}>`,
        to: email,
        replyTo: process.env.SMTP_USER,
        subject: "Thank You for Contacting SysAnnex",
        html: `
        <style>${baseStyle}</style>
        <div class="container">
          <div class="content">
            <div class="heading">Dear ${name},</div>
            <p class="text">
              Thank you for reaching out to <strong>SysAnnex</strong>. We have successfully received your enquiry and our team will get back to you shortly.
            </p>
            <p class="text" style="margin-top:16px;">
              Here are the details you submitted:
            </p>
            <table class="table">
              <tr><td class="label">Name  </td><td class="value"><b>${name}</b></td></tr>
              <tr><td class="label">Email </td><td class="value"><b>${email}</b></td></tr>
              <tr><td class="label">Phone </td><td class="value"><b>${phone}</b></td></tr>
              <tr><td class="label">Company </td><td class="value"><b>${company || '—'}</b></td></tr>
              <tr><td class="label">Message </td><td class="value"><b>${message || '—'}</b></td></tr>
            </table><br>
             <p class="text">
              We look forward to assisting you. If your enquiry is urgent, please feel free to contact us directly at <a href="mailto:${process.env.CONTACT_RECEIVER}">${process.env.CONTACT_RECEIVER}</a> or call us at +91 9021173776.
              </p>
            <div style="margin-top: 32px; color:#0f172a; font-weight:600;">
              Best Regards,<br>
             <a href="${process.env.NEXT_PUBLIC_BASE_URL}" 
   target="_blank" 
   style="color:#2563eb; text-decoration:none; font-weight:600;">
   Team SysAnnex
</a>
            </div>
          </div>
          <div class="footer">
              ${process.env.CONTACT_RECEIVER}<br>
              +91 9021173776<br><br>
               <img src="${logoUrl}" height="38" /><br><br>
            © ${currentYear} SysAnnex. All Rights Reserved.
          </div>
        </div>
        `,
      })
    ]);

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully" });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}