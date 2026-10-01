'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, Lock } from 'lucide-react';

interface BrowserFrameProps {
  url: string;
  imageSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  showLiveButton?: boolean;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  url,
  imageSrc,
  alt,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  showLiveButton = true,
}) => {
  const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className={`group rounded-2xl overflow-hidden border-2 border-palette-taupe/80 bg-white shadow-xl transition-all duration-300 hover:border-palette-indigo hover:shadow-2xl ${className}`}>
      {/* Browser Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-palette-cream border-b border-palette-taupe text-xs">
        {/* Window controls */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400 inline-block border border-red-500/30" />
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block border border-amber-500/30" />
          <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block border border-emerald-500/30" />
        </div>

        {/* Address Bar */}
        <div className="flex items-center gap-2 bg-white text-palette-indigo px-3.5 py-1 rounded-lg text-[11px] font-mono max-w-[65%] truncate border border-palette-taupe shadow-sm">
          <Lock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
          <span className="truncate font-semibold text-palette-dark">{displayUrl}</span>
        </div>

        {/* Action button */}
        <div>
          {showLiveButton && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-palette-indigo hover:text-palette-dark transition-colors p-1 flex items-center gap-1 text-[11px] font-semibold"
              title="Open Live Site"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Browser Viewport with Image */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-palette-cream`}>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
          priority={false}
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-palette-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};
