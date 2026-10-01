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
    <section id="work" className="py-24 relative bg-palette-cream border-t border-palette-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-palette-taupe text-palette-dark text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              {lang === 'hi' ? 'वास्तविक प्रोजेक्ट्स' : 'Proven Track Record'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-palette-dark font-display">
              {t.projectsTitle}
            </h2>
            <p className="mt-2 text-base text-palette-indigo font-medium max-w-xl">
              {t.projectsSubtitle}
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white border border-palette-taupe shadow-sm self-start md:self-auto">
            {filterButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id as 'all' | 'websites' | 'dashboards' | 'ecommerce')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border-2 border-palette-taupe hover:border-palette-dark p-6 sm:p-8 transition-all duration-300 shadow-md hover:shadow-2xl"
            >
              {/* Top Media Showcase */}
              <div className="relative mb-6">
                <BrowserFrame
                  url={project.liveUrl}
                  imageSrc={project.screenshots.desktop}
                  alt={project.title}
                  aspectRatio="aspect-[16/10]"
                  className="w-full"
                />

                {/* Overlaid Mobile Phone Frame */}
                <div className="absolute -bottom-5 -right-3 sm:-right-4 w-28 sm:w-36 z-20 hover:scale-105 transition-transform duration-300">
                  <MobileFrame
                    imageSrc={project.screenshots.mobile}
                    alt={`${project.title} mobile view`}
                  />
                </div>
              </div>

              {/* Information Body */}
              <div className="pt-2">
                {/* Meta Tag & Client Type */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-bold text-palette-dark uppercase tracking-wide bg-palette-cream px-3 py-1 rounded-lg border border-palette-taupe">
                    {project.clientType}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-palette-indigo hover:text-palette-dark transition-colors"
                  >
                    <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-palette-dark font-display">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-palette-indigo mt-1 mb-4">
                  {project.tagline}
                </p>

                {/* Problem vs Solution Summary */}
                <div className="space-y-2.5 mb-5 text-xs text-palette-indigo leading-relaxed bg-palette-cream/80 p-4 rounded-2xl border border-palette-taupe font-medium">
                  <div>
                    <strong className="text-palette-dark font-bold">Problem:</strong> {project.problem}
                  </div>
                  <div>
                    <strong className="text-palette-dark font-bold">Solution:</strong> {project.solution}
                  </div>
                </div>

                {/* Key Built Items */}
                <div className="mb-5 space-y-1.5">
                  {project.whatBuilt.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-palette-dark font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techUsed.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-palette-cream text-palette-dark text-[11px] font-mono font-semibold border border-palette-taupe"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="flex items-center justify-between pt-5 border-t border-palette-taupe gap-3">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-palette-dark hover:text-palette-indigo transition-colors group/link"
                >
                  <span>{lang === 'hi' ? 'पूरा केस स्टडी पढ़ें' : 'Read Case Study'}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-palette-cream hover:bg-palette-taupe/40 text-palette-dark text-xs font-bold border border-palette-taupe transition-all"
                >
                  <span>{lang === 'hi' ? 'लाइव देखें' : 'Visit Live Site'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-700" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
