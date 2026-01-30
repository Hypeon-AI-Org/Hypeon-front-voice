'use client';

import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import BookDemoModal from './BookDemoModal';
import Link from 'next/link';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const PageLayout = ({ children, title, description }: PageLayoutProps) => {
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
        openModal={openModal}
      />
      
      {title && (
        <div className="pt-32 pb-16 border-b border-emerald-200 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container mx-auto px-6">
            <Link href="/" className="text-emerald-600 hover:text-emerald-700 text-sm mb-4 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">{title}</h1>
            {description && (
              <p className="text-xl text-gray-600 max-w-3xl">{description}</p>
            )}
          </div>
        </div>
      )}
      
      <main>
        {children}
      </main>
      
      <Footer />
      
      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default PageLayout;
