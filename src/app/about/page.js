'use client'

import Link from 'next/link'

export default function About() {
  return (
    <div>
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="section-label mb-4">Our Story</p>
            <h1 className="heading-lg text-white">About</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
            <div>
              <h2 className="heading-md text-white mb-6">Victoria&apos;s Premier Adult Venue</h2>
              <div className="w-12 h-[1px] bg-gold-400/20 mb-6" />
              <div className="space-y-5 body-sm">
                <p>
                  LA SOCIEDAD is the only venue of its kind in Victoria — a dedicated sex venue built for swingers, by swingers, by invitation only. From the moment you step inside, you enter a world designed for uninhibited pleasure.
                </p>
                <p>
                  Our space features a huge kinky room equipped with full bondage furniture and toys, a luxurious living room with professional DJ decks, and a stunning gold stripping pole. Every detail has been curated to create the ultimate sex-positive environment.
                </p>
                <p>
                  We operate on a foundation of total discretion. Privacy is not just a policy — it is our promise.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-[3/4] border border-white/5 poster-card flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 border border-white/10 flex items-center justify-center">
                    <span className="heading-lg text-gold-400/40">LS</span>
                  </div>
                  <div className="max-w-[60px] mx-auto h-[1px] bg-gold-400/20 mb-4" />
                  <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-mono">Est. 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-24">
            {[
              { label: 'Bondage & Toys', desc: 'Full range of bondage furniture and toys included in every event' },
              { label: 'DJ & Gold Pole', desc: 'Living room with professional DJ decks and a gold stripping pole' },
              { label: 'Only in Victoria', desc: 'The only venue with this type of facilities. By invitation only.' },
            ].map((item, i) => (
              <div key={i} className="poster-card p-8 text-center">
                <h3 className="heading-md text-gold-400 mb-3">{item.label}</h3>
                <div className="w-8 h-[1px] bg-gold-400/20 mx-auto mb-3" />
                <p className="body-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="border border-white/5 p-12 md:p-16 max-w-xl mx-auto">
              <h2 className="heading-lg text-white mb-6">Ready to Experience?</h2>
              <div className="max-w-[60px] mx-auto h-[1px] bg-gold-400/20 mb-8" />
              <Link href="/booking" className="gold-btn text-xs">
                Book Your Event
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
