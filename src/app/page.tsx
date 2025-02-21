import About from './components/about'
import Hero from './components/hero'
import Prizes from './components/prizes'
import Rounds from './components/rounds'
import Team from './components/team'
import Schedule from './components/schedule'
import Sponsors from './components/sponsors'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* <span className='text-center bg-gradient-to-r from-sky-500 to-blue-700 p-2'> <strong>Thank you for coming to DECAGON!</strong> Contest materials and full results are available <Link className='underline' target="_blank" href={"https://drive.google.com/drive/folders/1bdOCha5K8GWWbIvgMbl3mgcmIHL0nQJP?usp=drive_link"}>here. </Link> </span> */}
      <Hero></Hero>
      <About></About>
      <Rounds></Rounds>
      <Prizes></Prizes>
      <Schedule></Schedule>
      <Sponsors></Sponsors>
      <Team></Team>
    </main>
  )
}
