import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, email, subject, message } = data

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const adminHtml = `
      <h2>New Contact Message</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        ${subject ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Subject</td><td style="padding:8px;border:1px solid #ddd">${subject}</td></tr>` : ''}
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>
      </table>
    `

    const customerHtml = `
      <h2>Message Received</h2>
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to <strong>LA SOCIEDAD</strong>.</p>
      <p>We have received your message${subject ? ` regarding "${subject}"` : ''} and will get back to you shortly.</p>
      <p>Warm regards,<br/>LA SOCIEDAD Team</p>
    `

    const notificationEmail = process.env.NOTIFICATION_EMAIL || email

    await Promise.all([
      sendEmail({
        to: notificationEmail,
        subject: `New Contact: ${name}${subject ? ` - ${subject}` : ''}`,
        html: adminHtml,
      }),
      sendEmail({
        to: email,
        subject: 'Message Received - LA SOCIEDAD',
        html: customerHtml,
      }),
    ])

    return NextResponse.json({
      success: true,
      message: 'Message received. We will get back to you soon.',
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
