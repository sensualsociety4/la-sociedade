'use client'

import BookingCalendar from '@/components/BookingCalendar'

export default function Booking() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Reserve Your Experience</p>
          <h1 className="section-title text-4xl md:text-5xl text-white mb-4">Book an Event</h1>
          <p className="text-gray-500 text-sm max-w-lg mx-auto font-light">
            Select your preferred date and time. We&apos;ll confirm your booking within 24 hours.
          </p>
          <div className="divider-line max-w-[80px] mx-auto mt-6" />
        </div>

        <div className="gold-card rounded p-8 md:p-10">
          <BookingCalendar />
        </div>
      </div>
    </div>
  )
}
