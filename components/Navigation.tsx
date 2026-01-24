'use client';

import { Mic, Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrolled, isMenuOpen, toggleMenu, scrollToSection }: NavigationProps) => {
  const menuItems = ['The Problem', 'Solution', 'How It Works', 'Industries', 'FAQs'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[#020408]/80 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <Mic className="w-4 h-4 text-black fill-current" />
          </div>
          <span className="text-white font-medium">
            Voice<span className="text-emerald-500">.hypeon.ai</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {menuItems.map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))} 
              className="hover:text-emerald-400 transition-colors"
            >
              {item}
            </button>
          ))}
          <button className="px-5 py-2 rounded-lg bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            Book Demo
          </button>
        </div>

        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050A0F] border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {menuItems.map((item) => (
             <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(/ /g, '-'))} 
              className="text-left text-slate-400 hover:text-emerald-400 py-2"
            >
              {item}
            </button>
          ))}
          <button className="w-full py-3 rounded-lg bg-emerald-500 text-black font-bold">Book Demo</button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
