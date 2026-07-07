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
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4">What We Offer</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tailored experiences designed to exceed expectations. Choose from our curated offerings or let us create something entirely bespoke.
          </p>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group border border-white/5 hover:border-gold-400/30 transition-all duration-500 rounded-lg p-8">
              <h2 className="font-serif text-2xl text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">{service.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-gold-400 font-medium">{service.price}</span>
                <Link
                  href="/booking"
                  className="text-white text-sm uppercase tracking-[0.15em] hover:text-gold-400 transition-colors duration-300"
                >
                  Book Now &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center p-12 border border-white/5 rounded-lg bg-gradient-to-b from-transparent to-gold-400/5">
          <h2 className="font-serif text-3xl text-white mb-4">Bespoke Events</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Don&apos;t see what you&apos;re looking for? We specialize in creating custom experiences tailored to your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 border border-gold-400/50 text-gold-400 font-medium uppercase tracking-[0.15em] text-sm hover:bg-gold-400/10 transition-all duration-300 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
