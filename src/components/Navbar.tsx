'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { trackWhatsAppClick } from '@/lib/analytics';
import Image from 'next/image';
import {
  MessageCircle,
  Menu,
  X,
  Languages,
  ArrowRight,
  Mail,
} from 'lucide-react';

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
          ? 'bg-palette-cream/95 backdrop-blur-md border-b border-palette-taupe shadow-md shadow-palette-dark/5 py-2.5 sm:py-3'
          : 'bg-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand & Live Status */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-palette-dark border border-palette-taupe shadow-md group-hover:scale-105 transition-all flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Mayur Aditya Rawat Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="min-w-0">
            <div className="font-display font-bold text-sm sm:text-lg text-palette-dark flex items-center gap-1.5 truncate">
              <span className="truncate">{PORTFOLIO_DATA.personal.name}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-palette-indigo truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse flex-shrink-0" />
              <span className="text-emerald-700 font-semibold truncate">{PORTFOLIO_DATA.personal.availability}</span>
              <span className="hidden md:inline text-palette-mauve flex-shrink-0">• MP, India</span>
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

        {/* Desktop Action Controls */}
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

        {/* Mobile quick actions + Hamburger */}
        <div className="flex sm:hidden items-center gap-1.5">
          {/* Mobile WhatsApp Quick Button */}
          <button
            onClick={handleWhatsApp}
            className="p-2 rounded-xl bg-emerald-700 text-white shadow-sm flex items-center justify-center active:scale-95"
            title="Chat on WhatsApp"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </button>

          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLang}
            className="px-2.5 py-1.5 rounded-xl text-xs border border-palette-taupe bg-white text-palette-dark font-bold active:scale-95 shadow-sm"
            title="Change Language"
          >
            {lang === 'en' ? 'हिं' : 'EN'}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-palette-taupe text-palette-dark shadow-sm active:scale-95 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Fullscreen / Slide Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 w-full max-h-[calc(100vh-65px)] bg-palette-cream/98 backdrop-blur-2xl border-b border-palette-taupe p-4 sm:p-5 flex flex-col justify-between overflow-y-auto animate-slide-up shadow-2xl z-50">
          {/* Header info in drawer */}
          <div className="space-y-3.5">
            <div className="p-3 rounded-2xl bg-white border border-palette-taupe flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                <span className="font-bold text-palette-dark">Available for new projects</span>
              </div>
              <span className="text-palette-indigo font-medium">MP, India</span>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/70 hover:bg-white text-sm sm:text-base font-bold text-palette-dark border border-palette-taupe/60 transition-all active:scale-[0.99]"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-palette-indigo" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom Drawer Actions */}
          <div className="pt-3.5 mt-3.5 border-t border-palette-taupe space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>WhatsApp (+91 {PORTFOLIO_DATA.personal.phone})</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-2.5 rounded-xl bg-white border border-palette-taupe text-palette-dark font-semibold flex items-center justify-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-palette-indigo" />
                <span>Email Mayur</span>
              </a>
              <button
                onClick={toggleLang}
                className="p-2.5 rounded-xl bg-white border border-palette-taupe text-palette-dark font-semibold flex items-center justify-center gap-1.5"
              >
                <Languages className="w-3.5 h-3.5 text-palette-indigo" />
                <span>{lang === 'en' ? 'हिंदी में देखें' : 'Switch to English'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
