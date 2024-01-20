import { JetBrains_Mono } from "next/font/google"

const jbm = JetBrains_Mono({ subsets: ["latin"] })

export default function NavBar() {
    return <main className="bg-slate-950 p-2 flex flex-row items-center">
        <span className={`${jbm.className} text-sky-300 text-2xl font-bold flex-1`}>DECAGON</span>
        
        <div className="flex flex-row gap-2 items-center">
            <a className={`${jbm.className} btn-primary text-sm`} href="https://docs.google.com/forms/d/e/1FAIpQLSeeC-h3OTe2GSN3e6pkJ3feinun5dQy8oQoBhUwVXs5WFh2Rg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Register</a>
        </div>
    </main>
}