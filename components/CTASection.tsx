'use client';

import { Phone } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020408] to-emerald-950/30"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
           <Phone className="w-8 h-8 text-emerald-400 animate-pulse" />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
          Let your phone answer itself.
        </h2>
        <p className="text-xl text-slate-400 mb-4 max-w-2xl mx-auto">
          Stop losing bookings to missed calls.
        </p>
        <p className="text-lg text-emerald-400 mb-12 font-medium">
           Let your AI receptionist handle the phone — all day, every day.
        </p>
        
        <div className="flex flex-col items-center gap-6">
           <button className="px-12 py-6 rounded-full bg-emerald-500 text-black font-bold text-xl hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
             Book a Live Demo
           </button>
           <p className="text-sm text-slate-500">See it answer a real call in real time.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
