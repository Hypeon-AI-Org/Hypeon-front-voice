'use client';

import React from 'react';
import { Mic, Zap, Calendar, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const FeatureCard = ({ icon: Icon, title, desc }: FeatureCardProps) => (
  <div className="p-8 rounded-3xl border border-emerald-200 bg-white hover:border-emerald-400 transition-all duration-300 group shadow-sm">
    <div className="mb-6 p-4 rounded-2xl bg-emerald-50 inline-block text-emerald-600 group-hover:bg-emerald-100 transition-colors">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

const SolutionSection = () => {
  return (
    <section id="solution" className="py-16 sm:py-24 md:py-32 bg-white border-y border-emerald-200 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] max-w-[100vw] h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4">The Solution</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Meet your <span className="text-emerald-600">AI Voice Receptionist</span>
          </h3>
          <p className="text-gray-700 text-xl leading-relaxed mb-6">
            This isn&apos;t a phone tree. It&apos;s not a chatbot. And it doesn&apos;t sound robotic.
          </p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your AI receptionist answers every call instantly, speaks naturally, understands what the caller wants, and books the appointment on the spot. It works quietly in the background, doing one job perfectly: <span className="text-emerald-600 font-bold">turning calls into confirmed bookings.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Mic}
            title="Natural Voice"
            desc="Customers talk like they would to a real receptionist. It understands nuance."
          />
          <FeatureCard 
            icon={Zap}
            title="Instant Action"
            desc="Answers instantly. No waiting on hold. No voicemail."
          />
          <FeatureCard 
            icon={Calendar}
            title="Auto-Booking"
            desc="Synced to your calendar. Appointments are booked and confirmed on the spot."
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
