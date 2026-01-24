'use client';

import React from 'react';
import { Mic, Zap, Calendar, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  accent: string;
}

const FeatureCard = ({ icon: Icon, title, desc, accent }: FeatureCardProps) => (
  <div className={`p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-${accent}-500/30 transition-all duration-300 group`}>
    <div className={`mb-6 p-4 rounded-2xl bg-${accent}-500/10 inline-block text-${accent}-400 group-hover:text-${accent}-300 transition-colors`}>
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
    <p className="text-slate-400 leading-relaxed">{desc}</p>
  </div>
);

const SolutionSection = () => {
  return (
    <section id="solution" className="py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-500 uppercase mb-4">The Solution</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">AI Voice Receptionist</span>
          </h3>
          <p className="text-slate-300 text-xl leading-relaxed mb-6">
            This isn&apos;t a phone tree. It&apos;s not a chatbot. And it doesn&apos;t sound robotic.
          </p>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Your AI receptionist answers every call instantly, speaks naturally, understands what the caller wants, and books the appointment on the spot. It works quietly in the background, doing one job perfectly: <span className="text-emerald-400 font-bold">turning calls into confirmed bookings.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Mic}
            title="Natural Voice"
            desc="Customers talk like they would to a real receptionist. It understands nuance."
            accent="emerald"
          />
          <FeatureCard 
            icon={Zap}
            title="Instant Action"
            desc="Answers instantly. No waiting on hold. No voicemail."
            accent="teal"
          />
          <FeatureCard 
            icon={Calendar}
            title="Auto-Booking"
            desc="Synced to your calendar. Appointments are booked and confirmed on the spot."
            accent="lime"
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
