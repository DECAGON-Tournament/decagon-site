import { JetBrains_Mono } from 'next/font/google'

const jbm = JetBrains_Mono({ subsets: ["latin"], style: ["normal"] })

export default function Schedule() {
    return <div className='flex flex-col xl:flex-row bg-slate-950 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
        <div className='grow border-b-sky-300 border-b-2'>
            <p className={`font-mono text-slate-300 text-sm`}> -&gt; 03.</p>
            <h1 className={`font-mono text-sky-300 text-5xl`}>Schedule</h1>
        </div>
        <div className='w-full xl:w-2/3 flex flex-col gap-1'>
            <table className='table-auto border-2 border-collapse border-slate-800'>
                <thead className={`font-mono`}>
                    <tr>
                        <th>Time</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8:30 AM - 9:00 AM</td>
                        <td>Check-in</td>
                    </tr>
                    <tr>
                        <td>9:00 AM - 9:20 AM</td>
                        <td>Opening Ceremony</td>
                    </tr>
                    <tr>
                        <td>9:25 AM - 10:20 AM</td>
                        <td>Individual Round 1 (Algebra/Geometry)</td>
                    </tr>
                    <tr>
                        <td>10:25 AM - 11:20 AM</td>
                        <td>Individual Round 2 (General/Combinatorics/Number Theory)</td>
                    </tr>
                    <tr>
                        <td>11:25 AM - 12:00 PM</td>
                        <td>Team Round</td>
                    </tr>
                    <tr>
                        <td>12:05 PM - 12:50 PM</td>
                        <td>Lunch</td>
                    </tr>
                    <tr>
                        <td>12:55 PM - 1:30 PM</td>
                        <td>Theme Round</td>
                    </tr>
                    <tr>
                        <td>1:35 PM - 2:10 PM</td>
                        <td>Countdown Round</td>
                    </tr>
                    <tr>
                        <td>2:15 PM - 2:40 PM</td>
                        <td>Awards</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}