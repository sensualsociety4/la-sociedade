'use client'

import { useState } from 'react'
import Link from 'next/link'

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
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-gold-400/20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl text-white mb-4">Message Sent!</h2>
          <p className="text-gray-400">Thank you for reaching out. We&apos;ll get back to you soon.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4">Get in Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Contact Us</h1>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-2xl text-white mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-[0.1em]">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-[0.1em]">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-[0.1em]">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-[0.1em]">Message *</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/10 rounded px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-400 transition-colors resize-none"
                />
              </div>

              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-gold-400 text-dark-950 font-medium uppercase tracking-[0.15em] text-sm hover:bg-gold-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-white mb-6">Connect With Us</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              Follow us on social media for updates on upcoming events, exclusive offers, and behind-the-scenes content. For private inquiries, reach out directly.
            </p>

            <div className="space-y-6 mb-12">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 group transition-colors duration-300 ${social.color}`}
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-current transition-all duration-300">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      {social.name === 'Instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                      {social.name === 'Twitter / X' && <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />}
                      {social.name === 'Facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />}
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{social.name}</p>
                    <p className="text-gray-500 text-xs">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-6 border border-white/5 rounded-lg">
              <h3 className="text-white font-medium mb-3">Private Inquiries</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                For private event inquiries, membership information, or any other questions, please reach out to us directly.
              </p>
              <a
                href="mailto:info@lasociedad.club"
                className="text-gold-400 text-sm hover:underline transition-all"
              >
                info@lasociedad.club
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
