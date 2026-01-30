'use client';

import React from 'react';
import { Utensils, Stethoscope, Scissors, Activity, Wrench, ShieldCheck, LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const IndustryCard = ({ icon: Icon, title, desc }: IndustryCardProps) => (
  <div className="p-6 rounded-2xl border border-emerald-200 bg-white hover:bg-emerald-50 hover:border-emerald-300 transition-all cursor-default group shadow-sm">
     <div className="mb-4 text-emerald-600 group-hover:text-emerald-700 transition-colors">
        <Icon size={28} />
     </div>
     <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
     <p className="text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed">{desc}</p>
  </div>
);

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-16 sm:py-24 md:py-32 bg-white border-t border-emerald-200">
      <div className="container mx-auto px-4 sm:px-6">
         <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Built for <span className="text-emerald-600">Real Local Businesses</span>
          </h2>
          <p className="text-gray-600">Same system. Tailored to how your business actually works.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           <IndustryCard 
              icon={Utensils} 
              title="Restaurants" 
              desc="Handles reservations, peak-hour calls, and common questions without interrupting service." 
           />
           <IndustryCard 
              icon={Stethoscope} 
              title="Dentists" 
              desc="Books, reschedules, and manages new patient calls even after hours." 
           />
           <IndustryCard 
              icon={Scissors} 
              title="Hair Salons & Barbers" 
              desc="Fills gaps in your schedule while you're with clients." 
           />
           <IndustryCard 
              icon={Activity} 
              title="Health, Beauty & Skin" 
              desc="Captures appointment requests without front-desk overload." 
           />
           <IndustryCard 
              icon={Wrench} 
              title="Plumbers & Electricians" 
              desc="Answers calls while you're on the job and logs urgent requests." 
           />
           <IndustryCard 
              icon={ShieldCheck} 
              title="Pet Care & Vet Clinics" 
              desc="Books appointments and handles routine inquiries without missed calls." 
           />
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
