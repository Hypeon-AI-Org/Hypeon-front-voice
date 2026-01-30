'use client';

import { Phone, Calendar, Users, Zap } from 'lucide-react';

interface InboundCallsSectionProps {
  openModal: () => void;
  openVoiceModal?: () => void;
}

const InboundCallsSection = ({ openModal, openVoiceModal }: InboundCallsSectionProps) => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Left: Title + description + features */}
            <div className="space-y-8">
              <div>
                <p className="text-base font-normal text-emerald-800 mb-3">
                  Inbound Call Handling
                </p>
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-4">
                  Deliver the fast and personal responses your customers expect.
                </h2>
                <p className="text-lg text-gray-700">
                  Every call is answered quickly and naturally. Clients get instant answers, easy booking changes, and a friendly experience that reflects your brand.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-normal text-gray-900 mb-2">Answer client enquiries</h4>
                    <p className="text-gray-600">Handle questions about services, pricing, and availability instantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-normal text-gray-900 mb-2">Manage appointment changes</h4>
                    <p className="text-gray-600">Reschedule or cancel appointments seamlessly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-normal text-gray-900 mb-2">Route priority calls</h4>
                    <p className="text-gray-600">Urgent calls are immediately forwarded to your team.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-normal text-gray-900 mb-2">Nurture new leads</h4>
                    <p className="text-gray-600">Capture and qualify leads automatically.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="glass-card p-6 rounded-3xl border border-emerald-200">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-emerald-600" />
                    </div>
                    <p className="text-lg text-gray-700 font-medium">
                      Hi, you&apos;ve reached The Nail Spa, how may I help?
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                      <div className="text-sm font-semibold text-emerald-700">Appointment Updated</div>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                      <div className="text-sm font-semibold text-emerald-700">Confirmation Sent</div>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                      <div className="text-sm font-semibold text-emerald-700">Team Notified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <button 
              onClick={openModal}
              className="px-7 py-3.5 min-h-[48px] rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 touch-manipulation"
            >
              <Calendar className="w-4 h-4" />
              Book Free Demo
            </button>
            <button
              type="button"
              onClick={() => openVoiceModal?.()}
              className="px-7 py-3.5 min-h-[48px] rounded-full bg-white border-2 border-emerald-600 text-emerald-600 font-semibold text-sm hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 touch-manipulation"
            >
              <Phone className="w-4 h-4" />
              Call Demo Receptionist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InboundCallsSection;
