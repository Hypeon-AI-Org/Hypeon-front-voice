'use client';

import { CheckCircle } from 'lucide-react';

interface BenefitItemProps {
  title: string;
  desc: string;
}

const BenefitItem = ({ title, desc }: BenefitItemProps) => (
  <div className="flex gap-4">
     <div className="mt-1">
        <CheckCircle className="w-5 h-5 text-emerald-600" />
     </div>
     <div>
        <h4 className="text-gray-900 font-bold">{title}</h4>
        <p className="text-gray-600 text-sm">{desc}</p>
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
    <section className="py-32 relative bg-emerald-50">
      <div className="container mx-auto px-6">
         <div className="grid lg:grid-cols-2 gap-16">
            {/* What You Get */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-emerald-200 pb-4">
                 What You Get <span className="text-sm font-normal text-gray-500 ml-2">(Real outcomes, not gimmicks)</span>
              </h3>
              <ul className="space-y-6">
                 {benefits.map((benefit, index) => (
                   <BenefitItem key={index} title={benefit.title} desc={benefit.desc} />
                 ))}
              </ul>
            </div>

            {/* Why Businesses Switch */}
            <div className="bg-emerald-100 rounded-3xl p-8 border border-emerald-300 relative overflow-hidden shadow-lg">
               <div className="absolute top-0 right-0 p-32 bg-emerald-200/50 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <h3 className="text-2xl font-bold text-gray-900 mb-8">
                 Why Businesses Switch
               </h3>
               <div className="grid gap-4">
                {reasons.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-emerald-200">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-gray-800 font-medium">{item}</span>
                   </div>
                ))}
              </div>
              <div className="mt-8 p-4 border-l-2 border-emerald-600 bg-white/80 rounded">
                 <p className="text-gray-700 italic">&quot;Once it&apos;s live, you&apos;ll wonder why you waited.&quot;</p>
              </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
