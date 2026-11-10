import React, { useState, useRef, useEffect } from 'react';
import { 
  Smartphone, ArrowRight, Download, Clock, Star, 
  MapPin, CheckSquare, BarChart3, Volume2, VolumeX, 
  Play, Pause, CheckCircle2, ShieldCheck, Users, 
  Sparkles, Calendar, Layers
} from 'lucide-react';
import { APK_CONFIG, downloadApkFile } from '../config/download';

// Official App Store SVGs
function GooglePlayIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M3.6 2.3c-.3.3-.4.8-.4 1.4v16.6c0 .6.1 1.1.4 1.4l9.1-9.7L3.6 2.3z" fill="#4285F4" />
      <path d="M16.3 8.3l-3.6 3.7 3.6 3.7 4.2-2.4c1.2-.7 1.2-1.9 0-2.6l-4.2-2.4z" fill="#FBBC04" />
      <path d="M3.6 21.7c.4.4 1.1.5 1.8.1l10.9-6.1-3.6-3.7-9.1 9.7z" fill="#EA4335" />
      <path d="M16.3 8.3L5.4 2.2C4.7 1.8 4 1.9 3.6 2.3l9.1 9.7 3.6-3.7z" fill="#34A853" />
    </svg>
  );
}

function AppleIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.67-.82 1.12-1.95.99-3.09-.97.04-2.14.65-2.83 1.47-.6.7-1.13 1.83-.99 2.94 1.08.08 2.18-.54 2.83-1.32z" />
    </svg>
  );
}

