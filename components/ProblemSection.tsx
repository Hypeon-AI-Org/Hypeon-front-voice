'use client';

import { User, Scissors, Wrench, Clock, LucideIcon } from 'lucide-react';

interface BentoCardProps {
  icon: LucideIcon;
  iconColor: string;
  title: string;
  desc: string;
  delay: string;
}

const BentoCard = ({ icon: Icon, iconColor, title, desc, delay }: BentoCardProps) => (
  <div className="glass-card p-8 rounded-3xl flex flex-col justify-between h-48 group hover:-translate-y-2 transition-transform duration-500" style={{ animationDelay: `${delay}ms` }}>
    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 border border-emerald-200 group-hover:border-emerald-500/50">
      <Icon className={iconColor} />
    </div>
    <div>
       <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
       <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const ProblemSection = () => {
  return (
    <section id="the-problem" className="py-32 relative bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
              <div className="text-emerald-600 font-bold mb-2 uppercase tracking-widest text-xs">The Problem</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Here&apos;s the thing. <br/>
                <span className="text-gray-700">Your phone rings when:</span>
              </h2>
              <p className="text-gray-600 text-lg border-l-2 border-emerald-500 pl-6 italic">
                &quot;Those calls don&apos;t go to voicemail. They go to your competitor.&quot;
              </p>
           </div>
           <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-full border border-red-200">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              Missed calls = missed revenue
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BentoCard 
            icon={User}
            iconColor="text-red-500"
            title="Fully Booked"
            desc="You're fully booked and understaffed."
            delay="0"
          />
           <BentoCard 
            icon={Scissors}
            iconColor="text-orange-500"
            title="With a Customer"
            desc="You're with a customer or patient."
            delay="100"
          />
           <BentoCard 
            icon={Wrench}
            iconColor="text-blue-500"
            title="On-Site"
            desc="You're on-site doing the work."
            delay="200"
          />
          <BentoCard 
            icon={Clock}
            iconColor="text-purple-500"
            title="Closed"
            desc="Your business is closed."
            delay="300"
          />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">And voicemail doesn&apos;t fix that.</p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
