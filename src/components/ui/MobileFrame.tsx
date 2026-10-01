'use client';

import React from 'react';
import Image from 'next/image';

interface MobileFrameProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({
  imageSrc,
  alt,
  className = '',
}) => {
  return (
    <div className={`relative rounded-[32px] p-2 bg-palette-dark border-[3px] border-palette-indigo shadow-2xl shadow-palette-dark/30 ${className}`}>
      {/* Top Dynamic Island / Speaker */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-palette-dark rounded-full z-20 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-palette-indigo mr-2" />
        <div className="w-1.5 h-1.5 rounded-full bg-palette-mauve" />
      </div>

      {/* Screen container */}
      <div className="relative w-full aspect-[9/19] rounded-[24px] overflow-hidden bg-palette-cream border border-palette-dark">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover object-top"
          priority={false}
        />
      </div>

      {/* Bottom Home Indicator Bar */}
      <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-palette-taupe rounded-full z-20" />
    </div>
  );
};
