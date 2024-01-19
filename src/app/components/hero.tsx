"use client"
import { JetBrains_Mono } from "next/font/google"
import { createRef, useEffect, useRef } from "react"
const jbm = JetBrains_Mono({ subsets: ["latin"] })


export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        window.addEventListener("resize", () => handleResize());
        handleResize()
        draw();
    }, [])

    function handleResize() {
        console.log("resize!")
        if(canvasRef.current) {
            const parent = canvasRef.current.parentElement;

            if(parent) {
                const rect = parent.getBoundingClientRect()
                canvasRef.current.width = rect.width;
                canvasRef.current.height = rect.height;
            }
        }
        draw()
    }

    function draw() {
        const canvas = canvasRef.current;
        if(canvas) {
            const context = canvas.getContext("2d");
            context!.strokeStyle = "#00b7ff"
            
            context!.translate(canvas.width*1.5, canvas.height/2);

            for(var i = 0; i < 200; i++) {
                const size = 20*(i+1);
                context!.strokeRect(-size/2, -size/2, size, size)
                context!.rotate(0.5);
                context!.lineWidth = 75/i;

            }
        }
    }

    return <main className="bg-sky-950 relative border-y-2 border-y-sky-300 min-h-96 overflow-hidden" style={{height: "66vh"}}>
        <canvas onResize={handleResize} ref={canvasRef} className="relative top-0 left-0"> </canvas>
        <div className="flex flex-row items-center z-20 absolute top-0 left-0 w-full h-full p-8 bg-opacity-80 bg-slate-900 md:bg-opacity-100 md:bg-transparent md:bg-gradient-to-l md:via-90% md:via-slate-900 md:from-transparent md:to-slate-900">
            <div className="md:w-1/2 w-full">
                <h1 className={`${jbm.className} text-6xl md:text-8xl font-bold mb-1`}>DECAGON</h1>
                <p className={`${jbm.className} text-sky-300 text-sm mb-4`}>(Deciphering Equations, Centennial and Glenelg's Operation in Numbers)</p>
                <p className="text-sm md:text-base">Centennial National Math Honor Society's and Glenelg National Math Honor Society's annual math tournament!</p>
                <p className={`${jbm.className} text-slate-400 text-xs`}>Registration is free and open until April 3, 2024, 11:59 PM.</p>

                <button className={`${jbm.className} bg-sky-300 p-1 w-full md:w-auto text-slate-900 rounded-sm mt-4`}>Sign Up</button>
            </div>
        </div>
    </main>
}