import { JetBrains_Mono } from "next/font/google"

const jbm = JetBrains_Mono({ subsets: ["latin"] })

export default function Footer() {
    return <main className="flex flex-col md:flex-row gap-2 border-t-sky-300 border-t-2 bg-slate-900 p-2 mt-8 md:items-center">
        <p className={`${jbm.className} text-sm text-slate-200 flex-1 font-bold`}><span className={`text-sky-300 font-bold mr-1`}>DECAGON</span>Tournament</p>
        <span className={`${jbm.className} text-xs text-slate-300 font-light`}>Website built by Ramy Kaddouri. Source available on <a href="https://github.com/rk234/decagon-site" target="_blank">GitHub</a>.</span>
    </main>
}