'use client'

import { useState, useMemo } from 'react'

const timeSlots = [
  '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00', '01:00', '02:00',
]

const serviceOptions = [
  'Swingers Night',
  'Private Kinky Party',
  'Bondage & BDSM Experience',
  'VIP Sex Party',
  'Full Venue Hire',
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
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1) }
    else { setCurrentMonth(currentMonth - 1) }
    setSelectedDate(null); setSelectedTime(null)
  }

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1) }
    else { setCurrentMonth(currentMonth + 1) }
    setSelectedDate(null); setSelectedTime(null)
  }

  const isPastDate = (day) => new Date(currentYear, currentMonth, day) < today

  const handleDateClick = (day) => {
    if (isPastDate(day)) return
    setSelectedDate(day)
    setSelectedTime(null)
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
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded border gold-border flex items-center justify-center">
          <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="section-title text-2xl text-white mb-3">Request Sent</h3>
        <div className="divider-line max-w-[60px] mx-auto mb-3" />
        <p className="text-gray-500 text-sm max-w-sm mx-auto font-light">
          We&apos;ll review your request and confirm within 24 hours.
        </p>
      </div>
    )
  }

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const days = []
  days.push(
    <div key="header" className="grid grid-cols-7 gap-px mb-1">
      {dayNames.map((name) => (
        <div key={name} className="text-center text-[10px] text-gray-600 uppercase tracking-wider font-mono py-2">{name}</div>
      ))}
    </div>
  )

  let dayCells = []
  for (let i = 0; i < firstDayOfMonth; i++) dayCells.push(<div key={`e-${i}`} />)

  for (let day = 1; day <= daysInMonth; day++) {
    const past = isPastDate(day)
    const selected = selectedDate === day
    dayCells.push(
      <button
        key={day}
        onClick={() => handleDateClick(day)}
        disabled={past}
        className={`aspect-square flex items-center justify-center text-xs rounded transition-all duration-200 ${
          past ? 'text-gray-800 cursor-not-allowed' : selected
            ? 'bg-gold-400 text-[#050505] font-medium'
            : 'text-gray-400 hover:text-gold-400 hover:bg-white/[0.02]'
        }`}
      >
        {day}
      </button>
    )
    if ((firstDayOfMonth + day) % 7 === 0 || day === daysInMonth) {
      days.push(<div key={`w-${day}`} className="grid grid-cols-7 gap-px">{dayCells}</div>)
      dayCells = []
    }
  }

  return (
    <div>
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-4 mb-10">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded flex items-center justify-center text-[11px] font-mono ${
              step >= s ? 'bg-gold-400 text-[#050505]' : 'border border-gold-400/10 text-gray-600'
            }`}>
              {s}
            </div>
            <span className={`text-xs font-mono uppercase tracking-[0.1em] ${step >= s ? 'text-gray-300' : 'text-gray-600'}`}>
              {s === 1 ? 'Date & Time' : 'Details'}
            </span>
            {s < 2 && <div className="w-8 h-[1px] bg-gold-400/10 mx-2" />}
          </div>
        ))}
      </div>

      {step === 1 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Calendar */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <button onClick={prevMonth} className="p-1 text-gray-600 hover:text-gold-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h4 className="section-title text-base text-white">{monthName} {currentYear}</h4>
              <button onClick={nextMonth} className="p-1 text-gray-600 hover:text-gold-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {days}
          </div>

          {/* Time slots */}
          <div>
            {selectedDate && (
              <div className="mb-5 p-4 gold-border rounded">
                <p className="text-gray-600 text-xs font-mono uppercase tracking-[0.1em]">Selected</p>
                <p className="text-white text-sm font-medium mt-1">{monthName} {selectedDate}, {currentYear}</p>
              </div>
            )}
            <h4 className="section-title text-sm text-white mb-4">Select Time</h4>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2.5 px-3 text-xs rounded transition-all duration-200 ${
                    selectedTime === time
                      ? 'bg-gold-400 text-[#050505] font-medium'
                      : 'border gold-border text-gray-400 hover:border-gold-400/30 hover:text-gold-400'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              disabled={!selectedDate || !selectedTime}
              className={`w-full mt-6 py-3 rounded text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300 ${
                selectedDate && selectedTime
                  ? 'gold-btn'
                  : 'border gold-border text-gray-600 cursor-not-allowed'
              }`}
            >
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-xl mx-auto">
          <div className="mb-6 p-4 gold-border rounded">
            <p className="text-gray-600 text-xs font-mono">
              {monthName} {selectedDate}, {currentYear} at {selectedTime}
            </p>
            <button onClick={() => setStep(1)} className="text-gold-400 text-xs font-mono hover:underline mt-1 inline-block">
              Change
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-[0.15em] font-mono">Name *</label>
                <input type="text" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="futuristic-input rounded w-full px-4 py-3 text-sm text-white" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-[0.15em] font-mono">Email *</label>
                <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} className="futuristic-input rounded w-full px-4 py-3 text-sm text-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-[0.15em] font-mono">Phone</label>
                <input type="tel" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} className="futuristic-input rounded w-full px-4 py-3 text-sm text-white" />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-[0.15em] font-mono">Guests</label>
                <select value={form.guests} onChange={(e) => setForm({...form, guests: e.target.value})} className="futuristic-input rounded w-full px-4 py-3 text-sm text-white">
                  {[1,2,3,4,5,6,7,8,9,10,'10+'].map((n) => (
                    <option key={n} value={n} className="bg-[#050505]">{n}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-2 uppercase tracking-[0.15em] font-mono">Service *</label>
              <select required value={form.service} onChange={(e) => setForm({...form, service: e.target.value})} className="futuristic-input rounded w-full px-4 py-3 text-sm text-white">
                <option value="" className="bg-[#050505]">Select a service</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s} className="bg-[#050505]">{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-2 uppercase tracking-[0.15em] font-mono">Details</label>
              <textarea rows={3} value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} className="futuristic-input rounded w-full px-4 py-3 text-sm text-white resize-none" />
            </div>

            {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            <button type="submit" disabled={submitting} className="gold-btn w-full py-3.5 rounded text-xs">
              {submitting ? 'Sending...' : 'Submit Booking Request'}
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
