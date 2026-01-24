'use client';

import React, { useState, useEffect } from 'react';

import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import HowItWorksSection from './HowItWorksSection';
import IndustriesSection from './IndustriesSection';
import BenefitsSection from './BenefitsSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020408] text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden relative">
      
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-20%] w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-green-900/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-bg opacity-30"></div>
      </div>

      <Navigation 
        scrolled={scrolled} 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        scrollToSection={scrollToSection} 
      />
      
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <IndustriesSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
