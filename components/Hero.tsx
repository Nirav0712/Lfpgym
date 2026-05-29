"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-black flex items-center justify-center overflow-hidden py-16">
      
      {/* Decorative Premium Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/40 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern overlay for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      <div className="max-w-[1440px] mx-auto px-8 sm:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Main Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Animated Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-4 py-2 rounded-full mb-8 hover:border-yellow-500/30 transition-all duration-300">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                India's Ultimate Fitness Sanctuary
              </span>
            </div>

            {/* Massive Premium Tagline */}
            <h1 className="text-white text-6xl sm:text-7xl xl:text-8xl font-black leading-[1.05] uppercase tracking-tight mb-8">
              Shape Your Body
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500">
                Define Your Future
              </span>
            </h1>

            {/* Premium Description */}
            <p className="text-zinc-300 text-xl sm:text-2xl leading-relaxed max-w-2xl mb-12 font-medium">
              Step into a high-performance environment designed for real results. Featuring world-class equipment, customized program architecture, and expert coaches dedicated to your goals.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16">
              <Link 
                href="/pricing" 
                className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-bold uppercase tracking-widest px-10 py-5 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(234,179,8,0.25)] text-center"
              >
                Start Your Journey
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center border border-zinc-800 hover:border-yellow-400 text-white hover:text-yellow-400 text-sm font-bold uppercase tracking-widest px-10 py-5 rounded-xl transition-all duration-300 bg-zinc-950/40 backdrop-blur-sm text-center"
              >
                Tour Our Facility
              </Link>
            </div>

            {/* Realtime Live Metrics */}
            <div className="grid grid-cols-3 gap-8 sm:gap-12 border-t border-zinc-900 pt-10 w-full max-w-xl">
              <div>
                <p className="text-white text-3xl sm:text-4xl font-extrabold mb-1">15K+</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-bold uppercase tracking-wider">Members Trained</p>
              </div>
              <div>
                <p className="text-white text-3xl sm:text-4xl font-extrabold mb-1">50+</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-bold uppercase tracking-wider">Elite Trainers</p>
              </div>
              <div>
                <p className="text-white text-3xl sm:text-4xl font-extrabold mb-1">4.9★</p>
                <p className="text-zinc-500 text-xs sm:text-sm font-bold uppercase tracking-wider">User Reviews</p>
              </div>
            </div>

          </div>

          {/* Right Visual interactive card layout */}
          <div className="lg:col-span-5 relative w-full h-[550px] hidden lg:block">
            
            {/* Background absolute decor frame */}
            <div className="absolute right-4 top-4 w-full h-full border border-zinc-900 rounded-3xl -z-10" />

            {/* Main Interactive card */}
            <div className="w-full h-full bg-zinc-950/60 border border-zinc-900 rounded-3xl p-8 flex flex-col justify-between backdrop-blur-md relative overflow-hidden group hover:border-yellow-500/20 transition-all duration-500">
              
              {/* Radial gradient background hover highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-1">TODAY'S SCHEDULE</p>
                  <h3 className="text-white text-2xl font-bold uppercase tracking-tight">Active Programs</h3>
                </div>
                <span className="bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Live
                </span>
              </div>

              {/* Programs List */}
              <div className="space-y-6 my-auto">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <div>
                    <h4 className="text-white font-bold text-lg">High-Intensity CrossFit</h4>
                    <p className="text-zinc-400 text-sm">With Coach Vikram • 8:00 AM</p>
                  </div>
                  <span className="text-zinc-500 text-sm font-semibold">Full</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
                  <div>
                    <h4 className="text-white font-bold text-lg">Power Vinyasa Yoga</h4>
                    <p className="text-zinc-400 text-sm">With Coach Ananya • 10:30 AM</p>
                  </div>
                  <span className="text-yellow-400 text-sm font-semibold">2 Seats Left</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg">Strength & Conditioning</h4>
                    <p className="text-zinc-400 text-sm">With Coach Rohit • 4:00 PM</p>
                  </div>
                  <span className="text-[#FFD000] text-xs font-bold uppercase bg-yellow-500/10 px-2 py-0.5 rounded">Popular</span>
                </div>
              </div>

              {/* Bottom motivation block */}
              <div className="bg-zinc-900/60 border border-zinc-800 p-5 rounded-2xl flex items-center justify-between">
                <div>
                  <p className="text-white font-bold text-sm">Ready to push your limits?</p>
                  <p className="text-zinc-500 text-xs mt-0.5">Explore our professional training tiers</p>
                </div>
                <Link 
                  href="/activities"
                  className="bg-zinc-800 hover:bg-yellow-400 text-white hover:text-black w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
