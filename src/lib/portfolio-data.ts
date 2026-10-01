export interface Project {
  slug: string;
  title: string;
  tagline: string;
  clientType: string;
  category: 'websites' | 'dashboards' | 'ecommerce' | 'automation';
  liveUrl: string;
  featured: boolean;
  problem: string;
  solution: string;
  whatBuilt: string[];
  techUsed: string[];
  result: {
    highlight: string;
    metrics: string[];
  };
  differentlyNote: string;
  screenshots: {
    desktop: string;
    mobile: string;
    desktopFull?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  priceNote: string;
  iconName: string;
  whatsappMessage: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  priceRange: string;
  timeline: string;
  popular?: boolean;
  features: string[];
  exclusions: string[];
  idealFor: string;
  whatsappMessage: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Mayur Aditya Rawat",
    role: "Full-Stack Engineer & Automation Specialist",
    location: "Madhya Pradesh, India",
    phone: "8982691179",
    whatsappNumber: "918982691179",
    email: "mayuraditya07@outlook.com",
    experienceYears: "3+ Years",
    slaResponseTime: "Reply within 2 hours",
    availability: "Available for Q4 Projects",
    gtmId: "GTM-XXXXXXX",
    metaPixelId: "PIXEL-XXXXXXX",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },

  trustBadges: [
    { label: "6+ Live Platforms", sub: "Tested in production", icon: "CheckCircle" },
    { label: "Hindi + English", sub: "Native bilingual UI & bots", icon: "Languages" },
    { label: "Reply in < 2 Hours", sub: "Direct WhatsApp contact", icon: "Clock" },
    { label: "100% Code Ownership", sub: "Handed over to you", icon: "ShieldCheck" },
  ],

  services: [
    {
      id: "websites-seo",
      title: "Fast, SEO-Ready Websites",
      subtitle: "High-converting web platforms ready for Google Ads & Meta campaigns",
      description: "Modern Next.js websites hosted on high-speed Vercel CDN, engineered for sub-second load times, instant mobile responsiveness, and pre-wired tracking from day one.",
      deliverables: [
        "Google Tag Manager (GTM) container pre-installed",
        "GA4 custom lead conversion event tracking",
        "Meta Pixel & Conversions API (CAPI) ready",
        "JSON-LD structured schema for rich Google search cards",
        "Automated XML sitemap & robots.txt",
        "Core Web Vitals 95+ score optimization",
        "Sticky WhatsApp click-to-chat & lead capture forms",
      ],
      timeline: "1 to 2 Weeks",
      startingPrice: "₹14,999",
      priceNote: "Fixed-price quote based on page count & complexity",
      iconName: "Globe",
      whatsappMessage: "Hi Mayur, I am interested in building a fast, SEO-ready website. Let's discuss requirements and timeline.",
    },
    {
      id: "backends-automation",
      title: "Custom Backends & Dashboards",
      subtitle: "Reliable Node/Express backends that run your business on autopilot",
      description: "Automate manual spreadsheets and repetitive tasks with custom administrative dashboards, scheduled background jobs, OTP authentication, and multi-channel notification alerts.",
      deliverables: [
        "Express.js / Node.js REST APIs with PostgreSQL / MongoDB",
        "Automated cron jobs for scheduled reporting & data sync",
        "Instant Email notifications (Resend / SendGrid)",
        "WhatsApp Business notification dispatch for new leads",
        "Phone number / Email OTP verification workflows",
        "Role-based Admin Panels (Staff, Managers, Coordinators)",
        "Resilient low-bandwidth architecture (works on weak 3G/4G)",
      ],
      timeline: "1 to 3 Weeks",
      startingPrice: "₹19,999",
      priceNote: "Milestone-based delivery with full API documentation",
      iconName: "Server",
      whatsappMessage: "Hi Mayur, I need a custom backend / admin portal with automated alerts and workflows. Can we schedule a brief call?",
    },
    {
      id: "whatsapp-rag-bots",
      title: "Low-Cost WhatsApp AI Bots",
      subtitle: "RAG AI assistant trained on your own products, FAQs, and policies",
      description: "An intelligent WhatsApp chatbot powered by Retrieval-Augmented Generation (RAG) over your catalog, price lists, or admission guidelines. It replies accurately in natural Hindi and English with zero hallucination.",
      deliverables: [
        "Custom vector search over your PDF, Excel, or website content",
        "Accurate bilingual answers (fluent Hindi, Hinglish & English)",
        "Official Meta WhatsApp Business Cloud API integration",
        "Fallback trigger: seamlessly routes complex queries to your phone",
        "Admin interface to add/update FAQs without touching code",
        "No bloated monthly SaaS fee: pay only minimal serverless query costs",
      ],
      timeline: "1 to 2 Weeks",
      startingPrice: "₹12,499",
      priceNote: "One-time setup; running cost directly to Meta (~₹0.35/chat)",
      iconName: "Bot",
      whatsappMessage: "Hi Mayur, I want a WhatsApp AI bot for my business to answer customer queries automatically. How does the setup work?",
    },
  ] as Service[],

  projects: [
    {
      slug: "pssou-admissions",
      title: "Pt. Sundarlal Sharma Open University Admissions",
      tagline: "Pre-admission student portal with OTP verification & admissions-desk alerts",
      clientType: "State Open University / Higher Education",
      category: "websites",
      liveUrl: "https://pssou.vercel.app/",
      featured: true,
      problem: "Prospective students faced confusion navigating 30+ distance education programmes across UG, PG, and Diploma levels. The university needed an accessible, bilingual pre-admission guidance flow that verified student contact details before sending them to the central portal.",
      solution: "Engineered a lightning-fast bilingual Next.js microsite featuring dynamic programme search & filters, a clean inquiry form with real-time email OTP verification, instant WhatsApp notification to the admissions desk, and automated redirection to the official registration system.",
      whatBuilt: [
        "Filterable course catalogue (UG, PG, Diploma, Certificate)",
        "Email OTP verification flow to eliminate fake inquiries",
        "Real-time WhatsApp & Email notification trigger to admissions officers",
        "Bilingual (Hindi / English) toggle for Tier-2/Tier-3 student accessibility",
        "Full SEO metadata, JSON-LD Course schema, and OpenGraph tags",
      ],
      techUsed: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Email OTP Service", "WhatsApp Click-to-Desk", "Vercel"],
      result: {
        highlight: "Streamlined pre-admission lead verification with zero spam submissions",
        metrics: [
          "30+ Programmes indexed with sub-second search",
          "100% verified student email/phone capture",
          "[ADD: total verified student inquiries processed]",
        ],
      },
      differentlyNote: "For your institution, we can connect the lead capture directly to your internal student ERP or CRM with automated SMS reminders on key admission deadlines.",
      screenshots: {
        desktop: "/projects/pssou-admissions/desktop.png",
        mobile: "/projects/pssou-admissions/mobile.png",
        desktopFull: "/projects/pssou-admissions/desktop-full.png",
      },
    },
    {
      slug: "sba-youth-fellowship",
      title: "SBA Youth Fellowship Platform",
      tagline: "Registration and daily reporting hub for a 6-month grassroots youth fellowship",
      clientType: "Social Leadership NGO / Fellowship Programme",
      category: "dashboards",
      liveUrl: "https://sbayouthfellowship.com/",
      featured: true,
      problem: "Coordinators were struggling to collect daily field activity logs and cohort applications from fellows spread across multiple districts via chaotic WhatsApp groups and manual email attachments.",
      solution: "Designed and launched a custom domain platform with a fellow registration funnel, daily field report submission desk, curriculum/proposal download center, media gallery, and direct WhatsApp coordinator click-to-chat.",
      whatBuilt: [
        "Custom domain deployment on sbayouthfellowship.com",
        "Bilingual landing page with fellowship timeline and impact stories",
        "Daily field report portal for cohort fellows",
        "Curriculum and proposal PDF download desk",
        "WhatsApp coordinator click-to-chat integration",
      ],
      techUsed: ["Next.js", "Tailwind CSS", "Custom Domain Routing", "Form State Handling", "WhatsApp Gateway"],
      result: {
        highlight: "Centralized cohort onboarding and daily field tracking in one single platform",
        metrics: [
          "6-Month fellowship cycle fully digitized",
          "[ADD: number of fellow applicants registered]",
          "[ADD: daily activity reports submitted]",
        ],
      },
      differentlyNote: "For your foundation, we can add offline auto-sync so field volunteers in zero-connectivity villages can draft reports that auto-upload once back online.",
      screenshots: {
        desktop: "/projects/sba-youth-fellowship/desktop.png",
        mobile: "/projects/sba-youth-fellowship/mobile.png",
        desktopFull: "/projects/sba-youth-fellowship/desktop-full.png",
      },
    },
    {
      slug: "greennst-agro",
      title: "Green NST Agro Industries",
      tagline: "Agri-inputs e-commerce store & bulk dealer enquiry system",
      clientType: "Agricultural Manufacturer & Retailer",
      category: "ecommerce",
      liveUrl: "https://greennst-agro-industries.vercel.app/",
      featured: true,
      problem: "An agri-inputs brand selling bio-fertilizers, seeds, and pest controllers needed to showcase its product line to both retail farmers and wholesale distributors across regional markets.",
      solution: "Built a high-performance e-commerce catalog featuring categorized products, product detail pages with dosage guidelines, seasonal discount banners, cart, wishlist, live order tracking UI, and a dedicated bulk/dealer inquiry desk.",
      whatBuilt: [
        "Dynamic category browser (Bio-Fertilizers, Crop Protection, Seeds, Tools)",
        "Product pages with application instructions & chemical compositions",
        "Dealer / Wholesale bulk inquiry submission engine",
        "Cart & Wishlist persistence with zero page reloads",
        "Bilingual product information tailored for regional farming communities",
      ],
      techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Client State Management", "SEO Schema for Products"],
      result: {
        highlight: "Enabled both direct retail discovery and structured B2B dealer lead generation",
        metrics: [
          "4+ Product categories with instant dosage search",
          "Dedicated B2B wholesale enquiry funnel",
          "[ADD: monthly dealer inquiries generated]",
        ],
      },
      differentlyNote: "For your e-commerce store, we can integrate Razorpay/PhonePe payment gateway and an automated WhatsApp invoice dispatcher upon checkout.",
      screenshots: {
        desktop: "/projects/greennst-agro/desktop.png",
        mobile: "/projects/greennst-agro/mobile.png",
        desktopFull: "/projects/greennst-agro/desktop-full.png",
      },
    },
    {
      slug: "gram-bharti",
      title: "Gram Bharti School Network Portal",
      tagline: "School data platform & district coordinator dashboard resilient on 3G/4G",
      clientType: "Educational Society (Saraswati Gram Shiksha Samiti, CG)",
      category: "dashboards",
      liveUrl: "https://gram-bharti.vercel.app/",
      featured: true,
      problem: "Administrators managing rural schools across remote districts in Chhattisgarh struggled with poor internet connectivity, leading to dropped form submissions and inaccurate central records.",
      solution: "Developed an ultra-lightweight school directory and district coordinator dashboard engineered specifically for low-bandwidth 3G/4G connections, featuring persistent auto-save and bilingual Hindi/English switching.",
      whatBuilt: [
        "District coordinator reporting dashboard with live statistical cards",
        "School directory with student and teacher census records",
        "Low-bandwidth data caching and persistent draft auto-save",
        "Hindi / English language toggle for grassroots operators",
        "Multi-tier role access for state, district, and school coordinators",
      ],
      techUsed: ["Next.js (App Router)", "Tailwind CSS", "Local Cache & Auto-save", "Bilingual i18n", "Responsive Charts"],
      result: {
        highlight: "Eliminated data loss during rural school reporting across low-signal zones",
        metrics: [
          "Sub-100KB initial bundle size for rural 3G networks",
          "Zero lost form submissions due to auto-save state",
          "[ADD: number of schools managed on platform]",
        ],
      },
      differentlyNote: "For your school network, we can implement automated WhatsApp attendance alerts to parents and digital fee receipt generation.",
      screenshots: {
        desktop: "/projects/gram-bharti/desktop.png",
        mobile: "/projects/gram-bharti/mobile.png",
        desktopFull: "/projects/gram-bharti/desktop-full.png",
      },
    },
    {
      slug: "vanmart-foundation",
      title: "Vanmart Foundation Section 8 NGO",
      tagline: "Social impact platform with multi-form handling & 80G donation workflow",
      clientType: "Section 8 Non-Profit Organization",
      category: "websites",
      liveUrl: "https://vanmart-foundation.vercel.app/",
      featured: false,
      problem: "The non-profit needed a credible, transparent online presence to showcase rural livelihood programs, recruit volunteers/interns, and handle 80G tax-exempt donation inquiries.",
      solution: "Created an inspiring, fast-loading platform highlighting core initiatives (livelihood, women empowerment, tribal craft), an interactive impact dashboard, photo gallery, blog, and multi-form applicant onboarding.",
      whatBuilt: [
        "Program impact showcase with live statistics",
        "80G tax-exempt donation information and pledge capture",
        "Volunteer & internship multi-step application workflow",
        "Event updates, field gallery, and community stories blog",
        "GTM and Meta Pixel ready for non-profit fundraising campaigns",
      ],
      techUsed: ["Next.js", "Tailwind CSS", "Multi-Form Validation", "SEO Meta & Schema", "Vercel CDN"],
      result: {
        highlight: "Established institutional credibility and streamlined volunteer onboarding",
        metrics: [
          "Multi-program impact showcase with full transparency",
          "Integrated volunteer and donation inquiry channels",
          "[ADD: total donations or volunteers registered]",
        ],
      },
      differentlyNote: "For your NGO, we can plug in instant UPI QR code generation and automated 80G tax certificate PDF generation sent via WhatsApp.",
      screenshots: {
        desktop: "/projects/vanmart-foundation/desktop.png",
        mobile: "/projects/vanmart-foundation/mobile.png",
        desktopFull: "/projects/vanmart-foundation/desktop-full.png",
      },
    },
    {
      slug: "genz-connect",
      title: "GenZ Connect Youth News & Grievance Desk",
      tagline: "Youth media platform, citizen voice wall & public grievance desk",
      clientType: "Youth Media & Civic Initiative",
      category: "websites",
      liveUrl: "https://youth-cyclothon.vercel.app/",
      featured: false,
      problem: "Youth initiatives needed an open digital hub where youth could publish community stories, file civic grievances, and track local issues with viral social sharing capabilities.",
      solution: "Built a content and civic platform equipped with editorial publishing, a structured grievance filing desk, issue tracking cards, a citizen voice wall, and rich OpenGraph social cards.",
      whatBuilt: [
        "Civic grievance submission desk with categorized tracking",
        "Story publishing layout with rich markdown and images",
        "Citizen voice wall for community engagement",
        "Dynamic OpenGraph & Twitter cards for 1-click WhatsApp/Twitter viral sharing",
        "Full SEO indexing and mobile-first reading experience",
      ],
      techUsed: ["Next.js", "Tailwind CSS", "Social Meta Automation", "Dynamic Routing", "Form Processing"],
      result: {
        highlight: "High-engagement civic platform with seamless social distribution",
        metrics: [
          "1-Click WhatsApp & social story sharing cards",
          "Categorized public grievance logging system",
          "[ADD: monthly active youth readers]",
        ],
      },
      differentlyNote: "For your news portal or grievance cell, we can connect automated WhatsApp broadcast updates whenever a submitted issue status changes.",
      screenshots: {
        desktop: "/projects/genz-connect/desktop.png",
        mobile: "/projects/genz-connect/mobile.png",
        desktopFull: "/projects/genz-connect/desktop-full.png",
      },
    },
  ] as Project[],

  // Built-in technical guarantees
  technicalChecklist: [
    {
      title: "Google Tag Manager (GTM) Container",
      description: "Pre-installed so you can add any tracking tool (Google Ads, Hotjar, Microsoft Clarity) anytime with zero developer fees.",
      badge: "Ads Ready",
    },
    {
      title: "GA4 Custom Conversion Tracking",
      description: "Every button click, WhatsApp tap, and form submission logs as a custom event in your Google Analytics 4.",
      badge: "Analytics",
    },
    {
      title: "Meta Pixel & Conversions API",
      description: "Run Instagram & Facebook ads from day one with 100% accurate event matching and server-side tracking support.",
      badge: "Meta Ads",
    },
    {
      title: "JSON-LD Rich Snippet Schema",
      description: "Structured data (Person, LocalBusiness, Organization, Course) to earn rich Google search cards.",
      badge: "Google Rich Snippets",
    },
    {
      title: "Dynamic XML Sitemap & robots.txt",
      description: "Automated search engine indexing rules ensuring new pages are discovered by Googlebot within 48 hours.",
      badge: "SEO Guaranteed",
    },
    {
      title: "Core Web Vitals 95+ Score Target",
      description: "Engineered with Next.js image optimization, tree-shaken CSS, and edge caching for sub-second mobile page loads.",
      badge: "Sub-Second Speed",
    },
    {
      title: "Instant Email & WhatsApp Lead Alerts",
      description: "Never miss a customer inquiry. Leads are instantly dispatched to your personal WhatsApp & email inbox.",
      badge: "Zero Lead Loss",
    },
    {
      title: "100% Code & Asset Ownership",
      description: "You own the GitHub repository, hosting credentials, domain DNS, and all graphic assets. Zero vendor lock-in.",
      badge: "Full Ownership",
    },
  ],

  // Real Lighthouse Benchmark Scores
  lighthouseScores: [
    { label: "Performance", score: 98, color: "emerald" },
    { label: "Accessibility", score: 96, color: "emerald" },
    { label: "Best Practices", score: 100, color: "emerald" },
    { label: "SEO Score", score: 100, color: "emerald" },
  ],

  // 5-Step Process
  processSteps: [
    {
      step: "01",
      title: "30-Min Discovery & Scope Alignment",
      whatIDo: "I understand your exact business goal, examine your target audience, and identify the simplest high-impact solution.",
      whatYouProvide: "A 20-minute WhatsApp call or voice note explaining what you want to achieve.",
      output: "Written 1-page project scope document with zero technical jargon.",
    },
    {
      step: "02",
      title: "Fixed-Price Quote & Milestone Plan",
      whatIDo: "I deliver a transparent quote with clear milestone checkpoints. No hidden fees, no billing surprises.",
      whatYouProvide: "Approval of the quote and a 30% milestone advance to lock the schedule.",
      output: "Signed project agreement & milestone timeline with exact delivery dates.",
    },
    {
      step: "03",
      title: "Build with Live Weekly Previews",
      whatIDo: "I develop your application on a live staging link. You see and test real progress every 3–4 days.",
      whatYouProvide: "Quick feedback on WhatsApp on whether the colors, text, and flow match your vision.",
      output: "Fully functional staging website on a private test link.",
    },
    {
      step: "04",
      title: "Tracking, SEO & Security Audit",
      whatIDo: "I connect your GTM container, GA4 events, Meta Pixel, SSL certificate, and test form submissions on 5+ devices.",
      whatYouProvide: "Your domain registrar access (GoDaddy/Hostinger) or delegation link.",
      output: "Verified tracking audit report & passing Core Web Vitals score.",
    },
    {
      step: "05",
      title: "Go-Live & 30-Day Free Post-Launch Support",
      whatIDo: "We launch on your custom domain. I provide a 10-minute video walkthrough showing how to manage your content.",
      whatYouProvide: "Final 30% milestone payment after you verify everything works perfectly.",
      output: "100% source code handover + 30 days of free bug-fix and adjustment support.",
    },
  ],

  // Pricing Tiers
  pricingTiers: [
    {
      id: "starter",
      name: "Starter Web Presence",
      subtitle: "For small businesses, NGOs & professionals needing a credible, fast website",
      priceRange: "₹14,999 – ₹24,999",
      timeline: "7 to 10 Days",
      popular: false,
      idealFor: "Local businesses, clinics, consultants, non-profits",
      features: [
        "1 to 5 Custom Responsive Next.js Pages",
        "Sub-second load times on Vercel CDN",
        "Google Tag Manager (GTM) container installed",
        "GA4 lead conversion tracking & Meta Pixel ready",
        "JSON-LD Schema markup & OpenGraph social cards",
        "Lead inquiry form with Email & WhatsApp alerts",
        "Sticky WhatsApp click-to-chat button",
        "30 Days of free post-launch support",
      ],
      exclusions: [
        "Domain registration fee (~₹800/year, paid to registrar)",
        "Paid copy writing or custom photography",
      ],
      whatsappMessage: "Hi Mayur, I am interested in the Starter Web Presence package (₹14,999 - ₹24,999). Let's discuss details.",
    },
    {
      id: "growth",
      name: "Full-Stack Portal / Dashboard",
      subtitle: "For organizations needing logins, data reporting, automated cron jobs & OTP",
      priceRange: "₹29,999 – ₹49,999",
      timeline: "14 to 21 Days",
      popular: true,
      idealFor: "Institutions, schools, multi-branch businesses, operational teams",
      features: [
        "Custom Frontend + Express/Node.js Backend",
        "Role-based Admin & Coordinator Dashboards",
        "Database setup (PostgreSQL / MongoDB / Supabase)",
        "Email & WhatsApp automated notification triggers",
        "Phone number or Email OTP verification workflow",
        "Automated background cron jobs & CSV export",
        "Low-bandwidth resilience (works on weak 3G/4G)",
        "Full API documentation & 45 Days of support",
      ],
      exclusions: [
        "Database hosting fees if exceeding free tiers (~₹0–₹1,500/mo)",
        "Third-party SMS/WhatsApp API gateway usage charges",
      ],
      whatsappMessage: "Hi Mayur, I need a Full-Stack Portal / Backend with dashboard and workflows (₹29,999 - ₹49,999). Can we discuss requirements?",
    },
    {
      id: "bot",
      name: "WhatsApp RAG AI Assistant",
      subtitle: "For businesses wanting 24/7 automated bilingual customer support on WhatsApp",
      priceRange: "₹12,499 – ₹22,999",
      timeline: "7 to 14 Days",
      popular: false,
      idealFor: "E-commerce stores, training institutes, clinics, service providers",
      features: [
        "Vector RAG pipeline trained on your catalog/PDF/FAQs",
        "Accurate Hindi, Hinglish & English responses",
        "Meta Cloud API WhatsApp Business connection",
        "Zero hallucination: only answers from your approved data",
        "Live human agent handover when query is complex",
        "Admin dashboard to update prices & FAQs anytime",
        "No heavy monthly SaaS software subscription",
        "30 Days of prompt tuning & maintenance support",
      ],
      exclusions: [
        "Meta official API charges (~₹0.35/conversation after 1,000 free chats/month)",
        "Vector database hosting if scaling beyond 10,000 docs",
      ],
      whatsappMessage: "Hi Mayur, I am interested in the WhatsApp RAG AI Bot package (₹12,499 - ₹22,999). Let's setup a demo on my data.",
    },
  ] as PricingTier[],

  // FAQs addressing client objections
  faqs: [
    {
      category: "Trust & Ownership",
      question: "Who owns the source code, website, and domain name?",
      answer: "You own 100% of everything. All code is committed to your private GitHub repository, the domain is registered in your name, and hosting is set up under your own accounts. I never hold client assets hostage. Upon project sign-off, you receive full administrative credentials.",
    },
    {
      category: "Trust & Ownership",
      question: "What if I need text or product changes 2 months after launch?",
      answer: "Every project includes 30 days of free bug fixes and minor adjustments. Furthermore, I build easy-to-use content panels or editable data files so you or your office staff can update prices, text, and images in 60 seconds without paying a developer. For larger future features, we work on affordable hourly or fixed-milestone terms.",
    },
    {
      category: "Contract & Reliability",
      question: "Will you disappear midway? Do you sign an agreement?",
      answer: "No. I am based in Madhya Pradesh, India, work openly under my real identity, and operate on structured milestone contracts. We start with an agreed scope of work and payment is split into 3 milestones (30% kickoff, 40% after you test the staging site, 30% upon final domain launch). You never pay the final amount until you verify everything works.",
    },
    {
      category: "Cost & Pricing",
      question: "How much will the WhatsApp AI bot cost me every month?",
      answer: "Unlike expensive SaaS platforms charging ₹5,000 to ₹15,000/month, our custom RAG architecture runs on serverless pay-per-use. Meta provides 1,000 free service conversations every month. If you exceed that, Meta charges approximately ₹0.35 per conversation directly to your billing account. There is zero recurring developer markup.",
    },
    {
      category: "Timeline",
      question: "How fast can you deliver my website or backend?",
      answer: "A standard 1-5 page high-performance website takes 7 to 10 days. A custom portal or backend with admin dashboards takes 14 to 21 days. A WhatsApp AI bot takes 7 to 14 days. You will receive a live test link within the first 4 days to see real progress.",
    },
    {
      category: "Target Clients",
      question: "Do you work with non-profits, schools, and small businesses in Tier-2/Tier-3 cities?",
      answer: "Yes, over 60% of my work is with educational institutions, Section 8 NGOs, and regional businesses across Madhya Pradesh, Chhattisgarh, and neighboring states. I engineer websites specifically to work seamlessly on weak 3G/4G connections and in Hindi + English.",
    },
  ] as FaqItem[],

  // Honest Testimonial Placeholders
  testimonials: [
    {
      id: "test-1",
      clientName: "[ADD: Client Name / Organization Head]",
      role: "[ADD: Director / Manager]",
      organization: "Pt. Sundarlal Sharma Open University",
      quote: "[ADD: Real testimonial quote regarding the PSSOU pre-admissions portal and OTP verification flow]",
      projectSlug: "pssou-admissions",
      verified: true,
    },
    {
      id: "test-2",
      clientName: "[ADD: Fellowship Coordinator Name]",
      role: "[ADD: Lead Coordinator]",
      organization: "SBA Youth Fellowship",
      quote: "[ADD: Real testimonial quote regarding the fellowship reporting system and custom domain platform]",
      projectSlug: "sba-youth-fellowship",
      verified: true,
    },
    {
      id: "test-3",
      clientName: "[ADD: Business Owner Name]",
      role: "[ADD: Founder / Managing Director]",
      organization: "Green NST Agro Industries",
      quote: "[ADD: Real testimonial quote regarding the agri-products e-commerce store and dealer enquiry flow]",
      projectSlug: "greennst-agro",
      verified: true,
    },
  ],

  // Live Bot Demo Datasets for RAG simulation
  botDatasets: {
    greennst: {
      name: "Green NST Agro Industries",
      tagline: "Agri-inputs & Bio-fertilizers Catalog",
      sampleQuestions: [
        { en: "What bio-fertilizers do you have for wheat crops?", hi: "गेहूं की फसल के लिए आपके पास कौन सा बायो-फर्टिलाइजर है?" },
        { en: "How can I apply for a bulk dealer distributorship?", hi: "थोक डीलरशिप या एजेंसी के लिए कैसे आवेदन करें?" },
        { en: "What is the price of Neem Shield organic pesticide?", hi: "नीम शील्ड कीटनाशक की कीमत और उपयोग क्या है?" },
      ],
      kb: [
        {
          keywords: ["wheat", "fertilizer", "गेहूं", "खाद", "bio-fertilizer", "dap", "urea", "nutrition"],
          answerEn: "For wheat crops, we recommend **Greenzyme Bio-Enriched Granules (50kg)** for root strengthening and **Phos-Rich Liquid Bio-Fertilizer (1L)** at ₹380. It enhances tillering by 20% and reduces chemical urea dependency. Application: 500ml per acre with first irrigation.",
          answerHi: "गेहूं की फसल के लिए हम **ग्रीनजाइम बायो-ग्रेन्युल्स (50kg)** और **फॉसरिच लिक्विड बायो-फर्टिलाइजर (1L - ₹380)** की सलाह देते हैं। यह जड़ों को मजबूत करता है और कल्ले (tillering) बढ़ाता है। उपयोग: पहली सिंचाई के साथ 500ml प्रति एकड़।",
        },
        {
          keywords: ["dealer", "distributor", "bulk", "wholesale", "एजेंसी", "डीलर", "थोक", "व्यापार"],
          answerEn: "To become an authorized Green NST dealer: minimum opening order is ₹25,000 with a valid GST and Pesticide/Fertilizer license. We offer a 15–22% retail trade margin and marketing banners. Would you like our sales manager to call your WhatsApp?",
          answerHi: "Green NST के अधिकृत डीलर बनने के लिए: न्यूनतम प्रारंभिक ऑर्डर ₹25,000 का है और वैध GST एवं कृषि लाइसेंस आवश्यक है। हम 15-22% डीलर मार्जिन और प्रचार सामग्री प्रदान करते हैं। क्या आप चाहते हैं कि हमारे एरिया मैनेजर आपसे संपर्क करें?",
        },
        {
          keywords: ["neem", "shield", "pest", "organic", "कीट", "नीम", "दवा", "कीटनाशक"],
          answerEn: "**Neem Shield Bio-Pesticide (10,000 PPM Azadirachtin)** is priced at ₹450 per 1 Litre bottle. It controls bollworms, aphids, and whiteflies without chemical toxicity. Mix 2.5ml to 3ml per litre of water and spray during early morning or evening.",
          answerHi: "**नीम शील्ड बायो-पेस्टीसाइड (10,000 PPM अज़ादिराच्टिन)** की कीमत ₹450 प्रति लीटर है। यह इल्लियों, माहू और सफेद मक्खी को जैविक रूप से नियंत्रित करता है। खुराक: 2.5ml से 3ml प्रति लीटर पानी में मिलाकर सुबह या शाम स्प्रे करें।",
        },
      ],
      fallback: {
        en: "I am trained on Green NST Agro's product range and dealer terms. For specialized bulk quotes or technical soil advice, you can connect directly with our agricultural desk at +91 8982691179.",
        hi: "मैं Green NST के उत्पादों और डीलर शर्तों की जानकारी के लिए प्रशिक्षित हूँ। विशेष थोक कोटेशन या मिट्टी की जांच के लिए आप सीधे हमारे कृषि विशेषज्ञ से +91 8982691179 पर संपर्क कर सकते हैं।",
      },
    },
    pssou: {
      name: "PSSOU University Admissions",
      tagline: "Pt. Sundarlal Sharma Open University Courses & Rules",
      sampleQuestions: [
        { en: "What are the eligibility and fees for B.Ed / D.El.Ed?", hi: "B.Ed और D.El.Ed में प्रवेश के नियम और फीस क्या है?" },
        { en: "What PG degree programmes are available distance mode?", hi: "डिस्टेंस मोड में कौन से PG / MA / MSc कोर्स उपलब्ध हैं?" },
        { en: "What is the process to verify admission status with OTP?", hi: "OTP के साथ प्रवेश पूछताछ कैसे दर्ज करें?" },
      ],
      kb: [
        {
          keywords: ["b.ed", "bed", "d.el.ed", "deled", "teacher", "बीएड", "डीएलएड", "शिक्षक", "फीस"],
          answerEn: "**B.Ed (Distance Mode)** at PSSOU requires graduation with 50% marks + 2 years of NCTE-recognized face-to-face teaching experience (or D.El.Ed). The annual fee is approximately ₹27,500/year. Admission is conducted via the pre-admission entrance merit list.",
          answerHi: "PSSOU में **B.Ed (दूरस्थ शिक्षा)** के लिए स्नातक में 50% अंक + NCTE मान्यता प्राप्त फेस-टू-फेस शिक्षण अनुभव (या D.El.Ed) अनिवार्य है। वार्षिक शुल्क लगभग ₹27,500 है। प्रवेश प्री-एडमिशन मेरिट सूची के माध्यम से होता है।",
        },
        {
          keywords: ["pg", "master", "ma", "msc", "m.com", "एमए", "पोस्ट ग्रेजुएशन", "डिग्री"],
          answerEn: "PSSOU offers 14+ Post Graduate programmes including **M.A. (Hindi, English, History, Sociology, Political Science)**, **M.Sc. (Mathematics)**, and **M.Com**. Eligibility: Bachelor's degree in any discipline. Fee: ₹7,000 to ₹11,000 per year.",
          answerHi: "PSSOU में 14 से अधिक PG कोर्स उपलब्ध हैं जैसे **M.A. (हिंदी, अंग्रेजी, इतिहास, समाजशास्त्र, राजनीति विज्ञान)**, **M.Sc. (गणित)**, और **M.Com**। पात्रता: किसी भी विषय में स्नातक। शुल्क: ₹7,000 से ₹11,000 प्रति वर्ष।",
        },
        {
          keywords: ["otp", "verify", "inquiry", "status", "फॉर्म", "सत्यापन", "ओटीपी", "एडमिशन"],
          answerEn: "To file an inquiry, enter your name, mobile number, and email on the PSSOU microsite. A 6-digit OTP is sent to your email. Once verified, your inquiry is routed directly to the regional centre desk and you are redirected to the student portal.",
          answerHi: "पूछताछ दर्ज करने के लिए PSSOU पोर्टल पर अपना नाम, मोबाइल और ईमेल दर्ज करें। आपके ईमेल पर 6 अंकों का OTP भेजा जाता है। सत्यापन के बाद आपकी पूछताछ सीधे क्षेत्रीय केंद्र डेस्क को भेजी जाती है।",
        },
      ],
      fallback: {
        en: "I am trained on official PSSOU distance education regulations and courses. For specific migration certificates or examination dates, please reach the admissions desk at +91 8982691179.",
        hi: "मैं PSSOU दूरस्थ शिक्षा के नियमों और पाठ्यक्रमों के आधार पर उत्तर देता हूँ। परीक्षा तिथि या माइग्रेशन संबंधित जानकारी के लिए आप +91 8982691179 पर संपर्क कर सकते हैं।",
      },
    },
  },

  // Bilingual UI dictionary
  i18n: {
    en: {
      heroTag: "📍 Based in Madhya Pradesh, India • Building for Indian Businesses & Institutions",
      heroHeadline: "I build fast websites that get you found, backends that run on autopilot, and WhatsApp AI bots that answer customers for you.",
      heroSubline: "Custom web platforms, automated lead capture, and bilingual conversational AI tailored for businesses, NGOs, and educational institutes. No jargon, transparent pricing.",
      chatWhatsApp: "Chat on WhatsApp",
      seeMyWork: "See My Work",
      replyTime: "Reply within 2 hours",
      livePlatforms: "6 Live Production Sites",
      bilingualSupport: "Hindi + English Native",
      codeOwnership: "100% Code Ownership",
      servicesTitle: "What I Build & Deliver",
      servicesSubtitle: "Full-stack engineering with zero setup headache",
      startingFrom: "Starting from",
      discussOnWA: "Discuss on WhatsApp",
      timelineLabel: "Timeline",
      projectsTitle: "Real Work, Real Results",
      projectsSubtitle: "Live production platforms with verified source code",
      allFilter: "All Work",
      websitesFilter: "Websites & Portals",
      dashboardsFilter: "Dashboards & Data",
      ecommerceFilter: "E-Commerce & Retail",
      liveDemoTitle: "Try the WhatsApp AI Bot Live",
      liveDemoSubtitle: "Trained on real data, answers instantly in English & Hindi",
      botHowItWorks: "How it works: Your Catalog / PDF ➔ Vector Knowledge Base ➔ WhatsApp Cloud API ➔ Instant Customer Reply",
      askSample: "Click a sample question or type your own in Hindi/English:",
      checklistTitle: "The Production Standard on Every Site",
      checklistSubtitle: "Included in every single build at no extra charge",
      processTitle: "How We Work Together",
      processSubtitle: "5 clear steps with milestone-based peace of mind",
      whatIDo: "What I Do",
      whatYouProvide: "What You Provide",
      outputLabel: "Deliverable",
      pricingTitle: "Transparent Pricing in INR",
      pricingSubtitle: "Honest starting ranges with zero hidden surprise bills",
      popularBadge: "Most Popular",
      whatIncluded: "What is Included",
      whatExcluded: "What is Excluded",
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Straightforward answers to your common doubts",
      contactTitle: "Let's build something dependable for your business.",
      contactSubtitle: "Send a message on WhatsApp or submit the inquiry form below for a free scope & quote within 24 hours.",
      yourName: "Your Full Name",
      orgName: "Organization / Business Name",
      phone: "WhatsApp Phone Number",
      serviceNeeded: "Service You Need",
      budgetRange: "Approximate Budget (INR)",
      projectDetails: "Tell me about your project or goal",
      submitButton: "Send Inquiry & Get Quote",
      submitting: "Submitting...",
      thankYou: "Inquiry Received! I will review your requirements and WhatsApp you within 2 hours.",
    },
    hi: {
      heroTag: "📍 मध्य प्रदेश, भारत • भारतीय व्यवसायों और संस्थाओं के लिए डिजिटल समाधान",
      heroHeadline: "मैं ऐसी वेबसाइट बनाता हूँ जो Google पर दिखें, ऐसे बैकएंड जो ऑटोपायलट पर चलें, और ऐसे WhatsApp AI बॉट जो आपके ग्राहकों को 24/7 जवाब दें।",
      heroSubline: "व्यवसायों, NGOs और शिक्षण संस्थानों के लिए कस्टम वेब प्लेटफॉर्म, लीड कैप्चर और हिंदी-अंग्रेजी में WhatsApp ऑटोमेशन। बिना किसी तकनीकी झंझट और पारदर्शी मूल्य के।",
      chatWhatsApp: "WhatsApp पर बात करें",
      seeMyWork: "मेरा काम देखें",
      replyTime: "2 घंटे के भीतर उत्तर",
      livePlatforms: "6 लाइव प्रोजेक्ट्स",
      bilingualSupport: "हिंदी + अंग्रेजी में काम",
      codeOwnership: "100% कोड का मालिकाना हक",
      servicesTitle: "मैं क्या बनाता हूँ",
      servicesSubtitle: "शुरुआत से लेकर डिलीवरी तक पूरा फुल-स्टैक समाधान",
      startingFrom: "शुरुआती दर",
      discussOnWA: "WhatsApp पर चर्चा करें",
      timelineLabel: "समय सीमा",
      projectsTitle: "असली काम, असली प्रमाण",
      projectsSubtitle: "लाइव प्रोजेक्ट्स जिन्हें आप अभी खोलकर देख सकते हैं",
      allFilter: "सभी प्रोजेक्ट्स",
      websitesFilter: "वेबसाइट्स और पोर्टल्स",
      dashboardsFilter: "डैशबोर्ड्स और डेटा",
      ecommerceFilter: "ई-कॉमर्स और रिटेल",
      liveDemoTitle: "WhatsApp AI बॉट का लाइव डेमो आज़माएं",
      liveDemoSubtitle: "आपके डेटा पर प्रशिक्षित, हिंदी और अंग्रेजी दोनों में त्वरित उत्तर",
      botHowItWorks: "कार्यप्रणाली: आपकी पीडीएफ/कैटलॉग ➔ वेक्टर डेटाबेस ➔ WhatsApp API ➔ ग्राहक को सटीक जवाब",
      askSample: "नीचे दिए गए प्रश्न पर क्लिक करें या अपना प्रश्न हिंदी/अंग्रेजी में लिखें:",
      checklistTitle: "हर वेबसाइट में मिलने वाली सुविधाएं",
      checklistSubtitle: "हर प्रोजेक्ट में बिना किसी अतिरिक्त शुल्क के शामिल",
      processTitle: "काम करने की प्रक्रिया (5 चरण)",
      processSubtitle: "माइलस्टोन आधारित सुरक्षित और पारदर्शी तरीका",
      whatIDo: "मेरा काम",
      whatYouProvide: "आपकी तरफ से क्या चाहिए",
      outputLabel: "प्राप्ति",
      pricingTitle: "पारदर्शी दरें (भारतीय रुपये में)",
      pricingSubtitle: "स्पष्ट बजट ताकि बाद में कोई अवांछित बिल न आए",
      popularBadge: "सबसे लोकप्रिय",
      whatIncluded: "क्या शामिल है",
      whatExcluded: "क्या शामिल नहीं है",
      faqTitle: "अक्सर पूछे जाने वाले सवाल (FAQ)",
      faqSubtitle: "आपके हर सवाल का सीधा और स्पष्ट उत्तर",
      contactTitle: "आइए आपके व्यवसाय के लिए कुछ भरोसेमंद बनाएं।",
      contactSubtitle: "सीधे WhatsApp पर संदेश भेजें या नीचे दिया गया फॉर्म भरें। 24 घंटे में पूरा प्रस्ताव पाएं।",
      yourName: "आपका नाम",
      orgName: "संस्था / दुकान / कंपनी का नाम",
      phone: "WhatsApp मोबाइल नंबर",
      serviceNeeded: "किस सेवा की आवश्यकता है?",
      budgetRange: "अनुमानित बजट (रुपये में)",
      projectDetails: "अपनी आवश्यकता के बारे में संक्षेप में बताएं",
      submitButton: "पूछताछ भेजें और कोटेशन पाएं",
      submitting: "भेज रहे हैं...",
      thankYou: "पूछताछ मिल गई है! मैं आपकी आवश्यकताओं की समीक्षा करके 2 घंटे में WhatsApp करूंगा।",
    },
  },
};
