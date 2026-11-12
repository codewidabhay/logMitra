import React, { useState } from 'react';
import { 
  Server, 
  Smartphone, 
  Database, 
  Key, 
  RefreshCw, 
  ShieldCheck, 
  Lock, 
  Terminal, 
  CheckCircle2, 
  Code2, 
  Layers,
  Cpu
} from 'lucide-react';

export default function TechnicalArchitecture() {
  const [activeTab, setActiveTab] = useState('stack'); // 'stack', 'security', 'endpoints'

  const stackCards = [
    {
      label: 'THE MOBILE APP',
      title: 'React Native (Expo), Android',
      badge: 'OFFLINE FIRST',
      desc: 'Around 5,300 lines of highly optimized React Native code across 9 core screens. Built offline-first so every entry is recorded locally and auto-pushed upon signal recovery.',
      stat: '9 Screens',
      icon: Smartphone,
      color: 'text-blue-400'
    },
    {
      label: 'THE BACKEND API',
      title: 'PHP 8 & MySQL Engine',
      badge: 'EXISTING HOSTING',
      desc: 'Fifteen lightweight, hyper-fast API endpoints. Every single request is authenticated; user roles and permissions are enforced strictly on the server, never trusted from the client.',
      stat: '15 Endpoints',
      icon: Server,
      color: 'text-emerald-400'
    },
    {
      label: 'SIGN-IN API',
      title: 'Brevo 6-Digit Email Codes',
      badge: 'ZERO PASSWORDS',
      desc: 'No passwords exist to be stolen or reset. Verification codes are single-use, expire in 10 minutes, and automatically invalidate after 5 incorrect attempts.',
      stat: '10 Min Expiry',
      icon: Key,
      color: 'text-amber-400'
    },
    {
      label: 'RELEASE PIPELINE',
      title: 'Over-The-Air (OTA) Updates',
      badge: 'ZERO APP STORE WAIT',
      desc: 'Bug fixes and feature enhancements reach every employee phone the next time the app opens. Zero reinstallations, zero store queues, zero version drift.',
      stat: 'Instant Sync',
      icon: RefreshCw,
      color: 'text-[#fa6008]'
    }
  ];

  const securityGuardrails = [
    {
      title: 'No Passwords Exist',
      desc: 'Only the cryptographic hash of a code and session token is ever stored. A copy of the database cannot sign in as anybody.',
      icon: Lock
    },
    {
      title: 'Roles Live in Database',
      desc: 'The app cannot grant privileges. Every management endpoint re-checks the role on the server before answering.',
      icon: Database
    },
    {
      title: 'Strict Geofence Fix',
      desc: 'No GPS location fix, no entry. The record always distinguishes "was at the office" from "unknown location".',
      icon: ShieldCheck
    },
    {
      title: 'Minimal Android Permissions',
      desc: 'Requires only 6 basic Android permissions. Nothing about device storage, physical movement tracking, or screen overlays.',
      icon: Cpu
    },
    {
      title: 'Server-Enforced Task Sign-Off',
      desc: 'An employee cannot sign off their own work. Tasks reach "submitted" and stop until an admin approves on server.',
      icon: CheckCircle2
    },
    {
      title: 'Keys Never Ship in APK',
      desc: 'Database and email provider credentials live outside the web root on isolated server config files.',
      icon: Code2
    }
  ];

  const apiEndpoints = [
    { method: 'POST', path: '/api/v1/auth/request-code', desc: 'Sends 6-digit verification code to work email' },
    { method: 'POST', path: '/api/v1/auth/verify-code', desc: 'Validates code & issues server session token' },
    { method: 'POST', path: '/api/v1/attendance/login', desc: 'Geofenced attendance login with GPS fix' },
    { method: 'POST', path: '/api/v1/attendance/logout', desc: 'Pre-filled daily report filing on logout' },
    { method: 'GET',  path: '/api/v1/tasks/pending', desc: 'Fetches admin task approval queue (Server checked)' },
    { method: 'POST', path: '/api/v1/tasks/approve', desc: 'Admin releases employee task request' },
    { method: 'GET',  path: '/api/v1/reports/monthly', desc: 'Generates real-time target vs actual utilisation' },
  ];

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-[#0e1219] border-b border-[#2a3245]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa6008]/10 border border-[#fa6008]/30 text-xs font-mono uppercase tracking-widest text-[#fa6008] font-semibold">
            <span>ENGINEERING EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How It Is Built & What Guards What
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            One app, one API, one database. Nothing bought, nothing subscribed to, zero third-party per-seat fees.
          </p>

          {/* Sub Navigation */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('stack')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'stack' ? 'bg-[#fa6008] text-white shadow-glow-orange' : 'bg-[#1e2433] text-slate-400 hover:text-white'
              }`}
            >
              Technology Stack
            </button>
            <button
              onClick={() => setActiveTab('security')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'security' ? 'bg-[#fa6008] text-white shadow-glow-orange' : 'bg-[#1e2433] text-slate-400 hover:text-white'
              }`}
            >
              Security Guardrails
            </button>
            <button
              onClick={() => setActiveTab('endpoints')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'endpoints' ? 'bg-[#fa6008] text-white shadow-glow-orange' : 'bg-[#1e2433] text-slate-400 hover:text-white'
              }`}
            >
              API Endpoint Inspector
            </button>
          </div>
        </div>

        {/* 3 Metric Counter Boxes (From PDF Page 5) */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
          <div className="p-4 rounded-xl bg-[#161b26] border border-[#2a3245] text-center">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#fa6008] font-mono">103</div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">
              Automated Checks
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#161b26] border border-[#2a3245] text-center">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#fa6008] font-mono">15</div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">
              API Endpoints
            </div>
          </div>
          <div className="p-4 rounded-xl bg-[#161b26] border border-[#2a3245] text-center">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#fa6008] font-mono">9</div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-400 mt-1 font-semibold">
              Mobile Screens
            </div>
          </div>
        </div>

        {/* Tab 1: Tech Stack */}
        {activeTab === 'stack' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stackCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#161b26] border border-[#2a3245] hover:border-[#fa6008]/40 transition-all card-hover-glow space-y-4 relative group">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono tracking-widest text-[#fa6008] font-bold">
                      {card.label}
                    </span>
                    <span className="text-[10px] font-mono bg-[#1e2433] px-2.5 py-1 rounded text-emerald-400 border border-[#2a3245] font-semibold">
                      {card.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1e2433] flex items-center justify-center border border-[#2a3245]">
                      <IconComp className={`w-5 h-5 ${card.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-[#2a3245]/60">
                    <span>Performance Benchmark</span>
                    <span className="text-white font-bold">{card.stat}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: Security Guardrails */}
        {activeTab === 'security' && (
          <div id="security" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityGuardrails.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#161b26] border border-emerald-900/40 hover:border-emerald-500/50 transition-all space-y-3 relative group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30">
                    <IconComp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 3: API Endpoint Inspector */}
        {activeTab === 'endpoints' && (
          <div className="max-w-4xl mx-auto rounded-2xl bg-[#090c12] border border-[#2a3245] p-6 font-mono space-y-3">
            <div className="flex items-center justify-between border-b border-[#2a3245] pb-4">
              <span className="text-xs text-slate-300 font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#fa6008]" />
                Authenticated API Endpoints (PHP 8 Engine)
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                100% Server Role Enforced
              </span>
            </div>

            <div className="space-y-2 pt-2">
              {apiEndpoints.map((api, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#161b26] border border-[#2a3245] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded ${
                      api.method === 'GET' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    }`}>
                      {api.method}
                    </span>
                    <span className="text-slate-200 font-semibold">{api.path}</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">{api.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
