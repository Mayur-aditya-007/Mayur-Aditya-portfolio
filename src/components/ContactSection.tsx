'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { trackFormSubmission, trackWhatsAppClick } from '@/lib/analytics';
import { MessageCircle, Mail, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { lang } = useApp();
  const t = PORTFOLIO_DATA.i18n[lang];

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    phone: '',
    service: 'Fast Website with SEO',
    budget: '₹14,999 – ₹24,999',
    details: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        trackFormSubmission(formData.service, formData.budget);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setStatus('error');
    }
  };

  const handleDirectWhatsApp = () => {
    trackWhatsAppClick('contact_direct_card', 'Direct Contact WhatsApp');
    const msg = `Hi Mayur, my name is ${formData.name || '[Your Name]'}. I want to discuss a ${formData.service} project with a budget of ${formData.budget}.`;
    const url = `https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-palette-cream border-t border-palette-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Trust (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-palette-indigo" />
              <span>{lang === 'hi' ? 'सीधा संपर्क' : 'Direct Conversation'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-palette-dark font-display">
              {t.contactTitle}
            </h2>

            <p className="text-sm sm:text-base text-palette-indigo leading-relaxed font-medium">
              {t.contactSubtitle}
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 pt-4">
              {/* WhatsApp Card */}
              <button
                onClick={handleDirectWhatsApp}
                className="w-full p-5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 hover:border-emerald-600 hover:bg-emerald-100 transition-all flex items-center justify-between text-left group shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold shadow">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-800 font-bold uppercase tracking-wide">Direct WhatsApp Chat</div>
                    <div className="text-base font-bold text-palette-dark">
                      +91 {PORTFOLIO_DATA.personal.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </button>

              {/* Email Card */}
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="p-5 rounded-2xl bg-white border-2 border-palette-taupe hover:border-palette-dark transition-all flex items-center gap-3.5 block text-left shadow-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-palette-cream border border-palette-taupe flex items-center justify-center text-palette-dark">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-palette-indigo font-bold uppercase tracking-wide">Direct Email</div>
                  <div className="text-sm font-bold text-palette-dark">
                    {PORTFOLIO_DATA.personal.email}
                  </div>
                </div>
              </a>

              {/* Location & SLA */}
              <div className="p-4 rounded-2xl bg-white border border-palette-taupe flex items-center justify-between text-xs text-palette-indigo font-semibold shadow-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-palette-dark" />
                  <span>{PORTFOLIO_DATA.personal.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-700" />
                  <span>{PORTFOLIO_DATA.personal.slaResponseTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Capture Form (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-white border-2 border-palette-taupe shadow-2xl">
            {status === 'success' ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-palette-dark font-display">
                  {lang === 'hi' ? 'पूछताछ सफलतापूर्वक दर्ज की गई!' : 'Inquiry Received Successfully!'}
                </h3>
                <p className="text-sm text-palette-indigo max-w-md mx-auto font-medium">
                  {t.thankYou}
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleDirectWhatsApp}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Ping on WhatsApp with Details</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-palette-dark mb-1.5">
                      {t.yourName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-palette-cream/60 border border-palette-taupe rounded-xl px-4 py-3 text-sm text-palette-dark placeholder-palette-indigo/50 focus:outline-none focus:border-palette-dark font-medium"
                    />
                  </div>

                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-bold text-palette-dark mb-1.5">
                      {t.orgName}
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Sharma Agro / Gram Vikas NGO"
                      className="w-full bg-palette-cream/60 border border-palette-taupe rounded-xl px-4 py-3 text-sm text-palette-dark placeholder-palette-indigo/50 focus:outline-none focus:border-palette-dark font-medium"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-palette-dark mb-1.5">
                    {t.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210 (10 digit WhatsApp number)"
                    className="w-full bg-palette-cream/60 border border-palette-taupe rounded-xl px-4 py-3 text-sm text-palette-dark placeholder-palette-indigo/50 focus:outline-none focus:border-palette-dark font-medium"
                  />
                </div>

                {/* Service and Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-palette-dark mb-1.5">
                      {t.serviceNeeded}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-palette-cream/60 border border-palette-taupe rounded-xl px-4 py-3 text-sm text-palette-dark focus:outline-none focus:border-palette-dark font-medium"
                    >
                      <option value="Fast Website with SEO">Fast Website (Next.js + SEO)</option>
                      <option value="Custom Backend & Dashboard">Custom Backend & Dashboard (Express + OTP)</option>
                      <option value="WhatsApp AI RAG Bot">WhatsApp AI RAG Bot (Meta API)</option>
                      <option value="Full Complete Platform">Full Platform (Website + Backend + Bot)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-palette-dark mb-1.5">
                      {t.budgetRange}
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-palette-cream/60 border border-palette-taupe rounded-xl px-4 py-3 text-sm text-palette-dark focus:outline-none focus:border-palette-dark font-medium"
                    >
                      <option value="₹14,999 – ₹24,999">₹14,999 – ₹24,999 (Starter)</option>
                      <option value="₹25,000 – ₹49,999">₹25,000 – ₹49,999 (Growth / Portal)</option>
                      <option value="₹50,000+">₹50,000+ (Full Enterprise)</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-bold text-palette-dark mb-1.5">
                    {t.projectDetails} *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder="Briefly describe what your business does and what problem you want solved..."
                    className="w-full bg-palette-cream/60 border border-palette-taupe rounded-xl px-4 py-3 text-sm text-palette-dark placeholder-palette-indigo/50 focus:outline-none focus:border-palette-dark font-medium resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-palette-dark hover:bg-palette-indigo text-palette-cream font-bold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? t.submitting : t.submitButton}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
