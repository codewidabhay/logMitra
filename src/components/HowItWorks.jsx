import React from 'react';
import { MapPin, ClipboardList, UserCheck, FileCheck, BarChart3, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Arrive and Log In',
      desc: 'The phone checks physical presence at the office before recording anything. GPS fix and timestamp go on the record together.',
      icon: MapPin,
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25 ring-1 ring-white/30',
      pillColor: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      step: '02',
      title: 'Write Daily Task',
      desc: 'The employee states planned deliverables and estimated duration. The request sits pending admin authorization.',
      icon: ClipboardList,
      iconBg: 'bg-gradient-to-br from-[#695de3] to-indigo-600 text-white shadow-md shadow-iris-500/25 ring-1 ring-white/30',
      pillColor: 'text-iris-700 bg-iris-50 border-iris-200'
    },
    {
      step: '03',
      title: 'Admin Approves',
      desc: 'One tap on the supervisor screen releases the task. Work begins only after admin approval is recorded.',
      icon: UserCheck,
      iconBg: 'bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-md shadow-purple-500/25 ring-1 ring-white/30',
      pillColor: 'text-purple-700 bg-purple-50 border-purple-200'
    },
    {
      step: '04',
      title: 'Log Out and File',
      desc: 'The report opens pre-filled from the day’s login/logout times. A single progress note completes the day.',
      icon: FileCheck,
      iconBg: 'bg-gradient-to-br from-[#fa6008] to-orange-600 text-white shadow-md shadow-orange-500/25 ring-1 ring-white/30',
      pillColor: 'text-orange-700 bg-orange-50 border-orange-200'
    },
    {
      step: '05',
      title: 'Automated Rollup',
      desc: 'Monthly reports build continuously in real time—calculating hours counted, target hours, and variance automatically.',
      icon: BarChart3,
      iconBg: 'bg-gradient-to-br from-blue-500 to-sky-600 text-white shadow-md shadow-blue-500/25 ring-1 ring-white/30',
      pillColor: 'text-blue-700 bg-blue-50 border-blue-200'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            A Day in log<span className="text-[#fa6008]">Mitra</span>, End to End
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Four simple taps from an employee. Everything else happens automatically in the background.
          </p>
        </div>

        {/* 5-Step Connected Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch relative">
          
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#f7f5ff] rounded-[32px] p-6 border border-indigo-100/90 shadow-[0_10px_30px_rgba(24,21,59,0.04)] hover:shadow-[0_15px_40px_rgba(105,93,227,0.12)] hover:border-iris-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div>
                  {/* Top Bar with Icon & Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 ${item.iconBg}`}>
                      <IconComp className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border font-heading ${item.pillColor}`}>
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2 group-hover:text-iris-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-slate-400 group-hover:text-iris-600 transition-colors font-heading">
                  <span>Phase {item.step}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
