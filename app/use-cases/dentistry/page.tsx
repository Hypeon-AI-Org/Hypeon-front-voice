import type { Metadata } from "next";
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { Stethoscope, Clock, Calendar, Phone, CheckCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Dentistry Use Case - Voice.hypeon.ai",
  description: "How dental practices use AI voice receptionists to handle appointments, reschedules, and new patient inquiries 24/7.",
};

export default function DentistryPage() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Capture bookings even after hours. Many patients prefer to call outside business hours, and now you won't miss them."
    },
    {
      icon: Calendar,
      title: "Automatic Scheduling",
      description: "Book appointments instantly and sync them to your calendar. No double bookings, no manual entry required."
    },
    {
      icon: Phone,
      title: "Handle Peak Hours",
      description: "During busy periods, the AI handles routine calls while your staff focuses on patients in the office."
    },
    {
      icon: CheckCircle,
      title: "New Patient Intake",
      description: "Collect patient information, insurance details, and appointment preferences automatically during the call."
    }
  ];

  const features = [
    "Books new patient consultations",
    "Handles appointment reschedules and cancellations",
    "Answers questions about services and pricing",
    "Provides office hours and location information",
    "Collects patient information and insurance details",
    "Sends confirmation texts and emails",
    "Integrates with dental practice management software"
  ];

  return (
    <PageLayout 
      title="Dentistry"
      description="Never miss another dental appointment booking. Handle calls 24/7, even when your office is closed."
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
                <Stethoscope className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Perfect for Dental Practices
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Dental practices face unique challenges: managing high call volumes during business hours, 
                capturing after-hours inquiries, and handling new patient intake. Our AI voice receptionist 
                handles all of this automatically, so you can focus on providing excellent dental care.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-emerald-50/50 border-y border-emerald-200/60">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Key Benefits for Dental Practices
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
                Ready to Never Miss a Booking?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how dental practices are using AI receptionists to increase bookings and improve patient satisfaction.
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
