import React from 'react';
import { 
  MapPin, 
  CheckSquare, 
  BarChart3, 
  KeyRound, 
  LayoutDashboard, 
  WifiOff,
  ArrowUpRight,
  ShieldAlert,
  Zap,
  Clock
} from 'lucide-react';

export default function FeaturePillars({ onOpenOtp, onOpenDemo }) {
  const pillars = [
    {
      id: '01',
      title: 'Self-Verifying Attendance',
      subtitle: 'Geofenced Location Fix',
      icon: MapPin,
      color: 'text-[#fa6008]',
      bgColor: 'bg-[#fa6008]/10',
      borderColor: 'border-[#fa6008]/30',
      summary: 'Attendance checks location coordinates before recording. Every entry carries a strict location fix; staff can only log in at or near an authorized office.',
      details: [
        'GPS coordinate fix required for login & logout',
        'Office radius validation (150m boundary check)',
        'Zero paper registers & zero manual trust reliance',
        'Distinguishes "at office" from "unknown location"'
      ],
      tag: 'GEOFENCE ENFORCED'
    },
    {
      id: '02',
      title: 'Employee-Authored Tasks + Admin Approval',
      subtitle: 'Dual Consent Workflow',
      icon: CheckSquare,
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10',
      borderColor: 'border-amber-400/30',
      summary: 'Employees write their own daily tasks and estimated time. An admin reviews and releases the task before work begins—ensuring mutual agreement on every deliverable.',
      details: [
        'Staff submit planned tasks with estimated hours',
        'Admins receive instant approval queue notifications',
        'One-tap release or decline before work starts',
        'No unapproved tasks or surprise work logs'
      ],
      tag: 'MUTUAL AGREEMENT'
    },
    {
      id: '03',
      title: 'Automated Reports & Month-End Math',
      subtitle: 'Zero Spreadsheets Required',
      icon: BarChart3,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-400/10',
      borderColor: 'border-emerald-400/30',
      summary: 'A short progress report at day-end pre-fills from login/logout times. Targets, variance, and monthly utilisation calculate automatically with zero end-of-month spreadsheets.',
      details: [
        'Standard 9h daily target (8h work + 1h break)',
        'End-of-day report pre-fills automatically from timestamps',
        'Real-time calculation of target vs actual hours',
        'Utilisation rate computed live across all regions'
      ],
      tag: 'AUTOMATED MATH'
    },
    {
      id: '04',
      title: 'Frictionless Passwordless Sign-In',
      subtitle: 'Brevo 6-Digit Email OTP',
      icon: KeyRound,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30',
      summary: 'Single-use 6-digit verification codes sent directly to the work inbox via secure email APIs (expires in 10 minutes). Nothing to remember, nothing to reset, impossible to leak.',
      details: [
        'Direct delivery via Brevo Mailer API',
        'Single-use 6-digit code with 10-minute expiry',
        'Auto-destroys after 5 incorrect attempts',
        'Zero credentials saved on mobile device'
      ],
      tag: 'ZERO PASSWORDS',
      action: onOpenOtp,
      actionText: 'Test OTP Simulator'
    },
    {
      id: '05',
      title: 'Exception-First Admin Dashboard',
      subtitle: 'Instant Operational Clarity',
      icon: LayoutDashboard,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30',
      summary: 'Admins immediately see who is in, who is absent, who missed filing, and what tasks are pending approval the moment the app opens.',
      details: [
        'Immediate summary counts on app launch',
        'Highlights exceptions first (absent, unfiled, pending)',
        'Real-time filter tabs for quick managerial actions',
        'Direct task approval interface in one tap'
      ],
      tag: 'EXCEPTIONS FIRST',
      action: onOpenDemo,
      actionText: 'View Admin Demo'
    },
    {
      id: '06',
      title: 'Robust Offline-First Architecture',
      subtitle: 'React Native + OTA Updates',
      icon: WifiOff,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10',
      borderColor: 'border-cyan-400/30',
      summary: 'Built natively with React Native (Expo) supporting offline-first capability so poor signal never costs someone their day. Features over-the-air (OTA) instant updates across all global offices.',
      details: [
        'Local SQLite storage queues entries when offline',
        'Auto-syncs immediately upon signal recovery',
        'Over-The-Air (OTA) updates bypass app store review',
        'Zero version drift across international teams'
      ],
      tag: 'OFFLINE NATIVE'
    }
  ];

  return (
    <section id="pillars" className="py-20 lg:py-28 bg-[#0e1219] border-b border-[#2a3245]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa6008]/10 border border-[#fa6008]/30 text-xs font-mono uppercase tracking-widest text-[#fa6008] font-semibold">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Six Pillars of logMitra
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Engineered to eliminate manual overhead, location integrity, and give management complete clarity.
          </p>
        </div>

        {/* Pillars 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="p-6 rounded-2xl bg-[#161b26] border border-[#2a3245] hover:border-slate-500 transition-all card-hover-glow flex flex-col justify-between space-y-6 relative group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl ${pillar.bgColor} flex items-center justify-center border ${pillar.borderColor}`}>
                      <IconComp className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400 bg-[#1e2433] px-2.5 py-1 rounded-lg border border-[#2a3245]">
                      PILLAR {pillar.id}
                    </span>
                  </div>

                  {/* Title & Tag */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-mono tracking-widest font-bold uppercase px-2 py-0.5 rounded ${pillar.bgColor} ${pillar.color}`}>
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#fa6008] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.summary}
                  </p>

                  {/* Detailed Bullet Points */}
                  <ul className="space-y-2 pt-2 border-t border-[#2a3245]/60">
                    {pillar.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className={`w-1.5 h-1.5 rounded-full ${pillar.color} mt-1 flex-shrink-0`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optional Interactive Button */}
                {pillar.action && (
                  <button
                    onClick={pillar.action}
                    className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#1e2433] hover:bg-[#2a3245] border border-[#2a3245] rounded-xl transition-all flex items-center justify-center gap-2 group-hover:border-[#fa6008]/40"
                  >
                    <span>{pillar.actionText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#fa6008]" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
