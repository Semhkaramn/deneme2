import type { Category, Site } from '@/types';

interface DiamondSectionProps {
  category: Category;
  sites: Site[];
  findSite: (siteName: string) => Site | undefined;
}

export default function DiamondSection({ category, sites, findSite }: DiamondSectionProps) {
  const sortedSites = category.sites
    .map(categorySite => findSite(categorySite.site))
    .filter((site): site is Site => site !== undefined)
    .sort((a, b) => {
      const aSort = category.sites.find(cs => cs.site === a.site)?.sort || '0';
      const bSort = category.sites.find(cs => cs.site === b.site)?.sort || '0';
      return Number.parseInt(aSort) - Number.parseInt(bSort);
    });

  if (sortedSites.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">💎 DIAMOND SİTELER</h2>
        <p className="text-slate-400">Premium kalitede en özel siteler</p>
      </div>

      <div className={`grid gap-6 ${category.grid === 1 ? 'grid-cols-1' : category.grid === 2 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {sortedSites.map((site) => (
          <a
            key={site.site}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="site-card relative group overflow-hidden border-2"
            style={{
              '--site-color': site.color,
              borderColor: site.color,
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))"
            } as React.CSSProperties}
          >
            {/* Diamond Badge */}
            <div className="diamond-badge">
              💎 DIAMOND
            </div>

            {/* Diamond Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={`diamond-pattern-${i}`}
                    className="border border-blue-400"
                    style={{
                      transform: `rotate(${(i % 4) * 45}deg)`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              {/* Diamond Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center transform rotate-45">
                  <div className="transform -rotate-45">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7l7 11 7-11-7-5zM10 4.5L15.5 8 10 16 4.5 8 10 4.5z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                {/* Site Logo Placeholder */}
                <div className="w-40 h-16 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-white font-bold text-lg">{site.site}</span>
                </div>

                <div className="space-y-2">
                  <div className="text-xl font-bold text-white">
                    {site.desc[0]} {site.desc[1]}
                  </div>
                  <div className="text-sm text-blue-400 font-semibold">
                    SİZE ÖZEL PROMOSYONLAR
                  </div>
                </div>

                <button
                  className="site-button w-full"
                  style={{ backgroundColor: site.color }}
                >
                  GİRİŞ YAP
                </button>
              </div>
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full" />

            {/* Sparkle effects */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse" />
            <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-8 left-8 w-1 h-1 bg-blue-300 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-300 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }} />
          </a>
        ))}
      </div>
    </div>
  );
}
