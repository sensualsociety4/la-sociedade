'use client'

import BookingCalendar from '@/components/BookingCalendar'

export default function Booking() {
  return (
    <div>
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="section-label mb-4">Reserve Your Experience</p>
            <h1 className="heading-lg text-white mb-4">Book an Event</h1>
            <p className="body-sm max-w-lg mx-auto">Select your preferred date and time. We&apos;ll confirm your booking within 24 hours.</p>
          </div>

          <div className="poster-card p-8 md:p-10">
            <BookingCalendar />
          </div>
        </div>
      </section>
    </div>
  )
}
