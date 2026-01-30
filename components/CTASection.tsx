'use client';

import { Phone, Calendar } from 'lucide-react';

interface CTASectionProps {
  openModal: () => void;
}

const CTASection = ({ openModal }: CTASectionProps) => {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-block p-4 rounded-full bg-emerald-100 border border-emerald-300 mb-6 sm:mb-8">
           <Phone className="w-8 h-8 text-emerald-600 animate-pulse" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 tracking-tight">
          Let your phone answer itself.
        </h2>
        <p className="text-xl text-gray-700 mb-4 max-w-2xl mx-auto">
          Stop losing bookings to missed calls.
        </p>
        <p className="text-lg text-emerald-600 mb-12 font-medium">
           Let your AI receptionist handle the phone all day, every day.
        </p>
        
        <div className="flex flex-col items-center gap-6">
           <button 
             onClick={openModal}
             className="px-7 py-3.5 min-h-[48px] rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 mx-auto touch-manipulation"
           >
             <Calendar className="w-4 h-4" />
             Book a Live Demo
           </button>
           <p className="text-sm text-gray-500">See it answer a real call in real time.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
