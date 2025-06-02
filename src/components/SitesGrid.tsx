import type { Category, Site } from '@/types';

interface SitesGridProps {
  category: Category;
  sites: Site[];
  findSite: (siteName: string) => Site | undefined;
}

export default function SitesGrid({ category, sites, findSite }: SitesGridProps) {
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

  const getGridCols = () => {
    switch (category.grid) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">GÜVENİLİR SİTELER</h2>
        <p className="text-slate-400">Güvenilir ve test edilmiş bahis siteleri</p>
      </div>

      <div className={`grid gap-6 ${getGridCols()}`}>
        {sortedSites.map((site) => (
          <div
            key={site.site}
            className="site-card relative group"
            style={{ '--site-color': site.color } as React.CSSProperties}
          >
            {/* Trust indicators */}
            <div className="flex justify-center space-x-4 mb-4 text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Hızlı Ödeme
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                7/24 Destek
              </div>
            </div>

            {/* Site Logo Placeholder */}
            <div className="w-full h-16 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-lg">{site.site}</span>
            </div>

            <div className="text-center space-y-4">
              <div className="space-y-2">
                <div className="text-xl font-bold text-white">
                  {site.desc[0]} {site.desc[1]}
                </div>
              </div>

              {/* Trust indicators */}
              <div className="flex justify-center items-center mt-3 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={`star-${site.site}-${i}`} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="site-button w-full inline-block"
                style={{ backgroundColor: site.color }}
              >
                GİRİŞ YAP
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}