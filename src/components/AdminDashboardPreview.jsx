import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle, 
  XCircle, 
  Clock, 
  AlertTriangle, 
  MapPin, 
  Check, 
  Send, 
  Filter, 
  Sparkles,
  ShieldCheck,
  Search
} from 'lucide-react';

export default function AdminDashboardPreview() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [staffData, setStaffData] = useState([
    { id: 1, name: 'Rahul Sharma', role: 'BIM Engineer', hub: 'Jaipur', status: 'IN_OFFICE', task: 'Facade Detail Model Audit (7.5h)', taskApproved: false, eodFiled: false, timeIn: '07:28 AM', coords: '26.9124° N, 75.7873° E' },
    { id: 2, name: 'Priya Patel', role: 'Structural Designer', hub: 'Jaipur', status: 'IN_OFFICE', task: 'Foundation Rebar Scheduling (8.0h)', taskApproved: true, eodFiled: false, timeIn: '07:45 AM', coords: '26.9125° N, 75.7874° E' },
    { id: 3, name: 'Tan Kah Wee', role: 'Senior Quantity Surveyor', hub: 'Johor Bahru', status: 'IN_OFFICE', task: 'Cost Estimation Report (6.0h)', taskApproved: true, eodFiled: true, timeIn: '08:02 AM', coords: '1.4927° N, 103.7414° E' },
    { id: 4, name: 'Deepak Verma', role: 'Site Inspector', hub: 'Jaipur', status: 'UNFILED', task: 'Concrete Strength Testing (7.0h)', taskApproved: true, eodFiled: false, timeIn: '07:15 AM', coords: '26.9121° N, 75.7871° E' },
    { id: 5, name: 'Mei Ling Wong', role: 'MEP Engineer', hub: 'Johor Bahru', status: 'PENDING_TASK', task: 'HVAC Ducting Layout (7.0h)', taskApproved: false, eodFiled: false, timeIn: '08:10 AM', coords: '1.4929° N, 103.7416° E' },
    { id: 6, name: 'Amit Singh', role: 'Draftsman', hub: 'Tonk', status: 'ABSENT', task: 'None Submitted', taskApproved: false, eodFiled: false, timeIn: '--:--', coords: 'No Location Fix' },
  ]);

  const [notification, setNotification] = useState(null);

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleApproveTask = (id, name) => {
    setStaffData((prev) => prev.map((s) => s.id === id ? { ...s, taskApproved: true } : s));
    showToast(`Task approved for ${name}. Employee can now begin work.`);
  };

  const handleSendReminder = (name) => {
    showToast(`Filing reminder notification sent to ${name}'s device.`);
  };

  const filteredStaff = staffData.filter((s) => {
    const matchesQuery = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.role.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesQuery) return false;
    if (activeFilter === 'pending') return !s.taskApproved && s.status !== 'ABSENT';
    if (activeFilter === 'unfiled') return s.status === 'UNFILED' || (!s.eodFiled && s.status === 'IN_OFFICE');
    if (activeFilter === 'absent') return s.status === 'ABSENT';
    if (activeFilter === 'office') return s.status === 'IN_OFFICE' || s.status === 'PENDING_TASK';
    return true;
  });

  const countPending = staffData.filter(s => !s.taskApproved && s.status !== 'ABSENT').length;
  const countInOffice = staffData.filter(s => s.status !== 'ABSENT').length;
  const countAbsent = staffData.filter(s => s.status === 'ABSENT').length;

  return (
    <section id="demo" className="py-20 lg:py-28 bg-[#0e1219] border-b border-[#2a3245]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
            <span>LIVE INTERACTIVE PREVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Exception-First Admin Dashboard
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Test the live operational view. Admins see pending task approvals, unfiled reports, and office attendance instantly.
          </p>
        </div>

        {/* Toast Notification Popup */}
        {notification && (
          <div className="max-w-md mx-auto mb-6 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono text-center shadow-lg animate-bounce">
            ⚡ {notification}
          </div>
        )}

        {/* Dashboard Frame */}
        <div className="rounded-2xl bg-[#161b26] border border-[#2a3245] p-4 sm:p-6 space-y-6 shadow-2xl">
          
          {/* Top Bar Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl bg-[#0e1219] border border-[#2a3245]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">On Site Today</div>
              <div className="text-xl font-bold font-mono text-emerald-400">{countInOffice} / 6</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e1219] border border-[#2a3245]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Pending Approvals</div>
              <div className="text-xl font-bold font-mono text-amber-400">{countPending} Tasks</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e1219] border border-[#2a3245]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Absent / Missing</div>
              <div className="text-xl font-bold font-mono text-red-400">{countAbsent} Staff</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#0e1219] border border-[#2a3245]">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Utilisation Rate</div>
              <div className="text-xl font-bold font-mono text-blue-400">101.4%</div>
            </div>
          </div>

          {/* Filter Tabs & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#2a3245] pb-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === 'all' ? 'bg-[#fa6008] text-white' : 'bg-[#0e1219] text-slate-400 hover:text-white'
                }`}
              >
                All Records (6)
              </button>
              <button
                onClick={() => setActiveFilter('pending')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === 'pending' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-[#0e1219] text-amber-400 hover:bg-amber-950/40'
                }`}
              >
                Pending Tasks ({countPending})
              </button>
              <button
                onClick={() => setActiveFilter('office')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === 'office' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-[#0e1219] text-emerald-400 hover:bg-emerald-950/40'
                }`}
              >
                In Office ({countInOffice})
              </button>
              <button
                onClick={() => setActiveFilter('absent')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === 'absent' ? 'bg-red-500 text-white' : 'bg-[#0e1219] text-red-400 hover:bg-red-950/40'
                }`}
              >
                Absent ({countAbsent})
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search staff or role..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#0e1219] border border-[#2a3245] rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-[#fa6008]"
              />
            </div>

          </div>

          {/* Table View */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-[#2a3245] text-slate-400 uppercase text-[10px]">
                  <th className="pb-3 font-semibold">Employee</th>
                  <th className="pb-3 font-semibold">Location / Hub</th>
                  <th className="pb-3 font-semibold">Task Request</th>
                  <th className="pb-3 font-semibold">Geofence GPS</th>
                  <th className="pb-3 font-semibold text-right">Quick Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a3245]/60 text-slate-200">
                {filteredStaff.map((staff) => (
                  <tr key={staff.id} className="hover:bg-[#0e1219]/60 transition-colors">
                    <td className="py-3 pr-2">
                      <div className="font-bold text-white">{staff.name}</div>
                      <div className="text-[10px] text-slate-400">{staff.role}</div>
                    </td>
                    <td className="py-3 pr-2">
                      <span className="inline-flex items-center gap-1 font-semibold text-slate-300">
                        <MapPin className="w-3 h-3 text-[#fa6008]" />
                        {staff.hub} ({staff.timeIn})
                      </span>
                    </td>
                    <td className="py-3 pr-2">
                      <div className="text-slate-200">{staff.task}</div>
                      <div className="mt-0.5">
                        {staff.taskApproved ? (
                          <span className="text-[9px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                            ✓ RELEASED BY ADMIN
                          </span>
                        ) : (
                          <span className="text-[9px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800 animate-pulse">
                            ⏳ APPROVAL PENDING
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 pr-2">
                      <div className="text-[10px] text-slate-400">{staff.coords}</div>
                    </td>
                    <td className="py-3 text-right space-x-2">
                      {!staff.taskApproved && staff.status !== 'ABSENT' && (
                        <button
                          onClick={() => handleApproveTask(staff.id, staff.name)}
                          className="px-2.5 py-1 text-[11px] font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded shadow transition-all inline-flex items-center gap-1"
                        >
                          <Check className="w-3 h-3" />
                          <span>Approve</span>
                        </button>
                      )}
                      {staff.taskApproved && !staff.eodFiled && staff.status !== 'ABSENT' && (
                        <button
                          onClick={() => handleSendReminder(staff.name)}
                          className="px-2.5 py-1 text-[11px] font-semibold text-slate-300 bg-[#0e1219] hover:bg-[#1e2433] border border-[#2a3245] rounded inline-flex items-center gap-1"
                        >
                          <Send className="w-3 h-3 text-blue-400" />
                          <span>Remind EOD</span>
                        </button>
                      )}
                      {staff.eodFiled && (
                        <span className="text-[10px] text-emerald-400 font-bold">✓ Filed</span>
                      )}
                      {staff.status === 'ABSENT' && (
                        <span className="text-[10px] text-red-400">Off-Site</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}
