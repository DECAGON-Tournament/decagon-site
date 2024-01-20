import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function Prizes() {
    const prizes = [
        {
            winner: "Winning Teams/Individuals",
            prize: "Trophies and AOPS Coupon"
        },
        {
            winner: "2nd & 3rd Place Individual",
            prize: "Medals"
        },
        {
            winner: "2nd & 3rd Place Teams",
            prize: "Plaques"
        },
        {
            winner: "Others",
            prize: "Honorable Mentions"
        }
    ]
    
    return <div className='flex flex-col md:flex-row bg-slate-950 p-4 pt-16 md:p-8 gap-9 items-top md:pt-20'>
        <div className='grow border-b-sky-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 02.</p>
            <h1 className={`${jbm.className} text-sky-300 text-5xl`}>Prizes</h1>
            <p className='text-sm text-slate-300 mt-2 mb-4'>Full results will be announced after the tournament</p>
        </div>
        <div className='w-full md:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {prizes.map((prize, i) => (
                <div key={i} className='bg-slate-900 p-4 rounded-md border-2 border-slate-800 flex flex-row items-center gap-5'>
                    <div>
                        <h1 className={`${jbm.className} text-sky-300 font-bold text-lg`}>0{i+1}.</h1>
                    </div>
                    <div>
                        <span className='text-xs text-slate-300'>{prize.winner}</span>
                        <h1 className={`${jbm.className} text-xl text-sky-300 font-extrabold`}>{prize.prize}!</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
}