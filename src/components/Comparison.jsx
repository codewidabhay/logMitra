import React, { useState } from 'react';
import { 
  XCircle, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Clock, 
  FileSpreadsheet, 
  MessageSquareX, 
  FileCheck, 
  UserCheck, 
  ShieldCheck, 
  Sparkles,
  TrendingUp
} from 'lucide-react';

export default function Comparison() {
  const [activeTab, setActiveTab] = useState('split'); // 'split', 'replaced', 'logmitra'

  const oldWays = [
    {
      title: 'A register nobody could verify',
      problem: 'Paper attendance & manual logs',
      desc: 'A time written on paper or typed manually says somebody wrote a time. It does not prove they were at the office or on site.',
      icon: MessageSquareX
    },
    {
      title: 'Tasks by message & verbal chat',
      problem: 'Unverified task commitments',
      desc: 'Work agreed in chat, remembered differently by two people, and impossible to audit or count accurately later.',
      icon: AlertTriangle
    },
    {
      title: 'The month-end spreadsheet scramble',
      problem: 'Manual reconstruction in arrears',
      desc: 'Hours reconstructed from memory into a massive spreadsheet, days after the work occurred, leading to errors and delays.',
      icon: FileSpreadsheet
    },
    {
      title: 'Zero operational visibility',
      problem: 'Management in the dark',
      desc: 'No way for leadership to answer who is in, who is short on hours, or who is blocked waiting on an approval without calling around.',
      icon: XCircle
    },
    {
      title: 'The hidden cost: Guessing utilisation',
      problem: 'No real-time analytics',
      desc: 'Nobody could answer whether an engineer or office staff was on track for the month without a full week of administrative reconstruction.',
      icon: Clock
    }
  ];

  const newWays = [
    {
      title: 'Geofenced location-verified login',
      solution: 'Self-verifying office attendance',
      desc: 'Every entry carries a strict GPS location fix. Attendance is only possible at or near an authorized office coordinate.',
      icon: ShieldCheck
    },
    {
      title: 'Employee task + Admin signature',
      solution: 'Dual consent & approval workflow',
      desc: 'Employees write what they will work on. An admin approves or declines before work begins—ensuring mutual clarity.',
      icon: UserCheck
    },
    {
      title: 'The day, written once at logout',
      solution: 'Pre-filled daily reporting',
      desc: 'A short end-of-day progress report pre-filled directly from login/logout timestamps. Requires only 30 seconds to file.',
      icon: FileCheck
    },
    {
      title: 'Automated month-end calculation',
      solution: 'Zero spreadsheets & instant math',
      desc: 'Standardized 9-hour workdays automatically compute target hours, variance, and monthly utilisation in real-time.',
      icon: Sparkles
    },
    {
      title: 'Exception-first admin dashboard',
      solution: 'Instant clarity on launch',
      desc: 'Admins open the app and instantly see who is in, who is absent, who missed filing, and what approvals are pending.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="comparison" className="py-20 lg:py-28 bg-[#12161f] border-b border-[#2a3245]/60 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa6008]/10 border border-[#fa6008]/30 text-xs font-mono uppercase tracking-widest text-[#fa6008] font-semibold">
            <span>TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What It Replaced vs. What logMitra Does
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Attendance used to live in three places at once—and none of them agreed by month-end. logMitra unifies everything into one self-keeping record.
          </p>

          {/* View Filter Switcher */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('split')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'split' ? 'bg-[#fa6008] text-white shadow-glow-orange' : 'bg-[#1e2433] text-slate-400 hover:text-white'
              }`}
            >
              Side-by-Side View
            </button>
            <button
              onClick={() => setActiveTab('replaced')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'replaced' ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-[#1e2433] text-slate-400 hover:text-white'
              }`}
            >
              The Old Legacy Way
            </button>
            <button
              onClick={() => setActiveTab('logmitra')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'logmitra' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-[#1e2433] text-slate-400 hover:text-white'
              }`}
            >
              The logMitra Solution
            </button>
          </div>
        </div>

        {/* Side by Side Comparison Grid */}
        {(activeTab === 'split' || activeTab === 'replaced') && (
          <div className={`space-y-6 ${activeTab === 'split' ? 'mb-12' : ''}`}>
            
            {activeTab === 'split' && (
              <div className="text-center mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold bg-red-950/40 px-3 py-1 rounded border border-red-800/40">
                  ❌ Old Disjointed Way (What We Replaced)
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {oldWays.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-[#161b26] border border-red-900/30 hover:border-red-600/50 transition-all space-y-3 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-10 h-1 bg-red-500/70" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider font-semibold">
                        {item.problem}
                      </span>
                      <IconComp className="w-4 h-4 text-red-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {(activeTab === 'split' || activeTab === 'logmitra') && (
          <div className="space-y-6">
            
            {activeTab === 'split' && (
              <div className="text-center mb-6 pt-6 border-t border-[#2a3245]">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/40 px-3 py-1 rounded border border-emerald-800/40">
                  ⚡ The logMitra Automated Solution
                </span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {newWays.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-xl bg-[#161b26] border border-emerald-900/30 hover:border-emerald-500/50 transition-all space-y-3 relative group overflow-hidden">
                    <div className="absolute top-0 left-0 w-10 h-1 bg-emerald-500" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                        {item.solution}
                      </span>
                      <IconComp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h3 className="text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Banner Note */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#161b26] via-[#1e2433] to-[#161b26] border border-[#2a3245] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-left">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#fa6008]" />
              <span>The Core Difference</span>
            </h4>
            <p className="text-xs text-slate-400">
              With logMitra, nobody spends a week reconstructing work in spreadsheets. Utilisation is tracked live, every single day.
            </p>
          </div>
          <a
            href="#pillars"
            className="px-4 py-2 text-xs font-bold text-white bg-[#fa6008] hover:bg-[#e05300] rounded-lg transition-all flex-shrink-0 flex items-center gap-1.5"
          >
            <span>Explore 6 Pillars</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
