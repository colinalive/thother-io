import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col bg-black text-white selection:bg-orange-500/30 font-sans tracking-tight leading-none">
      {/* 1. HERO REFINEMENT */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
        {/* Full-screen background visual: high-contrast abstract structure */}
        <div className="absolute inset-0 -z-10 bg-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000')] bg-cover bg-center grayscale opacity-40 mix-blend-luminosity scale-110"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-orange-600/5 blur-[120px] rounded-full"></div>
        </div>

        <nav className="absolute top-0 w-full flex justify-between items-center p-8 md:p-16 z-50">
          <div className="text-3xl font-black tracking-tighter italic">THOTHER</div>
          <div className="hidden md:flex space-x-12 text-[11px] uppercase tracking-[0.4em] font-bold text-white/50">
            <Link href="#objects" className="hover:text-white transition-colors">Objects</Link>
            <Link href="#drops" className="hover:text-white transition-colors">Drops</Link>
            <Link href="#store" className="hover:text-white transition-colors underline underline-offset-8 decoration-orange-500">Store</Link>
          </div>
        </nav>

        <div className="text-center z-10">
          <h1 className="text-[18vw] md:text-[15vw] font-black tracking-tighter italic leading-[0.8] mb-12 select-none">
            THOTHER
          </h1>
          <p className="text-sm md:text-xl font-light tracking-[0.4em] uppercase text-white/40">
            Between digital and physical.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-24">
            <Link href="#objects" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] font-black">
              <span className="w-12 h-px bg-white/20 group-hover:w-20 group-hover:bg-orange-500 transition-all duration-700"></span>
              Explore Objects
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION (NEW) */}
      <section className="py-60 px-6 bg-black relative">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-5xl md:text-8xl font-medium tracking-tight leading-[1.1]">
              THOTHER exists between <br/>
              <span className="italic text-white/20">code and material.</span>
            </h2>
            <h2 className="text-5xl md:text-8xl font-medium tracking-tight leading-[1.1] pt-4">
              Between concept and <br/>
              <span className="text-orange-500">object.</span>
            </h2>
          </div>
          <div className="mt-32 flex justify-center md:justify-end">
             <p className="text-2xl md:text-4xl font-light tracking-tight text-white/40 max-w-xl text-right leading-tight">
              Not trend-driven. <br/>
              Design-led.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BRAND SECTION */}
      <section className="py-60 px-6 border-y border-white/5 bg-[#050505]">
        <div className="max-w-4xl mx-auto space-y-24 text-center">
          <h3 className="text-3xl md:text-5xl font-light leading-snug tracking-tight text-white/80">
            THOTHER is a design-led fashion brand built on 3D printing.
          </h3>
          <div className="space-y-12 text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-2xl mx-auto">
            <p>
              Digitally designed, physically produced pieces — from footwear and bags to collectible art objects.
            </p>
            <p>
              Each piece is brought into reality through additive manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OBJECTS SECTION (REFINED) */}
      <section id="objects" className="py-60 px-6 bg-black">
        <div className="max-w-[1400px] mx-auto space-y-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 px-4">
            <h2 className="text-7xl md:text-[12rem] font-black italic tracking-tighter leading-none opacity-10">Objects</h2>
            <div className="space-y-6 md:text-right">
              <p className="text-[12px] uppercase tracking-[0.6em] text-orange-500 font-black">Collections</p>
              <p className="text-2xl md:text-3xl font-light text-white/40 italic">Designed in code. Produced layer by layer.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* HERO PRODUCT: Oversized */}
            <div className="md:col-span-8 aspect-[16/9] md:aspect-auto md:h-[80vh] bg-neutral-900 relative group overflow-hidden cursor-crosshair">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000')] bg-cover bg-center grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               <div className="absolute top-12 left-12">
                  <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-2">Footwear</p>
                  <h4 className="text-4xl font-black italic">OBJECT 001_S</h4>
               </div>
            </div>

            {/* SECONDARY PRODUCTS */}
            <div className="md:col-span-4 flex flex-col gap-4">
               <div className="flex-1 min-h-[40vh] bg-neutral-900 relative group overflow-hidden cursor-crosshair border border-white/5">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 transition-all duration-1000"></div>
                  <div className="absolute bottom-10 left-10">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2">Bags</p>
                    <h4 className="text-2xl font-black italic">OBJECT 002_B</h4>
                  </div>
               </div>
               <div className="flex-1 min-h-[40vh] bg-neutral-900 relative group overflow-hidden cursor-crosshair border border-white/5">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=1000')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-80 transition-all duration-1000"></div>
                  <div className="absolute bottom-10 left-10">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-2">Art Objects</p>
                    <h4 className="text-2xl font-black italic">OBJECT 003_A</h4>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="text-center pt-20">
             <p className="text-sm md:text-lg text-white/20 italic tracking-wide">
              No mass production. No repetition. Limited releases only.
             </p>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (SIMPLIFIED) */}
      <section className="py-60 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-20">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">From digital model <br/> to physical form.</h2>
            <p className="text-xl md:text-3xl text-white/40 font-light leading-snug max-w-2xl mx-auto">
              Exploring structure, material, and geometry through additive manufacturing.
            </p>
          </div>
          
          <div className="relative h-px w-full bg-white/10 overflow-hidden">
             <div className="absolute inset-0 bg-orange-500 w-1/3 animate-progress translate-x-[-100%]"></div>
          </div>
        </div>
      </section>

      {/* 6. DROPS SECTION (URGENCY) */}
      <section id="drops" className="py-60 px-6 bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
           <h2 className="text-[20vw] font-black italic">2026</h2>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-16 relative z-10">
          <div className="space-y-6">
            <p className="text-[12px] uppercase tracking-[0.8em] font-black text-orange-600">Upcoming Release</p>
            <h2 className="text-6xl md:text-[8rem] font-black italic tracking-tighter leading-none">Limited drops.</h2>
            <h2 className="text-6xl md:text-[8rem] font-black italic tracking-tighter leading-none text-black/20">Small batches.</h2>
          </div>
          
          <div className="space-y-12">
            <p className="text-2xl md:text-3xl font-bold tracking-tight uppercase">No restocks.</p>
            <div className="flex flex-col items-center gap-8">
              <button className="px-20 py-8 bg-black text-white text-[11px] uppercase tracking-[0.6em] font-black hover:bg-orange-600 transition-all duration-700 shadow-2xl">
                Join Drop
              </button>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">Next form appearing in: 14:22:05</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER CTA */}
      <footer className="py-60 px-6 text-center space-y-32 bg-black">
        <div className="space-y-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-widest uppercase text-white/80">
            Enter the next form <br/> of design.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <Link href="#store" className="text-[11px] uppercase tracking-[0.5em] font-black py-6 px-12 bg-white text-black hover:bg-orange-500 hover:text-white transition-all duration-500">
              Enter Store
            </Link>
            <Link href="https://instagram.com" className="text-[11px] uppercase tracking-[0.5em] font-black py-6 px-12 border border-white/10 hover:border-white transition-all">
              Follow Instagram
            </Link>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto pt-40 flex flex-col md:flex-row justify-between items-end gap-12 opacity-30 text-[11px] uppercase tracking-[0.4em] font-bold">
          <div className="text-left space-y-4">
             <p>THOTHER LABS</p>
             <p className="text-white/50">ePark Digital Partnership</p>
          </div>
          <div className="text-right space-y-4">
             <p>London // Shanghai // Digital Space</p>
             <p>© 2026 All Rights Reserved</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-progress {
          animation: progress 3s infinite linear;
        }
      `}</style>
    </div>
  )
}
