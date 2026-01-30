'use client';

import { Mic } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-emerald-50 py-16 border-t border-emerald-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-emerald-600 flex items-center justify-center">
                <Mic className="w-3 h-3 text-white" />
              </div>
              <span className="font-bold text-gray-900">HypeOn-Voice</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              HypeOn-Voice is AI receptionist software that answers inbound calls, runs outbound booking and follow-ups, and integrates with your existing systems to automate admin for appointment-led businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-emerald-600 transition-colors">Pricing</Link></li>
              <li><Link href="/use-cases" className="text-gray-600 hover:text-emerald-600 transition-colors">Use Cases</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-600 hover:text-emerald-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition-colors">Blog</Link></li>
              <li><Link href="/what-is-ai-receptionist" className="text-gray-600 hover:text-emerald-600 transition-colors">What is an AI Receptionist?</Link></li>
              <li><Link href="/ai-vs-virtual-receptionist" className="text-gray-600 hover:text-emerald-600 transition-colors">AI Receptionist vs Virtual Receptionist</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            &copy; 2026 HypeOn-Voice. All rights reserved
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/partnerships" className="text-gray-600 hover:text-emerald-600 transition-colors">Partnerships</Link>
            <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors">General Enquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
