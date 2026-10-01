'use client';

import React from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { trackWhatsAppClick } from '@/lib/analytics';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { MobileFrame } from '@/components/ui/MobileFrame';
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Languages, Clock, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const { lang } = useApp();
  const t = PORTFOLIO_DATA.i18n[lang];

  const handleWhatsApp = () => {
    trackWhatsAppClick('hero_cta', 'Hero primary CTA');
    const url = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${encodeURIComponent(
      lang === 'hi'
        ? 'नमस्ते मयूर! मैंने आपका पोर्टफोलियो देखा। मुझे अपने प्रोजेक्ट के लिए बात करनी है।'
        : 'Hi Mayur! I saw your portfolio and would like to discuss a project.'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-palette-cream bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-palette-taupe/30 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-palette-mauve/20 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Location & Trust Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs sm:text-sm font-semibold mb-6 shadow-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-palette-indigo" />
            <span>{t.heroTag}</span>
          </div>

          {/* Core Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-palette-dark max-w-4xl leading-[1.15] sm:leading-[1.18] font-display">
            {lang === 'hi' ? (
              <>
                मैं ऐसी <span className="text-palette-indigo underline decoration-palette-taupe/80 underline-offset-4">वेबसाइट</span> बनाता हूँ जो Google पर दिखें, ऐसे <span className="text-palette-indigo underline decoration-palette-taupe/80 underline-offset-4">बैकएंड</span> जो ऑटोपायलट पर चलें, और ऐसे <span className="text-emerald-800">WhatsApp बॉट</span> जो 24/7 जवाब दें।
              </>
            ) : (
              <>
                I build <span className="text-palette-indigo underline decoration-palette-taupe/80 underline-offset-4">websites that get found</span>, backends that run on autopilot, and <span className="text-emerald-800">WhatsApp AI bots</span> that answer customers for you.
              </>
            )}
          </h1>

          {/* Plain Language Sub-line */}
          <p className="mt-6 text-base sm:text-xl text-palette-indigo max-w-2xl leading-relaxed font-medium">
            {t.heroSubline}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-base shadow-lg shadow-emerald-950/15 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.chatWhatsApp}</span>
            </button>

            <Link
              href="#work"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-palette-dark hover:bg-palette-indigo text-palette-cream font-semibold text-base shadow-md transition-all group"
            >
              <span>{t.seeMyWork}</span>
              <ArrowRight className="w-4 h-4 text-palette-taupe group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-8 border-t border-palette-taupe">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-palette-taupe shadow-sm text-left">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm font-bold text-palette-dark">{t.livePlatforms}</div>
                <div className="text-[11px] text-palette-indigo font-medium">Tested in real traffic</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-palette-taupe shadow-sm text-left">
              <Languages className="w-5 h-5 text-palette-indigo flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm font-bold text-palette-dark">{t.bilingualSupport}</div>
                <div className="text-[11px] text-palette-indigo font-medium">Natural Hindi & English</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-palette-taupe shadow-sm text-left">
              <Clock className="w-5 h-5 text-blue-700 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm font-bold text-palette-dark">{t.replyTime}</div>
                <div className="text-[11px] text-palette-indigo font-medium">Direct WhatsApp access</div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-palette-taupe shadow-sm text-left">
              <ShieldCheck className="w-5 h-5 text-purple-700 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm font-bold text-palette-dark">{t.codeOwnership}</div>
                <div className="text-[11px] text-palette-indigo font-medium">Zero vendor lock-in</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Device Mockup Showcase */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          {/* Main Desktop Showcase (PSSOU Admissions) */}
          <div className="relative z-10">
            <BrowserFrame
              url="https://pssou.vercel.app/"
              imageSrc="/projects/pssou-admissions/desktop.png"
              alt="Pt. Sundarlal Sharma Open University Admissions Portal"
              aspectRatio="aspect-[16/9]"
              className="shadow-2xl shadow-palette-dark/15"
            />
          </div>

          {/* Secondary Mobile Overlay (Green NST Agro) */}
          <div className="hidden sm:block absolute -bottom-10 -right-6 md:-right-10 z-20 w-44 md:w-56 hover:scale-105 transition-transform duration-300">
            <MobileFrame
              imageSrc="/projects/greennst-agro/mobile.png"
              alt="Green NST Agro Industries Mobile Store"
            />
          </div>

          {/* Tertiary Mobile Overlay (Gram Bharti) */}
          <div className="hidden lg:block absolute -bottom-8 -left-10 z-20 w-48 hover:scale-105 transition-transform duration-300">
            <MobileFrame
              imageSrc="/projects/gram-bharti/mobile.png"
              alt="Gram Bharti School Data Portal"
            />
          </div>

          {/* Live Indicator Pill */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 px-4 py-1.5 rounded-full bg-white border border-palette-taupe text-xs font-bold text-palette-dark shadow-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span>Showing Real Live Production Screenshots</span>
          </div>
        </div>
      </div>
    </section>
  );
};
