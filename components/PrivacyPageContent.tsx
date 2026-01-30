'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import Footer from './Footer';
import BookDemoModal from './BookDemoModal';

const PrivacyPageContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden relative">
      {/* Ambient Background Glows - same as main page */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-100/50 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-20%] w-[600px] h-[600px] bg-emerald-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-green-100/50 rounded-full blur-[100px]" />
      </div>

      <Navigation
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
        openModal={openModal}
      />

      {/* Header - same style as PageLayout title section */}
      <div className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-16 border-b border-emerald-200/60 bg-gradient-to-b from-emerald-50/80 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Link href="/" className="text-emerald-600 hover:text-emerald-700 text-sm mb-4 inline-block min-h-[44px] flex items-center w-fit touch-manipulation">
            ← Back to Home
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl">
            How we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <p className="text-gray-500 text-sm mb-8">
            Last updated: January 2025
          </p>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Who we are</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              HypeOn-Voice (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is an AI voice receptionist service operated by Hypeon.ai. This Privacy Policy explains how we handle your information when you use our website, request a demo, or use our live voice demo and AI assistant features.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information we collect</h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2 mb-3">
              <li><strong className="text-gray-800">Contact and account information</strong>: name, email, phone number, company name, and similar details when you book a demo or sign up.</li>
              <li><strong className="text-gray-800">Voice and call data</strong>-when you use our live demo or AI receptionist: voice audio, call recordings, and transcriptions of conversations.</li>
              <li><strong className="text-gray-800">Usage and technical data</strong>: how you use our site (e.g. pages visited), IP address, browser type, and device information.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Live demo and voice calls</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              Our website offers a <strong className="text-gray-800">live demo</strong> where you can speak with an example AI receptionist. By using this feature:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
              <li>Your voice may be <strong className="text-gray-800">recorded and transcribed</strong> during the call.</li>
              <li>We use this data to provide and improve our AI assistant, train models (where permitted), and support quality and safety.</li>
              <li>We may use third-party services (e.g. voice/telephony providers) to deliver the demo; they process data according to their own policies and our agreements.</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              If you do not want your voice recorded or transcribed, do not use the live demo. You can contact us to ask about deletion of demo call data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. How we use your information</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
              <li>Provide, operate, and improve our AI receptionist and related services.</li>
              <li>Process and follow up on demo requests and inquiries.</li>
              <li>Improve our AI models and voice features (including using anonymized or aggregated data where appropriate).</li>
              <li>Send service-related and, with your consent, marketing communications.</li>
              <li>Comply with legal obligations and protect our rights and safety.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data retention</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We retain your information only as long as needed for the purposes above or as required by law. Call recordings and transcripts may be kept for a limited period for quality, support, and improvement; you can request deletion of your data (see &quot;Your rights&quot; below).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Sharing and disclosure</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">We may share your information:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
              <li>With <strong className="text-gray-800">service providers</strong> that help us run our business (e.g. hosting, voice/telephony, analytics). They are contractually required to protect your data and use it only for the services they provide to us.</li>
              <li>When required by <strong className="text-gray-800">law</strong> or to protect our rights, safety, or property.</li>
              <li>In connection with a <strong className="text-gray-800">merger, sale, or acquisition</strong> of our business (with notice where required).</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              We do not sell your personal information to third parties for their marketing.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Security</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We use technical and organizational measures to protect your data (e.g. encryption, access controls, secure infrastructure). No system is completely secure; we encourage you to use strong passwords and secure connections when interacting with our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your rights</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">Depending on where you live, you may have the right to:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-2">
              <li><strong className="text-gray-800">Access</strong>-request a copy of the personal data we hold about you.</li>
              <li><strong className="text-gray-800">Correction</strong>: ask us to correct inaccurate or incomplete data.</li>
              <li><strong className="text-gray-800">Deletion</strong>-request deletion of your personal data, subject to legal and operational requirements.</li>
              <li><strong className="text-gray-800">Opt-out</strong>: unsubscribe from marketing emails and, where applicable, object to or restrict certain processing.</li>
            </ul>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              To exercise these rights or ask questions, contact us using the details at the end of this policy. If you are in the EEA/UK, you also have the right to lodge a complaint with your local data protection authority.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Cookies and tracking</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our website may use cookies and similar technologies for essential functionality, analytics, and improving your experience. You can manage cookie preferences in your browser. See our cookie banner or settings (if available) for more details.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Children</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our services are not directed at children under 13 (or 16 in the EEA). We do not knowingly collect personal data from children. If you believe we have collected such data, please contact us and we will delete it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. International transfers</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your information may be processed in countries other than your own. We ensure appropriate safeguards (e.g. standard contractual clauses) where required by law for such transfers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Changes to this policy</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. We will post the revised version on this page and update the &quot;Last updated&quot; date. For material changes, we may notify you by email or a notice on our website. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">13. Contact us</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              For privacy-related questions, to exercise your rights, or to report a concern, contact us at:
            </p>
            <p className="text-gray-700 text-sm mt-3">
              <strong>Hypeon.ai</strong><br />
              Email:{" "}
              <a href="mailto:privacy@hypeon.ai" className="text-emerald-600 hover:text-emerald-700 underline">
                privacy@hypeon.ai
              </a>
              {" "}
              /{" "}
              <a href="mailto:info@hypeon.ai" className="text-emerald-600 hover:text-emerald-700 underline">
                info@hypeon.ai
              </a>
              <br />
              Website:{" "}
              <a href="https://voice.hypeon.ai" className="text-emerald-600 hover:text-emerald-700 underline" target="_blank" rel="noopener noreferrer">
                voice.hypeon.ai
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Hypeon.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default PrivacyPageContent;
