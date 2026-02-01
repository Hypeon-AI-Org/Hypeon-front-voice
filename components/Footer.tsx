'use client';

import { Mic } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-emerald-50 py-12 sm:py-16 border-t border-emerald-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
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
            <ul className="space-y-1 text-sm">
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors py-2 block min-h-[44px] flex items-center touch-manipulation">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-emerald-600 transition-colors py-2 block min-h-[44px] flex items-center touch-manipulation">Pricing</Link></li>
              <li><Link href="/use-cases" className="text-gray-600 hover:text-emerald-600 transition-colors py-2 block min-h-[44px] flex items-center touch-manipulation">Use Cases</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/privacy" className="text-gray-600 hover:text-emerald-600 transition-colors py-2 block min-h-[44px] flex items-center touch-manipulation">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-emerald-200 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2026 HypeOn-Voice. All rights reserved
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
            <Link href="/partnerships" className="text-gray-600 hover:text-emerald-600 transition-colors py-2 min-h-[44px] flex items-center touch-manipulation">Partnerships</Link>
            <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors py-2 min-h-[44px] flex items-center touch-manipulation">General Enquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
