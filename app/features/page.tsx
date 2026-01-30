import type { Metadata } from "next";
import PageLayout from '@/components/PageLayout';
import BenefitsSection from '@/components/BenefitsSection';
import { CheckCircle, Clock, Calendar, Phone, MessageSquare, BarChart3, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: "Features - Voice.hypeon.ai",
  description: "Discover all the powerful features of our AI voice receptionist - 24/7 availability, natural conversations, automatic booking, and more.",
};

export default function FeaturesPage() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a call again. Your AI receptionist works around the clock, answering calls even when you're closed or busy."
    },
    {
      icon: MessageSquare,
      title: "Natural Voice Conversations",
      description: "Advanced AI that speaks naturally and understands context. Customers have real conversations, not robotic interactions."
    },
    {
      icon: Calendar,
      title: "Automatic Appointment Booking",
      description: "Books appointments instantly and syncs them directly to your calendar. No manual entry required."
    },
    {
      icon: Phone,
      title: "Call Handling & Routing",
      description: "Handles new bookings, reschedules, cancellations, and answers common questions about your services and pricing."
    },
    {
      icon: BarChart3,
      title: "Call Analytics & Insights",
      description: "Get detailed call summaries, logs, and analytics to understand your customer interactions and booking patterns."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability. Your data is protected and the system is always available."
    },
    {
      icon: Zap,
      title: "Fast Setup",
      description: "Get up and running in minutes. No complex configuration or training required. Works with your existing systems."
    },
    {
      icon: CheckCircle,
      title: "Calendar Integration",
      description: "Seamlessly integrates with Google Calendar, Outlook, and other popular calendar systems you already use."
    }
  ];

  return (
    <PageLayout 
      title="Features"
      description="Everything you need to never miss another booking. Powerful features designed for real businesses."
    >
      <div className="py-16">
        <BenefitsSection />
        
        {/* Detailed Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Complete Feature Set
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl hover:border-emerald-400 transition-all">
                  <div className="mb-4 text-emerald-600">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 bg-emerald-50 border-y border-emerald-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Works With Your Existing Tools
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                No need to change your workflow. Our AI receptionist integrates seamlessly with the tools you already use.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {['Google Calendar', 'Outlook', 'Calendly', 'Square', 'Stripe', 'Zapier'].map((tool) => (
                  <div key={tool} className="px-6 py-3 bg-white rounded-lg border border-emerald-200 text-gray-700 shadow-sm">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
