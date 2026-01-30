'use client';

import Image from 'next/image';
import { CheckCircle, ArrowRight, Calendar, Phone, Activity, Bell, Box, XCircle, Link2, UserCheck, ArrowDown, Play } from 'lucide-react';

interface HeroSectionProps {
  openModal: () => void;
  openVoiceModal?: () => void;
}

const HeroSection = ({ openModal, openVoiceModal }: HeroSectionProps) => {
  return (
    <header className="relative pt-24 pb-20 px-6 overflow-hidden bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-600">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Pill Badge */}
            <div className="flex justify-start mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 shadow-sm">
                <Activity className="w-3.5 h-3.5 text-black flex-shrink-0" strokeWidth={2.5} />
                <span className="text-black font-medium text-xs md:text-sm whitespace-nowrap">AI Receptionist for Growing Businesses</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 mb-8 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-gray-900">
              <div>Never miss a call.</div>
              <div className="text-emerald-600">Win more work.</div>
              <div>Reduce admin.</div>
            </div>

            <p className="text-lg md:text-xl text-white mb-12 leading-relaxed">
              Your AI receptionist manages calls, captures leads, and handles rebookings, so you can focus on growing your business.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button 
                onClick={openModal}
                className="group relative px-7 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] hover:-translate-y-1"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Free Demo
                </span>
              </button>
              <button
                type="button"
                onClick={() => openVoiceModal?.()}
                className="px-7 py-3 rounded-full bg-transparent border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Demo Receptionist
              </button>
            </div>
          </div>

          {/* Right Column - Image Space */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg aspect-[9/11] relative">
              {/* Image Container */}
              <div className="w-full h-full relative">
                <Image
                  src="/asserts/hero_image.png"
                  alt="AI Receptionist"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
                
                {/* Flow Box Overlay — graph position (5, 5), center = 50%,50%, 1 unit = 6% */}
                <div className="absolute left-[80%] top-[20%] -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/30 z-20 w-[180px]">
                  <div className="flex flex-col gap-1.5">
                    {/* Step 1: AI Receptionist Answered */}
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-2.5 h-2.5 text-black flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[10px] font-medium text-black leading-tight">AI Receptionist Answered</span>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-start -my-0.5 ml-0">
                      <ArrowDown className="w-2.5 h-2.5 text-black" strokeWidth={2} />
                    </div>
                    
                    {/* Step 2: Appointment Cancelled */}
                    <div className="flex items-center gap-1.5">
                      <XCircle className="w-2.5 h-2.5 text-black flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[10px] font-medium text-black leading-tight">Appointment Cancelled</span>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-start -my-0.5 ml-0">
                      <ArrowDown className="w-2.5 h-2.5 text-black" strokeWidth={2} />
                    </div>
                    
                    {/* Step 3: Rebooking Link Sent */}
                    <div className="flex items-center gap-1.5">
                      <Link2 className="w-2.5 h-2.5 text-black flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[10px] font-medium text-black leading-tight">Rebooking Link Sent</span>
                    </div>
                    
                    {/* Arrow */}
                    <div className="flex justify-start -my-0.5 ml-0">
                      <ArrowDown className="w-2.5 h-2.5 text-black" strokeWidth={2} />
                    </div>
                    
                    {/* Step 4: Dr. Schmitt Notified */}
                    <div className="flex items-center gap-1.5">
                      <UserCheck className="w-2.5 h-2.5 text-black flex-shrink-0" strokeWidth={2.5} />
                      <span className="text-[10px] font-medium text-black leading-tight">Dr. Schmitt Notified</span>
                    </div>
                  </div>
                </div>
                
                {/* Conversation Box Overlay — graph position (-5, 5), center = 50%,50%, 1 unit = 6% */}
                <div className="absolute left-[20%] top-[20%] -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 z-20 w-fit max-w-[200px] overflow-hidden">
                  {/* AI Receptionist Strip */}
                  <div className="bg-white/30 px-2 py-1 border-b border-white/20">
                    <span className="text-[10px] font-semibold text-black whitespace-nowrap">AI Receptionist</span>
                  </div>
                  {/* Message */}
                  <div className="p-2">
                    <p className="text-[10px] font-medium text-black leading-tight">
                      Hey, you've reached Pentworth Medical. How may I help you today?
                    </p>
                  </div>
                </div>
                
                {/* Summary Box Overlay — graph position (5, -5), same style as AI Receptionist box + play */}
                <div className="absolute left-[80%] top-[80%] -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-lg shadow-lg border border-white/30 z-20 w-fit max-w-[260px] min-w-[220px] overflow-hidden">
                  {/* Summary Strip */}
                  <div className="bg-white/30 px-2 py-1 border-b border-white/20 flex items-center gap-2">
                    <button type="button" className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center flex-shrink-0 hover:bg-black/30 transition-colors" aria-label="Play recording">
                      <Play className="w-3 h-3 text-black fill-black" strokeWidth={2} />
                    </button>
                    <span className="text-[10px] font-semibold text-black whitespace-nowrap">Summary</span>
                  </div>
                  {/* Message */}
                  <div className="p-2">
                    <p className="text-[10px] font-medium text-black leading-tight">
                      Fenley requested information about parking at the clinic. We provided all the relevant details to ensure a smooth visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Strip at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-emerald-600/80 via-emerald-600/90 to-emerald-600 backdrop-blur-sm py-4">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-white flex-shrink-0" strokeWidth={2} />
              <span className="text-base text-white whitespace-nowrap">30-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white flex-shrink-0" strokeWidth={2} />
              <span className="text-base text-white whitespace-nowrap">24/7 call answering</span>
            </div>
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-white flex-shrink-0" strokeWidth={2} />
              <span className="text-base text-white whitespace-nowrap">Smart call routing</span>
            </div>
            <div className="flex items-center gap-3">
              <Box className="w-5 h-5 text-white flex-shrink-0" strokeWidth={2} />
              <span className="text-base text-white whitespace-nowrap">Software Integrations</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
