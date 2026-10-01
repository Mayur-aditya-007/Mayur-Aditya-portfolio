import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { ProjectsGrid } from '@/components/ProjectsGrid';
import { BotSimulator } from '@/components/BotSimulator';
import { Checklist } from '@/components/Checklist';
import { Process } from '@/components/Process';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';
import { Testimonials } from '@/components/Testimonials';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { StickyWhatsApp } from '@/components/StickyWhatsApp';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-palette-cream text-palette-dark flex flex-col justify-between selection:bg-palette-taupe selection:text-palette-dark">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <ProjectsGrid />
        <BotSimulator />
        <Checklist />
        <Process />
        <Pricing />
        <Faq />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
