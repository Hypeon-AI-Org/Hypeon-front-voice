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
      
      {title && (
        <div className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-16 border-b border-emerald-200/60 bg-gradient-to-b from-emerald-50/80 to-white">
          <div className="container mx-auto px-4 sm:px-6">
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
