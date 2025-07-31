import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({ subsets: ["latin"], style: ["normal"] })

export default function About() {
    return <div className='flex flex-col md:flex-row bg-slate-950 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-sky-300 border-b-2'>
            <p className={`font-mono text-slate-300 text-sm`}> -&gt; 01.</p>
            <h1 className={`font-mono text-sky-300 text-5xl`}>Overview </h1>
        </div>
        <div className='w-full md:w-2/3 flex flex-col gap-1'>
            <h1 className={`font-mono text-sky-300 font-bold text-2xl`}>What is DECAGON?</h1>
            <p>
                The Centennial National Math Honor Society is partnering this year with the Glenelg National Math Honor Society to host the new DECAGON Tournament, a continuation of the annual CHS Mu Alpha Theta Tournament! <span className="font-bold"> All levels of math competition experience are welcome!!! </span>
            </p>
            <p>
                The tournament is a great way for competitors to test their math skills in a fun, low-stress competition.
            </p>
            <p>
                Students of all grades may register for free. If you plan to form a team with people you already know, please list the members of your team. If you register as an individual, we will place you on a team for the team round, so don’t worry!
            </p>
            <h1 className={`font-mono text-sky-300 font-bold text-2xl mt-4`}>Location</h1>
            <p>We will be hosting at two locations:</p>
            <ul className='ml-5 list-disc my-2'>
                    <li>Centennial High School <a className="link mx-1 text-sky-50" href="https://maps.app.goo.gl/vRjrU1QYevxyWkRS8" target="_blank" rel="noopener noreferrer">(4300 Centennial Lane, Ellicott City, MD, 21042)</a> - Advanced Division</li>
                    <li>Glenelg High School <a className="link mx-1 text-sky-50" href="https://maps.app.goo.gl/hD43XwYAafoT5kobA" target="_blank" rel="noopener noreferrer">(14025 Burntwoods Rd, Glenelg, MD 21737)</a> - Beginner Division</li>
                </ul>
            <h1 className={`font-mono text-sky-300 font-bold text-2xl mt-4`}>Lunch</h1>
            <p>
                Lunch is free at both locations! We will be serving cheese and pepperoni pizza.
            </p>
            <h1 className={`font-mono text-sky-300 font-bold text-2xl mt-4`}>Test Guidelines</h1>
            <p>
                All answers should be in simplest form. The only permitted materials are pencils and paper. Computational aids, including but not limited to calculators, rulers, protractors, and graph paper are strictly prohibited.
            </p>
            <h1 className={`font-mono text-sky-300 font-bold text-2xl mt-4`}>Past Problems</h1>
            <p>
                Check out some of our rounds from previous years to get used to the format and difficulty!
            </p>
            <div className="flex flex-row mt-2 gap-3">
                <a className={`font-mono btn-primary`} href="https://drive.google.com/drive/folders/1BlJLLr1IBxH8IXzaZcnZw0ABs-K3rMog?usp=sharing" target="_blank" rel="noopener noreferrer">2024</a>
                <a className={`font-mono btn-primary`} href="https://drive.google.com/drive/folders/1r6tFzyHF4kIgz1fZs1QV5BpvPnn4eo7v?usp=sharing" target="_blank" rel="noopener noreferrer">2025</a>
            </div>
        </div>
    </div>
}
