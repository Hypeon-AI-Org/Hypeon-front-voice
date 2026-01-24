'use client';

import { Mic } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10 text-slate-500 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center">
            <Mic className="w-3 h-3 text-black" />
          </div>
          <span className="font-bold text-slate-300">Voice.hypeon.ai</span>
        </div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
        <div>
          &copy; 2024 Hypeon.ai
        </div>
      </div>
    </footer>
  );
};

export default Footer;
