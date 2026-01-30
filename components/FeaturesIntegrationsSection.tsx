'use client';

import { Link2, Zap, MessageSquare, Shield, Settings, Calendar, Phone, CheckCircle } from 'lucide-react';

interface FeaturesIntegrationsSectionProps {
  openModal: () => void;
  openVoiceModal?: () => void;
}

const FeaturesIntegrationsSection = ({ openModal, openVoiceModal }: FeaturesIntegrationsSectionProps) => {
  const integrationTags = ['SMS & Email', 'Patient Management', 'Booking Systems', 'Phoneline', 'CRM'];
  const automatedActions = [
    'Call Answered',
    'Lead Added To CRM',
    'Rebooking Link Sent',
    'Team Notified',
    'Intake Form Sent',
    'Appointment Cancelled',
  ];

  return (
    <section className="py-32 bg-emerald-50/60">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-base font-normal text-emerald-800 mb-3">
              Features & Integrations
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight mb-4 max-w-3xl mx-auto">
              Everything you need to manage inbound calls, admin tasks, and customer enquiries.
            </h2>
          </div>

          {/* Row 1: Integrations + Smart Call Routing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Card 1: Integrations */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-200 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Link2 className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Integrations</span>
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-2">Works with your existing tools.</h3>
              <p className="text-sm text-gray-600 mb-4">Seamless integration with leading business systems.</p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {integrationTags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {integrationTags.slice(2).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Smart Call Routing */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-200 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Smart Call Routing</span>
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-2">Prioritise what matters most.</h3>
              <p className="text-sm text-gray-600 mb-4">Urgent calls to you. Routine queries to your AI receptionist.</p>
              <div className="space-y-2 mt-auto">
                <div className="p-2 rounded-lg bg-emerald-600/10 border border-emerald-200">
                  <div className="text-xs font-semibold text-emerald-700">Call Transferred</div>
                  <div className="text-xs text-gray-600">Urgent call forwarded to your team...</div>
                </div>
                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                  <div className="text-xs font-semibold text-emerald-700">Call Handled</div>
                  <div className="text-xs text-gray-600">Routine enquiry logged...</div>
                </div>
                <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200">
                  <div className="text-xs font-semibold text-emerald-700">Booking Handled</div>
                  <div className="text-xs text-gray-600">Appointment rescheduled...</div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Messaging & Logs, Security, Automated Actions - same line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Card 3: Messaging & Logs */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-200 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Messaging & Logs</span>
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-2">Visibility into every call.</h3>
              <p className="text-sm text-gray-600 mb-4">Track every call and follow-up effortlessly.</p>
              <div className="mt-auto p-3 rounded-lg bg-gray-900 text-gray-300 font-mono text-xs space-y-1">
                <div>DATE: 2025-01-30</div>
                <div>MESSAGES: 3</div>
                <div>RECEPTIONIST PROMPT: Call answered, booking updated.</div>
                <div>AUDIO LOG: Available</div>
              </div>
            </div>

            {/* Card 4: Security */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-200 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Security</span>
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-2">Compliant and secure.</h3>
              <p className="text-sm text-gray-600 mb-4">Built with business-grade privacy and compliance in mind.</p>
              <div className="mt-auto flex justify-center py-4">
                <div className="w-20 h-20 rounded-full border-4 border-emerald-200 bg-emerald-50/50 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-emerald-500" />
                </div>
              </div>
            </div>

            {/* Card 5: Automated Actions */}
            <div className="glass-card p-6 rounded-2xl border border-emerald-200 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700">Automated Actions</span>
              </div>
              <h3 className="text-lg font-normal text-gray-900 mb-2">Automate booking admin.</h3>
              <p className="text-sm text-gray-600 mb-4">Follow-ups and tasks handled automatically.</p>
              <div className="grid grid-cols-2 gap-2 mt-auto">
                {automatedActions.map((action) => (
                  <div
                    key={action}
                    className="flex items-center gap-2 p-2 rounded-lg bg-emerald-600 text-white text-xs font-medium"
                  >
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {action}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons - same line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="w-full max-w-[280px] px-7 py-3 rounded-full bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Free Demo
            </button>
            <button
              type="button"
              onClick={() => openVoiceModal?.()}
              className="w-full max-w-[280px] px-7 py-3 rounded-full bg-white border-2 border-emerald-600 text-emerald-600 font-semibold text-sm hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2"
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

export default FeaturesIntegrationsSection;
