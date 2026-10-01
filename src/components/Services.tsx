'use client';

import React from 'react';
import { PORTFOLIO_DATA, Service } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { trackWhatsAppClick } from '@/lib/analytics';
import { Globe, Server, Bot, Check, MessageCircle, Clock } from 'lucide-react';

export const Services: React.FC = () => {
  const { lang } = useApp();
  const t = PORTFOLIO_DATA.i18n[lang];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-palette-dark" />;
      case 'Server':
        return <Server className="w-6 h-6 text-palette-indigo" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-emerald-700" />;
      default:
        return <Globe className="w-6 h-6 text-palette-dark" />;
    }
  };

  const handleWhatsAppService = (service: Service) => {
    trackWhatsAppClick(`service_${service.id}`, service.whatsappMessage);
    const url = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${encodeURIComponent(
      service.whatsappMessage
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative bg-palette-cream/50 border-t border-palette-taupe">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            {lang === 'hi' ? 'विशेषज्ञ सेवाएं' : 'Core Capabilities'}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-palette-dark font-display">
            {t.servicesTitle}
          </h2>
          <p className="mt-2.5 text-sm sm:text-lg text-palette-indigo font-medium">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* 3 Service Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_DATA.services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-5 sm:p-8 rounded-3xl bg-white border-2 border-palette-taupe hover:border-palette-dark transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5"
            >
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-palette-cream flex items-center justify-center border border-palette-taupe group-hover:bg-white transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-palette-cream border border-palette-taupe text-xs font-mono text-palette-dark font-semibold">
                    <Clock className="w-3.5 h-3.5 text-palette-indigo" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-palette-dark font-display">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-palette-indigo mt-1 mb-3 sm:mb-4">
                  {service.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-palette-indigo leading-relaxed mb-5 sm:mb-6 font-normal">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 pt-4 sm:pt-5 border-t border-palette-taupe/60">
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-palette-dark">
                    {lang === 'hi' ? 'प्रोजेक्ट में क्या मिलेगा:' : 'What You Get:'}
                  </div>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-palette-indigo font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-emerald-800 font-bold" />
                      </div>
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & WhatsApp Action */}
              <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-palette-taupe/80">
                <div className="flex items-baseline justify-between mb-4 sm:mb-5">
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-palette-indigo block font-medium">
                      {t.startingFrom}
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-palette-dark font-display">
                      {service.startingPrice}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-palette-indigo font-medium text-right max-w-[55%]">
                    {service.priceNote}
                  </span>
                </div>

                <button
                  onClick={() => handleWhatsAppService(service)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-palette-dark hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-md group/btn active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-current transition-colors" />
                  <span>{t.discussOnWA}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
