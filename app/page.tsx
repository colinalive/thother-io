import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white selection:bg-blue-500/30">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <main className="text-center px-6 max-w-4xl mx-auto">
        <div className="mb-20 inline-block group cursor-default">
          <div className="text-5xl md:text-6xl font-black tracking-tighter italic border-b-4 border-blue-500 pb-2 transition-all duration-500 group-hover:border-blue-400 group-hover:text-blue-50">
            THOTHER<span className="text-blue-500 group-hover:text-blue-400">.IO</span>
          </div>
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Bridging the gap between <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Digital and Physical</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium tracking-wide">
              THOTHER is the invisible layer connecting your digital identity <br className="hidden md:block"/>
              to the physical world through cutting-edge spatial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
              <div className="text-blue-500 mb-4 text-2xl font-bold group-hover:scale-110 transition-transform origin-left">01</div>
              <h3 className="text-lg font-bold mb-2">Spatial Identity</h3>
              <p className="text-sm text-white/40 leading-relaxed italic">"Your digital twin, anchored in reality."</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
              <div className="text-blue-500 mb-4 text-2xl font-bold group-hover:scale-110 transition-transform origin-left">02</div>
              <h3 className="text-lg font-bold mb-2">Edge Protocols</h3>
              <p className="text-sm text-white/40 leading-relaxed italic">"Zero-latency synchronization across the global grid."</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
              <div className="text-blue-500 mb-4 text-2xl font-bold group-hover:scale-110 transition-transform origin-left">03</div>
              <h3 className="text-lg font-bold mb-2">Neural Assets</h3>
              <p className="text-sm text-white/40 leading-relaxed italic">"Programmable environments, responsive to your presence."</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 pt-12">
            <div className="w-64 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <span className="text-[10px] uppercase tracking-[0.8em] text-blue-400 font-bold animate-pulse">
              System Core Initializing
            </span>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-12 w-full text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/20 font-light">
          ePark Digital Partnership // Built for the next era
        </p>
      </footer>
    </div>
  )
}
