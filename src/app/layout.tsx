import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ["latin"], display: 'swap', variable: '--font-inter' });
const jbm = JetBrains_Mono({subsets: ["latin"], display: 'swap', variable: '--font-jbm'})

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
      <body className={`${inter.className} ${inter.variable} ${jbm.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
