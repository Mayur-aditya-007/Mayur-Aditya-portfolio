'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { useApp } from '@/context/AppContext';
import { BrowserFrame } from '@/components/ui/BrowserFrame';
import { MobileFrame } from '@/components/ui/MobileFrame';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProjectsGrid: React.FC = () => {
  const { lang } = useApp();
  const t = PORTFOLIO_DATA.i18n[lang];
  const [activeFilter, setActiveFilter] = useState<'all' | 'websites' | 'dashboards' | 'ecommerce'>('all');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const filterButtons = [
    { id: 'all', label: t.allFilter },
    { id: 'websites', label: t.websitesFilter },
    { id: 'dashboards', label: t.dashboardsFilter },
    { id: 'ecommerce', label: t.ecommerceFilter },
  ];

  return (
    <section id="work" className="py-16 sm:py-24 relative bg-palette-cream border-t border-palette-taupe">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-5 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-3 shadow-sm">
              {lang === 'hi' ? 'वास्तविक प्रोजेक्ट्स' : 'Proven Track Record'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-palette-dark font-display">
              {t.projectsTitle}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-palette-indigo font-medium max-w-xl">
              {t.projectsSubtitle}
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 p-1 sm:p-1.5 rounded-2xl bg-white border border-palette-taupe shadow-sm overflow-x-auto no-scrollbar w-full md:w-auto">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id as 'all' | 'websites' | 'dashboards' | 'ecommerce')}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 flex-shrink-0 ${
                  activeFilter === btn.id
                    ? 'bg-palette-dark text-palette-cream shadow-sm'
                    : 'text-palette-indigo hover:text-palette-dark hover:bg-palette-cream'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border-2 border-palette-taupe hover:border-palette-dark p-4 sm:p-8 transition-all duration-300 shadow-md hover:shadow-2xl"
            >
              {/* Top Media Showcase */}
              <div className="relative mb-5 sm:mb-6">
                <BrowserFrame
                  url={project.liveUrl}
                  imageSrc={project.screenshots.desktop}
                  alt={project.title}
                  aspectRatio="aspect-[16/10]"
                  className="w-full"
                />

                {/* Overlaid Mobile Phone Frame */}
                <div className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-4 w-20 sm:w-32 md:w-36 z-20 hover:scale-105 transition-transform duration-300">
                  <MobileFrame
                    imageSrc={project.screenshots.mobile}
                    alt={`${project.title} mobile view`}
                  />
                </div>
              </div>

              {/* Information Body */}
              <div className="pt-1 sm:pt-2">
                {/* Meta Tag & Client Type */}
                <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                  <span className="text-[10px] sm:text-xs font-bold text-palette-dark uppercase tracking-wide bg-palette-cream px-2.5 py-1 rounded-lg border border-palette-taupe">
                    {project.clientType}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-palette-indigo hover:text-palette-dark transition-colors truncate max-w-[55%]"
                  >
                    <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-palette-dark font-display">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-palette-indigo mt-0.5 sm:mt-1 mb-3 sm:mb-4">
                  {project.tagline}
                </p>

                {/* Problem vs Solution Summary */}
                <div className="space-y-2 mb-4 sm:mb-5 text-xs text-palette-indigo leading-relaxed bg-palette-cream/80 p-3.5 sm:p-4 rounded-2xl border border-palette-taupe font-medium">
                  <div>
                    <strong className="text-palette-dark font-bold">Problem:</strong> {project.problem}
                  </div>
                  <div>
                    <strong className="text-palette-dark font-bold">Solution:</strong> {project.solution}
                  </div>
                </div>

                {/* Key Built Items */}
                <div className="mb-4 sm:mb-5 space-y-1.5">
                  {project.whatBuilt.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-palette-dark font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                  {project.techUsed.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-palette-cream text-palette-dark text-[10px] sm:text-[11px] font-mono font-semibold border border-palette-taupe"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pt-4 sm:pt-5 border-t border-palette-taupe gap-2.5 sm:gap-3">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center justify-center sm:justify-start gap-2 py-2.5 px-3 rounded-xl sm:rounded-none sm:p-0 bg-palette-cream/60 sm:bg-transparent text-xs sm:text-sm font-bold text-palette-dark hover:text-palette-indigo transition-colors group/link"
                >
                  <span>{lang === 'hi' ? 'पूरा केस स्टडी पढ़ें' : 'Read Case Study'}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-palette-dark hover:bg-emerald-700 text-palette-cream hover:text-white text-xs font-bold border border-palette-taupe transition-all shadow-sm active:scale-98"
                >
                  <span>{lang === 'hi' ? 'लाइव देखें' : 'Visit Live Site'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
