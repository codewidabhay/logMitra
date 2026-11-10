import React from 'react';
import { 
  Globe2, 
  MapPin, 
  CheckCircle, 
  Clock, 
  Users, 
  Download, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function GlobalRollout({ onOpenApk }) {
  const offices = [
    {
      city: 'Jaipur',
      country: 'India 🇮🇳',
      status: 'LIVE ON MAP',
      coords: '26.9124° N, 75.7873° E',
      radius: '150m Geofence',
      staffCount: '24 Staff',
      color: 'border-emerald-500/50 bg-emerald-950/20 text-emerald-400'
    },
    {
      city: 'Johor Bahru',
      country: 'Malaysia 🇲🇾',
      status: 'LIVE ON MAP',
      coords: '1.4927° N, 103.7414° E',
      radius: '150m Geofence',
      staffCount: '11 Staff',
      color: 'border-emerald-500/50 bg-emerald-950/20 text-emerald-400'
    },
    {
      city: 'Singapore Hub',
      country: 'Singapore 🇸🇬',
      status: 'REGIONAL HQ',
      coords: '1.3521° N, 103.8198° E',
      radius: 'Cross-Border',
      staffCount: '3 Staff',
      color: 'border-blue-500/50 bg-blue-950/20 text-blue-400'
    },
    {
      city: 'Tonk',
      country: 'India 🇮🇳',
      status: 'PENDING GPS FIX',
      coords: 'Coordinates Confirming',
      radius: 'Setup Pending',
      staffCount: 'Upcoming Hub',
      color: 'border-amber-500/50 bg-amber-950/20 text-amber-400'
    }
  ];

  const rolloutMilestones = [
    {
      title: 'Direct APK Distribution',
      desc: 'One tap installation link—no app store queues, no account friction. Instant deployment directly to enterprise devices.',
      tag: 'FASTEST ROLLOUT'
    },
    {
      title: '38 Active Accounts Pre-Imported',
      desc: 'Loaded directly from HR database. Staff types, country assignments, and target hours pre-configured on day one.',
      tag: 'ZERO ONBOARDING DELAY'
    },
    {
      title: 'Zero-Touch OTA Updates',
      desc: 'Fixes and features push over-the-air. Everyone runs the exact same app version within 24 hours without asking users to update.',
      tag: 'ALWAYS UP TO DATE'
    },
    {
      title: 'App Store & Play Store Expansion',
      desc: 'Public and unlisted enterprise listings scheduled following multi-office geofence verification.',
      tag: 'PHASE 2 ROADMAP'
    }
  ];

  return (
    <section id="rollout" className="py-20 lg:py-28 bg-[#12161f] border-b border-[#2a3245]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa6008]/10 border border-[#fa6008]/30 text-xs font-mono uppercase tracking-widest text-[#fa6008] font-semibold">
            <span>GLOBAL FOOTPRINT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            International Rollout & Active Hubs
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Managing cross-border teams seamlessly across India, Malaysia, and Singapore with zero friction.
          </p>
        </div>

        {/* Office Location Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {offices.map((office, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#161b26] border border-[#2a3245] hover:border-slate-500 transition-all space-y-3 relative group">
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-white">{office.city}</span>
                <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded border ${office.color}`}>
                  {office.status}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {office.country}
              </div>
              <div className="pt-2 border-t border-[#2a3245]/60 space-y-1 text-xs font-mono text-slate-400">
                <div className="flex justify-between">
                  <span>GPS Fix:</span>
                  <span className="text-slate-200">{office.coords}</span>
                </div>
                <div className="flex justify-between">
                  <span>Team Size:</span>
                  <span className="text-white font-bold">{office.staffCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rollout Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rolloutMilestones.map((m, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#161b26] border border-[#2a3245] hover:border-[#fa6008]/40 transition-all flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#fa6008]/10 flex items-center justify-center border border-[#fa6008]/30 flex-shrink-0 mt-1">
                <Building2 className="w-5 h-5 text-[#fa6008]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#fa6008] font-bold px-2 py-0.5 rounded bg-[#fa6008]/10">
                    {m.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  {m.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenApk}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#fa6008] to-[#e05300] hover:from-[#e05300] hover:to-[#c94700] shadow-glow-orange transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download Direct APK Package</span>
          </button>
        </div>

      </div>
    </section>
  );
}
