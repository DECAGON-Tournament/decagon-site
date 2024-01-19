import { JetBrains_Mono } from "next/font/google"

const jbm = JetBrains_Mono({ subsets: ["latin"] })

export default function NavBar() {
    return <main className="bg-black p-2 flex flex-row items-center">
        <span className={`${jbm.className} text-sky-300 text-2xl font-bold flex-1`}>DECAGON</span>
        
        <div className="flex flex-row gap-2 items-center">
            <button> Link </button>    
            <button> Link </button>    
            <button> Link </button>    
        </div>
    </main>
}