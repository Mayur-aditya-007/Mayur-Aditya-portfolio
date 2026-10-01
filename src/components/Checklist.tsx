'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { CheckCircle2, Zap, Gauge, Award } from 'lucide-react';

export const Checklist: React.FC = () => {
  const { lang } = useApp();
  const t = PORTFOLIO_DATA.i18n[lang];

  return (
    <section className="py-16 sm:py-24 relative bg-palette-cream border-t border-palette-taupe">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Award className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'hi' ? 'गुणवत्ता का वादा' : 'Standard Inclusions'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-palette-dark font-display">
            {t.checklistTitle}
          </h2>
          <p className="mt-2.5 text-sm sm:text-lg text-palette-indigo font-medium">
            {t.checklistSubtitle}
          </p>
        </div>

        {/* Real Lighthouse Benchmark Cards */}
        <div className="mb-8 sm:mb-14 p-4 sm:p-8 rounded-3xl bg-white border-2 border-palette-taupe shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6 pb-4 sm:pb-6 border-b border-palette-taupe">
            <div>
              <div className="flex items-center gap-2">
                <Gauge className="w-5 h-5 text-palette-dark" />
                <h3 className="text-base sm:text-lg font-bold text-palette-dark">
                  {lang === 'hi' ? 'Google Lighthouse परफॉर्मेंस स्कोर' : 'Google Lighthouse Audit Benchmarks'}
                </h3>
              </div>
              <p className="text-xs text-palette-indigo font-medium mt-1">
                Real audit scores measured on live production builds (PSSOU, Green NST, Gram Bharti)
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold self-start md:self-auto">
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>Core Web Vitals PASSED</span>
            </div>
          </div>

          {/* 4 Score dials */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-6">
            {PORTFOLIO_DATA.lighthouseScores.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3.5 sm:p-6 rounded-2xl bg-palette-cream border border-palette-taupe text-center group hover:border-palette-dark transition-colors"
              >
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center rounded-full border-3 sm:border-4 border-palette-dark bg-white mb-2 sm:mb-3 shadow-sm">
                  <span className="text-lg sm:text-2xl font-black text-palette-dark font-mono">
                    {item.score}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-palette-dark">{item.label}</div>
                <div className="text-[10px] sm:text-[11px] text-palette-indigo font-medium mt-0.5">Audit Verified</div>
              </div>
            ))}
          </div>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {PORTFOLIO_DATA.technicalChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border-2 border-palette-taupe hover:border-palette-dark transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-palette-cream text-palette-dark border border-palette-taupe">
                    {item.badge}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-palette-dark mb-1 font-display">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-palette-indigo leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
