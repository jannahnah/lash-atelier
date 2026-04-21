import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from 'npm:resend'

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

serve(async (req) => {
  try {
    const body = await req.json()
    const { record, old_record } = body

    // Only send if status changes to 'confirmed'
    if (record.status === 'confirmed' && old_record?.status !== 'confirmed') {
      
      const gCalDate = record.appointment_date.replace(/-/g, '')
      const startTime = record.appointment_time.replace(/:/g, '')
      const eventTitle = encodeURIComponent("Lash Appointment @ The Lash Atelier")
      
      // Google Calendar Link Logic
      const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${gCalDate}T${startTime}/${gCalDate}T${startTime}`


      await resend.emails.send({
        from: 'Lash Atelier <onboarding@resend.dev>',
        to: 'jannah.ada@urios.edu.ph', // Verified recipient for demo
        subject: 'Your Lash Transformation is Confirmed ✨',
        html: `
          <div style="font-family: 'Georgia', serif; max-width: 600px; margin: auto; padding: 40px; background-color: #FAF9F6;">
            <div style="background: white; padding: 40px; border: 1px solid #D4AF37; text-align: center;">
              <h1 style="color: #D4AF37; font-weight: lighter; letter-spacing: 3px; text-transform: uppercase;">Confirmed</h1>
              <p style="font-style: italic; color: #666;">We can't wait to see you, ${record.client_name}.</p>
              
              <div style="margin: 30px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; padding: 20px 0;">
                  <p style="margin: 5px 0;"><strong>${record.service_type}</strong></p>
                  <p style="margin: 5px 0; color: #999;">${record.appointment_date} at ${record.appointment_time}</p>
              </div>

              <a href="${calendarUrl}" 
                style="display: inline-block; background: #D4AF37; color: white; padding: 15px 30px; text-decoration: none; letter-spacing: 1px; font-size: 13px; margin-bottom: 10px;">ADD TO CALENDAR</a>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #FAF9F6; border-radius: 4px;">
                <h4 style="color: #333; margin-top: 0; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Preparation Guide</h4>
                <p style="font-size: 13px; color: #666; line-height: 1.5;">
                  To ensure the best results, please arrive with no eye makeup. 
                  Have questions about aftercare? 
                  <a href="https://lash-atelier.vercel.app/contact#faq" style="color: #D4AF37; text-decoration: underline;">View our FAQs</a>
                </p>
              </div>

              <p style="font-size: 11px; margin-top: 30px;">
                  Questions? <a href="https://lash-atelier.vercel.app/contact" style="color: #999;">Contact Julienne</a>
              </p>
            </div>
          </div>
        `
      })
    }
    return new Response("OK", { status: 200 })
  } catch (err) {
    return new Response(err.message, { status: 500 })
  }
})