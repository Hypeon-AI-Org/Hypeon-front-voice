'use client';

import { Menu, X, ChevronDown, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  scrollToSection: (id: string) => void;
  openModal: () => void;
}

const Navigation = ({ scrolled, isMenuOpen, toggleMenu, scrollToSection, openModal }: NavigationProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isUseCasesOpen, setIsUseCasesOpen] = useState(false);
  
  const menuItems = [
    { label: 'How It Works', href: '/how-it-works', scrollId: 'how-it-works' },
    { label: 'Features', href: '/features', scrollId: null },
    { label: 'Pricing', href: '/pricing', scrollId: null },
  ];

  const useCasesItems = [
    { label: 'Dentistry', href: '/use-cases/dentistry' },
    { label: 'Healthcare', href: '/use-cases/healthcare' },
    { label: 'Hair & Beauty', href: '/use-cases/hair-beauty' },
    { label: 'Aesthetic Clinics', href: '/use-cases/aesthetic-clinics' },
  ];

  const handleNavClick = (item: typeof menuItems[0]) => {
    if (isHomePage && item.scrollId) {
      scrollToSection(item.scrollId);
    } else {
      toggleMenu();
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-white/30 backdrop-blur-xl border-white/20 py-4 shadow-lg' : 'bg-white/20 backdrop-blur-xl border-white/20 max-md:py-4 md:py-6'}`}>
      <div className="w-full px-4 sm:px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-6 md:gap-8 lg:gap-12 relative">
          {/* Logo - favicon */}
          <Link href="/" className="text-xl font-bold tracking-tight flex items-center gap-3">
            <Image
              src="/favicon.svg"
              alt="HypeOn-Voice"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-gray-900 font-medium">
              HypeOn<span className="text-emerald-600">-Voice</span>
            </span>
          </Link>

          {/* Menu Items - Centered */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-700 ml-12 lg:ml-16 xl:ml-20">
            {menuItems.map((item) => (
              isHomePage && item.scrollId ? (
                <button 
                  key={item.label}
                  onClick={() => scrollToSection(item.scrollId!)} 
                  className="hover:text-emerald-600 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-emerald-600 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            ))}
            
            {/* Use Cases Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsUseCasesOpen(true)}
              onMouseLeave={() => setIsUseCasesOpen(false)}
            >
              <Link
                href="/use-cases"
                className="hover:text-emerald-600 transition-colors whitespace-nowrap flex items-center gap-1"
              >
                Use Cases
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isUseCasesOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown Menu */}
              {isUseCasesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl border border-emerald-200 p-2 shadow-2xl z-50">
                  <div className="flex flex-col gap-1">
                    {useCasesItems.map((useCase) => (
                      <Link
                        key={useCase.label}
                        href={useCase.href}
                        className="px-4 py-2 rounded-lg text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 transition-colors text-sm"
                      >
                        {useCase.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Book Free Demo */}
          <div className="hidden md:flex items-center gap-3 ml-12 lg:ml-16 xl:ml-20">
            <button 
              onClick={openModal}
              className="px-7 py-3 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] whitespace-nowrap"
            >
              Book Free Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-900 absolute right-0 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation" onClick={toggleMenu} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-emerald-200 p-4 sm:p-6 flex flex-col gap-1 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          {menuItems.map((item) => (
            isHomePage && item.scrollId ? (
              <button 
                key={item.label}
                onClick={() => handleNavClick(item)} 
                className="text-left text-gray-700 hover:text-emerald-600 py-3 min-h-[44px] touch-manipulation"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={toggleMenu}
                className="text-left text-gray-700 hover:text-emerald-600 py-3 min-h-[44px] flex items-center touch-manipulation"
              >
                {item.label}
              </Link>
            )
          ))}
          
          {/* Use Cases in Mobile */}
          <div className="flex flex-col gap-1">
            <Link
              href="/use-cases"
              onClick={toggleMenu}
              className="text-left text-gray-700 hover:text-emerald-600 py-3 min-h-[44px] flex items-center font-medium touch-manipulation"
            >
              Use Cases
            </Link>
            <div className="pl-4 flex flex-col gap-1 border-l border-emerald-200">
              {useCasesItems.map((useCase) => (
                <Link
                  key={useCase.label}
                  href={useCase.href}
                  onClick={toggleMenu}
                  className="text-left text-gray-600 hover:text-emerald-600 py-3 min-h-[44px] flex items-center text-sm touch-manipulation"
                >
                  {useCase.label}
                </Link>
              ))}
            </div>
          </div>
          
          <button 
            onClick={openModal}
            className="w-full py-3 px-7 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 flex items-center justify-center gap-2 min-h-[48px] touch-manipulation mt-2"
          >
            <Calendar className="w-4 h-4" />
            Book Free Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
