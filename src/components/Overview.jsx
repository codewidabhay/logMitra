import React from 'react';
import { 
  CheckCircle2, Clock, LocateFixed, Users, 
  Sparkles, ArrowRight, ShieldCheck, FileSpreadsheet, 
  MessageSquareX, Zap, Activity, CheckSquare 
} from 'lucide-react';
import officeArrivalImg from '../assets/office-arrival-attendance.jpg';

export default function Overview() {
  const stats = [
    {
      value: '9h',
      label: 'Standard Daily Site Target',
      desc: '8 hours of verified work plus 1 hour structured lunch automatically calculated.'
    },
    {
      value: '100%',
      label: 'Geofenced GPS Accuracy',
      desc: 'Strict 150m boundary check ensures logins only happen at authorized offices.'
    },
    {
      value: '30s',
      label: 'Daily Progress Filing Time',
      desc: 'Day-end progress note pre-fills from login times with zero spreadsheet labor.'
    }
  ];

  const valueProps = [
    {
      title: 'Real-Time Cross-Border Sync',
      desc: 'Attendance logs, task statuses, and approvals sync instantly between Jaipur, Johor Bahru, and Singapore.',
      icon: Activity,
      color: 'text-iris-600',
      bg: 'bg-iris-50 border-iris-100'
    },
    {
      title: 'Mutual Agreement on Every Deliverable',
      desc: 'Employees author their planned tasks; admins review and release them with one tap before work commences.',
      icon: CheckSquare,
      color: 'text-[#fa6008]',
      bg: 'bg-orange-50 border-orange-100'
    },
    {
      title: 'Passwordless Enterprise Sign-In',
      desc: 'Single-use 6-digit verification codes sent directly to corporate email inboxes. No passwords to leak or forget.',
      icon: Zap,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50 border-emerald-100'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Decorative Pastel Background Blobs */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-iris-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-orange-50/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Floating Cards (matching Mutmiz) + Right Statistics & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mutmiz-style Floating Cards Stack */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Visual Canvas Base with Office Arrival Real-World Background */}
            <div className="w-full max-w-md sm:max-w-lg rounded-[40px] p-6 sm:p-8 relative overflow-hidden shadow-[0_25px_60px_-12px_rgba(24,21,59,0.22)] border border-slate-200/80 group">
              {/* Photo Background Layer */}
              <img 
                src={officeArrivalImg} 
                alt="Employee check-in at office door with mobile device" 
                className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              {/* Vignette Overlay for Crisp Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-slate-900/25 pointer-events-none" />

              {/* Real-time check-in badge header */}
              <div className="relative z-10 flex items-center justify-between pb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold font-heading shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Office Perimeter Check-in</span>
                </div>
                <span className="text-[10px] font-bold text-white/90 bg-black/55 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 font-heading">
                  150m GPS Verified
                </span>
              </div>

              {/* Main Card: Task List Widget */}
              <div className="relative z-10 bg-white/95 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-white/80 shadow-[0_16px_36px_rgba(0,0,0,0.24)] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-iris-600 font-heading">Daily Workflow</span>
                    <h4 className="text-base font-bold text-slate-900 font-heading">Assigned Deliverables</h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#695de3] to-[#5846f6] shadow-xs">
                    + New Task
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-[#f7f5ff] border border-indigo-100/80 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate font-heading">Revit BIM Coordination Phase 2</div>
                      <div className="text-[11px] text-slate-500">Target: 4.5h • Jaipur Hub • Released</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#fa6008] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate font-heading">Site Safety Audit & Attendance Rollup</div>
                      <div className="text-[11px] text-slate-500">Target: 3.5h • Admin Queue</div>
                    </div>
                  </div>
                </div>

                {/* Micro Activity Waveform Indicator matching Mutmiz graphic */}
                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-6 bg-iris-400 rounded-full animate-pulse" />
                    <div className="w-1.5 h-8 bg-[#695de3] rounded-full animate-pulse" />
                    <div className="w-1.5 h-4 bg-iris-300 rounded-full" />
                    <div className="w-1.5 h-7 bg-[#fa6008] rounded-full animate-pulse" />
                    <div className="w-1.5 h-5 bg-amber-400 rounded-full" />
                    <div className="w-1.5 h-9 bg-emerald-500 rounded-full" />
                    <div className="w-1.5 h-3 bg-iris-200 rounded-full" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 font-heading">9h Daily Utilization Count</span>
                </div>
              </div>

              {/* Overlapping Floating Metric Pill at Bottom Right */}
              <div className="relative z-10 mt-4 flex justify-end">
                <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/80 shadow-[0_12px_28px_rgba(0,0,0,0.2)]">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-600 font-bold text-xs">
                    100%
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900 font-heading">Zero Paper Registers</div>
                    <div className="text-[10px] text-slate-500">Audit-ready monthly rollups</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Big Typography Numbers & Value Props */}
          <div className="lg:col-span-6 space-y-8">
            
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight">
                One System That Replaces <br />
                <span className="text-[#695de3]">Paper Registers & Guesswork</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Attendance used to live in three places at once—and none of them agreed by month-end. <span className="font-bold text-slate-900">log</span><span className="font-bold text-[#fa6008]">Mitra</span> standardizes the complete workflow into a single self-verifying platform.
              </p>
            </div>

            {/* Large Typography Statistics (matching Mutmiz numbers layout: "29M+ / 100M+") */}
            <div className="grid grid-cols-3 gap-4 py-3 border-y border-slate-100">
              {stats.map((s, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#695de3] to-[#fa6008] bg-clip-text text-transparent font-heading">
                    {s.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 font-heading leading-tight">{s.label}</div>
                  <div className="text-[11px] text-slate-500 hidden sm:block leading-normal">{s.desc}</div>
                </div>
              ))}
            </div>

            {/* Value Proposition Items with small colorful icon containers */}
            <div className="space-y-4">
              {valueProps.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-iris-50/50 transition-colors">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border ${item.bg}`}>
                      <IconComp className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-slate-900 font-heading">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
