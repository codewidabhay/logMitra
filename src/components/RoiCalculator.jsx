import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, FileSpreadsheet, Sparkles, TrendingUp } from 'lucide-react';

export default function RoiCalculator() {
  const [employeeCount, setEmployeeCount] = useState(38);
  const [adminHourlyRate, setAdminHourlyRate] = useState(25);
  const [saasCostPerSeat, setSaasCostPerSeat] = useState(8);

  // Calculations:
  // Admin spreadsheet hours saved per employee per month = 3 hours
  const monthlyHoursSaved = Math.round(employeeCount * 3.5);
  const yearlyHoursSaved = monthlyHoursSaved * 12;

  // Third-party SaaS licensing cost saved = employeeCount * saasCostPerSeat * 12
  const yearlySaasSavings = employeeCount * saasCostPerSeat * 12;

  // Admin labor cost saved = yearlyHoursSaved * adminHourlyRate
  const yearlyLaborSavings = Math.round(yearlyHoursSaved * adminHourlyRate * 0.4);

  const totalYearlySavings = yearlySaasSavings + yearlyLaborSavings;

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#12161f] border-b border-[#2a3245]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            <span>COST SAVINGS & ROI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Utilisation & Cost Savings Calculator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See how much your enterprise saves by replacing per-seat software licensing and manual spreadsheet reconstruction with logMitra.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Left */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-[#161b26] border border-[#2a3245] space-y-6">
            
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <label className="flex items-center gap-2">
                  <span>Number of Active Staff</span>
                </label>
                <span className="font-mono text-[#fa6008] text-lg">{employeeCount} Staff</span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="1"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                className="w-full h-2 bg-[#0e1219] rounded-lg appearance-none cursor-pointer accent-[#fa6008]"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>5 Staff</span>
                <span>38 (Current)</span>
                <span>250 Staff</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <label>Commercial SaaS Per-Seat Fee ($/user/mo)</label>
                <span className="font-mono text-emerald-400 text-lg">${saasCostPerSeat}/mo</span>
              </div>
              <input
                type="range"
                min="3"
                max="25"
                step="1"
                value={saasCostPerSeat}
                onChange={(e) => setSaasCostPerSeat(parseInt(e.target.value))}
                className="w-full h-2 bg-[#0e1219] rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-400">
                <span>$3 (Basic)</span>
                <span>$8 (Industry Avg)</span>
                <span>$25 (Enterprise)</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-white">
                <label>Admin Blended Hourly Rate ($/hr)</label>
                <span className="font-mono text-amber-400 text-lg">${adminHourlyRate}/hr</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={adminHourlyRate}
                onChange={(e) => setAdminHourlyRate(parseInt(e.target.value))}
                className="w-full h-2 bg-[#0e1219] rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

          </div>

          {/* Results Right */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#161b26] to-[#1e2433] border border-[#2a3245] space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#fa6008]/10 blur-2xl pointer-events-none" />

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
                  ESTIMATED ANNUAL ENTERPRISE SAVINGS
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight my-2">
                  ${totalYearlySavings.toLocaleString()}
                  <span className="text-xs font-mono text-emerald-400 font-normal ml-2">/ YEAR</span>
                </div>
                <p className="text-xs text-slate-400">
                  Calculated against standard per-seat licenses + eliminated spreadsheet reconstruction labor.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#2a3245]">
                <div className="p-3.5 rounded-xl bg-[#0e1219] border border-[#2a3245]">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Spreadsheet Hours Saved</div>
                  <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                    {yearlyHoursSaved.toLocaleString()} hrs/yr
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0e1219] border border-[#2a3245]">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Software License Fee</div>
                  <div className="text-xl font-bold font-mono text-[#fa6008] mt-1">
                    $0 (In-House)
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>logMitra runs 100% free on existing server hosting with zero per-user seat fees.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
