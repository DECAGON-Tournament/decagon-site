import Hero from '../components/hero'
import Link from 'next/link'

const Archive = () => {
    return (
        <div>
            <Hero></Hero>
        <div className='flex flex-col md:flex-row bg-slate-950 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
            <div className='grow border-b-sky-300 border-b-2'>
                <p className={`font-mono text-slate-300 text-sm`}> -&gt; 01.</p>
                <h1 className={`font-mono text-sky-300 text-5xl`}>Archive </h1>
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-1'>
                <h1 className={`font-mono text-sky-300 font-bold text-2xl`}>Overview</h1>
                <p>
                    This is the archive page for the DECAGON math tournament. Here, you can find past problems, information about previous organizers who have contributed to the success of the event, and past photos from the tournament. We hope this archive serves as a valuable resource for participants to learn from past competitions and get inspired for future ones.
                </p>
                <div className="flex flex-row mt-2 gap-3">
                <Link className={`font-mono btn-primary`} href="/">Return to Homepage</Link>
                </div>
            </div>

                
        </div>

        <div className='flex flex-col md:flex-row bg-slate-950 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
            <div className='grow border-b-sky-300 border-b-2'>
                <p className={`font-mono text-slate-300 text-sm`}> -&gt; 01.</p>
                <h1 className={`font-mono text-sky-300 text-5xl`}>Past DECAGON Tests </h1>
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-1'>
                <h1 className={`font-mono text-sky-300 font-bold text-2xl`}>Practice with Past Problems</h1>
                <p>
                    To help you prepare for the DECAGON tournament, we have compiled a selection of past problems from previous years. These problems cover a range of topics and difficulty levels, providing an excellent opportunity for practice and skill enhancement.
                </p>
                <p>
                    You can access the past problems through the links below. We encourage all participants to review these problems and use them as a resource for their preparation. Good luck, and we look forward to seeing you at the tournament!
                </p>
                <div className="flex flex-row mt-2 gap-3">
                <Link className={`font-mono btn-primary`} href="/2025-problems">2025</Link>
                <Link className={`font-mono btn-primary`} href="/2024-problems">2024</Link>
                </div>
            </div>

                
        </div>

        <div className='flex flex-col md:flex-row bg-slate-950 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
            <div className='grow border-b-sky-300 border-b-2'>
                <p className={`font-mono text-slate-300 text-sm`}> -&gt; 01.</p>
                <h1 className={`font-mono text-sky-300 text-5xl`}>Past Organizers </h1>
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-4'>
                <h1 className={`font-mono text-sky-300 font-bold text-2xl`}>2025 Team</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    {/* Compact organizers block (smaller than home page) */}
                    <div className='border border-slate-800 rounded-md bg-slate-900 p-3 text-sm'>
                        <h2 className={`font-mono text-sky-300 text-base font-semibold`}>Centennial Organizers</h2>
                        <p className='text-slate-300 mt-2'>
                            {[
                                "Albert Cao", "Tanvi Gupta", "Martin Meister", "Jaden Li", "Sophie Zhang",
                                "Barry Chen", "Nicholas Cui", "Aryan Sharma", "Joshua Oh", "Ethan Burgoon", "Nathan Lu", "Joe Li"
                            ].join(', ')}
                        </p>
                    </div>

                    <div className='border border-slate-800 rounded-md bg-slate-900 p-3 text-sm'>
                        <h2 className={`font-mono text-sky-300 text-base font-semibold`}>Glenelg Organizers</h2>
                        <p className='text-slate-300 mt-2'>
                            {[
                                "Samuel Yoon", "Sai Challagundla", "Zenia Haroon", "Riya Gangabathina", "Sanjay Mavalli",
                                "Alex Chen", "Steven Wang", "Jeffrey Wu"
                            ].join(', ')}
                        </p>
                    </div>
                </div>
            </div>

                
        </div>

        <div className='flex flex-col md:flex-row bg-slate-950 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
            <div className='grow border-b-sky-300 border-b-2'>
                <p className={`font-mono text-slate-300 text-sm`}> -&gt; 03.</p>
                <h1 className={`font-mono text-sky-300 text-5xl`}>Past Photos</h1>
            </div>
            <div className='w-full md:w-2/3 flex flex-col gap-5'>
                <div className="flex flex-col border-2 border-gray-600">
                    <div className="p-4 bg-gray-600 text-slate-200">
                        <h1 className={`font-mono text-lg`}>2025</h1>
                    </div>
                    <div className="flex flex-row flex-wrap items-center p-4 gap-8">
                        <img src="photos/IMG_2202.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_2203.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_2204.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_2205.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_2207.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_2208.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_2209.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_1752.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_2165.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_2169.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_2180.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                        <img src="photos/IMG_9073.jpg" className='h-60' alt="DECAGON 2025 Photo" />
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
}
export default Archive;