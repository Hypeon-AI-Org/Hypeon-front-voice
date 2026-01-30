'use client';

import { Phone, Users, CheckCircle, Rocket, ArrowRight, Calendar } from 'lucide-react';

interface SetupProcessSectionProps {
  openModal: () => void;
  openVoiceModal?: () => void;
}

const SetupProcessSection = ({ openModal, openVoiceModal }: SetupProcessSectionProps) => {
  const steps = [
    {
      number: '1',
      title: 'Exploration Call',
      description: 'A commitment free chat with our team to learn more about how HypeOn-Voice works, discuss the needs of your business.',
      icon: Phone
    },
    {
      number: '2',
      title: 'Business Workshop',
      description: 'A short, but important call to go through your existing workflows, preferences, and business context for your AI Receptionist.',
      icon: Users
    },
    {
      number: '3',
      title: 'Demo & Feedback',
      description: 'Test out, and interact with your AI Receptionist. Provide feedback on any changes you\'d like to see before we move forward.',
      icon: CheckCircle
    },
    {
      number: '4',
      title: 'Start 30-Day Trial',
      description: 'Once you\'re happy with your receptionist, we\'ll integrate it with your phone number to start taking calls.',
      icon: Rocket
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <p className="text-base font-normal text-emerald-800 mb-3">
                Setup
              </p>
              <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-4">
                Tailored, white-glove setup for optimal performance.
              </h2>
              <p className="text-lg text-gray-700">
                A simple onboarding process to ensure your AI receptionist provides the perfect, quality responses your customers deserve.
              </p>
            </div>
            <div className="flex flex-col items-stretch lg:items-stretch gap-3 sm:gap-4 flex-shrink-0 w-full min-w-0 sm:min-w-[240px] max-w-full lg:max-w-[280px]">
              <button 
                onClick={openModal}
                className="w-full px-7 py-3.5 min-h-[48px] rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 touch-manipulation"
              >
                <Calendar className="w-4 h-4" />
                Book Free Demo
              </button>
              <button
                type="button"
                onClick={() => openVoiceModal?.()}
                className="w-full px-7 py-3.5 min-h-[48px] rounded-full bg-white border-2 border-emerald-600 text-emerald-600 font-semibold text-sm hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation"
              >
                <Phone className="w-4 h-4" />
                Call Demo Receptionist
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-4 rounded-xl border border-emerald-200 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-normal text-emerald-600">{step.number}</span>
                    <step.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-normal text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-emerald-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetupProcessSection;
