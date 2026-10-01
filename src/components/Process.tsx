'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { Compass, FileText, Code, CheckCircle, Rocket } from 'lucide-react';

export const Process: React.FC = () => {
  const { lang } = useApp();
  const t = PORTFOLIO_DATA.i18n[lang];

  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-palette-dark" />;
      case 1:
        return <FileText className="w-5 h-5 text-palette-indigo" />;
      case 2:
        return <Code className="w-5 h-5 text-emerald-700" />;
      case 3:
        return <CheckCircle className="w-5 h-5 text-purple-700" />;
      case 4:
        return <Rocket className="w-5 h-5 text-amber-700" />;
      default:
        return <CheckCircle className="w-5 h-5 text-palette-dark" />;
    }
  };

  return (
    <section id="process" className="py-24 relative bg-palette-cream border-t border-palette-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            {lang === 'hi' ? 'भरोसेमंद कार्यप्रणाली' : 'Zero-Risk Workflow'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-palette-dark font-display">
            {t.processTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-palette-indigo font-medium">
            {t.processSubtitle}
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {PORTFOLIO_DATA.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="group relative p-7 sm:p-8 rounded-3xl bg-white border-2 border-palette-taupe hover:border-palette-dark transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5 pb-5 border-b border-palette-taupe">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-palette-dark text-palette-cream flex items-center justify-center font-display font-black text-base shadow-sm">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-palette-dark font-display">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-palette-indigo bg-palette-cream px-3 py-1.5 rounded-xl border border-palette-taupe font-semibold">
                  {getStepIcon(idx)}
                  <span>Phase {idx + 1} of 5</span>
                </div>
              </div>

              {/* Step details grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium">
                <div className="p-4 rounded-2xl bg-palette-cream/70 border border-palette-taupe">
                  <div className="font-bold text-palette-dark uppercase tracking-wider mb-1.5">
                    {t.whatIDo}
                  </div>
                  <p className="text-palette-indigo leading-relaxed">{step.whatIDo}</p>
                </div>

                <div className="p-4 rounded-2xl bg-palette-cream/70 border border-palette-taupe">
                  <div className="font-bold text-palette-dark uppercase tracking-wider mb-1.5">
                    {t.whatYouProvide}
                  </div>
                  <p className="text-palette-indigo leading-relaxed">{step.whatYouProvide}</p>
                </div>
              </div>

              {/* Output Pill */}
              <div className="mt-5 pt-3 flex items-center gap-2 text-xs">
                <strong className="text-emerald-800 font-bold">{t.outputLabel}:</strong>
                <span className="text-palette-dark font-semibold">{step.output}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
