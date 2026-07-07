'use client'

import Link from 'next/link'

export default function About() {
  return (
    <div className="pt-40 pb-32 px-6 relative">
      <div className="ambient-glow ambient-glow-2" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <p className="text-gold-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6">About LA SOCIEDAD</h1>
          <div className="luxury-divider max-w-xs mx-auto">
            <div className="diamond" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-8">Victoria&apos;s Premier<br />Adult Venue</h2>
            <div className="w-16 h-[1px] bg-gold-400/50 mb-8" />
            <div className="space-y-6 text-gray-400 leading-relaxed font-light">
              <p>
                LA SOCIEDAD is the only venue of its kind in Victoria — a dedicated sex venue built for swingers, by swingers, by invitation only. From the moment you step inside, you enter a world designed for uninhibited pleasure.
              </p>
              <p>
                Our space features a huge kinky room equipped with full bondage furniture and toys, a luxurious living room with professional DJ decks, and a stunning gold stripping pole. Every detail has been curated to create the ultimate sex-positive environment.
              </p>
              <p>
                We operate on a foundation of total discretion. Privacy is not just a policy — it is our promise. If you want to experience the most sex-dedicated venue in Victoria, this is the one.
              </p>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-gold-400/10 to-dark-950 border border-gold-400/10 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #d4a853 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }} />
              <div className="text-center p-12 relative">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full border border-gold-400/20 flex items-center justify-center">
                  <span className="font-serif text-5xl text-gold-400/40 font-bold">LS</span>
                </div>
                <div className="luxury-divider max-w-[120px] mx-auto mb-4">
                  <div className="diamond" style={{ width: 6, height: 6 }} />
                </div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.3em]">Est. 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {[
            { number: 'Bondage & Toys', text: 'Full range of bondage furniture and toys included in every event' },
            { number: 'DJ & Gold Pole', text: 'Living room with professional DJ decks and a gold stripping pole' },
            { number: 'Only in Victoria', text: 'The only venue with this type of facilities. By invitation only.' },
          ].map((item, i) => (
            <div key={i} className="glass-card rounded-xl p-8 md:p-10 text-center" style={{ animationDelay: `${i * 0.1}s` }}>
              <p className="font-serif text-xl md:text-2xl text-gold-400 mb-4">{item.number}</p>
              <div className="w-8 h-[1px] bg-gold-400/30 mx-auto mb-4" />
              <p className="text-gray-400 text-sm font-light leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="glass rounded-2xl p-12 md:p-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Ready to Experience?</h2>
            <div className="luxury-divider max-w-[160px] mx-auto mb-8">
              <div className="diamond" />
            </div>
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 font-medium uppercase tracking-[0.2em] text-sm rounded hover:shadow-[0_0_40px_rgba(212,168,83,0.3)] transition-all duration-500"
            >
              Book Your Event
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
