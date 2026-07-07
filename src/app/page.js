'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/95 to-dark-950" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(212,168,83,0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212,168,83,0.1) 0%, transparent 50%)'
        }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <p className="text-gold-400 uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6">
              Exclusive Social Experiences
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Welcome to
              <br />
              <span className="text-gold-400">LA SOCIEDAD</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Where elegance meets excitement. Curating unforgettable events and exclusive gatherings for those who seek the extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/booking"
                className="px-10 py-4 bg-gold-400 text-dark-950 font-medium uppercase tracking-[0.15em] text-sm hover:bg-gold-300 transition-all duration-300 rounded"
              >
                Book an Event
              </Link>
              <Link
                href="/services"
                className="px-10 py-4 border border-gold-400/50 text-gold-400 font-medium uppercase tracking-[0.15em] text-sm hover:bg-gold-400/10 transition-all duration-300 rounded"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4">What We Offer</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Premium Experiences</h2>
            <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Private Events', desc: 'Intimate gatherings in exclusive venues, tailored to your desires.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { title: 'Social Mixers', desc: 'Connect with like-minded individuals in a sophisticated, open atmosphere.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { title: 'Exclusive Parties', desc: 'High-energy celebrations curated for those who appreciate the finer things.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
            ].map((item, i) => (
              <div key={i} className="group p-8 border border-white/5 hover:border-gold-400/30 transition-all duration-500 rounded-lg">
                <div className="w-14 h-14 rounded-full bg-gold-400/10 flex items-center justify-center mb-6 group-hover:bg-gold-400/20 transition-all duration-500">
                  <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-dark-950/50">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4">By Invitation Only</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">The Experience Awaits</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            LA SOCIEDAD is more than an event space — it is a community. Join us for unparalleled experiences in the most exclusive settings.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 border border-gold-400/50 text-gold-400 font-medium uppercase tracking-[0.15em] text-sm hover:bg-gold-400/10 transition-all duration-300 rounded"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
