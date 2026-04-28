import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, client_name, date, time } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'The Lash Atelier <appointments@yourdomain.com>',
      to: [email],
      subject: '✨ Your Lash Appointment is Confirmed!',
      html: `
        <div style="font-family: Georgia, serif; color: #333;">
          <h1 style="color: #D4AF37;">Hello, ${client_name}!</h1>
          <p>We are delighted to confirm your appointment at <strong>The Lash Atelier</strong>.</p>
          <hr style="border: 0; border-top: 1px solid #D4AF37;" />
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p>📍 Located near Seton, SE, Calgary, AB</p>
          <p style="font-style: italic; margin-top: 20px;">Experience the art of the lash.</p>
        </div>
      `,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}