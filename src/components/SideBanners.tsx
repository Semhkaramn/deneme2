import type { Category, Site } from '@/types';

interface SideBannersProps {
  leftFix: Category | null;
  rightFix: Category | null;
  sites: Site[];
  findSite: (siteName: string) => Site | undefined;
}

export default function SideBanners({ leftFix, rightFix, sites, findSite }: SideBannersProps) {
  const renderSideBanner = (category: Category | null, position: 'left' | 'right') => {
    if (!category || category.sites.length === 0) return null;

    const site = findSite(category.sites[0].site);
    if (!site) return null;

    return (
      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed-side ${position} hidden lg:flex flex-col items-center justify-center p-2 rounded-lg text-white text-center hover:shadow-2xl`}
        style={{
          '--site-color': site.color,
          background: `linear-gradient(135deg, ${site.color}, ${site.color}CC)`
        } as React.CSSProperties}
      >
        {/* Top decoration */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white/50" />
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-white/50" />
          </div>
        </div>

        {/* Center content */}
        <div className="flex flex-col items-center justify-center space-y-3">
          {/* Stars */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={`star-${position}-${i}`} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Site name */}
          <div className="text-lg font-bold">{site.site}</div>

          {/* Promo text */}
          <div className="text-xs text-center px-2 leading-tight">
            <div className="font-semibold">{site.desc[0]}</div>
            <div className="text-white/90">{site.desc[1]}</div>
          </div>

          {/* Button */}
          <div className="bg-white text-black px-3 py-1 rounded text-xs font-bold hover:bg-gray-100 transition-colors">
            GİRİŞ YAP
          </div>
        </div>
      </a>
    );
  };

  return (
    <>
      {renderSideBanner(leftFix, 'left')}
      {renderSideBanner(rightFix, 'right')}
    </>
  );
}
