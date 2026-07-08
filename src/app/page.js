'use client'

import Link from 'next/link'

const events = [
  {
    title: 'Swingers Nights',
    desc: 'Full bondage furniture, toys, DJ decks, gold pole',
    tag: 'By invitation only',
  },
  {
    title: 'Private Kinky Parties',
    desc: 'Exclusive venue hire with full facility access',
    tag: 'Full venue',
  },
  {
    title: 'Bondage & BDSM',
    desc: 'Dedicated BDSM sessions, fully equipped kinky room',
    tag: 'Fully equipped',
  },
  {
    title: 'VIP Sex Party',
    desc: 'Curated guest list, private DJ, premium bar',
    tag: 'Custom quote',
  },
]

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/hero-bg.jpg)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/20 to-[#050505]/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="section-label mb-6 animate-fade-in">Victoria&apos;s premier sex venue</p>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-10 leading-relaxed animate-fade-in">
            The most sex-dedicated venue in Victoria.
            <br />
            Bondage furniture, DJ decks, gold pole — by invitation only.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Link href="/booking" className="gold-btn text-xs">
              Book an Event
            </Link>
            <Link href="/services" className="gold-btn-outline text-xs">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Events</p>
            <h2 className="heading-lg text-white">Experiences</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {events.map((event, i) => (
              <div key={i} className="poster-card p-8 group animate-fade-in cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="aspect-[3/4] mb-5 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-12 h-12 mx-auto mb-3 border border-white/5 flex items-center justify-center">
                      <span className="heading-md text-gold-400/30">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-mono mb-2">{event.tag}</p>
                <h3 className="heading-md text-white mb-2">{event.title}</h3>
                <p className="body-sm">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-32 bg-gradient-to-b from-transparent to-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border border-white/5 p-12 md:p-20">
            <p className="section-label mb-4">By invitation only</p>
            <h2 className="heading-lg text-white mb-6">The Experience Awaits</h2>
            <div className="max-w-[60px] mx-auto h-[1px] bg-gold-400/20 mb-8" />
            <p className="body-sm max-w-md mx-auto mb-10">
              The only venue with full bondage facilities, DJ decks, and gold pole in Victoria.
            </p>
            <Link href="/contact" className="gold-btn-outline text-xs">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <div className="gold-line" />
    </div>
  )
}
