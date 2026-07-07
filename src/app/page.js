'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505] to-[#050505]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #d4a853 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-400/2 rounded-full blur-[120px]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <p className="section-label mb-8 animate-fade-up stagger-1">
              <span className="text-gold-400/40">[</span> Victoria&apos;s Premier Venue <span className="text-gold-400/40">]</span>
            </p>

            <h1 className="section-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1]">
              Welcome to
              <br />
              <span className="shimmer-text">LA SOCIEDAD</span>
            </h1>

            <div className="divider-line max-w-[120px] mx-auto mb-8" />

            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
              The most sex-dedicated venue in Victoria. Full bondage furniture, toys, DJ decks, and gold pole — by invitation only.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/booking" className="gold-btn px-8 py-3.5 rounded text-xs">
                Book an Event
              </Link>
              <Link href="/services" className="gold-btn-outline px-8 py-3.5 rounded text-xs">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400/30 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gold-400/5">
            {[
              { label: 'Bondage Furniture', value: 'Full Set' },
              { label: 'Venue Size', value: '2000+ sqft' },
              { label: 'DJ Decks', value: 'Professional' },
              { label: 'Discretion', value: '100%' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#050505] p-8 text-center">
                <p className="section-title text-xl md:text-2xl text-white mb-1">{stat.value}</p>
                <p className="text-gray-600 text-xs uppercase tracking-[0.15em] font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-3">Facilities</p>
            <h2 className="section-title text-3xl md:text-4xl text-white">The Experience</h2>
            <div className="divider-line max-w-[80px] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                number: '01',
                title: 'Huge Kinky Room',
                desc: 'Full bondage furniture and toys included. The centrepiece of your most adventurous nights.',
              },
              {
                number: '02',
                title: 'Living Room & DJ',
                desc: 'Professional DJ decks and a gold stripping pole. Set the mood for the night.',
              },
              {
                number: '03',
                title: 'By Invitation Only',
                desc: 'Exclusive swingers events. Discretion and luxury for discerning guests.',
              },
            ].map((item, i) => (
              <div key={i} className="gold-card rounded p-8 group animate-fade-up stagger-3">
                <p className="text-gold-400/20 font-mono text-3xl font-light mb-4">{item.number}</p>
                <h3 className="section-title text-xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="gold-card rounded p-12 md:p-16">
            <p className="section-label mb-4">By Invitation Only</p>
            <h2 className="section-title text-3xl md:text-4xl text-white mb-6">The Experience Awaits</h2>
            <div className="divider-line max-w-[80px] mx-auto mb-8" />
            <p className="text-gray-500 text-sm max-w-lg mx-auto mb-10 leading-relaxed font-light">
              The only venue with full bondage facilities, DJ decks, and gold pole in Victoria.
            </p>
            <Link href="/contact" className="gold-btn-outline px-8 py-3.5 rounded text-xs inline-block">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="divider-line" />
    </div>
  )
}
