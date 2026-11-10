import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Download, Smartphone, Sparkles } from 'lucide-react';
import { APK_CONFIG, downloadApkFile } from '../config/download';

export default function Navbar({ onDownloadClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Core Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Enterprise Hubs', href: '#hubs' },
    { name: 'Guides', href: '#guides' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-indigo-100/70 shadow-[0_8px_30px_rgba(105,93,227,0.06)] py-2.5' 
        : 'bg-transparent py-2.5 sm:py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo matching Mutmiz clean logo placement */}
          <a href="#overview" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#695de3] via-[#7a6df1] to-[#fa6008] p-[1.5px] shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center p-1.5">
                <img
                  src="/logmitra-logo.png"
                  alt="logMitra Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex items-center">
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 font-heading">
                log<span className="text-[#fa6008]">Mitra</span>
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-100/80 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-semibold text-slate-600 hover:text-iris-600 hover:bg-iris-50/80 rounded-full transition-all font-heading"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Pill */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={onDownloadClick}
              className="px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#695de3] to-[#5846f6] hover:from-[#5846f6] hover:to-[#4338ca] rounded-full shadow-[0_8px_20px_rgba(105,93,227,0.3)] hover:shadow-[0_12px_28px_rgba(105,93,227,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 font-heading cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download App</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-iris-600 bg-white hover:bg-iris-50 rounded-2xl border border-indigo-100 shadow-xs transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-indigo-100 px-5 pt-3 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 mx-3 mt-2 rounded-3xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-700 hover:text-iris-600 hover:bg-iris-50 rounded-2xl transition-colors font-heading"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadClick();
              }}
              className="w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-[#695de3] to-[#5846f6] rounded-2xl shadow-md flex items-center justify-center gap-2 font-heading"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download Android APK</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
