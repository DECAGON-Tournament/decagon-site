import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function Team() {
    const centennial = [
        "Ryan Zou", "Anurag Sodhi", "Caleb Shim", "Tanvi Gupta", "Olivia Roh",
        "Rajiv Jonnala", "Jaden Li", "Martin Meister", "Albert Cao"
    ]

    const glenelg = [
        "Iris Xu", "Tristan Tsang"
    ]
    
    return <div className='flex flex-col md:flex-row bg-slate-950 p-4 pt-16 md:p-8 gap-9 md:gap-9 items-top md:pt-20'>
        <div className='grow border-b-sky-300 border-b-2'>
            <p className={`${jbm.className} text-slate-300 text-sm`}> -&gt; 04.</p>
            <h1 className={`${jbm.className} text-sky-300 text-5xl`}>Our Team</h1>
        </div>
        <div className='w-full md:w-2/3 grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <div className='border-2 border-slate-800 rounded-md bg-slate-900'>
                <div className='p-4 w-full border-b-2 border-b-slate-800'>
                    <h1 className={`${jbm.className} text-sky-300 text-lg font-bold`}>Centennial Organizers</h1>
                </div>
                <ul className='p-4'>
                    {centennial.map((p, i) => {
                        return <li className='mt-1' key={i}> -&gt; {p}</li>
                    })}
                </ul>
            </div>
            <div className='border-2 border-slate-800 rounded-md bg-slate-900'>
                <div className='p-4 w-full border-b-2 border-b-slate-800'>
                    <h1 className={`${jbm.className} text-sky-300 text-lg font-bold`}>Glenelg Organizers</h1>
                </div>
                <ul className='p-4'>
                    {glenelg.map((p, i) => {
                        return <li className='mt-1' key={i}> -&gt; {p}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
}