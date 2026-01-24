'use client';

import { useState } from 'react';

interface FAQItemProps {
  q: string;
  a: string;
}

const FAQItem = ({ q, a }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="glass-card rounded-xl overflow-hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
       <div className="p-6 flex justify-between items-center">
          <h4 className="font-bold text-white">{q}</h4>
          <span className="text-emerald-500 text-xl">{isOpen ? '−' : '+'}</span>
       </div>
       <div className={`px-6 pb-6 text-slate-400 transition-all ${isOpen ? 'block' : 'hidden'}`}>
          {a}
       </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: "Will customers know it's AI?",
      a: "Most don't. It sounds natural and conversational."
    },
    {
      q: "Does it replace my staff?",
      a: "No. It handles calls so your staff can focus on customers."
    },
    {
      q: "Is it hard to set up?",
      a: "No. You keep your number. Setup takes minutes."
    },
    {
      q: "Will it work for my type of business?",
      a: "If customers call to book appointments, it works."
    }
  ];

  return (
    <section id="faqs" className="py-32 bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-3xl">
         <h2 className="text-3xl font-bold text-white text-center mb-12">Common Questions</h2>
         <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} />
            ))}
         </div>
      </div>
    </section>
  );
};

export default FAQSection;
