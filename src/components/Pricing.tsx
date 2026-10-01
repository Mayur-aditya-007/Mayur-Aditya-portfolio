'use client';

import React from 'react';
import { PORTFOLIO_DATA, PricingTier } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { trackWhatsAppClick } from '@/lib/analytics';
import { Check, X, MessageCircle, Clock, ShieldAlert, Sparkles, CreditCard } from 'lucide-react';

export const Pricing: React.FC = () => {
  const { lang } = useApp();
  const t = PORTFOLIO_DATA.i18n[lang];

  const handleWhatsApp = (tier: PricingTier) => {
    trackWhatsAppClick(`pricing_${tier.id}`, tier.whatsappMessage);
    const url = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${encodeURIComponent(
      tier.whatsappMessage
    )}`;
    window.open(url, '_blank');
  };

  return (
    <section id="pricing" className="py-24 relative bg-palette-cream/60 border-t border-palette-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-palette-indigo" />
            <span>{lang === 'hi' ? '100% स्पष्ट दरें' : 'No Surprises'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-palette-dark font-display">
            {t.pricingTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-palette-indigo font-medium">
            {t.pricingSubtitle}
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-14">
          {PORTFOLIO_DATA.pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 bg-white ${
                tier.popular
                  ? 'border-2 border-palette-dark shadow-2xl -translate-y-2'
                  : 'border-2 border-palette-taupe hover:border-palette-dark shadow-md'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-palette-dark text-palette-cream font-bold text-xs uppercase tracking-wider shadow-md">
                  {t.popularBadge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-palette-dark font-display">
                    {tier.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-palette-indigo font-mono font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{tier.timeline}</span>
                  </div>
                </div>

                <p className="text-xs text-palette-indigo font-medium mb-6">
                  {tier.subtitle}
                </p>

                {/* Price Display */}
                <div className="p-5 rounded-2xl bg-palette-cream/70 border border-palette-taupe mb-6">
                  <span className="text-[11px] text-palette-indigo block font-medium">Estimated Investment:</span>
                  <span className="text-2xl sm:text-3xl font-black text-palette-dark font-display">
                    {tier.priceRange}
                  </span>
                  <div className="text-[11px] text-palette-indigo font-medium mt-1.5">
                    <strong className="text-palette-dark font-bold">Ideal for:</strong> {tier.idealFor}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-palette-dark">
                    {t.whatIncluded}:
                  </div>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-palette-dark font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-emerald-800 font-bold" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Exclusions List */}
                {tier.exclusions.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-palette-taupe mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-palette-dark flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
                      <span>{t.whatExcluded}:</span>
                    </div>
                    {tier.exclusions.map((excl, eIdx) => (
                      <div key={eIdx} className="flex items-start gap-2 text-xs text-palette-indigo font-medium">
                        <X className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{excl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleWhatsApp(tier)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm bg-palette-dark hover:bg-emerald-700 text-palette-cream hover:text-white transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>
                  {lang === 'hi' ? 'इस पैकेज पर बात करें' : 'Get Quote on WhatsApp'}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Milestone Payment Assurance Bar */}
        <div className="p-7 sm:p-8 rounded-3xl bg-white border-2 border-palette-taupe flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-palette-cream border border-palette-taupe flex items-center justify-center flex-shrink-0">
              <CreditCard className="w-6 h-6 text-palette-dark" />
            </div>
            <div>
              <h4 className="text-base font-bold text-palette-dark">
                {lang === 'hi' ? '3-चरण माइलस्टोन आधारित भुगतान' : 'Milestone-Based Payment Protection'}
              </h4>
              <p className="text-xs text-palette-indigo font-medium mt-0.5">
                30% Kickoff Advance • 40% After Staging Demo Approval • 30% Upon Final Go-Live & Handover.
              </p>
            </div>
          </div>
          <div className="text-xs text-emerald-800 font-bold px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-300 flex-shrink-0">
            ✓ 0% Final Payment until 100% Satisfied
          </div>
        </div>
      </div>
    </section>
  );
};
