import type { Metadata } from "next";
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { Scissors, Clock, Calendar, Phone, CheckCircle, ArrowLeft, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: "Hair & Beauty Use Case - Voice.hypeon.ai",
  description: "How hair salons and beauty businesses use AI voice receptionists to fill schedule gaps and capture bookings while with clients.",
};

export default function HairBeautyPage() {
  const benefits = [
    {
      icon: Users,
      title: "Fill Schedule Gaps",
      description: "Capture bookings even while you're with clients. The AI fills gaps in your schedule automatically, maximizing your revenue."
    },
    {
      icon: Clock,
      title: "Handle Peak Hours",
      description: "During busy periods, the AI manages incoming calls so you can focus on providing excellent service to clients in the salon."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Books appointments based on service duration, stylist availability, and your preferred time slots. No double bookings."
    },
    {
      icon: Phone,
      title: "After-Hours Bookings",
      description: "Capture bookings even when the salon is closed. Many clients prefer to book outside business hours."
    }
  ];

  const features = [
    "Books appointments by stylist or service type",
    "Handles reschedules and cancellations",
    "Manages multiple service bookings",
    "Answers questions about services and pricing",
    "Provides salon hours and location",
    "Sends confirmation reminders",
    "Integrates with salon management software"
  ];

  return (
    <PageLayout 
      title="Hair & Beauty"
      description="Fill your schedule while you're with clients. Capture every booking opportunity, even during peak hours."
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
                <Scissors className="w-10 h-10 text-emerald-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Perfect for Hair Salons & Beauty Businesses
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-8">
                Running a hair salon or beauty business means juggling clients, appointments, and phone calls. 
                When you're with a client, you can't answer the phone. Our AI voice receptionist handles calls 
                for you, filling gaps in your schedule and capturing bookings even during your busiest times.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-white/[0.02] border-y border-white/5">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Key Benefits for Hair & Beauty Businesses
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
                Maximize Your Bookings
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how hair salons and beauty businesses are using AI receptionists to fill their schedules and increase revenue.
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
