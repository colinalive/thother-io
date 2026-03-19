import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col bg-black text-white selection:bg-orange-500/30 font-sans tracking-tight">
      {/* 1. HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[160px] rounded-full animate-pulse"></div>
          {/* Mock for cinematic lighting/product render area */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
        </div>

        <nav className="absolute top-0 w-full flex justify-between items-center p-8 md:p-12">
          <div className="text-2xl font-black tracking-tighter italic">THOTHER</div>
          <div className="space-x-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
            <Link href="#objects" className="hover:text-white transition-colors">Objects</Link>
            <Link href="#store" className="hover:text-white transition-colors">Store</Link>
          </div>
        </nav>

        <div className="text-center z-10 space-y-8">
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter italic leading-none">
            THOTHER
          </h1>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-light tracking-[0.2em] uppercase text-white/60">
              Between digital and physical.
            </p>
            <p className="text-sm md:text-base font-medium tracking-wide text-white/40 max-w-lg mx-auto leading-relaxed">
              Design-led objects, shaped in code. Produced in reality.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <Link href="#objects" className="w-full md:w-auto px-10 py-4 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-black hover:bg-orange-500 hover:text-white transition-all duration-500">
              Explore Objects
            </Link>
            <Link href="#store" className="w-full md:w-auto px-10 py-4 border border-white/20 text-[10px] uppercase tracking-[0.4em] font-black hover:border-white transition-all duration-500">
              Enter Store
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-20">
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* 2. BRAND SECTION */}
      <section className="py-32 md:py-60 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto space-y-12">
          <p className="text-[10px] uppercase tracking-[0.5em] text-orange-500 font-bold">The Manifesto</p>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">
            THOTHER is a design-led fashion brand built on 3D printing.
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg md:text-xl text-white/50 leading-relaxed font-light">
              <p>
                We create digitally designed, physically produced pieces — from footwear and bags to collectible art objects.
              </p>
              <p>
                Each piece begins in the digital space and is brought into reality through additive manufacturing.
              </p>
            </div>
            <div className="space-y-6 text-lg md:text-xl text-white/50 leading-relaxed font-light">
              <p>Not mass-produced. Not trend-driven.</p>
              <p className="text-white font-medium italic underline decoration-orange-500 underline-offset-8">Design comes first.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OBJECTS SECTION */}
      <section id="objects" className="py-32 md:py-60 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter">Objects</h2>
              <p className="text-[10px] uppercase tracking-[0.5em] text-white/40">Footwear / Bags / Art Objects</p>
            </div>
            <div className="max-w-sm text-right">
              <p className="text-white/60 italic leading-relaxed font-light">
                Designed in code. Produced layer by layer. Each object is part of a limited release. No mass production. No repetition.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            {/* Placeholder for Product Grid */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[3/4] bg-neutral-900 relative group overflow-hidden cursor-crosshair">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=1000')] bg-cover bg-center grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-black">Object {i}00</p>
                  <p className="text-sm font-bold uppercase tracking-widest">Limited Release</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION */}
      <section className="py-32 md:py-60 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Process</h2>
          <div className="space-y-8 max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed">
              From digital modeling to physical form. We explore structure, material, and geometry through additive manufacturing.
            </p>
            <p className="text-lg text-orange-500 italic font-medium">
              Every piece is an experiment.
            </p>
          </div>
          
          {/* Abstract Wireframe Visual Mock */}
          <div className="pt-20 opacity-10">
            <div className="w-full h-px bg-white"></div>
            <div className="flex justify-between h-40">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-px bg-white h-full transform" style={{ transform: `skewX(${i * 2}deg)` }}></div>
              ))}
            </div>
            <div className="w-full h-px bg-white"></div>
          </div>
        </div>
      </section>

      {/* 5. DROPS SECTION */}
      <section className="py-32 md:py-60 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter">Drops</h2>
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-medium">Limited releases. Small batches.</p>
            <p className="text-lg text-black/40 italic">Once gone, not restocked.</p>
          </div>
          <button className="px-16 py-6 bg-black text-white text-[10px] uppercase tracking-[0.5em] font-black hover:bg-orange-500 transition-all duration-500">
            Join Drop
          </button>
        </div>
      </section>

      {/* 6. FOOTER CTA */}
      <footer className="py-32 md:py-48 px-6 text-center space-y-16 border-t border-white/5">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase">
            Enter the next form of design.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="#store" className="text-[10px] uppercase tracking-[0.4em] font-black py-4 px-8 border-b-2 border-orange-500 hover:text-orange-500 transition-colors">
              Enter Store
            </Link>
            <Link href="https://instagram.com" className="text-[10px] uppercase tracking-[0.4em] font-black py-4 px-8 border-b-2 border-white/10 hover:border-white transition-all">
              Follow Instagram
            </Link>
          </div>
        </div>
        
        <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-8 opacity-20 text-[10px] uppercase tracking-[0.3em] font-bold">
          <p>© 2026 THOTHER LABS / EPARK DIGITAL PARTNERSHIP</p>
          <p>London // Shanghai // Digital Space</p>
        </div>
      </footer>
    </div>
  )
}
