import React from 'react';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

export default function GuidesSection() {
  const guides = [
    {
      pillLabel: 'GPS Geofencing',
      pillGradient: 'from-[#695de3] to-[#7a6df1]',
      tag: 'OPERATIONS',
      readTime: '3 Min Read',
      title: 'Configuring Office Coordinate Boundaries & Strict 150m Precision',
      desc: 'How location checks distinguish between at-office and remote check-ins without battery drain.',
      date: 'October 2026'
    },
    {
      pillLabel: 'Task Approvals',
      pillGradient: 'from-[#fa6008] to-amber-500',
      tag: 'MANAGEMENT',
      readTime: '4 Min Read',
      title: 'The Dual-Consent Workflow: Authoring & Admin One-Tap Releases',
      desc: 'Ensuring mutual agreement between staff and project supervisors before billable hours start.',
      date: 'October 2026'
    },
    {
      pillLabel: 'Monthly Rollup',
      pillGradient: 'from-emerald-500 to-teal-500',
      tag: 'REPORTING',
      readTime: '3 Min Read',
      title: 'Eliminating Month-End Spreadsheet Scrambles with Real-Time Math',
      desc: 'How the 9h daily target auto-computes target vs logged hours variance every single afternoon.',
      date: 'October 2026'
    }
  ];

  return (
    <section id="guides" className="py-20 lg:py-28 bg-[#f7f5ff] relative overflow-hidden border-t border-indigo-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Mutmiz blog header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Learn More About Workforce Management <br />
            <span className="text-[#695de3]">From Our Operational Guides</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Best practices for deploying geofenced attendance, managing cross-border projects, and streamlining time accounting.
          </p>
        </div>

        {/* 3 Cards Grid matching Mutmiz card composition */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((g, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[36px] p-6 sm:p-7 border border-indigo-100/90 shadow-[0_15px_35px_rgba(24,21,59,0.05)] hover:shadow-[0_20px_45px_rgba(105,93,227,0.12)] hover:border-iris-300 transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-5">
                
                {/* Mutmiz Rounded Colored Gradient Thumbnail Header Pill */}
                <div className={`h-32 rounded-3xl bg-gradient-to-r ${g.pillGradient} p-5 flex items-center justify-center text-white text-center shadow-sm relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-lg font-black tracking-tight font-heading text-white drop-shadow-xs">
                    {g.pillLabel}
                  </span>
                </div>

                {/* Tag & Read Time */}
                <div className="flex items-center justify-between text-xs font-bold font-heading">
                  <span className="text-iris-600 bg-iris-50 px-2.5 py-1 rounded-full border border-iris-100">
                    {g.tag}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{g.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 font-heading leading-snug group-hover:text-iris-600 transition-colors">
                  {g.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {g.desc}
                </p>

              </div>

              {/* Bottom Date & Action Link */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>{g.date}</span>
                <span className="text-iris-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 font-heading">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
