import About from './components/about'
import Hero from './components/hero'
import Prizes from './components/prizes'
import Rounds from './components/rounds'
import Team from './components/team'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero></Hero>
      <About></About>
      <Rounds></Rounds>
      <Prizes></Prizes>
      <Team></Team>
    </main>
  )
}
