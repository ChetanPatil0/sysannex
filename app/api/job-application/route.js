import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName");
    const middleName = formData.get("middleName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const relevantExp = formData.get("relevantExp");
    const currentLocation = formData.get("currentLocation");
    const resume = formData.get("resume");
    const position = formData.get("position");

    const fullName = `${firstName} ${middleName ? middleName + ' ' : ''}${lastName}`.trim();

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    let buffer = null;
    let fileName = null;

    if (resume && typeof resume.arrayBuffer === "function") {
      buffer = Buffer.from(await resume.arrayBuffer());
      const safe = fullName.replace(/\s+/g, "_").toLowerCase();
      fileName = `${safe}_${Date.now()}.pdf`;
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
      .label { color: #64748b; width: 160px; font-weight: 500; }
      .value { color: #0f172a; font-weight: 500; }
      .footer { background: #0f172a; color: #cbd5e1; text-align: center; padding: 24px 20px; font-size: 13px; line-height: 1.5; }
      .note { background: #f8fafc; border-left: 4px solid #2563eb; padding: 16px; margin: 24px 0; border-radius: 6px; font-size: 14px; color: #475569; }
      @media only screen and (max-width: 600px) {
        .content { padding: 24px 18px; }
        .label { display: block; width: 100%; margin-bottom: 4px; }
        .value { display: block; }
      }
    `;

    await Promise.all([
      transporter.sendMail({
        from: `"SysAnnex Careers" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECEIVER,
        replyTo: email,
        subject: `New Job Application - ${position || 'Job Application'}`,
        html: `
        <style>${baseStyle}</style>
        <div class="container">
          <div class="content">
            <h2 style="margin:0 0 24px 0; color:#0f172a;">New Job Application Received</h2>
            <table class="table">
              <tr><td class="label">Full Name</td><td class="value"><b>${fullName}</b></td></tr>
              <tr><td class="label">Position Applied</td><td class="value"><b>${position || '—'}</b></td></tr>
              <tr><td class="label">Email</td><td class="value"><b>${email}</b></td></tr>
              <tr><td class="label">Phone</td><td class="value"><b>${phone}</b></td></tr>
              <tr><td class="label">Experience</td><td class="value"><b>${relevantExp || '—'} years</b></td></tr>
              <tr><td class="label">Location</td><td class="value"><b>${currentLocation || '—'}</b></td></tr>
              <tr><td class="label">Resume</td><td class="value"><b>${buffer ? 'Attached' : 'Not Provided'}</b></td></tr>
            </table>

            <div class="note">
              <strong>System Note:</strong> Application received on 
              ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </div>

          </div>
          <div class="footer">
            <img src="${logoUrl}" height="38" /><br><br>
            SysAnnex © ${currentYear} • All Rights Reserved
          </div>
        </div>
        `,
        attachments: buffer
          ? [{ filename: fileName, content: buffer }]
          : [],
      }),

      transporter.sendMail({
        from: `"SysAnnex Careers" <${process.env.SMTP_USER}>`,
        to: email,
        replyTo: process.env.SMTP_USER,
        subject: `Application Received - ${position || 'SysAnnex Careers'}`,
        html: `
        <style>${baseStyle}</style>
        <div class="container">
          <div class="content">

            <div class="heading">Dear ${fullName},</div>

            <p class="text">
              Thank you for applying to <strong>SysAnnex</strong>. 
              We have successfully received your job application.
            </p>

            <p class="text" style="margin-top:16px;">
              Application Details:
            </p>

            <table class="table">
              <tr><td class="label">Full Name</td><td class="value"><b>${fullName}</b></td></tr>
              <tr><td class="label">Position</td><td class="value"><b>${position || '—'}</b></td></tr>
              <tr><td class="label">Email</td><td class="value"><b>${email}</b></td></tr>
              <tr><td class="label">Phone</td><td class="value"><b>${phone}</b></td></tr>
              <tr><td class="label">Experience</td><td class="value"><b>${relevantExp || '—'} years</b></td></tr>
              <tr><td class="label">Location</td><td class="value"><b>${currentLocation || '—'}</b></td></tr>
                <tr><td class="label">Resume</td><td class="value"><b>${buffer ? 'Attached' : 'Not Provided'}</b></td></tr>
            </table>

            <div class="note">
              Our hiring team will review your application and contact you if your profile matches our requirements.
            </div>

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
            <img src="${logoUrl}" height="38" /><br><br>
            ${process.env.CONTACT_RECEIVER}<br>
            © ${currentYear} SysAnnex. All Rights Reserved.
          </div>
        </div>
        `,
      })
    ]);

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully!"
    });

  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}