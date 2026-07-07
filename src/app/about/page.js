'use client'

import Link from 'next/link'

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">About LA SOCIEDAD</h1>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="font-serif text-3xl text-white mb-6">Redefining Social Entertainment</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                LA SOCIEDAD was founded on a simple belief: that the finest experiences are those shared with others. We create spaces where elegance, excitement, and exclusivity converge to produce unforgettable moments.
              </p>
              <p>
                Our events are carefully curated to provide a sophisticated yet liberating atmosphere. From intimate gatherings to grand celebrations, every detail is crafted with precision and passion.
              </p>
              <p>
                We believe in discretion, quality, and the art of connection. Our members and guests are discerning individuals who appreciate the extraordinary.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-gold-400/20 to-dark-950 border border-white/5 flex items-center justify-center">
              <div className="text-center p-12">
                <p className="font-serif text-7xl text-gold-400/30 font-bold">LS</p>
                <p className="text-gray-500 text-sm mt-4 uppercase tracking-[0.2em]">Est. 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { number: 'Exclusive', text: 'Members-only events curated for a select clientele' },
            { number: 'Discreet', text: 'Privacy and confidentiality are our highest priorities' },
            { number: 'Refined', text: 'Every detail crafted to the highest standards of quality' },
          ].map((item, i) => (
            <div key={i} className="text-center p-8 border border-white/5 rounded-lg">
              <p className="font-serif text-3xl text-gold-400 mb-3">{item.number}</p>
              <p className="text-gray-400 text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="font-serif text-3xl text-white mb-6">Ready to Experience?</h2>
          <Link
            href="/booking"
            className="inline-block px-10 py-4 bg-gold-400 text-dark-950 font-medium uppercase tracking-[0.15em] text-sm hover:bg-gold-300 transition-all duration-300 rounded"
          >
            Book Your Event
          </Link>
        </div>
      </div>
    </div>
  )
}
