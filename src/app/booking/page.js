'use client'

import BookingCalendar from '@/components/BookingCalendar'

export default function Booking() {
  return (
    <div className="pt-40 pb-32 px-6 relative">
      <div className="ambient-glow ambient-glow-2" />
      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-gold-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Reserve Your Experience</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6">Book an Event</h1>
          <p className="text-gray-400 max-w-xl mx-auto font-light">
            Select your preferred date and time, and we&apos;ll take care of the rest. A member of our team will confirm your booking within 24 hours.
          </p>
          <div className="luxury-divider max-w-xs mx-auto mt-8">
            <div className="diamond" />
          </div>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12">
          <BookingCalendar />
        </div>
      </div>
    </div>
  )
}
