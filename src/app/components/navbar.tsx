import { JetBrains_Mono } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const jbm = JetBrains_Mono({ subsets: ["latin"] })

export default function NavBar() {
    return (
        <main className="bg-slate-950 p-2 flex flex-row items-center">
            <Link href="/">
                <Image src="/logo.svg" height={10} width={10} alt="DECAGON Logo" className="h-8 w-auto"/>
            </Link>
            <div className="flex-1"></div>
            <div className="flex flex-row gap-2 items-center">
                <Link href="/archive" className={`font-mono btn-outline text-sm`}>Archive</Link>
                <a className={`font-mono btn-primary text-sm`} href="https://docs.google.com/forms/d/e/1FAIpQLScpjn7_FVppF_dUXMwyW3Jvr6JFljcZ-nomra9cokKsKrsohQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer">Register</a>
            </div>
        </main>
    )
}