'use client'

import { useState } from 'react'

const socialLinks = [
  { name: 'Instagram', handle: '@la_sociedad', href: '#', color: 'hover:text-pink-400' },
  { name: 'Twitter / X', handle: '@la_sociedad', href: '#', color: 'hover:text-blue-400' },
  { name: 'Facebook', handle: 'LA SOCIEDAD', href: '#', color: 'hover:text-blue-600' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="gold-card rounded p-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded border gold-border flex items-center justify-center">
              <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="section-title text-2xl text-white mb-3">Message Sent</h2>
            <div className="divider-line max-w-[60px] mx-auto mb-3" />
            <p className="text-gray-500 text-sm font-light">Thank you. We&apos;ll be in touch soon.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Get in Touch</p>
          <h1 className="section-title text-4xl md:text-5xl text-white mb-4">Contact Us</h1>
          <div className="divider-line max-w-[80px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 gold-card rounded p-8">
            <h2 className="section-title text-xl text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-600 mb-2 uppercase tracking-[0.15em] font-mono">Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} className="futuristic-input rounded w-full px-4 py-3 text-sm text-white" />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-2 uppercase tracking-[0.15em] font-mono">Email *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} className="futuristic-input rounded w-full px-4 py-3 text-sm text-white" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-[0.15em] font-mono">Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} className="futuristic-input rounded w-full px-4 py-3 text-sm text-white" />
              </div>

              <div>
                <label className="block text-xs text-gray-600 mb-2 uppercase tracking-[0.15em] font-mono">Message *</label>
                <textarea required name="message" rows={5} value={form.message} onChange={handleChange} className="futuristic-input rounded w-full px-4 py-3 text-sm text-white resize-none" />
              </div>

              {error && <p className="text-red-400 text-xs text-center">{error}</p>}
              <button type="submit" disabled={submitting} className="gold-btn w-full py-3.5 rounded text-xs">
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="gold-card rounded p-8">
              <h2 className="section-title text-lg text-white mb-5">Connect</h2>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 group transition-colors duration-300 ${social.color}`}>
                    <div className="w-10 h-10 rounded border gold-border flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-current transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        {social.name === 'Instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                        {social.name === 'Twitter / X' && <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />}
                        {social.name === 'Facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />}
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{social.name}</p>
                      <p className="text-gray-600 text-xs font-mono">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="gold-card rounded p-8">
              <h3 className="section-title text-lg text-white mb-3">Private Inquiries</h3>
              <div className="w-8 h-[1px] bg-gold-400/20 mb-3" />
              <p className="text-gray-500 text-sm font-light mb-4">
                For private event inquiries or membership information.
              </p>
              <a href="mailto:info@lasociedad.club" className="text-gold-400 text-sm font-mono hover:underline">
                info@lasociedad.club
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
