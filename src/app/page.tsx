import Image from 'next/image'
import Hero from './components/hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero></Hero>
    </main>
  )
}
