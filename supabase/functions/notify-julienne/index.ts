import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from 'npm:resend'

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

serve(async (req) => {
  try {
    // Webhooks send a wrapper object. We must extract 'record' from it.
    const body = await req.json()
    const record = body.record 

    console.log("Received booking for:", record?.client_name)

    if (!record) {
      return new Response("No record found in payload", { status: 400 })
    }

    // supabase/functions/notify-julienne/index.ts
    await resend.emails.send({
      from: 'Lash Atelier <onboarding@resend.dev>',
      to: 'jannah.ada@urios.edu.ph', // Verified recipient
      subject: `✨ New Booking Request: ${record.client_name}`,
      html: `
        <div style="font-family: 'Georgia', serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 40px; color: #333;">
          <h2 style="color: #D4AF37; text-align: center; letter-spacing: 2px; text-transform: uppercase;">New Request</h2>
          <hr style="border: 0; border-top: 1px solid #D4AF37; margin: 20px 0;">
          <p style="font-size: 16px;">You have a new appointment waiting for review:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Client:</td><td>${record.client_name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Service:</td><td>${record.service_type}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Date:</td><td>${record.appointment_date}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">Time:</td><td>${record.appointment_time}</td></tr>
          </table>
          <div style="text-align: center; margin-top: 30px;">
            <a href="https://supabase.com/dashboard/project/idghflsdqidrquvlkqc/editor/17631" 
              style="background: #D4AF37; color: white; padding: 12px 25px; text-decoration: none; border-radius: 2px; font-size: 14px;">VIEW IN DASHBOARD</a>
          </div>
        </div>
      `
    })

    if (error) throw error

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (err) {
    console.error("Error sending email:", err.message)
    return new Response(err.message, { status: 500 })
  }
})