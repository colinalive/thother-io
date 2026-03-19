'use client'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col bg-black text-white selection:bg-orange-500/30 font-sans tracking-tight leading-none overflow-x-hidden">
      {/* 1. HERO REFINEMENT: Cinematic & Editorial */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden transition-opacity duration-1000 ease-in-out">
        <div className="absolute inset-0 -z-10 bg-black">
          {/* Real Sculptural Product Highlight */}
          <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother_shoe_sculpture.jpg')] bg-cover bg-center grayscale opacity-30 mix-blend-screen scale-105 transition-transform duration-[10000ms] ease-linear animate-slow-zoom"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
          {/* Controlled Orange Accent */}
          <div className="absolute top-[40%] left-[60%] w-[60vw] h-[60vh] bg-orange-600/5 blur-[160px] rounded-full"></div>
        </div>

        <nav className="absolute top-0 w-full flex justify-between items-center p-8 md:p-16 z-50">
          <Link href="/" className="text-3xl font-black tracking-tighter italic hover:text-orange-500 transition-colors duration-700">THOTHER</Link>
          <div className="hidden md:flex items-center space-x-16 text-[11px] uppercase tracking-[0.5em] font-bold text-white/30">
            <Link href="#objects" className="hover:text-white transition-colors duration-700">Objects</Link>
            <Link href="#drops" className="hover:text-white transition-colors duration-700">Drops</Link>
            <Link href="https://thother.shop" className="group flex items-center gap-4 py-2 border-b border-white/10 hover:border-orange-500 transition-all duration-700">
               Store
               <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-50 group-hover:opacity-100 transition-opacity"></span>
            </Link>
          </div>
        </nav>

        <div className="text-center z-10 space-y-24">
          <h1 className="text-[24vw] md:text-[20vw] font-black tracking-tighter italic leading-[0.7] mb-12 select-none mix-blend-difference animate-reveal">
            THOTHER
          </h1>
          <p className="text-xs md:text-xl font-light tracking-[0.6em] uppercase text-white/20 animate-reveal-delayed">
            Between digital and physical.
          </p>
        </div>

        <div className="absolute bottom-20 flex flex-col items-center gap-8 opacity-20">
           <div className="w-px h-32 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* 2. ATMOSPHERE / MOOD (Refined Manifesto) */}
      <section className="py-80 px-6 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <p className="text-[10px] uppercase tracking-[1em] text-orange-500 font-black">About</p>
            <h3 className="text-4xl md:text-6xl font-light leading-[1.2] tracking-tight text-white/90">
              THOTHER is a design-led fashion brand built on 3D printing.
            </h3>
            <div className="space-y-12 text-xl md:text-2xl text-white/20 leading-relaxed font-light">
              <p>
                We collaborate with designers to create digitally designed, physically produced pieces — from bags and footwear to art objects.
              </p>
              <p>
                By working with 3D printing, we rethink scale, waste, and production timelines — favoring small batches and design-led creation.
              </p>
              <p className="text-white/40 italic">
                Between what exists — and what comes next.
              </p>
            </div>
          </div>
          <div className="aspect-square bg-neutral-950 relative overflow-hidden group border border-white/5 grayscale opacity-40 hover:opacity-100 transition-all duration-1000">
             <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother_about_material.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-[5000ms]"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
          </div>
        </div>
      </section>

      {/* 3. OBJECTS SECTION (Fluid Layout) */}
      <section id="objects" className="py-80 px-6 bg-black relative">
        <div className="max-w-[1800px] mx-auto space-y-60">
          <div className="px-4 text-center md:text-left space-y-8">
            <h2 className="text-8xl md:text-[18rem] font-black italic tracking-tighter leading-none opacity-[0.03] absolute left-0 select-none pointer-events-none">Objects</h2>
            <p className="text-[12px] uppercase tracking-[0.8em] text-orange-500 font-black relative z-10">Collections</p>
            <h3 className="text-4xl md:text-7xl font-light text-white/40 italic leading-[1.1] relative z-10 max-w-4xl">Designed in code. <br/> Produced layer by layer.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
            {/* DOMINANT HERO OBJECT */}
            <div className="md:col-span-9 aspect-[16/10] bg-neutral-950 relative group overflow-hidden cursor-crosshair">
               <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother_bags_display.jpg')] bg-cover bg-center grayscale opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000"></div>
               <div className="absolute bottom-20 left-20 space-y-8">
                  <p className="text-[12px] uppercase tracking-[0.6em] text-orange-500 font-black">Archive / 01</p>
                  <h4 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none">THE SCULPTURAL LINE</h4>
               </div>
            </div>

            {/* SUPPORTING VISUALS (Fluid Hierarchy) */}
            <div className="md:col-span-3 flex flex-col gap-8">
               <div className="aspect-[4/5] bg-neutral-950 relative group overflow-hidden grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-1000">
                  <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother_bag_magenta.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                     <p className="text-[10px] uppercase tracking-[0.4em] font-black bg-black/60 backdrop-blur-md px-4 py-2">The Magenta Blob</p>
                  </div>
               </div>
               <div className="aspect-square bg-neutral-950 relative group overflow-hidden grayscale hover:grayscale-0 opacity-20 hover:opacity-100 transition-all duration-1000">
                  <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother_sculptural_bag_black.jpg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000"></div>
                  <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                     <p className="text-[10px] uppercase tracking-[0.4em] font-black bg-black/60 backdrop-blur-md px-4 py-2">The Black Blob</p>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="flex justify-end pr-8">
             <div className="max-w-md text-right space-y-12">
                <p className="text-2xl md:text-4xl text-white/20 italic font-light leading-tight">
                  No mass production. <br/> No repetition. <br/> Limited releases only.
                </p>
                <Link href="https://thother.shop" className="inline-block text-[11px] uppercase tracking-[0.5em] font-black py-8 px-16 border border-white/10 hover:border-orange-500 transition-all duration-700">View All Forms</Link>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS SECTION (Macro & Wireframe) */}
      <section className="py-80 px-6 bg-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
           <div className="space-y-16">
              <h2 className="text-6xl md:text-[9rem] font-black tracking-tighter italic leading-[0.8]">
                 Digital <br/> to <span className="text-orange-500">Form.</span>
              </h2>
              <p className="text-2xl md:text-4xl text-white/20 font-light leading-snug">
                 Exploring structure, material, and geometry through additive manufacturing.
              </p>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-neutral-950 relative overflow-hidden grayscale opacity-30 group">
                 <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother_shoe_display_alt.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-[5000ms]"></div>
                 {/* Macro Overlay */}
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
             <div className="aspect-[3/4] bg-neutral-950 relative overflow-hidden border border-white/5 opacity-40 group">
                <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother_red_objects_shelf.jpg')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000"></div>
                {/* Visual Representation of Wireframe - Overlaying on real image now */}
             </div>
           </div>
        </div>
      </section>

      {/* 5. ATMOSPHERE MOOD 2 (Lattice / Geometry / Sculpture) */}
      <section className="h-screen bg-black flex items-center justify-center relative overflow-hidden group">
         <div className="absolute inset-0 opacity-20 grayscale transition-all duration-1000 group-hover:opacity-40">
            <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother_niukver_sculpture.jpg')] bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-[10000ms]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
         </div>
         <div className="z-10 text-center space-y-12 max-w-4xl px-6">
            <p className="text-[12px] uppercase tracking-[1.2em] text-white/20 font-black">Philosophy</p>
            <h2 className="text-5xl md:text-[8rem] font-light tracking-tighter leading-[0.85] text-white/90">
               Not trend-driven. <br/>
               <span className="italic text-orange-500 underline decoration-white/10 underline-offset-[20px]">Design-led.</span>
            </h2>
         </div>
      </section>

      {/* 6. DROPS SECTION (Editorial Urgency) */}
      <section id="drops" className="py-80 px-6 bg-white text-black relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-40 items-center relative z-10">
          <div className="space-y-12">
            <p className="text-[12px] uppercase tracking-[1.2em] font-black text-orange-600 mb-8">Release Status</p>
            <h2 className="text-8xl md:text-[14rem] font-black italic tracking-tighter leading-[0.75]">Limited <br/> Drops.</h2>
            <div className="flex items-center gap-12 pt-20">
               <div className="text-center">
                  <p className="text-5xl font-black tracking-tighter italic">14</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">Days</p>
               </div>
               <div className="w-1.5 h-1.5 bg-black/10 rounded-full"></div>
               <div className="text-center">
                  <p className="text-5xl font-black tracking-tighter italic">22</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">Hours</p>
               </div>
            </div>
          </div>
          
          <div className="space-y-24">
             <div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden grayscale group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000')] bg-cover bg-center group-hover:scale-110 transition-transform duration-[5000ms] opacity-20 blur-sm group-hover:blur-none transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <p className="text-[10px] uppercase tracking-[0.8em] font-black text-black/20">Blurred Preview</p>
                </div>
             </div>
             <div className="flex flex-col items-start gap-12">
                <p className="text-3xl font-bold tracking-tighter uppercase italic text-black/30 leading-none">Small batches. <br/> No restocks.</p>
                <button className="px-24 py-10 bg-black text-white text-[12px] uppercase tracking-[0.8em] font-black hover:bg-orange-600 transition-all duration-700 shadow-2xl">
                  Join Drop
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER (Cinematic Closure) */}
      <footer className="py-80 px-6 text-center space-y-60 bg-black">
        <div className="space-y-32">
          <h2 className="text-5xl md:text-[10rem] font-black italic tracking-tighter leading-none text-white opacity-90 select-none">
            THOTHER
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <Link href="https://thother.shop" className="group relative px-20 py-8 overflow-hidden">
               <div className="absolute inset-0 bg-white group-hover:bg-orange-600 transition-colors duration-700"></div>
               <span className="relative text-black group-hover:text-white text-[12px] uppercase tracking-[0.6em] font-black transition-colors duration-700">Enter Store</span>
            </Link>
            <Link href="https://www.instagram.com/officialginamedia/" className="text-[11px] uppercase tracking-[0.6em] font-black py-8 px-20 border border-white/10 hover:border-white transition-all duration-700">
              Follow Instagram
            </Link>
          </div>
        </div>
        
        <div className="max-w-[1800px] mx-auto pt-80 flex flex-col md:flex-row justify-between items-end gap-20 opacity-20 text-[11px] uppercase tracking-[0.6em] font-bold">
          <div className="text-left space-y-8">
             <div className="text-3xl font-black tracking-tighter italic">THOTHER</div>
             <p className="text-white/60 tracking-[0.4em]">Design-Led Objects</p>
          </div>
          <div className="text-right space-y-8">
             <p className="tracking-[0.2em]">London // Shanghai // Digital Space</p>
             <div className="flex justify-end gap-12 text-[10px] text-white/60">
                <Link href="/privacy" className="hover:text-white transition-colors duration-700">Privacy</Link>
                <Link href="/terms" className="hover:text-white transition-colors duration-700">Terms</Link>
                <p>© 2026</p>
             </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        @keyframes reveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
        .animate-reveal {
          animation: reveal 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-reveal-delayed {
          opacity: 0;
          animation: reveal 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s forwards;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: black;
        }
      `}</style>
    </div>
  )
}
