import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col bg-black text-white selection:bg-orange-500/30 font-sans tracking-tight leading-none overflow-x-hidden">
      {/* 1. HERO REFINEMENT */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
        {/* Full-screen background visual: High-end 3D sculptural texture/lighting */}
        <div className="absolute inset-0 -z-10 bg-black">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2000')] bg-cover bg-center grayscale opacity-30 mix-blend-screen scale-105"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black"></div>
          {/* Subtle Orange Glow - The ONLY color accent */}
          <div className="absolute top-[40%] left-[60%] w-[60vw] h-[60vh] bg-orange-600/10 blur-[140px] rounded-full"></div>
        </div>

        <nav className="absolute top-0 w-full flex justify-between items-center p-8 md:p-16 z-50">
          <Link href="/" className="text-3xl font-black tracking-tighter italic hover:text-orange-500 transition-colors">THOTHER</Link>
          <div className="hidden md:flex items-center space-x-12 text-[11px] uppercase tracking-[0.4em] font-bold text-white/50">
            <Link href="#objects" className="hover:text-white transition-colors">Objects</Link>
            <Link href="#drops" className="hover:text-white transition-colors">Drops</Link>
            <Link href="#philosophy" className="hover:text-white transition-colors">Philosophy</Link>
            <Link href="https://thother.shop" className="group flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-orange-500/50 hover:text-white transition-all duration-500">
               Shop
               <span className="w-2 h-2 rounded-full bg-orange-500 group-hover:animate-ping"></span>
            </Link>
          </div>
        </nav>

        <div className="text-center z-10">
          <h1 className="text-[22vw] md:text-[18vw] font-black tracking-tighter italic leading-[0.75] mb-12 select-none mix-blend-difference">
            THOTHER
          </h1>
          <p className="text-xs md:text-lg font-light tracking-[0.5em] uppercase text-white/40">
            Between digital and physical.
          </p>
          
          <div className="flex flex-col items-center justify-center mt-32">
            <Link href="#objects" className="group flex flex-col items-center gap-6 text-[10px] uppercase tracking-[0.6em] font-black">
              <span className="text-white/20 group-hover:text-orange-500 transition-colors">Explore Collections</span>
              <div className="w-px h-24 bg-gradient-to-b from-orange-500 to-transparent group-hover:h-32 transition-all duration-1000"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-72 px-6 bg-black relative overflow-hidden">
        {/* Subtle decorative mesh background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%"><defs><pattern id="mesh" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs><rect width="100%" height="100%" fill="url(#mesh)" /></svg>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-[10px] uppercase tracking-[0.8em] text-orange-500 font-black mb-12">Philosophy</p>
            <h2 className="text-5xl md:text-[7rem] font-medium tracking-tighter leading-[0.95] text-white/90">
              THOTHER exists <br/> between <span className="italic font-light text-white/20">code</span> <br/> and <span className="text-orange-500 italic">material.</span>
            </h2>
          </div>
          <div className="mt-40 flex flex-col md:flex-row justify-between items-start gap-20">
             <div className="max-w-md space-y-8">
                <p className="text-2xl md:text-3xl font-light tracking-tight text-white/40 leading-snug">
                  Between concept and object. 
                </p>
                <div className="h-px w-20 bg-orange-500/50"></div>
             </div>
             <p className="text-3xl md:text-5xl font-light tracking-tighter text-white text-right leading-none">
              Not trend-driven. <br/>
              <span className="text-white/20">Design-led.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. BRAND SECTION */}
      <section className="py-72 px-6 bg-[#030303] border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center space-y-32">
          <h3 className="text-4xl md:text-7xl font-light leading-[1.1] tracking-tight text-white/90">
            A design-led fashion brand <br className="hidden md:block"/> built on 3D printing.
          </h3>
          <div className="grid md:grid-cols-2 gap-24 text-left">
            <p className="text-xl md:text-2xl text-white/30 leading-relaxed font-light">
              We create digitally designed, physically produced pieces — from footwear and bags to collectible art objects.
            </p>
            <p className="text-xl md:text-2xl text-white/30 leading-relaxed font-light">
              Each piece begins in the digital space and is brought into reality through additive manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* 4. OBJECTS SECTION (REFINED) */}
      <section id="objects" className="py-72 px-6 bg-black">
        <div className="max-w-[1600px] mx-auto space-y-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-16 px-4">
            <h2 className="text-8xl md:text-[15rem] font-black italic tracking-tighter leading-none opacity-[0.03] absolute left-0 select-none pointer-events-none">Objects</h2>
            <div className="relative z-10 space-y-6">
              <p className="text-[12px] uppercase tracking-[0.8em] text-orange-500 font-black">Archive</p>
              <h3 className="text-3xl md:text-5xl font-light text-white/60 italic leading-tight">Designed in code. <br/> Produced layer by layer.</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-20">
            {/* HERO PRODUCT: Oversized, sculptural */}
            <div className="md:col-span-8 aspect-[4/5] md:aspect-auto md:h-[90vh] bg-neutral-950 relative group overflow-hidden cursor-crosshair">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=2000')] bg-cover bg-center grayscale opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
               <div className="absolute bottom-16 left-16 space-y-6">
                  <p className="text-[11px] uppercase tracking-[0.6em] text-orange-500 font-black">Footwear Collection</p>
                  <h4 className="text-5xl md:text-7xl font-black italic tracking-tighter">OSS_G1 / SHARKTA</h4>
                  <Link href="https://thother.shop/collections/footwear" className="inline-block text-[10px] uppercase tracking-[0.4em] font-bold py-4 px-8 border border-white/10 hover:border-orange-500 transition-all">View Details</Link>
               </div>
            </div>

            {/* SECONDARY PRODUCTS */}
            <div className="md:col-span-4 flex flex-col gap-6">
               <div className="flex-1 min-h-[45vh] bg-neutral-950 relative group overflow-hidden cursor-crosshair border border-white/5">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000')] bg-cover bg-center grayscale opacity-30 group-hover:opacity-60 transition-all duration-1000"></div>
                  <div className="absolute bottom-12 left-12">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-2">Bags</p>
                    <h4 className="text-3xl font-black italic">BLOB / OBSYD</h4>
                  </div>
               </div>
               <div className="flex-1 min-h-[45vh] bg-neutral-950 relative group overflow-hidden cursor-crosshair border border-white/5">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558444479-c8482433068e?q=80&w=1000')] bg-cover bg-center grayscale opacity-30 group-hover:opacity-60 transition-all duration-1000"></div>
                  <div className="absolute bottom-12 left-12">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-2">Art Objects</p>
                    <h4 className="text-3xl font-black italic">SCULPT_01</h4>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center pt-24 space-y-8">
             <div className="w-px h-16 bg-white/10 mx-auto"></div>
             <p className="text-lg md:text-xl text-white/20 italic tracking-widest font-light leading-relaxed">
              Not mass production. No repetition. <br/> Limited releases only.
             </p>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (MINIMAL) */}
      <section className="py-72 px-6 bg-black border-t border-white/5">
        <div className="max-w-5xl mx-auto space-y-32">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-[0.85]">
                From digital model <br/> to <span className="text-orange-500">physical</span> form.
             </h2>
             <p className="text-2xl md:text-3xl text-white/30 font-light leading-snug">
                Exploring structure, material, and geometry through additive manufacturing.
             </p>
          </div>
          
          {/* Moving scan-line effect for 3D printing feel */}
          <div className="relative h-[2px] w-full bg-white/5 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent w-1/4 animate-scan translate-x-[-100%]"></div>
          </div>
        </div>
      </section>

      {/* 6. DROPS SECTION (HIGH URGENCY) */}
      <section id="drops" className="py-72 px-6 bg-white text-black relative overflow-hidden">
        {/* Subtle background product name repeat */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full opacity-[0.02] pointer-events-none select-none">
           <p className="text-[30vw] font-black italic whitespace-nowrap leading-none">THOTHER THOTHER THOTHER</p>
        </div>
        
        <div className="max-w-5xl mx-auto text-center space-y-24 relative z-10">
          <div className="space-y-8">
            <p className="text-[12px] uppercase tracking-[1em] font-black text-orange-600 mb-4">Current Drop Status</p>
            <h2 className="text-7xl md:text-[11rem] font-black italic tracking-tighter leading-[0.8]">Limited drops.</h2>
            <h2 className="text-7xl md:text-[11rem] font-black italic tracking-tighter leading-[0.8] text-black/10">Small batches.</h2>
          </div>
          
          <div className="space-y-20 pt-12">
            <div className="space-y-4">
               <p className="text-3xl md:text-5xl font-black tracking-tight uppercase italic">No restocks.</p>
               <p className="text-sm tracking-[0.4em] font-bold text-black/30">Once gone, the form is retired.</p>
            </div>
            
            <div className="flex flex-col items-center gap-12">
              <button className="group relative px-24 py-10 overflow-hidden">
                <div className="absolute inset-0 bg-black group-hover:bg-orange-600 transition-colors duration-500"></div>
                <span className="relative text-white text-[12px] uppercase tracking-[0.8em] font-black">Join Drop</span>
              </button>
              
              <div className="flex items-center gap-10">
                 <div className="text-center">
                    <p className="text-3xl font-black tracking-tighter italic">14</p>
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-black/40">Days</p>
                 </div>
                 <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                 <div className="text-center">
                    <p className="text-3xl font-black tracking-tighter italic">22</p>
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-black/40">Hours</p>
                 </div>
                 <div className="w-1 h-1 bg-black/20 rounded-full"></div>
                 <div className="text-center">
                    <p className="text-3xl font-black tracking-tighter italic">05</p>
                    <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-black/40">Mins</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER CTA */}
      <footer className="py-72 px-6 text-center space-y-40 bg-black">
        <div className="space-y-20">
          <h2 className="text-4xl md:text-7xl font-light tracking-tighter leading-[1.1] text-white/90">
            Enter the next form <br className="hidden md:block"/> of design.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <Link href="https://thother.shop" className="group relative px-16 py-8 overflow-hidden">
               <div className="absolute inset-0 bg-white group-hover:bg-orange-500 transition-colors duration-500"></div>
               <span className="relative text-black group-hover:text-white text-[12px] uppercase tracking-[0.5em] font-black transition-colors duration-500">Enter Store</span>
            </Link>
            <Link href="https://www.instagram.com/officialginamedia/" className="text-[11px] uppercase tracking-[0.5em] font-black py-8 px-16 border border-white/10 hover:border-white transition-all">
              Follow Instagram
            </Link>
          </div>
        </div>
        
        <div className="max-w-[1600px] mx-auto pt-60 flex flex-col md:flex-row justify-between items-end gap-16 opacity-30 text-[11px] uppercase tracking-[0.5em] font-bold">
          <div className="text-left space-y-6">
             <div className="text-2xl font-black tracking-tighter italic">THOTHER</div>
             <p className="text-white/50 tracking-[0.2em]">ePark Digital Partnership</p>
          </div>
          <div className="text-right space-y-6">
             <p className="tracking-[0.1em]">London // Shanghai // Digital Space</p>
             <div className="flex justify-end gap-8 text-[10px] text-white/50">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                <p>© 2026</p>
             </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
        .animate-scan {
          animation: scan 4s infinite linear;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}
