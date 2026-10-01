import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { MobileFrame } from '@/components/ui/MobileFrame';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StickyWhatsApp } from '@/components/StickyWhatsApp';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Cpu,
  TrendingUp,
  Lightbulb,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Case Study - Mayur Aditya Rawat`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.tagline,
      images: [
        {
          url: project.screenshots.desktop,
          width: 1440,
          height: 900,
          alt: project.title,
        },
      ],
    },
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.slug === params.slug);
  const nextProject = PORTFOLIO_DATA.projects[(currentIndex + 1) % PORTFOLIO_DATA.projects.length];

  return (
    <div className="min-h-screen bg-palette-cream text-palette-dark flex flex-col justify-between selection:bg-palette-taupe selection:text-palette-dark">
      <Navbar />

      <main className="pt-24 pb-14 sm:pt-28 sm:pb-20">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-xs font-bold text-palette-indigo hover:text-palette-dark transition-colors group py-1"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Header Banner */}
          <div className="space-y-3.5 sm:space-y-4 mb-8 sm:mb-10">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="px-3 py-1 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs font-bold uppercase tracking-wider shadow-sm">
                {project.clientType}
              </span>
              <span className="text-[11px] sm:text-xs text-palette-indigo font-mono font-semibold">
                Production Case Study
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-palette-dark font-display tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-lg text-palette-indigo font-medium max-w-3xl leading-relaxed">
              {project.tagline}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-2 sm:pt-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${encodeURIComponent(
                  `Hi Mayur, I am looking at your case study for ${project.title}. I want something similar for my organization.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-palette-cream text-palette-dark font-bold text-sm border-2 border-palette-taupe transition-all shadow-sm active:scale-98"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700 fill-current" />
                <span>Build Something Similar</span>
              </a>
            </div>
          </div>

          {/* Device Showcase Frame */}
          <div className="relative my-8 sm:my-14 pb-2 sm:pb-0">
            <BrowserFrame
              url={project.liveUrl}
              imageSrc={project.screenshots.desktop}
              alt={project.title}
              aspectRatio="aspect-[16/9]"
              className="shadow-2xl shadow-palette-dark/15 w-full"
            />

            <div className="absolute -bottom-4 -right-2 sm:-bottom-10 sm:-right-6 md:-right-8 w-24 sm:w-44 md:w-56 z-20 hover:scale-105 transition-transform duration-300">
              <MobileFrame
                imageSrc={project.screenshots.mobile}
                alt={`${project.title} mobile screen`}
              />
            </div>
          </div>

          {/* Deep Dive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mt-10 sm:mt-16">
            {/* Main Content (8 cols) */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-10">
              {/* Problem */}
              <div className="p-4 sm:p-8 rounded-3xl bg-white border-2 border-palette-taupe shadow-md">
                <h2 className="text-lg sm:text-xl font-bold text-palette-dark font-display mb-2.5 sm:mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <span>The Challenge & Context</span>
                </h2>
                <p className="text-xs sm:text-base text-palette-indigo font-medium leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 sm:p-8 rounded-3xl bg-white border-2 border-palette-taupe shadow-md">
                <h2 className="text-lg sm:text-xl font-bold text-palette-dark font-display mb-2.5 sm:mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <span>The Engineering Solution</span>
                </h2>
                <p className="text-xs sm:text-base text-palette-indigo font-medium leading-relaxed mb-5 sm:mb-6">
                  {project.solution}
                </p>

                <h3 className="text-xs font-bold uppercase tracking-wider text-palette-dark mb-3">
                  Key Systems & Features Built:
                </h3>
                <div className="space-y-2 sm:space-y-2.5">
                  {project.whatBuilt.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-palette-dark font-medium">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-800" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advisory note: What I'd do differently for you */}
              <div className="p-4 sm:p-8 rounded-3xl bg-white border-2 border-palette-indigo shadow-md">
                <h2 className="text-base sm:text-lg font-bold text-palette-dark font-display mb-2 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span>What I Would Do Differently For Your Project</span>
                </h2>
                <p className="text-xs sm:text-sm text-palette-indigo font-medium leading-relaxed">
                  {project.differentlyNote}
                </p>
              </div>
            </div>

            {/* Sidebar Details (4 cols) */}
            <div className="lg:col-span-4 space-y-5 sm:space-y-6">
              {/* Results & Metrics */}
              <div className="p-5 sm:p-7 rounded-3xl bg-white border-2 border-palette-taupe shadow-md">
                <h3 className="text-base font-bold text-palette-dark font-display mb-3 sm:mb-4 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-700" />
                  <span>Measured Results</span>
                </h3>
                <div className="space-y-2.5 sm:space-y-3 text-xs">
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-palette-cream border border-palette-taupe text-palette-dark font-semibold">
                    {project.result.highlight}
                  </div>
                  {project.result.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-palette-indigo font-mono font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-palette-dark" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="p-5 sm:p-7 rounded-3xl bg-white border-2 border-palette-taupe shadow-md">
                <h3 className="text-base font-bold text-palette-dark font-display mb-3 sm:mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-palette-indigo" />
                  <span>Technologies Used</span>
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techUsed.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl bg-palette-cream text-palette-dark text-xs font-mono font-semibold border border-palette-taupe"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct CTA Box */}
              <div className="p-5 sm:p-7 rounded-3xl bg-palette-dark text-palette-cream text-center space-y-3 sm:space-y-4 shadow-xl">
                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-palette-taupe mx-auto" />
                <h4 className="text-sm sm:text-base font-bold text-palette-cream font-display">
                  Ready to build a high-converting platform?
                </h4>
                <p className="text-xs text-palette-taupe font-medium leading-relaxed">
                  Let&apos;s schedule a 15-minute WhatsApp call to discuss requirements and fixed pricing.
                </p>
                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.personal.whatsappNumber}?text=${encodeURIComponent(
                    `Hi Mayur, I am interested in building a platform like ${project.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Next Project Footer Bar */}
          <div className="mt-12 sm:mt-20 pt-6 sm:pt-10 border-t border-palette-taupe flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <Link
              href="/#work"
              className="text-xs font-bold text-palette-indigo hover:text-palette-dark transition-colors py-1"
            >
              ← Back to Project Index
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="text-xs font-bold text-palette-dark hover:text-palette-indigo transition-colors flex items-center gap-1.5 py-1"
            >
              <span>Next Case Study: {nextProject.title}</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
