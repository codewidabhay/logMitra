import React, { useState } from 'react';
import { X, Download, Smartphone, CheckCircle2, ShieldAlert, Sparkles, RefreshCw } from 'lucide-react';

export default function ApkDownloadModal({ isOpen, onClose }) {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  if (!isOpen) return null;

  const triggerDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadComplete(true);
    }, 2000);
  };

  const handleClose = () => {
    setDownloading(false);
    setDownloadComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#161b26] border border-[#2a3245] rounded-2xl p-6 shadow-2xl relative space-y-6">
        
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white bg-[#1e2433] rounded-lg border border-[#2a3245]"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#fa6008] uppercase font-semibold">
            <Smartphone className="w-4 h-4" />
            <span>Direct Enterprise Build</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Download logMitra Mobile APK
          </h3>
          <p className="text-xs text-slate-400">
            Current Version: <span className="font-mono text-white font-semibold">v2.4.0 (Build 103)</span> • Size: <span className="font-mono text-white font-semibold">24.8 MB</span>
          </p>
        </div>

        {/* Instructions */}
        <div className="p-4 rounded-xl bg-[#0e1219] border border-[#2a3245] space-y-3 font-mono text-xs text-slate-300">
          <div className="font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Installation Instructions</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-slate-400">
            <li>Download the direct <code className="text-white">logMitra-v2.4.apk</code> package below.</li>
            <li>Tap file to install. Enable "Install from unknown sources" if prompted.</li>
            <li>Launch app & enter your work email to receive 6-digit OTP.</li>
          </ol>
        </div>

        {/* OTA Note */}
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-blue-400 flex-shrink-0 animate-spin" />
          <span>Future updates will push automatically Over-The-Air (OTA) upon opening the app.</span>
        </div>

        {/* Action Button */}
        <div>
          {!downloadComplete ? (
            <button
              onClick={triggerDownload}
              disabled={downloading}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#fa6008] to-[#e05300] hover:from-[#e05300] hover:to-[#c94700] shadow-glow-orange transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Preparing Package Download...' : 'Download logMitra v2.4 APK (24.8 MB)'}</span>
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono text-center space-y-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto" />
              <div className="font-bold text-white text-sm">Download Initiated!</div>
              <p className="text-[11px] text-emerald-200">
                The APK file package has been generated for installation.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
