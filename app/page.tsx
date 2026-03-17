import Link from 'next/link'

export const runtime = 'edge'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <main className="text-center px-6">
        {/* Logo */}
        <div className="mb-12 inline-block">
          <div className="text-4xl font-black tracking-tighter italic border-b-2 border-blue-500 pb-2">
            THOTHER<span className="text-blue-500">.IO</span>
          </div>
        </div>

        {/* Status Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          SYSTEM <span className="text-blue-500">UPGRADING</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/40 max-w-xl mx-auto font-light leading-relaxed mb-12 italic">
          "We are currently enhancing our core edge infrastructure. Next-generation digital identity protocols and spatial intelligence modules are being deployed to the global network."
        </p>

        {/* Loading Indicator Mockup */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] animate-[shimmer_2s_infinite]"></div>
          </div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-blue-400 font-bold animate-pulse">
            Deployment in progress
          </span>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-12 w-full text-center">
        <p className="text-xs uppercase tracking-widest text-white/20">
          Estimated completion: Q1 2026 // THOTHER Labs
        </p>
      </footer>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  )
}
