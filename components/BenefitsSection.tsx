'use client';

import { CheckCircle } from 'lucide-react';

interface BenefitItemProps {
  title: string;
  desc: string;
}

const BenefitItem = ({ title, desc }: BenefitItemProps) => (
  <div className="flex gap-4">
     <div className="mt-1">
        <CheckCircle className="w-5 h-5 text-emerald-500" />
     </div>
     <div>
        <h4 className="text-white font-bold">{title}</h4>
        <p className="text-slate-400 text-sm">{desc}</p>
     </div>
  </div>
);

const BenefitsSection = () => {
  const benefits = [
    { title: "24/7 call answering", desc: "Capture bookings outside business hours." },
    { title: "Natural voice conversations", desc: "Customers talk like they would to a real receptionist." },
    { title: "Automatic appointment booking", desc: "No double bookings. No manual follow-up." },
    { title: "Calendar & system sync", desc: "Works with your existing setup." },
    { title: "Call summaries & logs", desc: "See what happened without listening to recordings." },
  ];

  const reasons = [
    "Fewer missed calls",
    "More booked appointments",
    "Less pressure on staff",
    "Lower front desk costs",
    "Happier customers"
  ];

  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
         <div className="grid lg:grid-cols-2 gap-16">
            {/* What You Get */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                 What You Get <span className="text-sm font-normal text-slate-500 ml-2">(Real outcomes, not gimmicks)</span>
              </h3>
              <ul className="space-y-6">
                 {benefits.map((benefit, index) => (
                   <BenefitItem key={index} title={benefit.title} desc={benefit.desc} />
                 ))}
              </ul>
            </div>

            {/* Why Businesses Switch */}
            <div className="bg-emerald-900/10 rounded-3xl p-8 border border-emerald-500/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <h3 className="text-2xl font-bold text-white mb-8">
                 Why Businesses Switch
              </h3>
              <div className="grid gap-4">
                {reasons.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-white/5">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <span className="text-slate-200 font-medium">{item}</span>
                   </div>
                ))}
              </div>
              <div className="mt-8 p-4 border-l-2 border-emerald-500 bg-white/5">
                 <p className="text-emerald-100 italic">&quot;Once it&apos;s live, you&apos;ll wonder why you waited.&quot;</p>
              </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
