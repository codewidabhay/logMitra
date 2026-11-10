import React from 'react';
import { Star, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Testimonial Block matching Mutmiz layout */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left 5 Columns: Visual Avatar Card with floating rating elements */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-72 sm:w-80">
              
              {/* Background Colored Shape */}
              <div className="w-full aspect-[4/5] rounded-[44px] bg-gradient-to-tr from-[#695de3] to-purple-400 p-1 shadow-[0_20px_50px_rgba(105,93,227,0.2)] overflow-hidden relative">
                
                {/* Clean Photo / Illustrative Headshot representation */}
                <div className="w-full h-full rounded-[42px] bg-gradient-to-b from-indigo-100 via-white to-purple-100 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#695de3] to-[#fa6008] p-1 shadow-md">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-slate-800 font-black text-2xl font-heading">
                      APS
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="font-extrabold text-lg text-slate-900 font-heading">Abhay Pratap Singh</div>
                    <div className="text-xs text-iris-600 font-bold uppercase tracking-wider">Web & Systems Developer</div>
                    <div className="text-xs text-slate-500">BIMQP Tech Solutions</div>
                  </div>
                </div>

              </div>

              {/* Floating Top-Right Verified Badge (matching Mutmiz Trustpilot 4.8 card) */}
              <div className="absolute -top-4 -right-4 bg-white px-3.5 py-2 rounded-2xl border border-indigo-100 shadow-[0_10px_25px_rgba(105,93,227,0.15)] flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-xs font-black text-slate-900 font-heading">4.9 / 5.0</span>
                <span className="text-[10px] text-slate-400 font-bold">Verified</span>
              </div>

              {/* Floating Bottom-Left Card with 3 Stars (matching Mutmiz floating purple card) */}
              <div className="absolute -bottom-6 -left-4 bg-gradient-to-r from-[#695de3] to-[#7a6df1] text-white p-4 rounded-3xl shadow-xl space-y-2 border border-white/20">
                <div className="flex items-center gap-1 text-amber-300">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-white text-iris-700 text-[8px] font-bold flex items-center justify-center">JP</div>
                  <div className="w-5 h-5 rounded-full bg-amber-400 text-white text-[8px] font-bold flex items-center justify-center">JB</div>
                  <div className="w-5 h-5 rounded-full bg-[#fa6008] text-white text-[8px] font-bold flex items-center justify-center">SG</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right 7 Columns: Quotation, Content & Attribution */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Mutmiz Purple Quote Icon Pill */}
            <div className="w-14 h-14 rounded-2xl bg-iris-50 border border-iris-200 flex items-center justify-center text-iris-600 shadow-xs">
              <Quote className="w-7 h-7 text-[#695de3] fill-[#695de3]/20" />
            </div>

            {/* Testimonial Quote */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug font-heading">
              “We had an immediate turnaround in operational clarity. Verified GPS attendance and manager task approvals completely eliminated month-end spreadsheet disputes across our international teams.”
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-heading">Abhay Pratap Singh</h4>
                <p className="text-sm text-slate-500">Lead Technical Architect, BIMQP Tech Solutions</p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-4 h-4" />
                <span>Production Rollout</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
