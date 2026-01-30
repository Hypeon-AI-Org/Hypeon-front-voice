import type { Metadata } from "next";
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { Heart, Clock, Calendar, Phone, CheckCircle, ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: "Healthcare Use Case - Voice.hypeon.ai",
  description: "How healthcare practices use AI voice receptionists to manage patient appointments and ensure no call goes unanswered.",
};

export default function HealthcarePage() {
  const benefits = [
    {
      icon: Clock,
      title: "Reduce Wait Times",
      description: "Answer calls instantly, even during peak hours. Patients get immediate responses instead of waiting on hold."
    },
    {
      icon: Calendar,
      title: "Efficient Scheduling",
      description: "Automatically book appointments based on availability, provider preferences, and appointment type requirements."
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Built with healthcare privacy and security standards in mind. Protect patient information while improving service."
    },
    {
      icon: Phone,
      title: "Handle High Call Volumes",
      description: "Manage multiple calls simultaneously without overwhelming your front desk staff. Perfect for busy practices."
    }
  ];

  const features = [
    "Books patient appointments by provider",
    "Handles appointment reschedules and cancellations",
    "Provides office hours and location information",
    "Answers questions about services and insurance",
    "Manages urgent vs. routine appointment requests",
    "Sends appointment reminders",
    "Integrates with EMR and practice management systems"
  ];

  return (
    <PageLayout 
      title="Healthcare"
      description="Improve patient access and reduce front desk burden. Handle appointment bookings efficiently, even during peak hours."
    >
      <div className="py-16">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <Link href="/use-cases" className="text-emerald-500 hover:text-emerald-400 text-sm mb-6 inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Use Cases
            </Link>
            <div className="max-w-4xl">
              <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-emerald-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Built for Healthcare Practices
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Healthcare practices need reliable, efficient appointment management. Our AI voice receptionist 
                handles routine appointment bookings, freeing your staff to focus on patient care. With 24/7 availability, 
                patients can book appointments at their convenience, improving access to care.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-emerald-50/50 border-y border-emerald-200/60">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Key Benefits for Healthcare Practices
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
                Improve Patient Access Today
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how healthcare practices are using AI receptionists to improve patient satisfaction and reduce administrative burden.
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
