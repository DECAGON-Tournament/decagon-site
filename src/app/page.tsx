import About from './components/about'
import Hero from './components/hero'
import Prizes from './components/prizes'
import Rounds from './components/rounds'
import Team from './components/team'
import Schedule from './components/schedule'
import Sponsors from './components/sponsors'
import Photos from './components/photos'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <span className='text-center bg-gradient-to-r from-sky-500 to-blue-700 p-2 text-white text-sm font-mono flex flex-wrap justify-center gap-x-1'><strong>DECAGON 2025–2026 has concluded!</strong> <span>Results and awards are available <a className='underline font-bold text-white visited:text-white hover:text-slate-200' target="_blank" rel="noreferrer" href="https://docs.google.com/presentation/d/13_YzUXDM7N7hL8hTZyz4VHrnFw3iBkPiRSbwgE1MQFM/edit?usp=sharing">here</a>, and all contest materials are publicly available <a className='underline font-bold text-white visited:text-white hover:text-slate-200' target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1JFfAb8926dHCHgS6A1s0KBKYV6E1__Ak?usp=sharing">here</a>.</span></span>
      <Hero></Hero>
      <About></About>
      <Rounds></Rounds>
      <Prizes></Prizes>
      <Schedule></Schedule>
      <Sponsors></Sponsors>
      <Photos></Photos>
      <Team></Team>
    </main>
  )
}
