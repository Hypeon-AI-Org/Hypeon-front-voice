'use client';

import { Quote as QuoteIcon, Calendar } from 'lucide-react';

interface TestimonialSectionProps {
  openModal: () => void;
}

const TestimonialSection = ({ openModal }: TestimonialSectionProps) => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-3xl border border-emerald-200 shadow-xl">
            <QuoteIcon className="w-12 h-12 text-emerald-600 mb-6" />
            <p className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
              &quot;HypeOn-Voice has been a game-changer. Patients get immediate answers instead of waiting on hold, and they consistently tell us how natural the conversations feel. We&apos;re saving 10-15 hours a week, and delivering the attentive service we&apos;ve always wanted to provide — just more reliably.&quot;
            </p>
            <div className="border-t border-emerald-200 pt-6">
              <div className="font-bold text-gray-900 text-lg">Yasmin Baba</div>
              <div className="text-gray-600">Co-founder of Amilis | Fertility Support</div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={openModal}
              className="px-7 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
            >
              <Calendar className="w-4 h-4" />
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
