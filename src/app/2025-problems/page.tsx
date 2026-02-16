import Hero from '../components/hero'
import Link from 'next/link'


const problems = () => {
    return (
        <div>
            <Hero></Hero>
        <div className='flex flex-col md:flex-row bg-slate-950 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
            <div className='grow border-b-sky-300 border-b-2'>
                <p className={`font-mono text-slate-300 text-sm`}> -&gt; 01.</p>
                <h1 className={`font-mono text-sky-300 text-5xl`}>2025 Practice Problems </h1>
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-1'>
                <h1 className={`font-mono text-sky-300 font-bold text-2xl`}>2025 Tests</h1>
                <p>
                    Below are the problems from the 2025 DECAGON tournament. Click on each link to download the corresponding problem set.
                </p>
                <p>
                    <a className="link text-sky-50" href="/past_problems/2025/General-25.pdf" download>General Round</a>
                </p>
                <p>
                    <a className="link text-sky-50" href="/past_problems/2025/Algebra-NT-25.pdf" download>Algebra and Number Theory Round</a>
                </p>
                <p>
                    <a className="link text-sky-50" href="/past_problems/2025/Geometry-25.pdf" download>Geometry Round</a>
                </p>
                <p>
                    <a className="link text-sky-50" href="/past_problems/2025/Combo-25.pdf" download>Combinatorics Round</a>
                </p>
                <p>
                    <a className="link text-sky-50" href="/past_problems/2025/Team-25.pdf" download>Team Round</a>
                </p>
                <p>
                    <a className="link text-sky-50" href="/past_problems/2025/Estimathon-25.pdf" download>Estimathon Round</a>
                </p>
                <p> </p>
                <div className="flex flex-row mt-2 gap-3">
                <Link className={`font-mono btn-primary`} href="/archive">Return to Archive</Link>
                </div>
            </div>
        </div>
    
        </div>
    );
}
export default problems;