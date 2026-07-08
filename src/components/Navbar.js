'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

const socialIcons = [
  { name: 'Instagram', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Facebook', href: '#' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#050505]/95 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="relative z-10">
            <img src="/logo.svg" alt="LA SOCIEDAD" className="h-8 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 ${
                  pathname === link.href
                    ? 'text-gold-400'
                    : 'text-gray-600 hover:text-gray-300'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {socialIcons.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-gold-400 transition-colors duration-300"
                aria-label={s.name}>
                {s.name === 'Instagram' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )}
                {s.name === 'Twitter' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                )}
                {s.name === 'Facebook' && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
              </a>
            ))}
            <Link href="/booking" className="ml-2 gold-btn text-[10px]">
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 group relative z-10"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[1px] bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[2.5px]' : ''}`} />
            <span className={`block w-6 h-[1px] bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1px] bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[2.5px]' : ''}`} />
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-400 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-white/5 bg-[#050505] px-6 py-8 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-[0.25em] font-medium py-3 transition-all ${
                pathname === link.href ? 'text-gold-400' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/booking" className="gold-btn text-center mt-4 text-[10px]">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
