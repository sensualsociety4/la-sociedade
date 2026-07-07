'use client'

import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Swingers Nights',
    sub: 'By Invitation Only',
    desc: 'Exclusive swingers events at the only dedicated sex venue in Victoria. Full bondage furniture, toys, DJ decks, and gold pole — all included.',
    features: ['By invitation only', 'Full bondage furniture included', 'All toys provided', 'DJ decks & gold pole'],
    price: 'From $150/person',
  },
  {
    number: '02',
    title: 'Private Kinky Parties',
    sub: 'Full Venue Access',
    desc: 'Book the entire venue for your own private sex party. Huge kinky room, living room lounge, and complete access to all facilities.',
    features: ['Exclusive venue hire', 'Full bondage & toy access', 'Living room with DJ decks', 'Gold stripping pole'],
    price: 'From $2,500',
  },
  {
    number: '03',
    title: 'Bondage & BDSM',
    sub: 'Fully Equipped',
    desc: 'Dedicated BDSM sessions in our fully equipped kinky room. Bondage furniture, restraints, spanking benches, and more — all set and ready.',
    features: ['Full BDSM furniture setup', 'Restraints & impact toys', 'Private dungeon space', 'Professional-grade equipment'],
    price: 'From $500',
  },
  {
    number: '04',
    title: 'VIP Sex Party',
    sub: 'The Ultimate Experience',
    desc: 'Curated guest list, private DJ, premium bar, and full access to every room including the kinky room and gold pole.',
    features: ['Curated guest list', 'Private DJ', 'Premium bar included', 'Full venue access'],
    price: 'Custom quote',
  },
]

export default function Services() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">What We Offer</p>
          <h1 className="section-title text-4xl md:text-5xl text-white mb-4">Our Services</h1>
          <p className="text-gray-500 text-sm max-w-xl mx-auto font-light">
            Tailored experiences designed to exceed expectations.
          </p>
          <div className="divider-line max-w-[80px] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <div key={i} className="gold-card rounded p-8 group animate-fade-up">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gold-400/20 font-mono text-2xl font-light mb-1">{service.number}</p>
                  <h2 className="section-title text-xl text-white group-hover:text-gold-400 transition-colors duration-500">{service.title}</h2>
                  <p className="text-gray-600 text-xs uppercase tracking-[0.2em] font-mono mt-1">{service.sub}</p>
                </div>
                <span className="text-gold-400 text-xs font-mono whitespace-nowrap ml-4">{service.price}</span>
              </div>
              <div className="w-full h-[1px] bg-gold-400/10 mb-5" />
              <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">{service.desc}</p>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="text-gold-400/60">&rsaquo;</span>
                    {feature}
                  </div>
                ))}
              </div>
              <div className="pt-5 border-t border-gold-400/5">
                <Link
                  href="/booking"
                  className="gold-btn-outline px-5 py-2 rounded text-xs inline-block"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="gold-card rounded p-12 md:p-16 text-center max-w-2xl mx-auto">
            <p className="section-label mb-3">Custom</p>
            <h2 className="section-title text-2xl md:text-3xl text-white mb-4">Bespoke Events</h2>
            <div className="divider-line max-w-[80px] mx-auto mb-5" />
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 font-light">
              Don&apos;t see what you&apos;re looking for? We create custom experiences tailored to your vision.
            </p>
            <Link href="/contact" className="gold-btn-outline px-8 py-3.5 rounded text-xs inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
