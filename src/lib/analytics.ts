// Google Analytics 4 & Meta Pixel event dispatcher
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
    fbq: (action: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  try {
    if (typeof window !== 'undefined') {
      // 1. Google Tag Manager / GA4 DataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        ...params,
        timestamp: new Date().toISOString(),
      });

      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, params);
      }

      // 2. Meta Pixel Track Custom
      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', eventName, params);
      }

      console.log(`[Analytics Event Tracked]: ${eventName}`, params);
    }
  } catch (err) {
    console.error('Analytics tracking error:', err);
  }
};

export const trackWhatsAppClick = (source: string, prefilledText?: string) => {
  trackEvent('whatsapp_click', {
    source,
    prefilled_text: prefilledText || 'default',
  });
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { content_name: 'whatsapp_click', content_category: source });
  }
};

export const trackFormSubmission = (service: string, budget: string) => {
  trackEvent('lead_form_submit', {
    service,
    budget,
  });
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', { content_name: service, value: budget });
  }
};

export const trackBotDemoQuery = (dataset: string, query: string, language: string) => {
  trackEvent('bot_demo_query', {
    dataset,
    query_length: query.length,
    language,
  });
};
