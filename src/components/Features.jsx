import React, { useState } from 'react';
import { 
  LocateFixed, ListChecks, BarChart3, Fingerprint, 
  CheckCircle2, ArrowRight, ShieldCheck, MapPin, 
  Smartphone, Layers 
} from 'lucide-react';

import featureTrackingImg from '../assets/feature-realtime-tracking.jpg';
import featureGeofencingImg from '../assets/feature-gps-geofencing.jpg';
import featureTasksImg from '../assets/feature-task-management.jpg';
import featureInsightsImg from '../assets/feature-workforce-insights.jpg';

export default function Features() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      id: '01',
      title: 'Self-Verifying Attendance',
      category: 'GPS Geofencing',
      tag: 'Location Enforced',
      image: featureGeofencingImg,
      icon: LocateFixed,
      color: 'text-emerald-600',
      bgLight: 'bg-emerald-50/70',
      border: 'border-emerald-200/80',
      summary: 'Attendance verifies physical presence at the office before logging a timestamp. Zero reliance on honor systems or handwritten books.',
      points: [
        'Mandatory GPS fix required for check-in & check-out',
        'Strict 150m boundary check around office coordinates',
        'Distinguishes "at authorized office" from unknown sites',
        'Real-time timestamp stamped with geographical coordinates'
      ]
    },
    {
      id: '02',
      title: 'Employee Tasks & Admin Release',
      category: 'Dual-Consent Workflow',
      tag: 'Mutual Consent',
      image: featureTasksImg,
      icon: ListChecks,
      color: 'text-[#695de3]',
      bgLight: 'bg-iris-50/70',
      border: 'border-iris-200/80',
      summary: 'Employees author their daily deliverables with estimated hours. Managers review and release tasks with one tap before work starts.',
      points: [
        'Staff submit planned tasks with estimated duration',
        'Instant manager notification and approval queue',
        'One-tap release or decline before work begins',
        'Prevents unapproved, disputed, or untracked hours'
      ]
    },
    {
      id: '03',
      title: 'Automated Monthly Rollup',
      category: 'Spreadsheet-Free Math',
      tag: 'Zero Spreadsheets',
      image: featureInsightsImg,
      icon: BarChart3,
      color: 'text-[#fa6008]',
      bgLight: 'bg-orange-50/70',
      border: 'border-orange-200/80',
      summary: 'A short progress report at day-end pre-fills from login times. Monthly target hours and variance calculate continuously in real time.',
      points: [
        'Standard 9h daily target (8h work + 1h lunch)',
        'Pre-filled progress note requiring 30s to file',
        'Live target vs actual logged work calculation',
        'Utilisation rate computed continuously across all regions'
      ]
    },
    {
      id: '04',
      title: 'Passwordless Sign-In',
      category: 'Security Architecture',
      tag: 'Zero Passwords',
      image: featureTrackingImg,
      icon: Fingerprint,
      color: 'text-amber-600',
      bgLight: 'bg-amber-50/70',
      border: 'border-amber-200/80',
      summary: 'Single-use 6-digit verification codes sent directly to corporate email inboxes via Brevo APIs. Nothing to remember, impossible to leak.',
      points: [
        'Direct delivery via secure email mailer APIs',
        '10-minute code expiry window',
        'Auto-destroys after 5 incorrect attempts',
        'Zero passwords saved on mobile hardware'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-[#faf9fe] relative overflow-hidden border-t border-indigo-100/60">
      
      {/* Decorative Pastel Background Circles */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-iris-100/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Mutmiz title style */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Comprehensive Feature Set of <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#695de3] to-[#fa6008] bg-clip-text text-transparent">
              logMitra System
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Eliminates paper registers, prevents unregistered tasks, and delivers instant cross-border visibility for team leads.
          </p>

          {/* Mutmiz-style Rounded Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {features.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all font-heading cursor-pointer border ${
                  activeTab === i
                    ? 'bg-[#695de3] text-white border-[#695de3] shadow-md shadow-iris-500/25 scale-105'
                    : 'bg-white text-slate-600 border-indigo-100 hover:bg-iris-50 hover:text-iris-600'
                }`}
              >
                {f.title}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Clean Alternating Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {features.map((feature, idx) => {
            const IconComp = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-[36px] p-7 sm:p-9 border border-indigo-100/90 shadow-[0_15px_40px_rgba(24,21,59,0.05)] hover:shadow-[0_20px_50px_rgba(105,93,227,0.12)] hover:border-iris-300 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-5">
                  
                  {/* Top Row: Icon Pod + Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-13 h-13 rounded-2xl flex items-center justify-center border shadow-xs ${feature.bgLight} ${feature.border}`}>
                        <IconComp className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-heading">
                          {feature.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 px-3 py-1 rounded-full bg-slate-50 border border-slate-100">
                      {feature.id}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {feature.summary}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {feature.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-normal">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${feature.color}`} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Feature Graphic Container (1:1 Natural Square) */}
                <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-indigo-100/80 bg-slate-50 shadow-inner group-hover:scale-[1.01] transition-transform duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
