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
            
            context!.translate(canvas.width*1.25, canvas.height/2);

            for(var i = 0; i < 200; i++) {
                const size = 20*(i+1);
                context!.strokeRect(-size/2, -size/2, size, size)
                context!.rotate(0.5);
                context!.lineWidth = 75/i;

            }
        }
    }

    return <main className="bg-sky-950 relative">
        <canvas onResize={handleResize} ref={canvasRef} className="relative top-0 left-0 h-full min-h-80 max-h-96 w-full"> </canvas>
        <div className="flex flex-row items-center z-20 absolute top-0 left-0 w-full h-full p-8 bg-opacity-80 bg-slate-900 md:bg-opacity-100 md:bg-transparent md:bg-gradient-to-l md:via-90% md:via-slate-900 md:from-transparent md:to-slate-900">
            <div className="md:w-1/2 w-full">
                <h1 className={`${jbm.className} text-6xl md:text-8xl font-bold mb-1`}>DECAGON</h1>
                <p className={`${jbm.className} text-sky-300 text-sm mb-4`}>(Deciphering Equations, Centennial and Glenelg's Operation in Numbers)</p>
                <p className="text-sm md:text-base text-slate-200">The Centennial National Math Honor Society is partnering this year with the Glenelg National Math Honor Society to host the new DECAGON Tournament, a continuation of the annual CHS Mu Alpha Theta Tournament!</p>
            </div>
        </div>
    </main>
}