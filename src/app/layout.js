import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'LA SOCIEDAD | Exclusive Events & Experiences',
  description: 'Premium social events, exclusive gatherings, and unforgettable experiences. Book your next event with LA SOCIEDAD.',
  openGraph: {
    title: 'LA SOCIEDAD | Exclusive Events & Experiences',
    description: 'Premium social events, exclusive gatherings, and unforgettable experiences.',
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
