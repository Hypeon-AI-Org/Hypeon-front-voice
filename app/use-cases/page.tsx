import type { Metadata } from "next";
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { Stethoscope, Heart, Scissors, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Use Cases - Voice.hypeon.ai",
  description: "See how businesses across different industries use AI voice receptionists to improve customer service and increase bookings.",
};

export default function UseCasesPage() {
  const useCases = [
    {
      title: "Dentistry",
      icon: Stethoscope,
      description: "Handle appointment bookings, reschedules, and new patient inquiries 24/7. Perfect for dental practices that want to capture every opportunity.",
      link: "/use-cases/dentistry",
      color: "emerald"
    },
    {
      title: "Healthcare",
      icon: Heart,
      description: "Manage patient appointments, answer common questions, and ensure no call goes unanswered in busy medical practices.",
      link: "/use-cases/healthcare",
      color: "emerald"
    },
    {
      title: "Hair & Beauty",
      icon: Scissors,
      description: "Fill gaps in your schedule while you're with clients. Capture bookings even during peak hours without interrupting service.",
      link: "/use-cases/hair-beauty",
      color: "emerald"
    },
    {
      title: "Aesthetic Clinics",
      icon: Sparkles,
      description: "Handle consultations, bookings, and inquiries for aesthetic treatments. Provide professional service even after hours.",
      link: "/use-cases/aesthetic-clinics",
      color: "emerald"
    }
  ];

  return (
    <PageLayout 
      title="Use Cases"
      description="See how businesses across industries use AI voice receptionists to never miss a booking."
    >
      <div className="py-16">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => (
                <Link
                  key={index}
                  href={useCase.link}
                  className="glass-card p-8 rounded-2xl hover:border-emerald-500/30 transition-all group"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                      <useCase.icon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-500 font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Other Industries Section */}
        <section className="py-16 bg-emerald-50 border-y border-emerald-200">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Other Industries We Serve
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {['Restaurants', 'Plumbers & Electricians', 'Pet Care & Vet Clinics', 'Fitness Studios', 'Legal Services', 'Real Estate'].map((industry) => (
                <div key={industry} className="glass-card p-4 rounded-xl text-center">
                  <span className="text-gray-700">{industry}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-8">
              Don't see your industry? <Link href="/" className="text-emerald-600 hover:text-emerald-700">Contact us</Link> to learn how we can help.
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
