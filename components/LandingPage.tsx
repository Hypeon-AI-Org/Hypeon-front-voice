'use client';

import React, { useState, useEffect } from 'react';

import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AIPhoneSupportSection from './AIPhoneSupportSection';
import InboundCallsSection from './InboundCallsSection';
import OutboundCallsSection from './OutboundCallsSection';
import AutomatedTasksSection from './AutomatedTasksSection';
import SetupProcessSection from './SetupProcessSection';
import FeaturesIntegrationsSection from './FeaturesIntegrationsSection';
import Footer from './Footer';
import BookDemoModal from './BookDemoModal';
import RetellVoiceModal from './RetellVoiceModal';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

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
  const openVoiceModal = () => setIsVoiceModalOpen(true);
  const closeVoiceModal = () => setIsVoiceModalOpen(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden relative">
      
      {/* Ambient Background Glows */}
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
      
      <HeroSection openModal={openModal} openVoiceModal={openVoiceModal} />
      <AIPhoneSupportSection openVoiceModal={openVoiceModal} />
      <InboundCallsSection openModal={openModal} openVoiceModal={openVoiceModal} />
      <OutboundCallsSection openModal={openModal} openVoiceModal={openVoiceModal} />
      <AutomatedTasksSection openModal={openModal} openVoiceModal={openVoiceModal} />
      <SetupProcessSection openModal={openModal} openVoiceModal={openVoiceModal} />
      <FeaturesIntegrationsSection openModal={openModal} openVoiceModal={openVoiceModal} />
      <Footer />
      
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
      <RetellVoiceModal isOpen={isVoiceModalOpen} onClose={closeVoiceModal} />
    </div>
  );
};

export default LandingPage;
