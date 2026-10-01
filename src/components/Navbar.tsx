'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { trackWhatsAppClick } from '@/lib/analytics';
import { MessageCircle, Menu, X, Languages } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { lang, toggleLang } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'hi' ? 'सेवाएं' : 'Services', href: '/#services' },
    { label: lang === 'hi' ? 'प्रोजेक्ट्स' : 'Work', href: '/#work' },
    { label: lang === 'hi' ? 'AI बॉट डेमो' : 'Bot Demo', href: '/#bot-demo' },
    { label: lang === 'hi' ? 'प्रक्रिया' : 'Process', href: '/#process' },
    { label: lang === 'hi' ? 'मूल्य' : 'Pricing', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
  ];

  const handleWhatsApp = () => {
    trackWhatsAppClick('navbar_cta', 'Navbar consultation');
    const url = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${encodeURIComponent(
      'Hi Mayur, I am on your portfolio and would like to discuss a project.'
    )}`;
    window.open(url, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-palette-cream/90 backdrop-blur-md border-b border-palette-taupe shadow-md shadow-palette-dark/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Live Status */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-palette-dark text-palette-cream flex items-center justify-center font-bold font-display text-lg shadow-md group-hover:bg-palette-indigo transition-all">
            MR
          </div>
          <div>
            <div className="font-display font-bold text-base sm:text-lg text-palette-dark flex items-center gap-2">
              <span>{PORTFOLIO_DATA.personal.name}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-palette-indigo">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-emerald-700 font-semibold">{PORTFOLIO_DATA.personal.availability}</span>
              <span className="hidden md:inline text-palette-mauve">• MP, India</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-palette-indigo hover:text-palette-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switch */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-palette-taupe bg-white text-palette-dark hover:border-palette-indigo hover:bg-palette-cream transition-all shadow-sm"
            title="Switch Language / भाषा बदलें"
          >
            <Languages className="w-3.5 h-3.5 text-palette-indigo" />
            <span>{lang === 'en' ? 'हिंदी' : 'English'}</span>
          </button>

          {/* WhatsApp CTA */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-900/10 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1.5 rounded-lg text-xs border border-palette-taupe bg-white text-palette-dark font-bold"
          >
            {lang === 'en' ? 'हिं' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white border border-palette-taupe text-palette-dark"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-palette-cream/95 backdrop-blur-xl border-b border-palette-taupe px-6 py-5 animate-slide-up shadow-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-palette-dark hover:text-palette-indigo"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-palette-taupe flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsApp();
                }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 text-white font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp ({PORTFOLIO_DATA.personal.phone})</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
