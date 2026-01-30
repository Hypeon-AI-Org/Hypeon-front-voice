'use client';

import { Phone, Calendar, MessageSquare, Clock } from 'lucide-react';

interface OutboundCallsSectionProps {
  openModal: () => void;
  openVoiceModal?: () => void;
}

const OutboundCallsSection = ({ openModal, openVoiceModal }: OutboundCallsSectionProps) => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Left: Calendar Visual (zigzag) */}
            <div className="relative order-2 lg:order-1">
              <div className="glass-card p-6 rounded-3xl border border-emerald-200">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                      <div key={day} className="text-center text-sm font-semibold text-gray-700">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 14 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`aspect-square rounded-lg flex items-center justify-center text-sm ${
                          i === 3 || i === 7 ? 'bg-emerald-600 text-white font-bold' : 
                          i === 5 || i === 9 ? 'bg-emerald-100 text-emerald-700' : 
                          'bg-gray-50 text-gray-400'
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Title + description + features */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <p className="text-base font-normal text-emerald-800 mb-3">
                  Outbound Phone Calls
                </p>
                <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-4">
                  Increase bookings and keep your calendars full.
                </h2>
                <p className="text-lg text-gray-700">
                  Outbound calls help fill your calendar. Clients receive reminders, follow-ups, and rebooking prompts, all delivered in a natural, on-brand way.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-normal text-gray-900 mb-2">Thoughtful lead follow-ups</h4>
                    <p className="text-gray-600">Reach out to potential clients at the right time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-normal text-gray-900 mb-2">Recurring appointment scheduling</h4>
                    <p className="text-gray-600">Automatically book repeat appointments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-normal text-gray-900 mb-2">Post-service check-ins</h4>
                    <p className="text-gray-600">Follow up after appointments to ensure satisfaction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-normal text-gray-900 mb-2">Gentle rebooking reminders</h4>
                    <p className="text-gray-600">Keep clients engaged and calendars full.</p>
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

export default OutboundCallsSection;
