import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function Prizes() {
    const prizes = [
        {
            winner: "Winning Teams/Individuals",
            prize: "Trophies"
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
            prize: "And More"
        }
    ]
    
    return <div className='flex flex-col md:flex-row bg-slate-950 p-4 pt-16 md:p-8 gap-9 items-top md:pt-20'>
        <div className='grow border-b-sky-300 border-b-2'>
            <p className={`font-mono text-slate-300 text-sm`}> -&gt; 02.</p>
            <h1 className={`font-mono text-sky-300 text-5xl`}>Prizes</h1>
            <p className='text-md text-slate-300 mt-2 mb-4'>Over $1000 in prizes!</p>
        </div>
        <div className='w-full md:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-2'>
            {prizes.map((prize, i) => (
                <div key={i} className='bg-slate-900 p-4 rounded-md border-2 border-slate-800 flex flex-row items-center gap-5'>
                    <div>
                        <h1 className={`font-mono text-sky-300 font-bold text-lg`}>0{i+1}.</h1>
                    </div>
                    <div>
                        <h1 className={`font-mono text-xl text-slate-300 font-extrabold`}>{prize.prize}!</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
}