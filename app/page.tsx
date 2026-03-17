import Link from 'next/link'

export const runtime = 'edge'

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter italic">
          THOTHER<span className="text-blue-500">.IO</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
          <Link href="/" className="hover:text-white transition-colors">Infrastructure</Link>
          <Link href="/" className="hover:text-white transition-colors">Ecosystem</Link>
          <Link href="/" className="hover:text-white transition-colors">Identity</Link>
        </div>
        <button className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all rounded">
          Connect
        </button>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] -z-10 rounded-full"></div>
          
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-tight">
              THE <span className="thother-gradient">THOTHER</span> <br />
              PROTOCOL
            </h1>
            <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto font-light leading-relaxed mb-12">
              Next-generation digital identity and spatial intelligence infrastructure. 
              Accelerating the transition to a borderless digital economy.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="/api/hello" className="px-10 py-5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                Launch Dashboard
              </Link>
              <button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-md">
                Read Whitepaper
              </button>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 border border-white/5 bg-black rounded-2xl hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Edge Infrastructure</h3>
              <p className="text-white/40 leading-relaxed italic">
                Deployed on Cloudflare Workers for sub-millisecond response times globally. No cold starts, just performance.
              </p>
            </div>
            
            <div className="p-8 border border-white/5 bg-black rounded-2xl hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Persistent State</h3>
              <p className="text-white/40 leading-relaxed italic">
                Fully integrated with Cloudflare D1 SQL database for mission-critical data integrity and ACID compliance at the edge.
              </p>
            </div>

            <div className="p-8 border border-white/5 bg-black rounded-2xl hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-teal-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Spatial Storage</h3>
              <p className="text-white/40 leading-relaxed italic">
                Leveraging Cloudflare R2 for zero-egress cost object storage, hosting the next generation of spatial assets.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm text-white/30 uppercase tracking-[0.3em]">
          &copy; {currentYear} THOTHER Labs. All Rights Reserved.
        </div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="/" className="hover:text-white transition-colors">GitHub</Link>
          <Link href="/" className="hover:text-white transition-colors">Discord</Link>
        </div>
      </footer>
    </div>
  )
}
