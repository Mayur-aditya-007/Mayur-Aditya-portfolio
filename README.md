# 🚀 Mayur Aditya Rawat — Freelance Portfolio & High-Conversion Engine

A modern freelance portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to build trust with Indian business owners, institutions, and NGOs within the first 60 seconds.

---

## 🌟 Key Features

1. **Psychologically Engineered 60-Second Conversion Funnel**:
   - Zero-jargon hero answering *"What do you do and for whom?"*
   - Real desktop and mobile browser mockups of 6 live production projects.
   - Dual primary CTAs with direct pre-filled WhatsApp links.
   - Trust strip (6+ live projects, bilingual Hindi/English, <2 hr reply SLA, 100% code ownership).

2. **Interactive Live WhatsApp RAG AI Bot Simulator**:
   - Live on-page chat widget simulating retrieval over client catalogs (Green NST Agro & PSSOU University).
   - Natural Hindi & English multi-turn Q&A.
   - Plain-language RAG architecture flowchart & transparent cost comparison (Pay-per-use vs. ₹15k/mo SaaS tools).

3. **6 In-Depth Case Studies (`/work/[slug]`)**:
   - PSSOU Admissions Portal (`pssou-admissions`)
   - SBA Youth Fellowship (`sba-youth-fellowship`)
   - Green NST Agro Industries (`greennst-agro`)
   - Gram Bharti School Portal (`gram-bharti`)
   - Vanmart Foundation NGO (`vanmart-foundation`)
   - GenZ Connect (`genz-connect`)
   - Each with problem, solution, systems built, tech stack, and *"What I'd do differently for you"* advisory note.

4. **100% Single-File Content Management (`src/lib/portfolio-data.ts`)**:
   - Edit all text, projects, pricing tiers, FAQs, translations, and contact information in one single typed file without touching UI components.

5. **Production-Ready Analytics & Technical Checklist**:
   - Google Tag Manager container (`GTM-XXXXXXX` placeholder)
   - Custom GA4 conversion event dispatcher (`whatsapp_click`, `lead_form_submit`, `bot_demo_query`)
   - Meta Pixel & Conversions API container
   - JSON-LD Structured Data Schema (`Person` + `ProfessionalService`)
   - Dynamic `sitemap.xml` & `robots.txt`
   - 95+ Core Web Vitals target & Lighthouse audit scorecards

6. **Bilingual UI & Dark/Light Mode**:
   - Instant English ⟷ Hindi toggle (`EN / हिंदी`) for all critical conversion sections.
   - Theme toggle with persistent local storage.

---

## 🛠️ How to Edit Content & Customize

All website data lives in [`src/lib/portfolio-data.ts`](file:///d:/mayur-portfolio/src/lib/portfolio-data.ts).

### 1. Update Contact & Social Details
Open `src/lib/portfolio-data.ts` and modify the `personal` object:
```typescript
personal: {
  name: "Mayur Aditya Rawat",
  phone: "8982691179",
  whatsappNumber: "918982691179",
  email: "mayuraditya07@outlook.com",
  location: "Madhya Pradesh, India",
  gtmId: "GTM-XXXXXXX",          // Replace with your real GTM container ID
  metaPixelId: "PIXEL-XXXXXXX",  // Replace with your Meta Pixel ID
}
```

### 2. Add or Edit a Project
Add a new object inside `PORTFOLIO_DATA.projects`:
```typescript
{
  slug: "my-new-project",
  title: "Project Title",
  tagline: "One line summary",
  clientType: "E-Commerce / NGO / College",
  category: "websites", // 'websites' | 'dashboards' | 'ecommerce' | 'automation'
  liveUrl: "https://your-live-url.com",
  featured: true,
  problem: "What problem the client faced...",
  solution: "What you engineered to fix it...",
  whatBuilt: ["Feature 1", "Feature 2"],
  techUsed: ["Next.js", "Express", "Tailwind CSS"],
  result: {
    highlight: "Summary metric",
    metrics: ["[ADD: Verified metric]"]
  },
  differentlyNote: "Advisory note for new clients...",
  screenshots: {
    desktop: "/projects/my-new-project/desktop.png",
    mobile: "/projects/my-new-project/mobile.png"
  }
}
```

### 3. Update Pricing Tiers & Service Rates
Edit the `PORTFOLIO_DATA.services` and `PORTFOLIO_DATA.pricingTiers` arrays.

---

## 🚀 Deployment to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete high-conversion portfolio"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your repository and click **Deploy**.
4. Point your custom domain (e.g. `mayurrawat.com` or `mayuraditya.dev`) under **Project Settings > Domains**.

---

## 📋 Master Checklist of `[ADD: ...]` Placeholders

To maintain 100% honesty with prospective clients, replace these placeholders with verified figures:

| Location / Project | Placeholder String | Description to Fill |
| :--- | :--- | :--- |
| **PSSOU Admissions** | `[ADD: total verified student inquiries processed]` | Total student inquiries captured via OTP |
| **SBA Youth Fellowship** | `[ADD: number of fellow applicants registered]` | Number of applications or fellows onboarded |
| **SBA Youth Fellowship** | `[ADD: daily activity reports submitted]` | Number of field activity logs submitted |
| **Green NST Agro** | `[ADD: monthly dealer inquiries generated]` | Average monthly B2B dealer leads generated |
| **Gram Bharti** | `[ADD: number of schools managed on platform]` | Total schools or students indexed |
| **Vanmart Foundation** | `[ADD: total donations or volunteers registered]` | Total volunteer applications or donation pledges |
| **GenZ Connect** | `[ADD: monthly active youth readers]` | Average monthly readers or grievances tracked |
| **Testimonial 1** | `[ADD: Client Name / Organization Head]` | Real client name for PSSOU project |
| **Testimonial 1** | `[ADD: Real testimonial quote...]` | Real testimonial quote for PSSOU |
| **Testimonial 2** | `[ADD: Fellowship Coordinator Name]` | Real coordinator name for SBA Fellowship |
| **Testimonial 2** | `[ADD: Real testimonial quote...]` | Real testimonial quote for SBA Fellowship |
| **Testimonial 3** | `[ADD: Business Owner Name]` | Real founder name for Green NST Agro |
| **Testimonial 3** | `[ADD: Real testimonial quote...]` | Real testimonial quote for Green NST Agro |
| **Tracking Config** | `GTM-XXXXXXX` & `PIXEL-XXXXXXX` | Real Google Tag Manager & Meta Pixel IDs |
