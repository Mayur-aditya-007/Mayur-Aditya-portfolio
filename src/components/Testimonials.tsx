'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { MessageSquareQuote, CheckCircle2, Building2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { lang } = useApp();

  return (
    <section className="py-24 relative bg-palette-cream border-t border-palette-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>{lang === 'hi' ? 'ग्राहक अनुभव' : 'Verified Reviews'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-palette-dark font-display">
            {lang === 'hi' ? 'संस्थाओं और व्यवसायों का विश्वास' : 'What Partners & Clients Say'}
          </h2>
          <p className="mt-3 text-base text-palette-indigo font-medium">
            {lang === 'hi'
              ? 'वास्तविक संस्थानों के साथ किए गए कार्य का अनुभव'
              : 'Direct feedback from our production platform deployments'}
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.testimonials.map((test) => (
            <div
              key={test.id}
              className="relative p-8 rounded-3xl bg-white border-2 border-palette-taupe flex flex-col justify-between shadow-md hover:border-palette-dark transition-all"
            >
              <div>
                <MessageSquareQuote className="w-8 h-8 text-palette-indigo mb-4" />
                <p className="text-sm text-palette-dark italic leading-relaxed mb-6 font-mono bg-palette-cream/70 p-4 rounded-2xl border border-dashed border-palette-taupe">
                  {test.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-palette-taupe">
                <div className="font-bold text-palette-dark text-sm font-display">
                  {test.clientName}
                </div>
                <div className="text-xs text-palette-indigo font-semibold">
                  {test.role}
                </div>
                <div className="text-xs text-palette-mauve font-medium flex items-center gap-1 mt-1">
                  <Building2 className="w-3.5 h-3.5 text-palette-indigo" />
                  <span>{test.organization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
