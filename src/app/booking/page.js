'use client'

import BookingCalendar from '@/components/BookingCalendar'

export default function Booking() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4">Reserve Your Experience</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Book an Event</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Select your preferred date and time, and we&apos;ll take care of the rest. A member of our team will confirm your booking within 24 hours.
          </p>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
        </div>

        <div className="border border-white/5 rounded-lg p-8 md:p-12">
          <BookingCalendar />
        </div>
      </div>
    </div>
  )
}
