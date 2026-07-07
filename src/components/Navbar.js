'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/booking', label: 'Book Now' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-dark-950/80 backdrop-blur-xl shadow-[0_4px_60px_rgba(0,0,0,0.5)] border-b border-gold-400/10'
          : 'bg-gradient-to-b from-dark-950/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="relative group">
            <img src="/logo.svg" alt="LA SOCIEDAD" className="h-14 md:h-16 w-auto transition-all duration-500 group-hover:opacity-90" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded ${
                  pathname === link.href
                    ? 'text-gold-400 bg-gold-400/5'
                    : 'text-gray-400 hover:text-gold-400 hover:bg-white/[0.02]'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                )}
              </Link>
            ))}
            <Link
              href="/booking"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 font-medium uppercase tracking-[0.15em] text-sm rounded hover:from-gold-400 hover:to-gold-300 transition-all duration-300 shadow-lg shadow-gold-500/20"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-[1.5px] bg-gold-400 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-7 h-[1.5px] bg-gold-400 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-7 h-[1.5px] bg-gold-400 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-400 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-dark-950/95 backdrop-blur-xl border-t border-gold-400/10 px-6 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.2em] font-medium py-3 px-4 rounded transition-all ${
                pathname === link.href ? 'text-gold-400 bg-gold-400/5' : 'text-gray-400 hover:text-gold-400'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
