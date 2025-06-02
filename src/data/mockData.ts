import type { ClientData } from '@/types';

export const mockClientData: ClientData = {
  cdn_url: "https://same-assets.com/cevdet/",
  background: "/images/bg-pattern.jpg",
  social: {
    discord: "https://discord.gg/cevdet",
    telegram: "https://t.me/cevdetio",
    twitch: "https://twitch.tv/cevdet",
    instagram: "https://instagram.com/cevdet",
    youtube: "https://youtube.com/cevdet",
    skype: "https://join.skype.com/cevdet"
  },
  sites: [
    {
      site: "Betboo",
      url: "https://betboo.com",
      color: "#ff6b35",
      desc: ["1000₺ BONUS", "İLK ÜYELİK"],
      slider_img: "/images/betboo-slider.jpg"
    },
    {
      site: "Bets10",
      url: "https://bets10.com",
      color: "#1e40af",
      desc: ["500₺ BONUS", "CANLI BAHIS"],
      slider_img: "/images/bets10-slider.jpg"
    },
    {
      site: "Sekabet",
      url: "https://sekabet.com",
      color: "#dc2626",
      desc: ["750₺ BONUS", "SPOR BAHIS"],
      slider_img: "/images/sekabet-slider.jpg"
    },
    {
      site: "Youwin",
      url: "https://youwin.com",
      color: "#059669",
      desc: ["2000₺ BONUS", "CASINO OYUNLARI"],
      slider_img: "/images/youwin-slider.jpg"
    },
    {
      site: "Betwild",
      url: "https://betwild.com",
      color: "#7c3aed",
      desc: ["1500₺ BONUS", "SLOT OYUNLARI"],
      slider_img: "/images/betwild-slider.jpg"
    },
    {
      site: "Tipobet",
      url: "https://tipobet.com",
      color: "#ea580c",
      desc: ["800₺ BONUS", "CANLI CASINO"],
      slider_img: "/images/tipobet-slider.jpg"
    }
  ],
  categories: [
    {
      id: 1706206125458, // leftFix
      grid: 1,
      sites: [
        { site: "Betboo", sort: "1" }
      ]
    },
    {
      id: 1706206145587, // rightFix
      grid: 1,
      sites: [
        { site: "Bets10", sort: "1" }
      ]
    },
    {
      id: 1706206176170, // slider
      grid: 1,
      sites: [
        { site: "Betboo", sort: "1" },
        { site: "Bets10", sort: "2" },
        { site: "Sekabet", sort: "3" }
      ]
    },
    {
      id: 1706206255751, // vip
      grid: 2,
      sites: [
        { site: "Youwin", sort: "1" },
        { site: "Betwild", sort: "2" }
      ]
    },
    {
      id: 1706206296219, // diamond
      grid: 3,
      sites: [
        { site: "Tipobet", sort: "1" }
      ]
    },
    {
      id: 1706406420307, // bottomFix
      grid: 1,
      sites: [
        { site: "Sekabet", sort: "1" },
        { site: "Youwin", sort: "2" }
      ]
    },
    {
      id: 1706406449314, // notifyFix
      grid: 1,
      sites: [
        { site: "Betwild", sort: "1" }
      ]
    },
    {
      id: 1706206832872, // list (normal sites)
      grid: 4,
      sites: [
        { site: "Betboo", sort: "1" },
        { site: "Bets10", sort: "2" },
        { site: "Sekabet", sort: "3" },
        { site: "Youwin", sort: "4" },
        { site: "Betwild", sort: "5" },
        { site: "Tipobet", sort: "6" }
      ]
    }
  ]
};
