export default function Rounds() {
    return <main className='flex flex-col xl:flex-row px-4 pt-5 md:px-8 md:pt-10 gap-5 justify-between bg-slate-950'>
        <div className='bg-slate-900 p-4 rounded-md border-2 border-slate-800 xl:flex-grow xl:basis-0'>
            <h1 className={`font-mono text-lg text-sky-300 mb-4 font-bold`}>Individual Round</h1>
            <div className='text-slate-200'>
                <p>Competitors will pick 2 of the following categories to compete in:</p>
                <ul className='ml-4 list-disc my-2'>
                    <li>Algebra/Number Theory</li>
                    <li>Geometry</li>
                    <li>Probability/Combinatorics</li>
                </ul>
                <p>Each test will be 15 questions long. Competitors will have 50 minutes to complete each test.</p>
            </div>
        </div>
        <div className='bg-slate-900 p-4 rounded-md border-2 border-slate-800 xl:flex-grow xl:basis-0'>
            <h1 className={`font-mono text-lg text-sky-300 mb-4 font-bold`}>Team Round</h1>
            <div className='text-slate-200'>
                <p>
                    Teams of up to 4 will take the team test.
                    Competitors may form prearranged teams.
                    Those without teammates will be put in a team.
                    The test will be 10 questions and 30 minutes long.
                    The team score will be calculated by adding twice the team round score to four times the average score on all tests of all members (as some teams have fewer than 4 people).
                </p>
            </div>
        </div>
        <div className='bg-slate-900 p-4 rounded-md border-2 border-slate-800  xl:flex-grow xl:basis-0'>
            <h1 className={`font-mono text-lg text-sky-300 mb-4 font-bold`}>Countdown Round</h1>
            <div className='text-slate-200'>
                <p>
                    The top 4 competitors from each individual category will participate in a countdown round for that category. Competitors will compete head-to-head in this round. A problem will be displayed through a presentation, and the contestants will race to solve the problem (with pencil and paper).

                </p>
            </div>
        </div>

        <div className='bg-slate-900 p-4 rounded-md border-2 border-slate-800 xl:flex-grow xl:basis-0'>
            <h1 className={`font-mono text-lg text-sky-300 mb-4 font-bold`}>Theme Round</h1>
            <div className='text-slate-200'>
                <p>
                    The theme round is a more fun and casual round, and this year&apos;s theme will be revealed at the event.
                </p>
            </div>
        </div>
    </main>
}
