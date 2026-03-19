'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [selectedImg, setSelectedImg] = useState(null);

  const openLightbox = (src) => {
    setSelectedImg(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="flex flex-col bg-black text-white selection:bg-orange-500/30 font-sans tracking-tight leading-none overflow-x-hidden">
      
      {/* Lightbox Overlay */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-20 animate-reveal"
          onClick={closeLightbox}
        >
          <div className="absolute top-8 right-8 text-white/40 hover:text-white cursor-pointer transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </div>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full object-contain shadow-2xl" 
            alt="Lightbox view"
          />
        </div>
      )}

      {/* 1. HERO REFINEMENT: Cinematic & Editorial */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden transition-opacity duration-1000 ease-in-out">
        <div className="absolute inset-0 -z-10 bg-black">
        </div>

        <nav className="absolute top-0 w-full flex justify-between items-center p-8 md:p-16 z-50">
          <Link href="/" className="group flex items-center transition-all duration-700">
            <div className="h-6 md:h-10 relative overflow-hidden flex items-center">
              <img 
                src="https://claw.starryambition.com/8711438752/202603/thother-combined-logo-highres-v9.jpg" 
                alt="THOTHER Logo"
                className="h-full w-auto object-contain mix-blend-screen opacity-100 transition-opacity"
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-12 text-[10px] uppercase tracking-[0.5em] font-bold text-white/40">
            <Link href="#objects" className="hover:text-orange-500 transition-colors duration-500">Objects</Link>
            <Link href="#process" className="hover:text-orange-500 transition-colors duration-500">Process</Link>
            <Link href="#drops" className="hover:text-orange-500 transition-colors duration-500">Drops</Link>
          </div>
        </nav>

        <div className="text-center z-10 space-y-24">
          <div className="flex flex-col items-center gap-12 animate-reveal">
            <div className="w-[85vw] md:w-[70vw] mix-blend-screen">
              <img 
                src="https://claw.starryambition.com/8711438752/202603/thother-combined-logo-highres-v9.jpg" 
                alt="THOTHER Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 flex flex-col items-center gap-8 opacity-20">
           <div className="w-px h-24 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* 2. ATMOSPHERE / MOOD (Editorial Campaign Section) */}
      <section id="about" className="bg-black flex flex-col md:flex-row items-stretch relative overflow-hidden">
        <div className="w-full md:w-1/2 p-12 md:p-32 z-10 flex flex-col justify-center">
          <div className="space-y-12">
            <p className="text-xs md:text-sm uppercase tracking-[1.5em] text-orange-500 font-black mb-12">About</p>
            <h3 className="text-4xl md:text-[5vw] font-light leading-[1.1] tracking-tighter text-white">
              THOTHER is a design-led <br/> fashion brand built <br/> on 3D printing.
            </h3>
          </div>
          
          <div className="mt-24 space-y-16 max-w-xl">
            <div className="space-y-8">
              <p className="text-xl md:text-3xl font-light text-white/80 leading-tight">
                Digitally shaped. <br/> Physically produced.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-xl md:text-3xl font-light text-white/80 leading-tight">
                Not mass-made. <br/> Not trend-driven.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-xl md:text-3xl font-light text-white/80 leading-tight">
                Design comes first.
              </p>
            </div>
            
            <div className="pt-20 border-t border-white/5">
              <p className="text-xl md:text-2xl tracking-[0.4em] uppercase text-orange-500 italic font-light">
                Between what exists — <br/> and what comes next.
              </p>
            </div>
          </div>
        </div>

        {/* LARGE SCULPTURAL IMAGE - ALIGNED HEIGHT WITH TEXT CONTAINER */}
        <div 
          className="w-full md:w-1/2 relative group min-h-[70vh] cursor-zoom-in"
          onClick={() => openLightbox('https://claw.starryambition.com/8711438752/202603/thother-process-material-v13.jpg')}
        >
           <img 
              src="https://claw.starryambition.com/8711438752/202603/thother-process-material-v13.jpg"
              alt="Sculptural Filament"
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 transition-all duration-[2000ms] ease-in-out"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
           {/* Subtle Frame Detail */}
           <div className="absolute inset-12 border border-white/5 pointer-events-none opacity-20"></div>
        </div>
      </section>

      {/* 3. OBJECTS SECTION (Editorial Campaign Layout) */}
      <section id="objects" className="py-80 px-6 bg-black relative">
        <div className="max-w-[1800px] mx-auto space-y-40">
          
          {/* Header & Main Dominant Image (70% screen) */}
          <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-end">
            <div className="w-full md:w-[70%] space-y-16">
              <div className="space-y-8 mb-24 px-4">
                <p className="text-xs uppercase tracking-[1.5em] text-orange-500/60 font-bold">Collection</p>
                <h2 className="text-6xl md:text-[10vw] font-light leading-none tracking-tighter text-white">
                  OBJECTS.
                </h2>
                <div className="pt-12">
                   <p className="text-xl md:text-4xl font-light text-white/40 italic leading-tight">
                    Sculptural form. <br /> Architectural weight.
                   </p>
                </div>
              </div>
              
              {/* MAIN DOMINANT IMAGE */}
              <div 
                className="relative group overflow-hidden aspect-[4/5] md:aspect-[16/10] bg-[#050505] grayscale border border-white/5 cursor-zoom-in"
                onClick={() => openLightbox('https://claw.starryambition.com/8711438752/202603/thother_bags_display.jpg')}
              >
                <img 
                  src="https://claw.starryambition.com/8711438752/202603/thother_bags_display.jpg" 
                  alt="Primary Object Sculpture"
                  className="w-full h-full object-cover transition-all duration-[3000ms] group-hover:scale-110 opacity-30 group-hover:opacity-60"
                />
                <div className="absolute bottom-12 left-12">
                   <p className="text-[8px] md:text-[10px] tracking-[2em] uppercase text-white/40 font-light">Collection</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            {/* SECONDARY VISUAL (Asymmetric/Smaller) */}
            <div className="w-full md:w-[30%] space-y-32 self-start md:pt-60">
              <div 
                className="aspect-[4/5] bg-[#050505] relative group overflow-hidden border border-white/5 grayscale opacity-20 hover:opacity-100 transition-all duration-1000 cursor-zoom-in"
                onClick={() => openLightbox('https://claw.starryambition.com/8711438752/202603/thother-object-hero-final-v17.jpg')}
              >
                <img 
                  src="https://claw.starryambition.com/8711438752/202603/thother-object-hero-final-v17.jpg" 
                  alt="Secondary Sculpture detail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
              </div>
              
              <div className="space-y-8 pl-8 border-l border-white/10">
                <p className="text-xl md:text-3xl font-light text-white/40 leading-tight">
                  Designed in code. <br/> Built in reality.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. PROCESS SECTION (Macro & Wireframe) */}
      <section id="process" className="py-80 px-6 bg-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
           <div className="space-y-16">
              <h2 className="text-6xl md:text-[9rem] font-medium tracking-tighter leading-[0.8]">
                 Digital <br/> to <span className="text-orange-500">Form.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-2xl md:text-5xl text-white/40 font-light leading-tight">
                  Structure. <br /> Material. <br /> Geometry.
                </p>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              <div 
                className="aspect-square bg-neutral-950 relative overflow-hidden grayscale opacity-30 group cursor-zoom-in"
                onClick={() => openLightbox('https://claw.starryambition.com/8711438752/202603/thother-red-shoes-v18.jpg')}
              >
                 <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother-red-shoes-v18.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-[5000ms]"></div>
                 {/* Macro Overlay */}
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
             <div 
                className="aspect-[3/4] bg-neutral-950 relative overflow-hidden border border-white/5 opacity-40 group cursor-zoom-in"
                onClick={() => openLightbox('https://claw.starryambition.com/8711438752/202603/thother_shoe_display_alt.jpg')}
              >
                <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother_shoe_display_alt.jpg')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000"></div>
                {/* Visual Representation of Wireframe - Overlaying on real image now */}
             </div>
           </div>
        </div>
      </section>

      {/* 5. ATMOSPHERE MOOD 2 (Lattice / Geometry / Sculpture) */}
      <section 
        className="h-screen bg-black flex items-center justify-center relative overflow-hidden group cursor-zoom-in"
        onClick={() => openLightbox('https://claw.starryambition.com/8711438752/202603/thother_niukver_sculpture.jpg')}
      >
         <div className="absolute inset-0 opacity-[0.15] grayscale transition-all duration-1000 group-hover:opacity-30">
            <div className="absolute inset-0 bg-[url('https://claw.starryambition.com/8711438752/202603/thother_niukver_sculpture.jpg')] bg-cover bg-center scale-110 group-hover:scale-100 transition-transform duration-[10000ms]"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
         </div>
         <div className="z-10 text-center space-y-16 max-w-5xl px-6">
            <h2 className="flex flex-col gap-8 md:gap-12 tracking-tighter leading-none text-white/90">
               <span className="text-4xl md:text-[6rem] font-light">Not trend-driven.</span>
               <span className="text-6xl md:text-[11rem] font-medium text-orange-500 italic">Design-led.</span>
            </h2>
         </div>
      </section>

      {/* 6. DROPS SECTION (Editorial Urgency) */}
      <section id="drops" className="py-80 px-6 bg-black text-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-40 items-center relative z-10">
          <div className="space-y-12">
            <p className="text-[12px] uppercase tracking-[1.2em] font-black text-orange-500 mb-8">Release Status</p>
            <h2 className="text-8xl md:text-[14rem] font-medium tracking-tighter leading-[0.75]">Limited <br/> Drops.</h2>
            <div className="flex items-center gap-12 pt-20 text-white">
               <div className="text-center">
                  <p className="text-5xl font-medium tracking-tighter">14</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Days</p>
               </div>
               <div className="w-1.5 h-1.5 bg-white/10 rounded-full"></div>
               <div className="text-center">
                  <p className="text-5xl font-medium tracking-tighter">22</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">Hours</p>
               </div>
            </div>
          </div>
          
          <div className="space-y-24">
             <div 
                className="aspect-[4/5] bg-neutral-900 relative overflow-hidden grayscale group cursor-zoom-in"
                onClick={() => openLightbox('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000')}
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000')] bg-cover bg-center group-hover:scale-110 transition-transform duration-[5000ms] opacity-20 blur-sm group-hover:blur-none transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <p className="text-[10px] uppercase tracking-[0.8em] font-black text-white/20">Blurred Preview</p>
                </div>
             </div>
             <div className="flex flex-col items-start gap-12">
                <p className="text-3xl font-bold tracking-tighter uppercase italic text-white/30 leading-none">Small batches. <br/> No restocks.</p>
                <button className="px-24 py-10 bg-white text-black text-[12px] uppercase tracking-[0.8em] font-black hover:bg-orange-600 hover:text-white transition-all duration-700 shadow-2xl">
                  Join Drop
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER (Cinematic Closure) */}
      <footer className="py-80 px-6 text-center space-y-60 bg-black border-t border-white/5">
        <div className="space-y-32">
          <div className="w-[70vw] md:w-[50vw] mx-auto opacity-90 select-none bg-black">
            <img 
              src="https://claw.starryambition.com/8711438752/202603/thother-combined-logo-highres-v9.jpg" 
              alt="THOTHER"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <Link href="https://thother.shop" className="group relative px-20 py-8 overflow-hidden">
               <div className="absolute inset-0 bg-white group-hover:bg-orange-600 transition-colors duration-700"></div>
               <span className="relative text-black group-hover:text-white text-[12px] uppercase tracking-[0.6em] font-black transition-colors duration-700">Enter Store</span>
            </Link>
            <Link href="https://www.instagram.com/th0therofficial/" className="text-[11px] uppercase tracking-[0.6em] font-black py-8 px-20 border border-white/10 hover:border-white transition-all duration-700">
              Follow Instagram
            </Link>
          </div>
        </div>
        
        <div className="max-w-[1800px] mx-auto pt-80 flex flex-col md:flex-row justify-between items-end gap-20 opacity-20 text-[11px] uppercase tracking-[0.6em] font-bold">
          <div className="text-left space-y-12">
             <div className="h-10 relative overflow-hidden bg-black grayscale opacity-50">
                <img 
                  src="https://claw.starryambition.com/8711438752/202603/thother-combined-logo-highres-v9.jpg" 
                  alt="THOTHER"
                  className="h-full w-auto object-contain"
                />
             </div>
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
