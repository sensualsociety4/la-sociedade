'use client'

import Link from 'next/link'

const services = [
  {
    title: 'Swingers Nights — By Invitation',
    desc: 'Exclusive swingers events at the only dedicated sex venue in Victoria. Full bondage furniture, toys, DJ decks, and gold pole — all included.',
    features: ['By invitation only', 'Full bondage furniture included', 'All toys provided', 'DJ decks & gold stripping pole'],
    price: 'From $150/person',
  },
  {
    title: 'Private Kinky Parties',
    desc: 'Book the entire venue for your own private sex party. Huge kinky room, living room lounge, and complete access to all facilities.',
    features: ['Exclusive venue hire', 'Full bondage & toy access', 'Living room with DJ decks', 'Gold stripping pole'],
    price: 'From $2,500',
  },
  {
    title: 'Bondage & BDSM Experiences',
    desc: 'Dedicated BDSM sessions in our fully equipped kinky room. Bondage furniture, restraints, spanking benches, and more — all set and ready.',
    features: ['Full BDSM furniture setup', 'Restraints & impact toys', 'Private dungeon space', 'Professional-grade equipment'],
    price: 'From $500',
  },
  {
    title: 'VIP Sex Party Hosting',
    desc: 'The ultimate VIP experience. Curated guest list, private DJ, premium bar, and full access to every room including the kinky room and pole.',
    features: ['Curated guest list', 'Private DJ', 'Premium bar included', 'Full venue access'],
    price: 'Custom quote',
  },
]

export default function Services() {
  return (
    <div className="pt-40 pb-32 px-6 relative">
      <div className="ambient-glow ambient-glow-1" />
      <div className="ambient-glow ambient-glow-2" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <p className="text-gold-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">What We Offer</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Tailored experiences designed to exceed expectations. Choose from our curated offerings or let us create something entirely bespoke.
          </p>
          <div className="luxury-divider max-w-xs mx-auto mt-8">
            <div className="diamond" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div key={i} className="glass-card rounded-xl p-8 md:p-10 group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-start justify-between mb-6">
                <h2 className="font-serif text-2xl text-white group-hover:text-gold-400 transition-colors duration-500">{service.title}</h2>
                <span className="text-gold-400 text-sm font-medium whitespace-nowrap ml-4">{service.price}</span>
              </div>
              <div className="w-12 h-[1px] bg-gold-400/30 mb-6" />
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">{service.desc}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gold-400/10">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 text-white text-sm uppercase tracking-[0.2em] hover:text-gold-400 transition-colors duration-300 group/link"
                >
                  Book Now
                  <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="glass rounded-2xl p-12 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #d4a853 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }} />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Bespoke Events</h2>
              <div className="luxury-divider max-w-[160px] mx-auto mb-6">
                <div className="diamond" />
              </div>
              <p className="text-gray-400 max-w-xl mx-auto mb-10 font-light">
                Don&apos;t see what you&apos;re looking for? We specialize in creating custom experiences tailored to your vision.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 border border-gold-400/30 text-gold-400 font-medium uppercase tracking-[0.2em] text-sm rounded hover:bg-gold-400/5 hover:border-gold-400/60 transition-all duration-500"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
