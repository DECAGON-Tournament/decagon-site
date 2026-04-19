export default function Rounds() {
    return <main className='flex flex-col xl:flex-row px-4 pt-5 md:px-8 md:pt-10 gap-5 justify-between bg-slate-950'>
            <div className='bg-slate-900 p-4 rounded-md border-2 border-slate-800  xl:flex-grow xl:basis-0'>
            <h1 className={`font-mono text-lg text-sky-300 mb-4 font-bold`}>2026 Winners</h1>
            <div>
                <h2 className="text-lg italic"> OVERALL Individual Winners </h2>
                <ol className='list-decimal list-inside my-2'>
                    <li>Lucas He</li>
                    <li>Daniel Li</li>
                    <li>Ryan Huan</li>
                </ol>
            </div>
            <div>
                <h2 className="text-lg italic"> Algebra Winners </h2>
                <ol className='list-decimal list-inside my-2'>
                    <li>Max Yu</li>
                    <li>Lucas He</li>
                    <li>Daniel Li</li>
                </ol>
            </div>
            <div>
                <h2 className="text-lg italic"> Geometry Winners </h2>
                <ol className='list-decimal list-inside my-2'>
                    <li>Phi Huynh</li>
                    <li>Lucas He</li>
                    <li>Colin Hager</li>
                </ol>
            </div>
            <div>
                <h2 className="text-lg italic"> Combinatorics Winners </h2>
                <ol className='list-decimal list-inside my-2'>
                    <li>Sophia Hua</li>
                    <li>Daniel Li</li>
                    <li>Andy Yue</li>
                </ol>
            </div>
            <div>
                <h2 className="text-lg italic"> General Round Winners </h2>
                <ol className='list-decimal list-inside my-2'>
                    <li>Anna Hao</li>
                    <li>Ryan Huan</li>
                    <li>Aaron Hua</li>
                </ol>
            </div>
            <div>
                <h2 className="text-lg italic"> GUTS Round Winners </h2>
                <ol className='list-decimal list-inside my-2'>
                    <li>Lucas He, Caleb Jeng, Daniel Li, Andy Yue</li>
                    <li>Phi Huynh, Colin Hager, Max Yu, Raymond Deng</li>
                    <li>Aarush Rajesh Kumar, Sam Lee, Evan Tan</li>
                </ol>
            </div>
            <div>
                <h2 className="text-lg italic"> Team Round Winners </h2>
                <ol className='list-decimal list-inside my-2'>
                    <li>Lucas He, Caleb Jeng, Daniel Li, Andy Yue</li>
                    <li>Phi Huynh, Colin Hager, Max Yu, Raymond Deng</li>
                    <li>Sophia Hua, Aaron Hua, Sherry Wei</li>
                </ol>
            </div>
        </div>
        <div className='bg-slate-900 p-4 rounded-md border-2 border-slate-800 xl:flex-grow xl:basis-0'>
            
            <h1 className={`font-mono text-lg text-sky-300 mb-4 font-bold`}>Individual Round</h1>
            <div className='text-slate-200'>
                <p>Competitors will pick 2 of the following categories to compete in:</p>
                <ul className='ml-5 list-disc my-2'>
                    <li>General</li>
                    <li>Algebra/Number Theory</li>
                    <li>Geometry</li>
                    <li>Probability/Combinatorics</li>
                </ul>
                <p>Each test will be 10 questions long. Competitors will have 45 minutes to complete each test.</p>
            </div>
             
        </div>
        <div className='bg-slate-900 p-4 rounded-md border-2 border-slate-800 xl:flex-grow xl:basis-0'>
            <h1 className={`font-mono text-lg text-sky-300 mb-4 font-bold`}>Team Round</h1>
            <div className='text-slate-200'>
                <p>
                    Teams of up to 4 will take the team test.
                    Competitors may form prearranged teams.
                    Those without teammates will be put in a team.
                    The test will be 10 questions and 45 minutes long.
                    The team score will be calculated by adding twice the team round score to four times the average score on all tests of all members (as some teams have fewer than 4 people).
                </p>
            </div>
            {/* <hr className="border border-slate-700 my-2" />
            <div>
                <h2 className="text-lg italic"> Winners </h2>
                <ol className='list-decimal list-inside my-2'>
                    <li>Team 11</li>
                    <li>Team 2</li>
                    <li>Team 3</li>
                </ol>
            </div> */}
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
            <h1 className={`font-mono text-lg text-sky-300 mb-4 font-bold`}>Guts Round</h1>
            <div className='text-slate-200'>
                <p>
                    The guts round is a 45-minute team round with the same teams as the team round. Teams will work on 6 sets of increasingly difficult problems with 4 problems per set with one set of estimation at the end. At the starting signal, each team sends a runner to an assigned problem station to pick up copies of the first set of problems for each team member. As soon as a team has answers for one problem set, the runner may bring the answers to the problem station and pick up the next set. The guts round will have a scoreboard of the teams updated in real time.
                </p>
            </div>
            {/* <hr className="border border-slate-700 my-2" />
            <div>
                <h2 className="text-lg italic"> Winners </h2>
                <ol className='list-decimal list-inside my-2'>
                    <li>Team 6</li>
                    <li>Team 3</li>
                    <li>Team 4</li>
                </ol>
            </div> */}
        </div>
    </main>
}
