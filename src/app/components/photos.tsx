export default function Photos() {
    return <div className='flex flex-col md:flex-row bg-slate-950 p-4 pt-16 md:p-8 md:pt-20 gap-9 md:gap-9 items-top'>
      <div className='grow border-b-sky-300 border-b-2'>
        <p className={`font-mono text-sm`}> -&gt; 05.</p>
        <h1 className={`font-mono text-sky-300 text-5xl`}>Photos</h1>
      </div>
      <div className='w-full md:w-2/3 flex flex-col gap-5'>
        <div className="flex flex-col border-2 border-gray-600">
          <div className="p-4 bg-gray-600 text-slate-200">
            <h1 className={`font-mono text-lg`}>2026</h1>
          </div>
          <div className="flex flex-row flex-wrap items-center p-4 gap-8">
            <p className="font-mono text-slate-400 text-sm">Photos coming soon.</p>
          </div>
        </div>
      </div>
    </div>
  }
  