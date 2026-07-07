'use client'

import { useState, useMemo } from 'react'

const timeSlots = [
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00',
]

const serviceOptions = [
  'Private Social Event',
  'Swingers Social',
  'Exclusive Party',
  'VIP Event Hosting',
  'Bespoke Event',
  'Other',
]

export default function BookingCalendar() {
  const today = useMemo(() => {
    const d = new Date()
    return new Date(d.getFullYear(), d.getMonth(), d.getDate())
  }, [])

  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
    setSelectedDate(null)
    setSelectedTime(null)
  }

  const isPastDate = (day) => {
    const date = new Date(currentYear, currentMonth, day)
    return date < today
  }

  const handleDateClick = (day) => {
    if (isPastDate(day)) return
    setSelectedDate(day)
    setSelectedTime(null)
  }

  const handleTimeClick = (time) => {
    setSelectedTime(time)
  }

  const handleNextStep = () => {
    if (step === 1 && selectedDate && selectedTime) setStep(2)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          date: `${monthName} ${selectedDate}, ${currentYear}`,
          time: selectedTime,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setSubmitted(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 rounded-full bg-gold-400/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl text-white mb-4">Booking Request Sent!</h3>
        <p className="text-gray-400 max-w-md mx-auto">
          Thank you! We&apos;ll review your request and get back to you within 24 hours to confirm your booking.
        </p>
      </div>
    )
  }

  const renderCalendar = () => {
    const days = []
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    days.push(
      <div key="header" className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((name) => (
          <div key={name} className="text-center text-xs text-gray-500 uppercase tracking-wider py-2">
            {name}
          </div>
        ))}
      </div>
    )

    const weeks = []
    let dayCells = []

    for (let i = 0; i < firstDayOfMonth; i++) {
      dayCells.push(<div key={`empty-${i}`} />)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day)
      const isToday = date.getTime() === today.getTime()
      const past = isPastDate(day)
      const selected = selectedDate === day

      dayCells.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          disabled={past}
          className={`aspect-square flex items-center justify-center text-sm rounded-full transition-all duration-200 ${
            past
              ? 'text-gray-700 cursor-not-allowed'
              : selected
                ? 'bg-gold-400 text-dark-950 font-medium'
                : isToday
                  ? 'border border-gold-400/50 text-gold-400 hover:bg-gold-400/10'
                  : 'text-gray-300 hover:bg-white/5'
          }`}
        >
          {day}
        </button>
      )

      if ((firstDayOfMonth + day) % 7 === 0 || day === daysInMonth) {
        weeks.push(
          <div key={`week-${day}`} className="grid grid-cols-7 gap-1">
            {dayCells}
          </div>
        )
        dayCells = []
      }
    }

    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            className="p-2 text-gray-400 hover:text-gold-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h4 className="font-serif text-xl text-white">{monthName} {currentYear}</h4>
          <button
            onClick={nextMonth}
            className="p-2 text-gray-400 hover:text-gold-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        {days}
        {weeks}
      </div>
    )
  }

  const renderTimeSlots = () => (
    <div>
      <h4 className="font-serif text-lg text-white mb-4">Select Time</h4>
      <div className="grid grid-cols-3 gap-2">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => handleTimeClick(time)}
            className={`py-3 px-4 text-sm rounded transition-all duration-200 ${
              selectedTime === time
                ? 'bg-gold-400 text-dark-950 font-medium'
                : 'border border-white/10 text-gray-300 hover:border-gold-400/50 hover:text-gold-400'
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  )

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2 uppercase tracking-[0.1em]">Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2 uppercase tracking-[0.1em]">Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2 uppercase tracking-[0.1em]">Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2 uppercase tracking-[0.1em]">Guests</label>
          <select
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
          >
            {[1,2,3,4,5,6,7,8,9,10,'10+'].map((n) => (
              <option key={n} value={n} className="bg-dark-950">{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2 uppercase tracking-[0.1em]">Service Type *</label>
        <select
          required
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
        >
          <option value="" className="bg-dark-950">Select a service</option>
          {serviceOptions.map((s) => (
            <option key={s} value={s} className="bg-dark-950">{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2 uppercase tracking-[0.1em]">Additional Details</label>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm text-center">{error}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 bg-gold-400 text-dark-950 font-medium uppercase tracking-[0.15em] text-sm hover:bg-gold-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded"
      >
        {submitting ? 'Sending...' : 'Submit Booking Request'}
      </button>
    </form>
  )

  return (
    <div>
      <div className="flex items-center justify-center gap-4 mb-12">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step >= s ? 'bg-gold-400 text-dark-950' : 'bg-white/5 text-gray-500'
            }`}>
              {s}
            </div>
            <span className={`text-sm ${step >= s ? 'text-white' : 'text-gray-500'}`}>
              {s === 1 ? 'Date & Time' : 'Details'}
            </span>
            {s < 2 && <div className="w-12 h-[1px] bg-white/10 mx-2" />}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {renderCalendar()}
          <div>
            {selectedDate && (
              <div className="mb-6 p-4 border border-gold-400/20 rounded-lg bg-gold-400/5">
                <p className="text-sm text-gray-400">Selected Date</p>
                <p className="text-white font-medium">{monthName} {selectedDate}, {currentYear}</p>
              </div>
            )}
            {renderTimeSlots()}

            <button
              onClick={handleNextStep}
              disabled={!selectedDate || !selectedTime}
              className={`w-full mt-8 py-4 rounded font-medium uppercase tracking-[0.15em] text-sm transition-all duration-300 ${
                selectedDate && selectedTime
                  ? 'bg-gold-400 text-dark-950 hover:bg-gold-300'
                  : 'bg-white/5 text-gray-500 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 p-4 border border-gold-400/20 rounded-lg bg-gold-400/5">
            <p className="text-sm text-gray-400">
              {monthName} {selectedDate}, {currentYear} at {selectedTime}
            </p>
            <button
              onClick={() => setStep(1)}
              className="text-gold-400 text-sm hover:underline mt-1 inline-block"
            >
              Change date/time
            </button>
          </div>
          {renderForm()}
        </div>
      )}
    </div>
  )
}
