'use client'

import Link from 'next/link'

const services = [
  {
    number: '01',
    title: 'Swingers Nights',
    tag: 'By Invitation Only',
    desc: 'Exclusive swingers events at the only dedicated sex venue in Victoria. Full bondage furniture, toys, DJ decks, and gold pole — all included.',
    features: ['By invitation only', 'Full bondage furniture', 'All toys provided', 'DJ decks & gold pole'],
    price: 'From $150',
  },
  {
    number: '02',
    title: 'Private Kinky Parties',
    tag: 'Full Venue Access',
    desc: 'Book the entire venue for your own private sex party. Huge kinky room, living room lounge, and complete access to all facilities.',
    features: ['Exclusive venue hire', 'Full bondage & toy access', 'Living room with DJ decks', 'Gold stripping pole'],
    price: 'From $2,500',
  },
  {
    number: '03',
    title: 'Bondage & BDSM',
    tag: 'Fully Equipped',
    desc: 'Dedicated BDSM sessions in our fully equipped kinky room. Bondage furniture, restraints, spanking benches, and more — all set and ready.',
    features: ['Full BDSM furniture setup', 'Restraints & impact toys', 'Private dungeon space', 'Professional-grade equipment'],
    price: 'From $500',
  },
  {
    number: '04',
    title: 'VIP Sex Party',
    tag: 'The Ultimate Experience',
    desc: 'Curated guest list, private DJ, premium bar, and full access to every room including the kinky room and gold pole.',
    features: ['Curated guest list', 'Private DJ', 'Premium bar included', 'Full venue access'],
    price: 'Custom',
  },
  {
    number: '05',
    title: 'OnlyFans Content Creation',
    tag: 'Professional Studio',
    desc: 'Professional content creation space for your OnlyFans productions. Full bondage furniture, sets, and equipment available.',
    features: ['Professional lighting setup', 'Multiple themed sets', 'Bondage & BDSM props', 'Private filming space'],
    price: 'From $200',
  },
  {
    number: '06',
    title: 'Adult Movie Filming',
    tag: 'Production Ready',
    desc: 'Full venue available for adult film productions. Huge kinky room, living room with DJ decks, and gold pole — a complete set.',
    features: ['Full venue access', 'Equipment ready', 'Multiple shooting locations', 'Private changing rooms'],
    price: 'From $1,000',
  },
  {
    number: '07',
    title: 'Photoshoots',
    tag: 'Boudoir & Erotic',
    desc: 'Book our venue for professional photoshoots. Multiple backdrops, professional lighting, and intimate atmosphere.',
    features: ['Professional lighting', 'Multiple backdrops', 'Changing room', 'Gold pole & sets'],
    price: 'From $150',
  },
  {
    number: '08',
    title: 'Poker Nights',
    tag: 'Exclusive Games',
    desc: 'High-stakes poker nights in our luxurious living room. Professional DJ, premium bar, and adult entertainment throughout the evening.',
    features: ['Professional dealer', 'Premium bar', 'DJ decks', 'Full venue access'],
    price: 'From $500',
  },
]

export default function Services() {
  return (
    <div>
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Offer</p>
            <h1 className="heading-lg text-white mb-4">Services</h1>
            <p className="body-sm max-w-xl mx-auto">Tailored experiences designed to exceed expectations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div key={i} className="poster-card p-8 group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-white/10 font-mono text-lg font-light mb-1">{service.number}</p>
                    <h2 className="heading-md text-white group-hover:text-gold-400 transition-colors duration-500">{service.title}</h2>
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-mono mt-2">{service.tag}</p>
                  </div>
                  <span className="text-gold-400 text-[10px] font-mono whitespace-nowrap ml-4 uppercase tracking-[0.15em]">{service.price}</span>
                </div>
                <div className="gold-line mb-5" />
                <p className="body-sm mb-6">{service.desc}</p>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span className="text-gold-400/60">&rsaquo;</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="pt-5 border-t border-white/5">
                  <Link href="/booking" className="gold-btn-outline text-[10px] inline-block">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="border border-white/5 p-12 md:p-16 text-center max-w-2xl mx-auto">
              <p className="section-label mb-4">Custom</p>
              <h2 className="heading-md text-white mb-4">Bespoke Events</h2>
              <div className="max-w-[60px] mx-auto h-[1px] bg-gold-400/20 mb-5" />
              <p className="body-sm max-w-md mx-auto mb-8">
                Don&apos;t see what you&apos;re looking for? We create custom experiences tailored to your vision.
              </p>
              <Link href="/contact" className="gold-btn-outline text-xs">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
