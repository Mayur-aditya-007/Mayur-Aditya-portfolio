import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import Script from 'next/script';

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.personal.name} | Fast SEO Websites, Backends & WhatsApp AI Bots`,
  description:
    'Full-stack engineer & automation specialist in Madhya Pradesh, India. I build fast Next.js websites, Express backends with OTP/cron automation, and low-cost bilingual WhatsApp AI bots for businesses and institutions.',
  keywords: [
    'Freelance Developer Madhya Pradesh',
    'Next.js Website Developer India',
    'WhatsApp AI Chatbot Developer',
    'Express.js Backend Developer',
    'SEO Optimized Websites India',
    'Bilingual WhatsApp Bot Developer',
    'Mayur Aditya Rawat',
  ],
  authors: [{ name: PORTFOLIO_DATA.personal.name, url: 'https://mayurrawat.com' }],
  creator: PORTFOLIO_DATA.personal.name,
  metadataBase: new URL('https://mayurrawat.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://mayurrawat.com',
    title: `${PORTFOLIO_DATA.personal.name} | Fast Websites, Backends & WhatsApp AI Bots`,
    description:
      'I build websites that get found, backends that run on autopilot, and WhatsApp bots that answer customers for you.',
    siteName: `${PORTFOLIO_DATA.personal.name} Portfolio`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${PORTFOLIO_DATA.personal.name} Logo & Portfolio`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PORTFOLIO_DATA.personal.name} | Fast Websites, Backends & WhatsApp AI Bots`,
    description:
      'Full-stack engineering, automated backends, and bilingual WhatsApp AI bots for businesses and NGOs in India.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/logo.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Structured Data for Person & ProfessionalService
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://mayurrawat.com/#person',
        name: PORTFOLIO_DATA.personal.name,
        jobTitle: PORTFOLIO_DATA.personal.role,
        url: 'https://mayurrawat.com',
        telephone: `+91-${PORTFOLIO_DATA.personal.phone}`,
        email: PORTFOLIO_DATA.personal.email,
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Madhya Pradesh',
          addressCountry: 'IN',
        },
        sameAs: [
          PORTFOLIO_DATA.personal.github,
          PORTFOLIO_DATA.personal.linkedin,
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://mayurrawat.com/#service',
        name: `${PORTFOLIO_DATA.personal.name} Freelance Engineering`,
        url: 'https://mayurrawat.com',
        priceRange: '₹12,499 - ₹49,999',
        telephone: `+91-${PORTFOLIO_DATA.personal.phone}`,
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development & Automation Services',
          itemListElement: PORTFOLIO_DATA.services.map((svc) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: svc.title,
              description: svc.description,
            },
            price: svc.startingPrice.replace(/[^0-9]/g, ''),
            priceCurrency: 'INR',
          })),
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon and Apple Touch Icon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* WhatsApp & Social OpenGraph Image Meta */}
        <meta property="og:image" content="https://mayurrawat.com/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://mayurrawat.com/og-image.png" />

        {/* JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Tag Manager (GTM Placeholder) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${PORTFOLIO_DATA.personal.gtmId}');
            `,
          }}
        />

        {/* Meta Pixel Code (Pixel Placeholder) */}
        <Script
          id="meta-pixel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PORTFOLIO_DATA.personal.metaPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className="bg-palette-cream text-palette-dark min-h-screen antialiased selection:bg-palette-taupe selection:text-palette-dark">
        {/* GTM NoScript Fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${PORTFOLIO_DATA.personal.gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
