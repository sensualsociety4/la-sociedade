'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950 to-dark-950" />
        <div className="ambient-glow ambient-glow-1" />
        <div className="ambient-glow ambient-glow-2" />
        <div className="ambient-glow ambient-glow-3" />

        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, #d4a853 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-400/60" />
              <p className="text-gold-400 uppercase tracking-[0.4em] text-xs md:text-sm font-medium">
                Exclusive Venue — Total Discretion
              </p>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold-400/60" />
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight tracking-wide">
              Welcome to
              <br />
              <span className="shimmer-text">LA SOCIEDAD</span>
            </h1>

            <div className="luxury-divider max-w-xs mx-auto mb-10">
              <div className="diamond" />
            </div>

            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed font-light tracking-wide">
              The only venue of its kind in Victoria — by invitation only. A dedicated sex venue with a huge kinky room, full bondage furniture and toys, a living room with DJ decks, and a gold stripping pole. If you want to experience the most sex-dedicated venue, this is the one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/booking"
                className="group relative px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 font-medium uppercase tracking-[0.2em] text-sm rounded overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,168,83,0.3)]"
              >
                <span className="relative z-10">Book an Event</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <Link
                href="/services"
                className="group px-10 py-4 border border-gold-400/30 text-gold-400 font-medium uppercase tracking-[0.2em] text-sm rounded hover:bg-gold-400/5 hover:border-gold-400/60 transition-all duration-500"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-gray-600 text-xs uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400/40 to-transparent animate-gold-pulse" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="ambient-glow ambient-glow-3" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <p className="text-gold-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">The Experience</p>
            <h2 className="font-serif text-5xl md:text-6xl text-white mb-4">Premium Facilities</h2>
            <div className="luxury-divider max-w-xs mx-auto mt-6">
              <div className="diamond" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Huge Kinky Room',
                desc: 'A dedicated space equipped with full bondage furniture and toys — the centrepiece of your most adventurous nights.',
                icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
              },
              {
                title: 'Living Room & DJ Decks',
                desc: 'A sophisticated lounge with professional DJ decks and a stunning gold stripping pole. Dance, connect, and set the mood.',
                icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
              },
              {
                title: 'By Invitation Only',
                desc: 'Exclusive swingers events for those who appreciate discretion, luxury, and the finest adult entertainment Victoria has to offer.',
                icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
              },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-8 md:p-10 group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold-400/20 to-gold-500/10 flex items-center justify-center mb-8 group-hover:from-gold-400/30 group-hover:to-gold-500/20 transition-all duration-700">
                  <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold-400 transition-colors duration-500">{item.title}</h3>
                <div className="w-12 h-[1px] bg-gold-400/30 mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/50 to-dark-950" />
        <div className="ambient-glow ambient-glow-1" style={{ top: '50%', right: '-10%' }} />
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="glass rounded-2xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #d4a853 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
            <div className="relative z-10">
              <p className="text-gold-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">By Invitation Only</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">The Experience Awaits</h2>
              <div className="luxury-divider max-w-xs mx-auto mb-8">
                <div className="diamond" />
              </div>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                The most sex-dedicated venue in Victoria — by invitation only. Full bondage furniture, toys, DJ decks, gold pole, and a huge kinky room await. This is the only venue with this type of facilities in Victoria.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-10 py-4 border border-gold-400/30 text-gold-400 font-medium uppercase tracking-[0.2em] text-sm rounded hover:bg-gold-400/5 hover:border-gold-400/60 transition-all duration-500"
              >
                Get in Touch
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
