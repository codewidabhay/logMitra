import React, { useState } from 'react';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Users, Zap, HelpCircle } from 'lucide-react';

export default function PricingSection({ onDownloadClick }) {
  const [employees, setEmployees] = useState(50);
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  // Calculate pricing based on head count
  const calculateEstimate = (count) => {
    if (count <= 0) return 0;
    if (count <= 45) {
      return count * 65;
    } else if (count <= 50) {
      return 3000; // Flat 50-user bundle
    } else if (count <= 90) {
      // 50 users bundle (3000) + remaining at 50/user
      return 3000 + (count - 50) * 50;
    } else if (count <= 100) {
      return 5000; // Flat 100-user bundle
    } else {
      // 100 users bundle (5000) + remaining at 45/user
      return 5000 + (count - 100) * 45;
    }
  };

  const handleSliderChange = (e) => {
    setEmployees(parseInt(e.target.value, 10));
  };

  const handleInputChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) {
      setEmployees(Math.max(1, Math.min(500, val)));
    } else {
      setEmployees(1);
    }
  };

  const currentEstimate = calculateEstimate(employees);
  const annualDiscountMultiplier = billingCycle === 'annual' ? 0.9 : 1.0;
  const displayEstimate = Math.round(currentEstimate * annualDiscountMultiplier);

  // Determine active plan based on slider count
  const isStarterActive = employees <= 45;
  const isGrowthActive = employees > 45 && employees <= 75;
  const isEnterpriseActive = employees > 75;

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#fdfcff] relative overflow-hidden">
      
      {/* Decorative Pastel Background Circles */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching Mutmiz / greytHR aesthetic */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Simple pricing that grows with you
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            No hidden setup fees, no complex module upgrades. Every plan includes full GPS attendance, geofencing, task authorization, and real-time rollups.
          </p>
        </div>

        {/* ============================================================ */}
        {/* INTERACTIVE ESTIMATOR BOX (INSPIRED BY GREYTHR / MUTMIZ) */}
        {/* ============================================================ */}
        <div className="max-w-5xl mx-auto bg-white rounded-[36px] sm:rounded-[48px] p-6 sm:p-10 lg:p-12 border-2 border-indigo-100/90 shadow-[0_25px_60px_-15px_rgba(105,93,227,0.12)] relative">
          
          {/* Top Interactive Row: "Get instant estimate for [ 50 ] employees" */}
          <div className="text-center space-y-6 pb-8 border-b border-slate-100">
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-lg sm:text-2xl font-extrabold text-slate-900 font-heading">
              <span>Get instant estimate for</span>
              <div className="inline-flex items-center">
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={employees}
                  onChange={handleInputChange}
                  className="w-20 sm:w-24 text-center py-1 sm:py-1.5 px-2 rounded-2xl bg-indigo-50/80 border-2 border-indigo-200 text-[#695de3] font-black font-heading text-xl sm:text-2xl focus:outline-none focus:border-[#695de3] shadow-inner transition-colors"
                  aria-label="Number of employees"
                />
              </div>
              <span>employees</span>
            </div>

            {/* Slider with "Slide →" pill handle matching greytHR */}
            <div className="max-w-3xl mx-auto px-2 sm:px-6 relative pt-4 pb-2">
              <div className="relative flex items-center">
                
                {/* Floating "Slide →" badge on desktop */}
                <div 
                  className="hidden sm:flex absolute -top-8 px-2.5 py-1 rounded-full bg-[#695de3] text-white text-[11px] font-bold shadow-md items-center gap-1 -translate-x-1/2 pointer-events-none transition-all duration-100"
                  style={{ left: `${Math.min(95, Math.max(5, (employees / 200) * 100))}%` }}
                >
                  <span>{employees} staff</span>
                </div>

                {/* Range Input */}
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="1"
                  value={employees}
                  onChange={handleSliderChange}
                  className="w-full h-3 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-[#695de3] focus:outline-none"
                  aria-label="Employee count slider"
                />
              </div>

              {/* Slider Ticks / Quick Selectors */}
              <div className="flex justify-between items-center text-xs text-slate-400 font-bold font-heading pt-3">
                <button 
                  type="button" 
                  onClick={() => setEmployees(10)} 
                  className={`hover:text-[#695de3] transition-colors cursor-pointer ${employees === 10 ? 'text-[#695de3] font-extrabold' : ''}`}
                >
                  10
                </button>
                <button 
                  type="button" 
                  onClick={() => setEmployees(25)} 
                  className={`hover:text-[#695de3] transition-colors cursor-pointer ${employees === 25 ? 'text-[#695de3] font-extrabold' : ''}`}
                >
                  25
                </button>
                <button 
                  type="button" 
                  onClick={() => setEmployees(50)} 
                  className={`hover:text-[#695de3] transition-colors cursor-pointer px-2 py-0.5 rounded-full ${employees === 50 ? 'bg-[#695de3] text-white' : 'text-slate-600 bg-slate-100'}`}
                >
                  50 (Bundle)
                </button>
                <button 
                  type="button" 
                  onClick={() => setEmployees(100)} 
                  className={`hover:text-[#695de3] transition-colors cursor-pointer px-2 py-0.5 rounded-full ${employees === 100 ? 'bg-[#695de3] text-white' : 'text-slate-600 bg-slate-100'}`}
                >
                  100 (Bundle)
                </button>
                <button 
                  type="button" 
                  onClick={() => setEmployees(200)} 
                  className={`hover:text-[#695de3] transition-colors cursor-pointer ${employees === 200 ? 'text-[#695de3] font-extrabold' : ''}`}
                >
                  200+
                </button>
              </div>
            </div>

            {/* Estimated Total Pill */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#f7f5ff] border border-indigo-100 shadow-xs">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Estimated Monthly Total:</span>
                <span className="text-xl sm:text-2xl font-black text-[#695de3] font-heading">
                  ₹{displayEstimate.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ month</span>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 3 PLAN / BUNDLE CARDS MATCHING GREYTHR COMPOSITION */}
          {/* ============================================================ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 items-stretch">
            
            {/* CARD 1: Per-User Flexible (₹65/user) */}
            <div className={`p-6 sm:p-7 rounded-[32px] border-2 transition-all flex flex-col justify-between space-y-6 ${
              isStarterActive 
                ? 'bg-gradient-to-b from-white to-indigo-50/40 border-[#695de3] shadow-[0_15px_35px_rgba(105,93,227,0.12)] scale-[1.02]' 
                : 'bg-white border-slate-200/90 hover:border-indigo-200'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">Flexible Pay-As-You-Go</h3>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full uppercase">Per User</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">₹65</span>
                    <span className="text-xs font-semibold text-slate-500">/ user / month</span>
                  </div>
                  <p className="text-xs text-slate-500">Ideal for growing teams under 45 members needing exact per-seat billing.</p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Base rate</span>
                    <span className="font-bold text-slate-800">₹65 / active user</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Included seats</span>
                    <span className="font-bold text-slate-800">Exact headcount</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Billing minimum</span>
                    <span className="font-bold text-slate-800">None</span>
                  </div>
                </div>

                <ul className="space-y-2 pt-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>GPS Geofenced Attendance (150m)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Task Submission & Manager Approval</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Passwordless Email OTP Login</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => { setEmployees(25); onDownloadClick?.(); }}
                  className="w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all font-heading cursor-pointer text-center"
                >
                  Select Flexible Plan
                </button>
              </div>
            </div>

            {/* CARD 2: Growth Bundle 50 Users (₹3,000/mo) - RECOMMENDED (Matching greytHR) */}
            <div className={`p-6 sm:p-7 rounded-[32px] border-2 transition-all flex flex-col justify-between space-y-6 relative ${
              isGrowthActive 
                ? 'bg-gradient-to-b from-[#695de3]/5 via-white to-indigo-50/60 border-[#695de3] shadow-[0_20px_45px_rgba(105,93,227,0.18)] scale-[1.04]' 
                : 'bg-white border-[#695de3]/70 hover:border-[#695de3] shadow-md'
            }`}>
              
              {/* RECOMMENDED Pill matching greytHR purple badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-3.5 py-1 rounded-full bg-[#695de3] text-white text-[10px] font-black tracking-wider uppercase shadow-md">
                  RECOMMENDED
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">50 Users Bundle</h3>
                  <span className="text-[10px] font-bold text-[#695de3] bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded-full uppercase">
                    Save ₹250/mo
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-[#695de3] font-heading">₹3,000</span>
                    <span className="text-xs font-semibold text-slate-500">/ month</span>
                  </div>
                  <p className="text-xs text-slate-500">Flat bundle covering up to 50 staff at an effective ₹60/user.</p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Bundle price</span>
                    <span className="font-bold text-slate-800">₹3,000 flat</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Included employees</span>
                    <span className="font-bold text-[#695de3]">50 staff included</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Effective cost</span>
                    <span className="font-bold text-emerald-600 font-mono">₹60 / user</span>
                  </div>
                </div>

                <ul className="space-y-2 pt-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Everything in Flexible Plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Multi-Hub Support (Jaipur, Johor, SG)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Automated Monthly Hours Rollup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Priority Admin Onboarding Support</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => { setEmployees(50); onDownloadClick?.(); }}
                  className="w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#695de3] to-[#5846f6] hover:from-[#5846f6] hover:to-[#4338ca] text-white shadow-md hover:shadow-lg transition-all font-heading cursor-pointer text-center"
                >
                  Choose 50-User Bundle
                </button>
              </div>
            </div>

            {/* CARD 3: Enterprise Bundle 100 Users (₹5,000/mo) */}
            <div className={`p-6 sm:p-7 rounded-[32px] border-2 transition-all flex flex-col justify-between space-y-6 ${
              isEnterpriseActive 
                ? 'bg-gradient-to-b from-white to-orange-50/40 border-[#fa6008] shadow-[0_15px_35px_rgba(250,96,8,0.12)] scale-[1.02]' 
                : 'bg-white border-slate-200/90 hover:border-orange-200'
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-slate-900 font-heading">100 Users Bundle</h3>
                  <span className="text-[10px] font-bold text-[#fa6008] bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full uppercase">
                    Save ₹1,500/mo
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">₹5,000</span>
                    <span className="text-xs font-semibold text-slate-500">/ month</span>
                  </div>
                  <p className="text-xs text-slate-500">High-volume workforce tier at an industry-leading ₹50/user rate.</p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Bundle price</span>
                    <span className="font-bold text-slate-800">₹5,000 flat</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Included employees</span>
                    <span className="font-bold text-[#fa6008]">100 staff included</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Effective cost</span>
                    <span className="font-bold text-emerald-600 font-mono">₹50 / user</span>
                  </div>
                </div>

                <ul className="space-y-2 pt-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>All 50-User Bundle Features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Cross-Border Multi-Entity Admin Roles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dedicated Technical Account Manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Custom Geofence Radius Adjustments</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => { setEmployees(100); onDownloadClick?.(); }}
                  className="w-full py-3 px-4 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#fa6008] to-[#e05300] hover:from-[#e05300] hover:to-[#c2410c] text-white shadow-md hover:shadow-lg transition-all font-heading cursor-pointer text-center"
                >
                  Choose 100-User Bundle
                </button>
              </div>
            </div>

          </div>

          {/* ============================================================ */}
          {/* BOTTOM COMPLIANCE TRUST BAR MATCHING GREYTHR FOOTER */}
          {/* ============================================================ */}
          <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider font-heading">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>GEOFENCE ENFORCED • ZERO SPREADSHEETS • INDIA • MALAYSIA • SG</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onDownloadClick}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-heading shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Get Started Free →
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
