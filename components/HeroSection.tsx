'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <header className="relative pt-40 pb-32 px-6 overflow-hidden">
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          AI Voice Receptionist
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tighter text-white">
          Your AI Voice Receptionist that <br />
          <span className="metallic-text animate-shine">
            Books Appointments 24/7
          </span>
        </h1>
        
        <h2 className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-medium">
          Every call answered. Every booking captured. <br/>
          <span className="text-slate-400">Even when you&apos;re busy, closed, or short-staffed.</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12 text-sm text-emerald-100/80">
          <div className="flex items-center gap-2 bg-emerald-900/10 px-4 py-2 rounded-full border border-emerald-500/10">
            <CheckCircle className="w-4 h-4 text-emerald-500" /> Never miss another booking
          </div>
          <div className="flex items-center gap-2 bg-emerald-900/10 px-4 py-2 rounded-full border border-emerald-500/10">
            <CheckCircle className="w-4 h-4 text-emerald-500" /> Reduce front desk workload instantly
          </div>
          <div className="flex items-center gap-2 bg-emerald-900/10 px-4 py-2 rounded-full border border-emerald-500/10">
            <CheckCircle className="w-4 h-4 text-emerald-500" /> Capture after-hours demand automatically
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="group relative px-8 py-4 rounded-xl bg-gradient-to-b from-emerald-400 to-emerald-600 text-black font-bold text-lg hover:to-emerald-300 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:-translate-y-1">
            <span className="flex items-center gap-2">
              Book a Live Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          <div className="flex items-center gap-6 px-6 py-4 rounded-xl glass-card text-sm text-slate-300">
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> No setup call</span>
            <span className="w-px h-4 bg-white/10"></span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500" /> No long-term contract</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
