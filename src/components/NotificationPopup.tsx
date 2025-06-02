'use client';

import { useState, useEffect } from 'react';
import type { Category, Site } from '@/types';

interface NotificationPopupProps {
  category: Category;
  sites: Site[];
  findSite: (siteName: string) => Site | undefined;
}

export default function NotificationPopup({ category, sites, findSite }: NotificationPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  const sortedSites = category.sites
    .map(categorySite => findSite(categorySite.site))
    .filter((site): site is Site => site !== undefined)
    .sort((a, b) => {
      const aSort = category.sites.find(cs => cs.site === a.site)?.sort || '0';
      const bSort = category.sites.find(cs => cs.site === b.site)?.sort || '0';
      return Number.parseInt(aSort) - Number.parseInt(bSort);
    });

  useEffect(() => {
    if (sortedSites.length === 0) return;

    // Show notification after delay like original
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    // Rotate notifications every 5 seconds
    const rotateTimer = setInterval(() => {
      setCurrentNotification(prev => (prev + 1) % sortedSites.length);
    }, 5000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(rotateTimer);
    };
  }, [sortedSites.length]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || sortedSites.length === 0) {
    return null;
  }

  const currentSite = sortedSites[currentNotification];

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-40" onClick={handleClose} />

      <div
        className="notification-popup"
        style={{ '--site-color': currentSite.color } as React.CSSProperties}
      >
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex justify-center mb-4">
          <div className="w-24 h-12 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">{currentSite.site}</span>
          </div>
        </div>

        <div className="text-center mb-3">
          <h3 className="text-xs font-semibold text-slate-400 mb-2">
            SİZE BİR MESAJI VAR !
          </h3>
          <h1
            className="text-xl font-bold mb-1"
            style={{ color: currentSite.color }}
          >
            {currentSite.desc[0]}
          </h1>
          <p className="text-slate-300 text-sm">
            {currentSite.desc[1]}
          </p>
        </div>

        <div className="text-center mb-4">
          <small className="text-slate-500 text-xs">
            Şimdi Yararlanın!
          </small>
        </div>

        <a
          href={currentSite.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 text-center text-white font-bold rounded-lg transition-all duration-300 hover:scale-105"
          style={{ backgroundColor: currentSite.color }}
        >
          ŞİMDİ GİRİŞ YAP
        </a>

        <div className="flex justify-center mt-3 space-x-1">
          {sortedSites.map((_, index) => (
            <div
              key={`notification-indicator-${index}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentNotification
                  ? 'bg-white'
                  : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
      </div>
    </>
  );
}
