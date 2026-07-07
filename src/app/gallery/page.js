'use client'

import { useState } from 'react'

const galleryItems = [
  { id: 1, title: 'Grand Ballroom', category: 'venue', color: 'from-amber-900/40 to-dark-950' },
  { id: 2, title: 'VIP Lounge', category: 'venue', color: 'from-purple-900/40 to-dark-950' },
  { id: 3, title: 'Sunset Rooftop', category: 'venue', color: 'from-orange-900/40 to-dark-950' },
  { id: 4, title: 'Social Mixer', category: 'event', color: 'from-red-900/40 to-dark-950' },
  { id: 5, title: 'Private Dinner', category: 'event', color: 'from-emerald-900/40 to-dark-950' },
  { id: 6, title: 'Exclusive Party', category: 'event', color: 'from-blue-900/40 to-dark-950' },
  { id: 7, title: 'Poolside Soirée', category: 'venue', color: 'from-cyan-900/40 to-dark-950' },
  { id: 8, title: 'Art & Wine Night', category: 'event', color: 'from-rose-900/40 to-dark-950' },
]

const categories = ['all', 'venue', 'event']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="pt-40 pb-32 px-6 relative">
      <div className="ambient-glow ambient-glow-1" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <p className="text-gold-400 uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Moments Captured</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-6">Gallery</h1>
          <div className="luxury-divider max-w-xs mx-auto mb-12">
            <div className="diamond" />
          </div>

          <div className="flex items-center justify-center gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 pb-1 ${
                  activeCategory === cat
                    ? 'text-gold-400 border-b border-gold-400'
                    : 'text-gray-500 hover:text-gray-300 border-b border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br ${item.color} border border-white/5 hover:border-gold-400/30 transition-all duration-700`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl border border-gold-400/20 flex items-center justify-center group-hover:border-gold-400/40 transition-all duration-500">
                    <svg className="w-8 h-8 text-gold-400/40 group-hover:text-gold-400/60 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-serif text-lg text-white/80 group-hover:text-white transition-colors duration-500">{item.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                <span className="text-gold-400 text-sm uppercase tracking-[0.2em]">View Gallery</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
