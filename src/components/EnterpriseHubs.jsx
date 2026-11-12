import React, { useState } from 'react';
import { Mail, Smartphone, CheckCircle2, Send, Download, Building2, MapPin, ArrowRight } from 'lucide-react';
import { APK_CONFIG } from '../config/apkConfig';
import { downloadApkFile } from '../utils/helpers';

export default function EnterpriseHubs({ onDownloadClick }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="hubs" className="py-20 lg:py-28 bg-[#f7f5ff] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* MUTMIZ SIGNATURE PURPLE CURVED BANNER (Ready? Let's Start...) */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-br from-[#695de3] via-[#6152e0] to-[#5543dc] rounded-[44px] lg:rounded-[56px] p-8 sm:p-12 lg:p-16 text-white shadow-[0_25px_60px_-15px_rgba(105,93,227,0.4)] relative overflow-hidden mb-16">
          
          {/* Ambient Lighting Orbs inside banner */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#fa6008]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left 7 Columns: Title, Description, and Deployment Hubs */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading">
                Ready? Let's Deploy logMitra and <br />
                Transform Workforce Ops.
              </h2>

              <p className="text-indigo-100 text-base sm:text-lg leading-relaxed max-w-xl">
                Define unique boundary rules for each office. Staff log in with verifiable GPS precision. Managers release daily tasks in real time across India, Malaysia, and Singapore.
              </p>

              {/* Active Hubs Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-xl shrink-0 shadow-xs">
                    🇮🇳
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-orange-200 font-bold font-heading">India Headquarters</div>
                    <div className="text-base font-bold text-white font-heading">Jaipur Hub • 24 Staff</div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-xl shrink-0 shadow-xs">
                    🇲🇾
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-orange-200 font-bold font-heading">Malaysia Hub</div>
                    <div className="text-base font-bold text-white font-heading">Johor Bahru • 11 Staff</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={APK_CONFIG.url}
                  download={APK_CONFIG.fileName}
                  onClick={(e) => {
                    downloadApkFile();
                  }}
                  className="px-7 py-3.5 rounded-full font-bold text-sm sm:text-base text-slate-900 bg-white hover:bg-orange-50 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 font-heading cursor-pointer group"
                >
                  <Download className="w-4 h-4 text-[#fa6008]" />
                  <span>Download Direct APK (67 MB)</span>
                  <ArrowRight className="w-4 h-4 text-[#fa6008] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Right 5 Columns: Device Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-bold text-white font-heading">Cross-Border Live Sync</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-indigo-100">
                  <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between">
                    <span>Active Sessions:</span>
                    <strong className="text-white">35 Staff Live</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between">
                    <span>GPS Radius Strictness:</span>
                    <strong className="text-emerald-300">150m Office Boundary</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between">
                    <span>Daily Task Approvals:</span>
                    <strong className="text-orange-200">100% Admin Verified</strong>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#fa6008]/30 to-amber-500/20 border border-orange-300/30 text-[11px] text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-300 shrink-0" />
                  <span>Ready for immediate deployment across enterprise Android devices.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Support Inquiry Form Box */}
        <div id="contact" className="max-w-4xl mx-auto bg-white rounded-[36px] p-8 sm:p-12 border border-indigo-100 shadow-[0_20px_50px_rgba(24,21,59,0.06)]">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
              Internal Support & Location Onboarding
            </h3>
            <p className="text-sm text-slate-500">
              Need to add an office coordinate, configure boundary polygons, or register new employee emails?
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 font-heading uppercase tracking-wider">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f7f5ff] border border-indigo-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-iris-500 focus:bg-white text-sm transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 font-heading uppercase tracking-wider">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@bimqp.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#f7f5ff] border border-indigo-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-iris-500 focus:bg-white text-sm transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 font-heading uppercase tracking-wider">Office Details / Request</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Specify office coordinates, staff list, or onboarding requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#f7f5ff] border border-indigo-100 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-iris-500 focus:bg-white text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#695de3] to-[#5846f6] hover:from-[#5846f6] hover:to-[#4338ca] shadow-[0_10px_25px_rgba(105,93,227,0.3)] hover:shadow-[0_15px_30px_rgba(105,93,227,0.4)] transition-all flex items-center justify-center gap-2 font-heading cursor-pointer text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Submit Configuration Request</span>
              </button>
            </form>
          ) : (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <div className="font-bold text-base text-emerald-900 font-heading">Request Received Successfully</div>
              <p className="text-sm text-emerald-700">The logMitra administrative team will review coordinates and update office parameters shortly.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
