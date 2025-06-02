export interface Site {
  site: string;
  url: string;
  color: string;
  desc: [string, string]; // First and second description lines
  slider_img?: string;
}

export interface CategorySite {
  site: string;
  sort: string;
}

export interface Category {
  id: number;
  grid: number;
  sites: CategorySite[];
}

export interface SocialLinks {
  discord: string;
  telegram: string;
  twitch: string;
  instagram: string;
  youtube: string;
  skype: string;
}

export interface ClientData {
  sites: Site[];
  categories: Category[];
  social: SocialLinks;
  cdn_url: string;
  background?: string;
}

export interface AppData {
  leftFix: Category | null;
  rightFix: Category | null;
  slider: Category | null;
  vip: Category | null;
  diamond: Category | null;
  bottomFix: Category | null;
  notifyFix: Category | null;
  list: Category | null;
}
