import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'DECAGON Tournament',
  description: "The DECAGON tournament (Deciphering Equations, Centennial and Glenelg's Operation in Numbers)",
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
      </body>
    </html>
  )
}
