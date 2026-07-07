import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'LA SOCIEDAD | Exclusive Events & Experiences',
  description: 'The most sex-dedicated venue in Victoria. By invitation only. Full bondage furniture, toys, DJ decks, and gold stripping pole.',
  openGraph: {
    title: 'LA SOCIEDAD | Exclusive Events & Experiences',
    description: 'The most sex-dedicated venue in Victoria. Bondage furniture, DJ decks, gold pole — by invitation only.',
    siteName: 'LA SOCIEDAD',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
