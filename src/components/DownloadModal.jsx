import React, { useState } from 'react';
import { X, Download, Smartphone, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { APK_CONFIG } from '../config/apkConfig';
import { downloadApkFile } from '../utils/helpers';

export default function DownloadModal({ isOpen, onClose }) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e) => {
    downloadApkFile();
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white rounded-[36px] p-7 sm:p-8 shadow-[0_25px_70px_rgba(24,21,59,0.25)] border border-indigo-100 relative space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-iris-600 bg-iris-50 px-3 py-1 rounded-full border border-iris-100 font-heading">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Enterprise Mobile Application</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 font-heading">
            Download log<span className="text-[#fa6008]">Mitra</span> APK
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Direct production build for authorized workforce Android devices.
          </p>
        </div>

        {/* Package Information Card */}
        <div className="p-4 rounded-2xl bg-[#f7f5ff] border border-indigo-100/90 space-y-2.5 text-xs sm:text-sm text-slate-600">
          <div className="font-bold text-slate-900 font-heading flex items-center justify-between">
            <span>Package Specifications</span>
            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">Signed APK</span>
          </div>
          <div className="flex justify-between border-t border-indigo-100/60 pt-2">
            <span className="text-slate-500">Build Version:</span>
            <span className="font-bold text-slate-800 font-mono">v{APK_CONFIG.version}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Package Size:</span>
            <span className="font-bold text-slate-800 font-mono">{APK_CONFIG.fileSize}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Target Compatibility:</span>
            <span className="font-bold text-slate-800">{APK_CONFIG.minAndroid}</span>
          </div>
        </div>

        {/* Action Button */}
        {!downloaded ? (
          <a
            href={APK_CONFIG.url}
            download={APK_CONFIG.fileName}
            onClick={handleDownload}
            className="w-full py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#fa6008] to-[#e05300] hover:from-[#e05300] hover:to-[#c2410c] shadow-[0_10px_25px_rgba(250,96,8,0.35)] hover:shadow-[0_15px_30px_rgba(250,96,8,0.45)] transition-all flex items-center justify-center gap-2.5 font-heading cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Start Download ({APK_CONFIG.fileSize})</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        ) : (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs text-center space-y-1">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
            <div className="font-bold text-sm text-emerald-950 font-heading">Download Initiated</div>
            <p className="text-emerald-700">Package downloading to device. Open the APK file to complete installation.</p>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span>Internal Enterprise Distribution • Verified Clean</span>
        </div>

      </div>
    </div>
  );
}
