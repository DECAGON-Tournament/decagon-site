import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function About() {
    return <div className='flex flex-col md:flex-row bg-slate-950 p-8 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-sky-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 01.</p>
            <h1 className={`${jbm.className} text-sky-300 text-5xl`}>About </h1>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-2'>
            <p>
                The Centennial National Math Honor Society is partnering this year with the Glenelg National Math Honor Society to host the new DECAGON Tournament, a continuation of the annual CHS Mu Alpha Theta Tournament!
            </p>
            <p>
                The tournament is a great way for competitors to test their math skills in a fun, low-stress competition.
            </p>
            <p>
                Students of all grades may register for free. If you plan to form a team with people you already know, please list the members of your team. If you register as an individual, we will place you on a team for the team round, so don’t worry!
            </p>
        </div>
    </div>
}