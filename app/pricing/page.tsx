import type { Metadata } from "next";
import PageLayout from '@/components/PageLayout';
import { CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Pricing - Voice.hypeon.ai",
  description: "Simple, transparent pricing for your AI voice receptionist. Choose the plan that fits your business needs.",
};

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 500 calls/month",
        "24/7 call answering",
        "Automatic appointment booking",
        "Calendar integration",
        "Call summaries & logs",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$249",
      period: "per month",
      description: "For growing businesses with higher call volumes",
      features: [
        "Up to 2,000 calls/month",
        "Everything in Starter",
        "Priority support",
        "Advanced analytics",
        "Custom business hours",
        "Multi-location support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited calls",
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "Training & onboarding",
        "White-label options"
      ],
      popular: false
    }
  ];

  return (
    <PageLayout 
      title="Pricing"
      description="Simple, transparent pricing. No hidden fees. Cancel anytime."
    >
      <div className="py-16">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className={`glass-card p-8 rounded-3xl relative ${plan.popular ? 'border-2 border-emerald-500/50 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
              <Link
                href="/"
                className="block w-full py-3 px-7 rounded-full bg-emerald-500 text-black text-sm font-semibold text-center hover:bg-emerald-400 transition-colors"
              >
                Get Started
              </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-emerald-50 border-y border-emerald-200">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Pricing FAQ
            </h2>
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">What happens if I exceed my call limit?</h3>
                <p className="text-gray-600">We&apos;ll notify you when you&apos;re approaching your limit. You can upgrade your plan or purchase additional call credits.</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Is there a setup fee?</h3>
                <p className="text-gray-600">No setup fees. Just choose your plan and start using the service immediately.</p>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">Yes, we offer a 30-day money-back guarantee. If you&apos;re not satisfied, we&apos;ll refund your first month.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
