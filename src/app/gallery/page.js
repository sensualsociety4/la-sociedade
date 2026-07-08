'use client'

import { useState } from 'react'

const galleryItems = [
  { id: 1, title: 'Grand Ballroom', category: 'venue' },
  { id: 2, title: 'VIP Lounge', category: 'venue' },
  { id: 3, title: 'Sunset Rooftop', category: 'venue' },
  { id: 4, title: 'Social Mixer', category: 'event' },
  { id: 5, title: 'Private Dinner', category: 'event' },
  { id: 6, title: 'Exclusive Party', category: 'event' },
  { id: 7, title: 'Poolside Soirée', category: 'venue' },
  { id: 8, title: 'Art & Wine Night', category: 'event' },
]

const categories = ['all', 'venue', 'event']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div>
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Moments Captured</p>
            <h1 className="heading-lg text-white mb-10">Gallery</h1>

            <div className="flex items-center justify-center gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] uppercase tracking-[0.3em] font-mono transition-all duration-300 ${
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
                className="group relative aspect-square poster-card cursor-pointer"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 border border-white/5 flex items-center justify-center">
                      <svg className="w-6 h-6 text-gold-400/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="heading-md text-white/50">{item.title}</h3>
                    <p className="text-gray-700 text-[10px] uppercase tracking-[0.2em] font-mono mt-2">{item.category}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#050505]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-gold-400 text-[10px] uppercase tracking-[0.3em] font-mono">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
