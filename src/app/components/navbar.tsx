import { JetBrains_Mono } from "next/font/google"
import Image from "next/image"

const jbm = JetBrains_Mono({ subsets: ["latin"] })

export default function NavBar() {
    return <main className="bg-slate-950 p-2 flex flex-row items-center">
        <Image src="/logo.svg" height={10} width={10} alt="DECAGON Logo" className="h-8 w-auto"/>
        <div className="flex-1"></div>
        <div className="flex flex-row gap-2 items-center">
            <a className={`font-mono btn-primary text-sm`} href="https://docs.google.com/forms/d/e/1FAIpQLSeeC-h3OTe2GSN3e6pkJ3feinun5dQy8oQoBhUwVXs5WFh2Rg/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">Register</a>
        </div>
    </main>
}