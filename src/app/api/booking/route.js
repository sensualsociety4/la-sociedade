import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function POST(request) {
  try {
    const data = await request.json()
    const { name, email, phone, guests, service, message, date, time } = data

    if (!name || !email || !service || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const adminHtml = `
      <h2>New Booking Request</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone || '—'}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Guests</td><td style="padding:8px;border:1px solid #ddd">${guests}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${service}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Date</td><td style="padding:8px;border:1px solid #ddd">${date}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Time</td><td style="padding:8px;border:1px solid #ddd">${time}</td></tr>
        ${message ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>` : ''}
      </table>
    `

    const customerHtml = `
      <h2>Booking Request Received</h2>
      <p>Dear ${name},</p>
      <p>Thank you for your booking request with <strong>LA SOCIEDAD</strong>.</p>
      <p><strong>Details:</strong></p>
      <ul>
        <li>Date: ${date}</li>
        <li>Time: ${time}</li>
        <li>Service: ${service}</li>
        <li>Guests: ${guests}</li>
      </ul>
      <p>We will review your request and confirm within 24 hours.</p>
      <p>Warm regards,<br/>LA SOCIEDAD Team</p>
    `

    const notificationEmail = process.env.NOTIFICATION_EMAIL || email

    await Promise.all([
      sendEmail({
        to: notificationEmail,
        subject: `New Booking: ${name} - ${service}`,
        html: adminHtml,
      }),
      sendEmail({
        to: email,
        subject: 'Booking Request Received - LA SOCIEDAD',
        html: customerHtml,
      }),
    ])

    return NextResponse.json({
      success: true,
      message: 'Booking request received. We will contact you within 24 hours.',
    })
  } catch (error) {
    console.error('Booking API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
