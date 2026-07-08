import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'LA SOCIEDAD | Victoria',
  description: 'The most sex-dedicated venue in Victoria. By invitation only.',
  openGraph: {
    title: 'LA SOCIEDAD',
    description: 'The most sex-dedicated venue in Victoria. By invitation only.',
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
