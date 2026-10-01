'use client';

import React from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { trackWhatsAppClick } from '@/lib/analytics';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { MobileFrame } from '@/components/ui/MobileFrame';
import Image from 'next/image';
import { MessageCircle, ArrowRight, ShieldCheck, CheckCircle2, Languages, Clock } from 'lucide-react';

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
    <section className="relative pt-24 pb-14 sm:pt-36 sm:pb-24 overflow-hidden bg-palette-cream bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[200px] sm:h-[350px] bg-palette-taupe/30 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[200px] sm:w-[350px] h-[180px] sm:h-[300px] bg-palette-mauve/20 rounded-full blur-[60px] sm:blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Top Location & Trust Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-[11px] sm:text-xs md:text-sm font-semibold mb-4 sm:mb-6 shadow-sm animate-fade-in">
            <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full overflow-hidden bg-palette-dark flex-shrink-0">
              <Image src="/logo.png" alt="Mayur Logo" fill className="object-cover" />
            </div>
            <span>{t.heroTag}</span>
          </div>

          {/* Core Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-palette-dark max-w-4xl leading-[1.2] sm:leading-[1.15] font-display">
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
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-palette-indigo max-w-2xl leading-relaxed font-medium px-1">
            {t.heroSubline}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-950/15 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              <span>{t.chatWhatsApp}</span>
            </button>

            <Link
              href="#work"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-palette-dark hover:bg-palette-indigo text-palette-cream font-semibold text-sm sm:text-base shadow-md transition-all group active:scale-[0.98]"
            >
              <span>{t.seeMyWork}</span>
              <ArrowRight className="w-4 h-4 text-palette-taupe group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Strip */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5 w-full max-w-4xl pt-6 sm:pt-8 border-t border-palette-taupe">
            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white border border-palette-taupe shadow-sm text-left">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-palette-dark truncate">{t.livePlatforms}</div>
                <div className="text-[10px] sm:text-[11px] text-palette-indigo font-medium truncate">Tested in production</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white border border-palette-taupe shadow-sm text-left">
              <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-palette-indigo flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-palette-dark truncate">{t.bilingualSupport}</div>
                <div className="text-[10px] sm:text-[11px] text-palette-indigo font-medium truncate">Hindi & English</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white border border-palette-taupe shadow-sm text-left">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-700 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-palette-dark truncate">{t.replyTime}</div>
                <div className="text-[10px] sm:text-[11px] text-palette-indigo font-medium truncate">Direct WhatsApp</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white border border-palette-taupe shadow-sm text-left">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-purple-700 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-palette-dark truncate">{t.codeOwnership}</div>
                <div className="text-[10px] sm:text-[11px] text-palette-indigo font-medium truncate">100% Handover</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Device Mockup Showcase */}
        <div className="mt-12 sm:mt-16 relative max-w-5xl mx-auto pb-4 sm:pb-0">
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
          <div className="absolute -bottom-4 -right-2 sm:-bottom-10 sm:-right-6 md:-right-10 z-20 w-24 sm:w-44 md:w-56 hover:scale-105 transition-transform duration-300">
            <MobileFrame
              imageSrc="/projects/greennst-agro/mobile.png"
              alt="Green NST Agro Industries Mobile Store"
            />
          </div>

          {/* Tertiary Mobile Overlay (Gram Bharti) - desktop only */}
          <div className="hidden lg:block absolute -bottom-8 -left-10 z-20 w-48 hover:scale-105 transition-transform duration-300">
            <MobileFrame
              imageSrc="/projects/gram-bharti/mobile.png"
              alt="Gram Bharti School Data Portal"
            />
          </div>

          {/* Live Indicator Pill */}
          <div className="absolute -bottom-3.5 sm:-bottom-5 left-1/2 -translate-x-1/2 z-30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white border border-palette-taupe text-[10px] sm:text-xs font-bold text-palette-dark shadow-md flex items-center gap-1.5 sm:gap-2 whitespace-nowrap max-w-[92%] truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping flex-shrink-0" />
            <span className="truncate">Live Production Screenshots</span>
          </div>
        </div>
      </div>
    </section>
  );
};
