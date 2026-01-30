import type { Metadata } from "next";
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { Sparkles, Clock, Calendar, Phone, CheckCircle, ArrowLeft, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: "Aesthetic Clinics Use Case - Voice.hypeon.ai",
  description: "How aesthetic clinics use AI voice receptionists to handle consultations, bookings, and inquiries for aesthetic treatments professionally.",
};

export default function AestheticClinicsPage() {
  const benefits = [
    {
      icon: Star,
      title: "Professional Service",
      description: "Provide professional, consistent service even after hours. The AI handles inquiries with the same level of care your clinic is known for."
    },
    {
      icon: Calendar,
      title: "Consultation Management",
      description: "Book consultations, follow-ups, and treatment appointments. Handle complex scheduling requirements for aesthetic procedures."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Capture inquiries and bookings around the clock. Many clients research and book aesthetic treatments outside business hours."
    },
    {
      icon: Phone,
      title: "Reduce No-Shows",
      description: "Send automated reminders and confirmations. Keep clients informed and reduce missed appointments."
    }
  ];

  const features = [
    "Books consultation appointments",
    "Handles treatment booking and scheduling",
    "Answers questions about procedures and pricing",
    "Provides clinic hours and location information",
    "Manages follow-up appointments",
    "Sends confirmation and reminder messages",
    "Integrates with clinic management systems"
  ];

  return (
    <PageLayout 
      title="Aesthetic Clinics"
      description="Handle consultations and bookings professionally, even after hours. Provide consistent service that matches your clinic's standards."
    >
      <div className="py-16">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Link href="/use-cases" className="text-emerald-600 hover:text-emerald-700 text-sm mb-6 inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Use Cases
            </Link>
            <div className="max-w-4xl">
              <div className="w-20 h-20 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                <Sparkles className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built for Aesthetic Clinics
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Aesthetic clinics require professional, attentive service that reflects the quality of care you provide. 
                Our AI voice receptionist handles consultations, bookings, and inquiries with the same level of professionalism 
                your clients expect. Available 24/7 to capture every opportunity, even when your clinic is closed.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-emerald-50/50 border-y border-emerald-200/60">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Key Benefits for Aesthetic Clinics
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-card p-8 rounded-2xl">
                  <div className="mb-4 text-emerald-600">
                    <benefit.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                What It Can Do
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 glass-card p-4 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="glass-card p-12 rounded-3xl max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Elevate Your Client Experience
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how aesthetic clinics are using AI receptionists to provide exceptional service and increase bookings.
              </p>
              <Link
                href="/"
                className="inline-block px-7 py-3 rounded-full bg-emerald-500 text-black text-sm font-semibold hover:bg-emerald-400 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
