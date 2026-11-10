import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PillarsSection from './components/PillarsSection';
import OverviewSection from './components/OverviewSection';
import CoreFeatures from './components/CoreFeatures';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuidesSection from './components/GuidesSection';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import SectionDivider from './components/SectionDivider';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f5ff] text-slate-900 font-sans selection:bg-[#fa6008] selection:text-white relative overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar onDownloadClick={() => setIsDownloadOpen(true)} />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section (Home section with Video Phone & Store CTAs) */}
        <Hero onDownloadClick={() => setIsDownloadOpen(true)} />

        {/* Divider 1 */}
        <SectionDivider bg="bg-[#f7f5ff]" />

        {/* 2. Key Operational Pillars (Split-Color Curved Purple Block) */}
        <PillarsSection />

        {/* Divider 2 */}
        <SectionDivider bg="bg-[#f7f5ff]" />

        {/* 3. Product / Service Overview (Floating Tasks Stack & Key Statistics) */}
        <OverviewSection />

        {/* Divider 3 */}
        <SectionDivider bg="bg-white" />

        {/* 4. Comprehensive Feature Set (Tab Pills & 2x2 Feature Cards) */}
        <CoreFeatures />

        {/* Divider 4 */}
        <SectionDivider bg="bg-[#faf9fe]" />

        {/* 5. How It Works (Connected 5-Step Operational Pipeline) */}
        <HowItWorks />

        {/* Divider 5 */}
        <SectionDivider bg="bg-white" />

        {/* 6. Pricing Section (Interactive Employee Slider & Bundle Cards) */}
        <PricingSection onDownloadClick={() => setIsDownloadOpen(true)} />

        {/* Divider 6 */}
        <SectionDivider bg="bg-[#fdfcff]" />

        {/* 7. Enterprise Deployment Banner & Active Hubs (Jaipur, Johor Bahru, Singapore) */}
        <ContactSection onDownloadClick={() => setIsDownloadOpen(true)} />

        {/* Divider 7 */}
        <SectionDivider bg="bg-[#f7f5ff]" />

        {/* 8. Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Divider 8 */}
        <SectionDivider bg="bg-white" />

        {/* 9. Operational Guides / Resources */}
        <GuidesSection />
      </main>

      {/* Divider 9 */}
      <SectionDivider bg="bg-[#f7f5ff]" />

      {/* 9. Clean Modern Multi-Column Footer */}
      <Footer onDownloadClick={() => setIsDownloadOpen(true)} />

      {/* 10. Enterprise APK Download Modal */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
      />
    </div>
  );
}
