'use client'

import Link from 'next/link'

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="section-label mb-3">Our Story</p>
          <h1 className="section-title text-4xl md:text-5xl text-white mb-4">About LA SOCIEDAD</h1>
          <div className="divider-line max-w-[80px] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <div className="animate-fade-up">
            <h2 className="section-title text-2xl md:text-3xl text-white mb-6">Victoria&apos;s Premier Adult Venue</h2>
            <div className="w-12 h-[1px] bg-gold-400/30 mb-6" />
            <div className="space-y-5 text-gray-500 text-sm leading-relaxed font-light">
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
          <div className="animate-fade-up stagger-2">
            <div className="aspect-square rounded border gold-border flex items-center justify-center">
              <div className="text-center p-12">
                <div className="w-20 h-20 mx-auto mb-4 rounded border gold-border flex items-center justify-center">
                  <span className="section-title text-3xl text-gold-400/40">LS</span>
                </div>
                <div className="divider-line max-w-[80px] mx-auto mb-3" />
                <p className="text-gray-600 text-xs uppercase tracking-[0.3em] font-mono">Est. 2024</p>
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
            <div key={i} className="gold-card rounded p-8 text-center animate-fade-up stagger-3">
              <p className="section-title text-lg text-gold-400 mb-3">{item.label}</p>
              <div className="w-8 h-[1px] bg-gold-400/20 mx-auto mb-3" />
              <p className="text-gray-500 text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="gold-card rounded p-12 md:p-16 max-w-xl mx-auto">
            <h2 className="section-title text-2xl md:text-3xl text-white mb-6">Ready to Experience?</h2>
            <div className="divider-line max-w-[80px] mx-auto mb-8" />
            <Link href="/booking" className="gold-btn px-8 py-3.5 rounded text-xs inline-block">
              Book Your Event
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
