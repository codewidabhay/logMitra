import React from 'react';
import { ArrowUp, Smartphone, Send, ShieldCheck, Heart } from 'lucide-react';
import logmitraLogo from '../assets/logmitra-logo.png';

export default function Footer({ onDownloadClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 border-t border-indigo-100/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Multi-Column Grid matching Mutmiz footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#695de3] to-[#fa6008] p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center p-1.5">
                  <img
                    src={logmitraLogo}
                    alt="logMitra Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 font-heading">
                log<span className="text-[#fa6008]">Mitra</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Our enterprise SaaS workforce platform is designed to cater to the operations of distributed teams. Providing automated GPS attendance, mutual task consent, and real-time monthly rollups.
            </p>

            <div className="pt-2">
              <button
                onClick={onDownloadClick}
                className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#695de3] to-[#5846f6] hover:from-[#5846f6] hover:to-[#4338ca] rounded-full shadow-md transition-all flex items-center gap-2 font-heading cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Get Enterprise Android APK</span>
              </button>
            </div>
          </div>

          {/* Column 2: Head Office & Regional Hubs (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-sm">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">Head Offices</div>
            <div className="space-y-3 text-slate-500 text-xs sm:text-sm">
              <div>
                <strong className="text-slate-800 block">Jaipur Operational Hub</strong>
                <span>Civil Lines & Tonk Office, Rajasthan, India</span>
              </div>
              <div>
                <strong className="text-slate-800 block">Johor Bahru Regional Hub</strong>
                <span>Johor Bahru, Malaysia</span>
              </div>
              <div>
                <strong className="text-slate-800 block">Singapore Corporate Sync</strong>
                <span>Republic of Singapore</span>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation Links (2 cols) */}
          <div className="md:col-span-2 space-y-3 text-sm">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">Navigation</div>
            <div className="flex flex-col space-y-2 text-xs sm:text-sm text-slate-500 font-medium">
              <a href="#overview" className="hover:text-iris-600 transition-colors">Overview</a>
              <a href="#features" className="hover:text-iris-600 transition-colors">Core Features</a>
              <a href="#how-it-works" className="hover:text-iris-600 transition-colors">How It Works</a>
              <a href="#hubs" className="hover:text-iris-600 transition-colors">Enterprise Hubs</a>
              <a href="#guides" className="hover:text-iris-600 transition-colors">Guides & Docs</a>
            </div>
          </div>

          {/* Column 4: Quick Notice & Updates Pill Input (3 cols matching Mutmiz) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-heading">Quick Notice & Updates</div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get immediate release updates like APK version rolls and geofence enhancements.
            </p>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter work email..."
                className="w-full pl-4 pr-24 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-iris-500 focus:bg-white transition-all"
              />
              <button
                type="button"
                onClick={onDownloadClick}
                className="absolute right-1 px-3 py-1.5 rounded-full text-[11px] font-bold text-white bg-gradient-to-r from-[#695de3] to-[#5846f6] hover:opacity-90 font-heading cursor-pointer shadow-xs"
              >
                Get APK
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 <strong className="text-slate-800">log<span className="text-[#fa6008]">Mitra</span></strong>. Developed by <strong className="text-slate-800">MRK Engineering </strong>&<strong className="text-slate-800"> Services </strong>.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">Confidential — Internal Enterprise Use Only</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-100 hover:bg-iris-50 text-slate-600 hover:text-iris-600 transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
