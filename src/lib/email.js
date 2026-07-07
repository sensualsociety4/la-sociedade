import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export async function sendEmail({ to, subject, html }) {
  if (!resend) {
    console.log('Email not sent: Resend not configured. Set RESEND_API_KEY in .env.local')
    console.log(`Would have sent email to: ${to}, subject: ${subject}`)
    return { success: true, skipped: true }
  }

  const from = process.env.EMAIL_FROM || 'LA SOCIEDAD <noreply@la-sociedad.club>'

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject,
    html,
  })

  if (error) throw error
  return { success: true, data }
}
