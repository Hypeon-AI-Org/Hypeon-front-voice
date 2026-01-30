'use client';

import { Zap, Calendar, Phone, Users, CheckCircle } from 'lucide-react';

interface AutomatedTasksSectionProps {
  openModal: () => void;
  openVoiceModal?: () => void;
}

const AutomatedTasksSection = ({ openModal, openVoiceModal }: AutomatedTasksSectionProps) => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-emerald-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Left: Title + description + features */}
            <div className="space-y-8">
              <div>
                <p className="text-base font-normal text-emerald-800 mb-3">
                  Automated Call Tasks
                </p>
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-4">
                  Let admin run quietly in the background, while your team stays focused.
                </h2>
                <p className="text-lg text-gray-700">
                  Routine bookings, changes, and follow-ups run automatically, freeing your team and helping you streamline your business.
                </p>
              </div>
              <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-normal text-gray-900 mb-2">Send booking links automatically</h4>
                  <p className="text-gray-600">Clients receive booking links via SMS or email instantly.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xl font-normal text-gray-900 mb-2">Handle appointment changes</h4>
                  <p className="text-gray-600">Reschedules and cancellations are processed automatically.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-600" />
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
                  <h4 className="text-xl font-normal text-gray-900 mb-2">Capture and nurture new leads</h4>
                  <p className="text-gray-600">New leads are automatically added to your CRM.</p>
                </div>
              </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="glass-card p-6 rounded-3xl border border-emerald-200">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-gray-700">Call Answered</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-gray-700">Notified</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-gray-700">Lead Sent to CRM</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-gray-700">Form Sent</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-gray-700">BookingLink Sent</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-emerald-100 rounded-lg border border-emerald-300">
                    <div className="text-sm font-bold text-emerald-700 mb-1">Booking Updated</div>
                    <div className="text-xs text-emerald-600">Appointment modified.</div>
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

export default AutomatedTasksSection;
