import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <img src="/logo.svg" alt="LA SOCIEDAD" className="h-8" />
          <div className="flex items-center gap-6">
            {['About', 'Services', 'Gallery', 'Booking', 'Contact'].map((link) => (
              <Link key={link} href={`/${link.toLowerCase()}`} className="text-gray-600 hover:text-gray-400 text-[11px] uppercase tracking-[0.2em] transition-colors duration-300">
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div className="gold-line mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-700 text-[10px] uppercase tracking-[0.2em] font-mono">&copy; {new Date().getFullYear()} LA SOCIEDAD</p>
          <p className="text-gray-700 text-[10px] uppercase tracking-[0.2em] font-mono">By invitation only</p>
        </div>
      </div>
    </footer>
  )
}