export default function Hero({ onDownloadClick }) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const videoRef = useRef(null);
  const speedMenuRef = useRef(null);

  // Close speed menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (speedMenuRef.current && !speedMenuRef.current.contains(e.target)) {
        setShowSpeedMenu(false);
      }
    };
    if (showSpeedMenu) {
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }
  }, [showSpeedMenu]);

  const toggleSound = (e) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = (e) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (!isSeeking && videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeekChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  const changeSpeed = (speed) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setPlaybackSpeed(speed);
      setShowSpeedMenu(false);
    }
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="overview" className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-center pt-16 sm:pt-20 lg:pt-20 pb-8 sm:pb-12 overflow-hidden bg-[#f7f5ff]">
      
      {/* Decorative Soft Background Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-orange-100/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Row: Left Copy & Right Floating Phone with Flanking Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center pb-8 lg:pb-12">
          
          {/* Left Column: Headlines, Social Proof, and Action CTAs */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 z-20">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] font-heading">
              Automated Daily Attendance, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#695de3] to-[#fa6008] bg-clip-text text-transparent">
                Tasks & Utilisation Manager
              </span>
            </h1>

            {/* Description */}
            <div className="space-y-2 max-w-xl text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Built internally for cross-border workforce operations across India, Malaysia and Singapore. Replaces paper registers and month-end spreadsheets.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Engineered to eliminate administrative overhead, guarantee location integrity, and deliver real-time operational clarity.
              </p>
            </div>

            {/* CTAs: 3 Adjacent Store Download Buttons */}
            <div className="space-y-3.5 pt-0.5">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                
                {/* 1. Google Play Store Button (with interactive Coming Soon hover effect) */}
                <div className="relative group inline-block">
                  <button
                    type="button"
                    className="relative overflow-hidden bg-white hover:bg-slate-50 text-slate-900 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all border border-indigo-100/90 font-heading cursor-pointer min-w-[148px]"
                    aria-label="Get it on Google Play - Coming Soon"
                  >
                    {/* Normal State: Google Play Icon & Text */}
                    <div className="flex items-center gap-2.5 transition-opacity duration-200 group-hover:opacity-0">
                      <GooglePlayIcon className="w-5 h-5 shrink-0" />
                      <div className="text-left">
                        <div className="text-[9px] leading-tight text-slate-400 font-bold uppercase tracking-wider">GET IT ON</div>
                        <div className="text-xs sm:text-sm font-bold leading-tight text-slate-800">Google Play</div>
                      </div>
                    </div>

                    {/* Hover State: 'Coming Soon' overlay */}
                    <div className="absolute inset-0 bg-[#695de3] text-white flex items-center justify-center gap-1.5 font-bold text-xs sm:text-sm font-heading rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-inner">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>Coming Soon</span>
                    </div>
                  </button>

                  {/* Tooltip bubble on hover */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-slate-900 text-white text-[10px] font-bold rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 transform translate-y-1 group-hover:translate-y-0">
                    Play Store listing in progress
                  </div>
                </div>

                {/* 2. Direct Package APK Button (Active Primary) */}
                <a
                  href={APK_CONFIG.url}
                  download={APK_CONFIG.fileName}
                  onClick={(e) => {
                    downloadApkFile();
                  }}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#fa6008] to-[#e05300] hover:from-[#e05300] hover:to-[#c2410c] shadow-[0_10px_25px_rgba(250,96,8,0.35)] hover:shadow-[0_15px_30px_rgba(250,96,8,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 font-heading cursor-pointer group min-w-[148px]"
                  title="Direct Download APK Package (67.3 MB)"
                >
                  <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform shrink-0" />
                  <div className="text-left">
                    <div className="text-[9px] leading-tight text-orange-100 font-bold uppercase tracking-wider">Direct Package</div>
                    <div className="text-xs sm:text-sm font-bold leading-tight text-white">Download APK</div>
                  </div>
                </a>

                {/* 3. Apple App Store Button (with interactive Coming Soon hover effect) */}
                <div className="relative group inline-block">
                  <button
                    type="button"
                    className="relative overflow-hidden bg-white hover:bg-slate-50 text-slate-900 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center gap-3 shadow-xs hover:shadow-md transition-all border border-indigo-100/90 font-heading cursor-pointer min-w-[148px]"
                    aria-label="Download on the App Store - Coming Soon"
                  >
                    {/* Normal State: Apple Icon & Text */}
                    <div className="flex items-center gap-2.5 transition-opacity duration-200 group-hover:opacity-0">
                      <AppleIcon className="w-5 h-5 shrink-0 text-slate-800" />
                      <div className="text-left">
                        <div className="text-[9px] leading-tight text-slate-400 font-bold uppercase tracking-wider">Download on the</div>
                        <div className="text-xs sm:text-sm font-bold leading-tight text-slate-800">App Store</div>
                      </div>
                    </div>

                    {/* Hover State: 'Coming Soon' overlay */}
                    <div className="absolute inset-0 bg-[#695de3] text-white flex items-center justify-center gap-1.5 font-bold text-xs sm:text-sm font-heading rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-inner">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>Coming Soon</span>
                    </div>
                  </button>

                  {/* Tooltip bubble on hover */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-slate-900 text-white text-[10px] font-bold rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20 transform translate-y-1 group-hover:translate-y-0">
                    iOS release in testing
                  </div>
                </div>

              </div>

              {/* Sub-bar info & Mutmiz-style Floating Trust / Verified Rating Pill */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
                <div className="inline-flex items-center gap-2.5 sm:gap-3 bg-white px-3.5 py-1.5 rounded-full border border-indigo-100 shadow-xs">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-black text-slate-900 font-heading">4.9</span>
                  </div>
                  <div className="h-3 w-px bg-slate-200" />
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Enterprise Verified Hubs</span>
                  </div>
                  <div className="h-3 w-px bg-slate-200" />
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#695de3] uppercase tracking-wider">
                    India • Malaysia • SG
                  </span>
                </div>

                <a
                  href="#features"
                  className="text-xs font-semibold text-slate-600 hover:text-[#695de3] underline underline-offset-4 transition-colors font-heading"
                >
                  Explore Core Features ↓
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Straight Phone running video + Flanking UI Cards without blocking screen */}
          <div className="lg:col-span-6 flex justify-center items-center relative z-20">
            
            {/* The Main Phone Container with floating elements */}
            <div className="relative w-full max-w-[280px] sm:max-w-[310px] xl:max-w-[330px] flex flex-col items-center justify-center">
              
              {/* Floating Card 1: Left Flank (Tasks Overview Widget - anchored at the outer edge of mobile) */}
              <div className="absolute right-[calc(100%-8px)] sm:right-[calc(100%-12px)] xl:right-[calc(100%-14px)] top-4 sm:top-8 z-20 hidden sm:block animate-widget-slow pointer-events-none select-none">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-indigo-100/90 shadow-[0_12px_35px_rgba(105,93,227,0.14)] space-y-2 min-w-[175px] sm:min-w-[190px]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-800 font-heading">Tasks List</span>
                    <span className="text-[10px] font-bold text-[#695de3] bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">+ Add Task</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-lg bg-emerald-50/80 text-emerald-800 font-medium text-[10px] sm:text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">Daily Site Plan • Approved</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-lg bg-amber-50/80 text-amber-800 font-medium text-[10px] sm:text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span className="truncate">Structural Review • 4h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Right Flank (GPS Fix Widget - anchored at the outer edge of mobile) */}
              <div className="absolute left-[calc(100%-8px)] sm:left-[calc(100%-12px)] xl:left-[calc(100%-14px)] top-16 sm:top-20 z-20 hidden sm:block animate-widget-fast pointer-events-none select-none">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-indigo-100/90 shadow-[0_12px_35px_rgba(105,93,227,0.14)] space-y-1.5 min-w-[160px] sm:min-w-[175px]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-600 shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-400">Geofence Lock</div>
                      <div className="text-xs font-bold text-slate-900 font-heading">Office: 150m Radius</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 sm:py-1 rounded-lg border border-emerald-200 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>GPS Fix Verified & Active</span>
                  </div>
                </div>
              </div>

              {/* Floating Card 3: Bottom Avatars & Count */}
              <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap pointer-events-none select-none">
                <div className="flex items-center gap-2.5 sm:gap-3 bg-white px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-indigo-100 shadow-[0_10px_25px_rgba(105,93,227,0.15)]">
                  <div className="flex -space-x-2">
                    <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#695de3] text-white font-bold text-[8px] sm:text-[9px] flex items-center justify-center border-2 border-white shadow-xs">APS</div>
                    <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-[#fa6008] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center border-2 border-white shadow-xs">AP</div>
                    <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-full bg-emerald-500 text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center border-2 border-white shadow-xs">SM</div>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 font-heading">
                    Active in Jaipur & Johor Bahru
                  </div>
                </div>
              </div>

              {/* The Modern Straight Smartphone Device Frame */}
              <div className="relative w-full transition-transform duration-700 hover:scale-[1.02] animate-phone-float group/phone">
                
                {/* Physical Titanium/Silver Phone Chassis */}
                <div className="relative rounded-[50px] p-[2.5px] bg-gradient-to-b from-slate-200 via-slate-100 to-slate-300 border-[2px] border-slate-300/90 shadow-[0_30px_70px_-15px_rgba(24,21,59,0.25),0_0_0_1px_rgba(255,255,255,0.9)_inset,0_10px_20px_-5px_rgba(24,21,59,0.1)]">
                  
                  {/* Antenna isolation lines */}
                  <div className="absolute top-[48px] -left-[2.5px] w-[2.5px] h-[3px] bg-slate-400/80 rounded-l-xs pointer-events-none" />
                  <div className="absolute top-[48px] -right-[2.5px] w-[2.5px] h-[3px] bg-slate-400/80 rounded-r-xs pointer-events-none" />
                  <div className="absolute bottom-[48px] -left-[2.5px] w-[2.5px] h-[3px] bg-slate-400/80 rounded-l-xs pointer-events-none" />
                  <div className="absolute bottom-[48px] -right-[2.5px] w-[2.5px] h-[3px] bg-slate-400/80 rounded-r-xs pointer-events-none" />

                  {/* Hardware buttons */}
                  <div className="absolute -left-[5px] top-[75px] w-[3px] h-[18px] bg-gradient-to-r from-slate-200 to-slate-400 rounded-l-sm shadow-xs pointer-events-none" />
                  <div className="absolute -left-[5px] top-[108px] w-[3px] h-[36px] bg-gradient-to-r from-slate-200 to-slate-400 rounded-l-sm shadow-xs pointer-events-none" />
                  <div className="absolute -left-[5px] top-[152px] w-[3px] h-[36px] bg-gradient-to-r from-slate-200 to-slate-400 rounded-l-sm shadow-xs pointer-events-none" />
                  <div className="absolute -right-[5px] top-[118px] w-[3px] h-[50px] bg-gradient-to-l from-slate-200 to-slate-400 rounded-r-sm shadow-xs pointer-events-none" />

                  {/* Inner Dark Bezel */}
                  <div className="relative rounded-[47px] bg-slate-950 p-[6.5px] shadow-[inset_0_0_4px_rgba(0,0,0,0.8)]">

                    {/* Top Speaker Ear Slit */}
                    <div className="absolute top-[4.5px] left-1/2 -translate-x-1/2 w-14 h-[3.5px] bg-slate-800 rounded-full z-30 shadow-inner ring-1 ring-black/40 pointer-events-none" />

                    {/* Inner Screen Display (aspect 560/996) */}
                    <div 
                      className="relative w-full aspect-[560/996] rounded-[40px] overflow-hidden bg-black flex items-center justify-center shadow-inner select-none cursor-pointer"
                      onClick={() => { if (showSpeedMenu) setShowSpeedMenu(false); }}
                    >

                      {/* Video Element running compressed LogMitra training video */}
                      <video
                        ref={videoRef}
                        src="./logmitra-mobile-video.mp4"
                        poster="./mobile-video-poster.webp"
                        className="w-full h-full object-cover select-none"
                        autoPlay
                        loop
                        muted={isMuted}
                        playsInline
                        preload="auto"
                        onClick={togglePlayPause}
                        onTimeUpdate={handleTimeUpdate}
                        onLoadedMetadata={handleLoadedMetadata}
                        onPlay={() => {
                          if (videoRef.current) {
                            videoRef.current.playbackRate = playbackSpeed;
                          }
                        }}
                      />

                      {/* Dynamic Island Capsule */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[90px] h-[22px] bg-black rounded-full z-30 flex items-center justify-between px-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.8)] pointer-events-none border border-slate-800/40">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0a1128] ring-1 ring-[#1e293b]/70 flex items-center justify-center shadow-inner">
                          <div className="w-1 h-1 rounded-full bg-[#1e40af]/60" />
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#030712] ring-1 ring-[#1e293b]/40 flex items-center justify-center">
                          <div className="w-0.5 h-0.5 rounded-full bg-emerald-500/60" />
                        </div>
                      </div>

                      {/* Centered Play Button when paused */}
                      {!isPlaying && (
                        <button
                          type="button"
                          onClick={togglePlayPause}
                          className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-slate-950/75 border border-white/20 text-white flex items-center justify-center shadow-2xl backdrop-blur-md z-30 hover:scale-110 transition-transform cursor-pointer"
                          aria-label="Resume video playback"
                        >
                          <Play className="w-6 h-6 text-[#fa6008] ml-1 fill-[#fa6008]" />
                        </button>
                      )}

                      {/* Functional Video Scrubber Dock (Visible on Phone Hover) */}
                      <div 
                        className={`absolute bottom-0 inset-x-0 pt-7 pb-2.5 px-3.5 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-transparent z-30 flex flex-col gap-1.5 transition-opacity duration-300 ${
                          showSpeedMenu || !isPlaying
                            ? 'opacity-100 pointer-events-auto'
                            : 'opacity-0 pointer-events-none group-hover/phone:opacity-100 group-hover/phone:pointer-events-auto'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Seek Progress Bar */}
                        <div className="relative w-full flex items-center py-1 group/seek cursor-pointer select-none">
                          <div className="w-full h-1.5 group-hover/seek:h-2 bg-white/25 rounded-full overflow-hidden transition-all duration-150">
                            <div
                              className="h-full bg-gradient-to-r from-amber-500 to-[#fa6008] rounded-full transition-all duration-75"
                              style={{ width: `${progressPercent}%` }}
                            />
                          </div>

                          <div
                            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-[#fa6008] rounded-full shadow-[0_2px_8px_rgba(250,96,8,0.5)] pointer-events-none transition-transform duration-150 group-hover/seek:scale-125"
                            style={{ left: `${progressPercent}%` }}
                          />

                          <input
                            type="range"
                            min="0"
                            max={duration || 100}
                            step="0.1"
                            value={currentTime}
                            onChange={handleSeekChange}
                            onMouseDown={() => setIsSeeking(true)}
                            onMouseUp={() => setIsSeeking(false)}
                            onTouchStart={() => setIsSeeking(true)}
                            onTouchEnd={() => setIsSeeking(false)}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            aria-label="Video seek slider"
                          />
                        </div>

                        {/* Controls Row */}
                        <div className="flex items-center justify-between text-white text-xs pt-0.5">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={togglePlayPause}
                              className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                              title={isPlaying ? "Pause" : "Play"}
                              aria-label={isPlaying ? "Pause" : "Play"}
                            >
                              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                            </button>
                            <span className="text-[10px] font-mono text-slate-300 tracking-tight font-medium select-none">
                              {formatTime(currentTime)} / {formatTime(duration)}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            {/* Speed Selector with Popover Menu */}
                            <div className="relative" ref={speedMenuRef}>
                              {/* Floating Speed Dropdown Menu */}
                              {showSpeedMenu && (
                                <div 
                                  className="absolute bottom-full right-0 mb-2 py-1 px-1 bg-slate-900/95 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl flex flex-col gap-0.5 z-40 min-w-[76px]"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <div className="text-[9px] uppercase tracking-wider font-bold text-slate-400 px-2 py-0.5 border-b border-white/10 mb-0.5 font-heading">
                                    Speed
                                  </div>
                                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                                    <button
                                      key={speed}
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        changeSpeed(speed);
                                      }}
                                      className={`w-full text-left px-2 py-1 text-[11px] font-mono font-bold rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                                        playbackSpeed === speed
                                          ? 'bg-[#fa6008] text-white shadow-xs'
                                          : 'text-slate-200 hover:bg-white/15'
                                      }`}
                                    >
                                      <span>{speed}x</span>
                                      {playbackSpeed === speed && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-white ml-1" />
                                      )}
                                    </button>
                                  ))}
                                </div>
                              )}

                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setShowSpeedMenu(!showSpeedMenu);
                                }}
                                className={`px-2 py-0.5 rounded-md text-[10px] font-bold font-mono transition-all border flex items-center gap-0.5 cursor-pointer ${
                                  playbackSpeed !== 1 || showSpeedMenu
                                    ? 'bg-[#fa6008] text-white border-[#fa6008] shadow-xs'
                                    : 'bg-white/10 hover:bg-white/20 text-slate-200 border-white/20'
                                }`}
                                aria-label={`Playback speed: ${playbackSpeed}x`}
                                title="Playback speed"
                              >
                                <span>{playbackSpeed}x</span>
                              </button>
                            </div>

                            {/* Sound Toggle */}
                            <button
                              type="button"
                              onClick={toggleSound}
                              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
                              aria-label={isMuted ? "Unmute sound" : "Mute sound"}
                            >
                              {isMuted ? (
                                <VolumeX className="w-3.5 h-3.5 text-slate-300" />
                              ) : (
                                <Volume2 className="w-3.5 h-3.5 text-[#fa6008]" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Home Bar */}
                        <div className="w-20 h-1 bg-white/35 rounded-full mx-auto mt-1 pointer-events-none" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* Ground Shadow */}
              <div className="relative w-full flex flex-col items-center pointer-events-none -mt-4">
                <div className="w-[65%] h-3.5 bg-slate-900/30 rounded-[100%] blur-sm" />
                <div className="w-[85%] h-8 bg-iris-500/25 rounded-[100%] blur-xl -mt-2 animate-shadow-pulse" />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
