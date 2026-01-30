import type { Metadata } from "next";
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Blog - Voice.hypeon.ai",
  description: "Latest insights, tips, and updates about AI voice receptionists, appointment booking, and business automation.",
};

export default function BlogPage() {
  // Placeholder blog posts - replace with real content later
  const blogPosts = [
    {
      id: 1,
      title: "How AI Receptionists Are Transforming Small Businesses",
      excerpt: "Discover how small businesses are using AI voice receptionists to compete with larger companies and never miss a booking.",
      date: "January 15, 2025",
      category: "Business"
    },
    {
      id: 2,
      title: "5 Ways to Reduce Missed Calls and Increase Bookings",
      excerpt: "Learn proven strategies to ensure every customer call is answered and converted into a booking.",
      date: "January 10, 2025",
      category: "Tips"
    },
    {
      id: 3,
      title: "The Future of Customer Service: AI vs Human Receptionists",
      excerpt: "Exploring the benefits and limitations of AI receptionists compared to traditional human receptionists.",
      date: "January 5, 2025",
      category: "Technology"
    },
    {
      id: 4,
      title: "Case Study: How a Dental Practice Increased Bookings by 40%",
      excerpt: "Real results from a dental practice that implemented an AI voice receptionist to handle after-hours calls.",
      date: "December 28, 2024",
      category: "Case Study"
    },
    {
      id: 5,
      title: "Setting Up Your AI Receptionist: A Complete Guide",
      excerpt: "Step-by-step guide to getting your AI voice receptionist up and running in under 30 minutes.",
      date: "December 20, 2024",
      category: "Guide"
    },
    {
      id: 6,
      title: "Why 24/7 Availability Matters for Local Businesses",
      excerpt: "Understanding how round-the-clock availability can give your business a competitive edge.",
      date: "December 15, 2024",
      category: "Business"
    }
  ];

  return (
    <PageLayout 
      title="Blog"
      description="Insights, tips, and updates about AI voice receptionists and business automation."
    >
      <div className="py-16">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="glass-card p-6 rounded-2xl hover:border-emerald-500/30 transition-all group"
                >
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-500 font-medium text-sm group-hover:gap-3 transition-all">
                    Read more <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Coming Soon Notice */}
            <div className="mt-16 text-center">
              <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">More Content Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                  We're constantly publishing new articles about AI receptionists, business automation, and customer service best practices.
                </p>
                <p className="text-gray-500 text-sm">
                  Subscribe to our newsletter to get notified when we publish new content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
