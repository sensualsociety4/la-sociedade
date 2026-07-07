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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark-950/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative group">
            <img src="/logo.svg" alt="LA SOCIEDAD" className="h-10 md:h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-gold-400'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold-400" />
                )}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-gold-400 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-gold-400 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-gold-400 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-400 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-dark-950/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.15em] font-medium py-2 transition-colors ${
                pathname === link.href ? 'text-gold-400' : 'text-gray-300 hover:text-gold-400'
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
