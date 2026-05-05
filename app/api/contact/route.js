// app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, message } = await request.json();

        if (!name || !email) {
            return new Response(
                JSON.stringify({ error: 'Name and email are required' }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                },
            );
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Delposh Fitness Website" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_EMAIL || 'info@delposhfitness.com',
            subject: `New Free Trial Request from ${name}`,
            html: `
        <div style="font-family: 'Oswald', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 30px; border-radius: 10px; border: 1px solid #DAA520;">
          <h1 style="color: #DAA520; font-size: 28px; margin-bottom: 20px;">🏋️ New Free Trial Request</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 12px; border-bottom: 1px solid #333; color: #DAA520;"><strong>Name:</strong></td><td style="padding: 12px; border-bottom: 1px solid #333;">${name}</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid #333; color: #DAA520;"><strong>Email:</strong></td><td style="padding: 12px; border-bottom: 1px solid #333;">${email}</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid #333; color: #DAA520;"><strong>Phone:</strong></td><td style="padding: 12px; border-bottom: 1px solid #333;">${phone || 'N/A'}</td></tr>
            <tr><td style="padding: 12px; border-bottom: 1px solid #333; color: #DAA520;"><strong>Message:</strong></td><td style="padding: 12px; border-bottom: 1px solid #333;">${message || 'N/A'}</td></tr>
          </table>
          <p style="color: #666; margin-top: 20px; font-size: 14px;">This lead was generated from the Delposh Fitness website.</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Email sent successfully',
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            },
        );
    } catch (error) {
        console.error('Email send error:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
