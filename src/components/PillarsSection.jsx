import React from 'react';
import { MapPin, CheckSquare, BarChart3 } from 'lucide-react';

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-12 sm:py-16 bg-[#f7f5ff] relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#695de3] via-[#6152e0] to-[#5543dc] rounded-[36px] sm:rounded-[48px] lg:rounded-[52px] p-7 sm:p-10 lg:p-14 text-white shadow-[0_25px_60px_-15px_rgba(105,93,227,0.4)] relative overflow-hidden">
          
          {/* Subtle Ambient Shapes inside Purple Block */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fa6008]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* Feature Block 1 */}
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white shadow-xs">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Self-Verifying GPS Attendance
                </h3>
                <p className="text-sm text-indigo-100 leading-relaxed">
                  Logins are only permitted when the employee is physically present within the 150m authorized office perimeter.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-orange-200">
                <span>Geofence Enforced</span>
                <span>•</span>
                <span>Zero Paper Logs</span>
              </div>
            </div>

            {/* Feature Block 2 */}
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white shadow-xs">
                  <CheckSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Mutual Task Consent & Release
                </h3>
                <p className="text-sm text-indigo-100 leading-relaxed">
                  Staff author planned tasks with time estimates. Managers review and release tasks with one tap before work starts.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-orange-200">
                <span>Dual Consent</span>
                <span>•</span>
                <span>Audit Trails</span>
              </div>
            </div>

            {/* Feature Block 3 */}
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white shadow-xs">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">
                  Automated Monthly Rollup
                </h3>
                <p className="text-sm text-indigo-100 leading-relaxed">
                  Standard 9h daily target (8h work + 1h lunch) vs logged time calculates live every single day with zero month-end spreadsheets.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-orange-200">
                <span>Real-Time Math</span>
                <span>•</span>
                <span>100% Automated</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
