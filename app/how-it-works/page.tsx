import type { Metadata } from "next";
import PageLayout from '@/components/PageLayout';
import HowItWorksSection from '@/components/HowItWorksSection';

export const metadata: Metadata = {
  title: "How It Works - Voice.hypeon.ai",
  description: "Learn how our AI voice receptionist works to answer calls, understand customers, and book appointments automatically.",
};

export default function HowItWorksPage() {
  return (
    <PageLayout 
      title="How It Works"
      description="Simple. Fast. Reliable. See how our AI receptionist handles every call and books appointments automatically."
    >
      <div className="py-16">
        <HowItWorksSection />
        
        {/* Additional Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Why It Works So Well
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Response</h3>
                  <p className="text-gray-600">
                    No waiting, no voicemail. Every call is answered immediately, even during peak hours or after closing time.
                  </p>
                </div>
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Natural Conversations</h3>
                  <p className="text-gray-600">
                    Our AI speaks naturally and understands context, just like a real receptionist would. Customers won&apos;t even notice the difference.
                  </p>
                </div>
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Seamless Integration</h3>
                  <p className="text-gray-600">
                    Appointments sync directly to your calendar system. No manual entry, no double bookings, no confusion.
                  </p>
                </div>
                <div className="glass-card p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Always Learning</h3>
                  <p className="text-gray-600">
                    The system learns your business hours, services, and preferences to provide better service over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
