import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({subsets: ["latin"], style: ["normal"]})

export default function Rounds() {
    return <main className='flex flex-col xl:flex-row px-8 gap-5 justify-between bg-slate-950'>
        <div className='bg-slate-900 p-4 rounded-md border-2 border-sky-900 xl:max-w-80'>
            <h1 className={`${jbm.className} text-lg text-sky-300 mb-4 `}>Individual Round</h1>
            <div>
                <p>Competitors will pick 2 of the following categories to compete in:</p>
                <ul className='ml-4 list-disc'>
                    <li>Algebra/Number Theory</li>
                    <li>Geometry</li>
                    <li>Probability/Combinatorics</li>
                </ul>
                <p>Each test will be 15 questions long. Competitors will have 50 minutes to complete each test.</p>
            </div>
        </div>
        <div className='bg-slate-900 p-4 rounded-md border-2 border-sky-900 xl:max-w-80'>
            <h1 className={`${jbm.className} text-lg text-sky-300 mb-4`}>Team Round</h1>
            <div>
                <p>
                Teams of up to 4 will take the team test.
                Competitors may form prearranged teams.
                Those without teammates will be put in a team.
                The test will be 10 questions and 30 minutes long.
                The team score will be calculated by adding twice the team round score to four times the average score on all tests of all members (as some teams have fewer than 4 people).
                </p>
            </div>
        </div>
        <div className='bg-slate-900 p-4 rounded-md border-2 border-sky-900 xl:max-w-80'>
            <h1 className={`${jbm.className} text-lg text-sky-300 mb-4`}>Countdown Round</h1>
            <div>
                <p>
                The top 4 competitors from each individual category will participate in a countdown round for that category. Competitors will compete head-to-head in this round. A problem will be displayed through a presentation, and the contestants will race to solve the problem (with pencil and paper). 

                </p>
            </div>
        </div>

        <div className='bg-slate-900 p-4 rounded-md border-2 border-sky-900 xl:max-w-80'>
            <h1 className={`${jbm.className} text-lg text-sky-300 mb-4`}>Estimathon</h1>
            <div>
                <p>
                The Estimathon is a more fun and casual round involving the estimation of various interesting quantities. Teams have 30 minutes to work on a set of 13 estimation problems. Answers will be in interval form, and scores will be based on whether or not the interval contains the value, as well as the precision of the submitted interval.
                </p>
            </div>
        </div>
    </main>    
}