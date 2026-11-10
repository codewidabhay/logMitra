import React from 'react';

export default function SectionDivider({ bg = "bg-[#f7f5ff]" }) {
  return (
    <div className={`w-full py-3 sm:py-4 ${bg} relative z-10 flex items-center justify-center overflow-hidden`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center">
          {/* Gradient Divider Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-200/90 to-transparent" />
          
          {/* Centered Brand Color Accent */}
          <div className={`absolute px-3.5 py-1 ${bg} flex items-center gap-1.5 rounded-full border border-indigo-100/80 shadow-xs`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#695de3]" />
            <span className="w-2 h-2 rounded-full bg-[#fa6008]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#695de3]" />
          </div>
        </div>
      </div>
    </div>
  );
}
