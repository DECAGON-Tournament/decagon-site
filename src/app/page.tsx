import About from './components/about'
import Hero from './components/hero'
import Rounds from './components/rounds'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero></Hero>
      <About></About>
      <Rounds></Rounds>
    </main>
  )
}
