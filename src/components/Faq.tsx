'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const { lang } = useApp();
  const t = PORTFOLIO_DATA.i18n[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 relative bg-palette-cream border-t border-palette-taupe">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-palette-indigo" />
            <span>{lang === 'hi' ? 'स्पष्टीकरण' : 'Honest Answers'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-palette-dark font-display">
            {t.faqTitle}
          </h2>
          <p className="mt-2.5 text-sm sm:text-lg text-palette-indigo font-medium">
            {t.faqSubtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {PORTFOLIO_DATA.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? 'border-palette-dark shadow-md'
                    : 'border-palette-taupe hover:border-palette-indigo shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <span className="text-[11px] sm:text-xs font-mono text-palette-indigo font-bold flex-shrink-0">
                      Q{idx + 1}.
                    </span>
                    <span className="text-sm sm:text-lg font-bold text-palette-dark font-display leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-palette-indigo flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-palette-dark' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-6 sm:pt-2 text-xs sm:text-sm text-palette-indigo leading-relaxed border-t border-palette-taupe/60 font-medium animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
