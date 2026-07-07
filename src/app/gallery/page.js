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
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4">Moments Captured</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white mb-6">Gallery</h1>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mb-10" />

          <div className="flex items-center justify-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                  activeCategory === cat ? 'text-gold-400' : 'text-gray-500 hover:text-gray-300'
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
              className={`group relative aspect-square rounded-lg overflow-hidden cursor-pointer bg-gradient-to-br ${item.color} border border-white/5 hover:border-gold-400/30 transition-all duration-500`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-gold-400/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-serif text-lg text-white/80">{item.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-gold-400 text-sm uppercase tracking-[0.2em]">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
