'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { trackWhatsAppClick } from '@/lib/analytics';
import { MessageCircle, X } from 'lucide-react';

export const StickyWhatsApp: React.FC = () => {
  const { lang } = useApp();
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    trackWhatsAppClick('floating_sticky_widget', 'Floating WhatsApp chat button');
    const msg =
      lang === 'hi'
        ? 'नमस्ते मयूर, मुझे अपनी संस्था / व्यवसाय के लिए वेबसाइट या WhatsApp AI बॉट के बारे में बात करनी है।'
        : 'Hi Mayur, I am on your portfolio and would like to chat about building a website or WhatsApp bot.';
    const url = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3">
      {/* Popover Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white border-2 border-palette-taupe text-palette-dark text-xs font-semibold shadow-2xl backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
          <span>
            {lang === 'hi' ? 'सीधे WhatsApp पर बात करें' : 'Chat directly with Mayur'}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-palette-indigo hover:text-palette-dark p-0.5 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/20 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 rounded-full bg-palette-dark border-2 border-white text-[9px] font-bold text-palette-cream flex items-center justify-center">
          1
        </span>
      </button>
    </div>
  );
};
