'use client';

import { useState, useEffect } from 'react';
import type { Category, Site } from '@/types';

interface HeroSliderProps {
  category: Category;
  sites: Site[];
  findSite: (siteName: string) => Site | undefined;
}

export default function HeroSlider({ category, sites, findSite }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sortedSites = category.sites
    .map(categorySite => findSite(categorySite.site))
    .filter((site): site is Site => site !== undefined)
    .sort((a, b) => {
      const aSort = category.sites.find(cs => cs.site === a.site)?.sort || '0';
      const bSort = category.sites.find(cs => cs.site === b.site)?.sort || '0';
      return Number.parseInt(aSort) - Number.parseInt(bSort);
    });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sortedSites.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [sortedSites.length]);

  if (sortedSites.length === 0) {
    return null;
  }

  return (
    <div className="hero-slider">
      {sortedSites.map((site, index) => (
        <a
          key={site.site}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`hero-slide ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: site.slider_img
              ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${site.slider_img})`
              : `linear-gradient(135deg, ${site.color}40, ${site.color}80)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="mb-6">
                <div className="text-6xl font-bold mb-2">{site.site}</div>
                <div className="text-2xl font-semibold text-yellow-400">
                  {site.desc[0]}
                </div>
                <div className="text-xl text-slate-200">
                  {site.desc[1]}
                </div>
              </div>
              <button
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: site.color }}
              >
                GİRİŞ YAP
              </button>
            </div>
          </div>
        </a>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sortedSites.map((site, index) => (
          <button
            key={`indicator-${site.site}`}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => prev === 0 ? sortedSites.length - 1 : prev - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % sortedSites.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
