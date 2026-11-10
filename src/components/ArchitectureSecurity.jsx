import React from 'react';
import { Server, Smartphone, Database, ShieldCheck, Lock, Code2, Cpu, CheckCircle2 } from 'lucide-react';

export default function ArchitectureSecurity() {
  const stackItems = [
    {
      title: 'React Native (Expo) Mobile App',
      badge: 'Android Native',
      desc: 'Around 5,300 lines of clean React Native code. Built offline-first so every entry is recorded locally and synced automatically upon signal recovery.',
      icon: Smartphone
    },
    {
      title: 'PHP 8 & MySQL Backend API',
      badge: 'In-House Infrastructure',
      desc: '15 authenticated API endpoints. Every request is verified server-side; user roles are strictly checked on the server before answering.',
      icon: Server
    },
    {
      title: 'Brevo 6-Digit Email OTP',
      badge: 'Zero Passwords',
      desc: 'Verification codes are single-use, expire in 10 minutes, and destroy after 5 failed tries. No user passwords exist to be leaked or stolen.',
      icon: Lock
    },
    {
      title: 'Over-The-Air (OTA) Updates',
      badge: 'Instant Deployment',
      desc: 'Enhancements reach employee phones the next time the app opens. Zero app store review queues, zero manual reinstalls, zero version drift.',
      icon: Code2
    }
  ];

  const securityPoints = [
    {
      title: 'No Passwords Stored',
      desc: 'Only the cryptographic hash of a code and session token is ever stored. A database copy cannot sign in as anyone.'
    },
    {
      title: 'Database Role Enforcement',
      desc: 'Privileges cannot be granted by the client. Management endpoints re-verify roles on the server for every single API call.'
    },
    {
      title: 'Strict Geofence Location Fix',
      desc: 'No GPS fix means no entry. The system reliably distinguishes "was at the office" from "unknown location".'
    },
    {
      title: 'Minimal Android Permissions',
      desc: 'Requires only 6 basic Android permissions. Nothing about device file storage, physical tracking, or screen overlays.'
    },
    {
      title: 'Server-Enforced Task Release',
      desc: 'Employees cannot sign off their own work. Tasks reach "submitted" status and require supervisor authorization on server.'
    },
    {
      title: 'Isolated Credential Keys',
      desc: 'Database and mailer credentials reside strictly outside the web root directory and never ship inside the mobile APK.'
    }
  ];

  return (
    <section id="architecture" className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Architecture & Security Highlights
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Built natively on existing in-house hosting infrastructure with zero per-seat licensing fees and strict server-side security controls.
          </p>
        </div>

        {/* Tech Stack 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {stackItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 text-[#fa6008] flex-shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <span className="text-xs font-semibold bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Security Guardrails Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#fa6008]" />
              <span>Enterprise Guardrails & Data Protection</span>
            </h3>
            <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-200">
              100% In-House Codebase
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityPoints.map((pt, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#fa6008] flex-shrink-0" />
                  <span>{pt.title}</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-5.5">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
