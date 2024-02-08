import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'DECAGON Tournament',
  description: "Centennial National Math Honors Society's and Glenelg National Math Honors Society's annual math tournament",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='flex flex-col justify-stretch'>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
