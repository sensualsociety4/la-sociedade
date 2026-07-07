'use client'

import { useState } from 'react'

const galleryItems = [
  { id: 1, title: 'Grand Ballroom', category: 'venue', color: 'from-amber-900/20' },
  { id: 2, title: 'VIP Lounge', category: 'venue', color: 'from-purple-900/20' },
  { id: 3, title: 'Sunset Rooftop', category: 'venue', color: 'from-orange-900/20' },
  { id: 4, title: 'Social Mixer', category: 'event', color: 'from-red-900/20' },
  { id: 5, title: 'Private Dinner', category: 'event', color: 'from-emerald-900/20' },
  { id: 6, title: 'Exclusive Party', category: 'event', color: 'from-blue-900/20' },
  { id: 7, title: 'Poolside Soirée', category: 'venue', color: 'from-cyan-900/20' },
  { id: 8, title: 'Art & Wine Night', category: 'event', color: 'from-rose-900/20' },
]

const categories = ['all', 'venue', 'event']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label mb-3">Moments Captured</p>
          <h1 className="section-title text-4xl md:text-5xl text-white mb-4">Gallery</h1>
          <div className="divider-line max-w-[80px] mx-auto mb-10" />

          <div className="flex items-center justify-center gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-[0.2em] font-mono transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-gold-400'
                    : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`group relative aspect-square rounded overflow-hidden cursor-pointer bg-gradient-to-br ${item.color} gold-border`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-14 h-14 mx-auto mb-3 rounded border gold-border flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="section-title text-base text-white/70">{item.title}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-[#050505]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-gold-400 text-xs uppercase tracking-[0.2em] font-mono">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
