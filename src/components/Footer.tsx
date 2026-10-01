'use client';

import React from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import Image from 'next/image';
import { ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-palette-dark text-palette-cream/80 border-t border-palette-indigo pt-12 pb-8 sm:pt-16 sm:pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-palette-indigo/60">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-palette-dark border border-palette-indigo flex items-center justify-center flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Mayur Aditya Rawat Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-base sm:text-lg font-bold text-palette-cream font-display">
                {PORTFOLIO_DATA.personal.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-palette-taupe max-w-md leading-relaxed font-normal">
              Full-stack developer & automation engineer based in Madhya Pradesh, India. Building fast Next.js websites, Express backends with OTP/cron automation, and custom bilingual WhatsApp AI bots for businesses and institutions.
            </p>

            <div className="flex items-center gap-2 text-palette-cream font-semibold text-[11px] sm:text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>100% Code & Asset Handover Guarantee on all client projects.</span>
            </div>
          </div>

          {/* Col 2: Featured Work */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-palette-cream mb-3 sm:mb-4 font-mono">
              {lang === 'hi' ? 'प्रोजेक्ट्स' : 'Featured Work'}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 font-medium text-xs">
              {PORTFOLIO_DATA.projects.map((proj) => (
                <li key={proj.slug}>
                  <Link
                    href={`/work/${proj.slug}`}
                    className="hover:text-palette-cream transition-colors text-palette-taupe"
                  >
                    {proj.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-palette-cream mb-3 sm:mb-4 font-mono">
              {lang === 'hi' ? 'संपर्क सूत्र' : 'Direct Reach'}
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 font-medium text-xs">
              <li>
                <strong className="text-palette-cream">WhatsApp:</strong>{' '}
                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-emerald-300 font-semibold"
                >
                  +91 {PORTFOLIO_DATA.personal.phone}
                </a>
              </li>
              <li>
                <strong className="text-palette-cream">Email:</strong>{' '}
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="hover:text-palette-cream transition-colors text-palette-taupe truncate"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </li>
              <li>
                <strong className="text-palette-cream">Location:</strong>{' '}
                <span className="text-palette-taupe">{PORTFOLIO_DATA.personal.location}</span>
              </li>
              <li className="text-emerald-300 pt-1 font-bold">
                ● {PORTFOLIO_DATA.personal.slaResponseTime}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 font-medium text-palette-taupe text-[11px] sm:text-xs text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-palette-cream transition-colors py-1 px-2"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
