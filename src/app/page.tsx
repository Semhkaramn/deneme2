'use client';

import { useState, useEffect } from 'react';
import { mockClientData } from '@/data/mockData';
import type { ClientData, Category, Site } from '@/types';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import SideBanners from '@/components/SideBanners';
import VipSection from '@/components/VipSection';
import DiamondSection from '@/components/DiamondSection';
import SitesGrid from '@/components/SitesGrid';
import NotificationPopup from '@/components/NotificationPopup';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [appData, setAppData] = useState<{
    leftFix: Category | null;
    rightFix: Category | null;
    slider: Category | null;
    vip: Category | null;
    diamond: Category | null;
    bottomFix: Category | null;
    notifyFix: Category | null;
    list: Category | null;
  } | null>(null);

  useEffect(() => {
    // Simulate loading time like the original
    const timer = setTimeout(() => {
      setClientData(mockClientData);

      // Process categories like the original Vue app
      const categories = mockClientData.categories;
      setAppData({
        leftFix: categories.find(cat => cat.id === 1706206125458) || null,
        rightFix: categories.find(cat => cat.id === 1706206145587) || null,
        slider: categories.find(cat => cat.id === 1706206176170) || null,
        vip: categories.find(cat => cat.id === 1706206255751) || null,
        diamond: categories.find(cat => cat.id === 1706206296219) || null,
        bottomFix: categories.find(cat => cat.id === 1706406420307) || null,
        notifyFix: categories.find(cat => cat.id === 1706406449314) || null,
        list: categories.find(cat => cat.id === 1706206832872) || null,
      });

      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const findSite = (siteName: string): Site | undefined => {
    return clientData?.sites.find(site => site.site === siteName);
  };

  if (loading) {
    return <Preloader />;
  }

  if (!clientData || !appData) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="min-h-screen">
      <Header socialLinks={clientData.social} />

      <main className="container mx-auto px-4 pt-24 pb-12 space-y-12">
        {/* Hero Slider */}
        {appData.slider && (
          <HeroSlider
            category={appData.slider}
            sites={clientData.sites}
            findSite={findSite}
          />
        )}

        {/* VIP Section */}
        {appData.vip && (
          <VipSection
            category={appData.vip}
            sites={clientData.sites}
            findSite={findSite}
          />
        )}

        {/* Diamond Section */}
        {appData.diamond && (
          <DiamondSection
            category={appData.diamond}
            sites={clientData.sites}
            findSite={findSite}
          />
        )}

        {/* Normal Sites Grid */}
        {appData.list && (
          <SitesGrid
            category={appData.list}
            sites={clientData.sites}
            findSite={findSite}
          />
        )}
      </main>

      {/* Side Banners */}
      <SideBanners
        leftFix={appData.leftFix}
        rightFix={appData.rightFix}
        sites={clientData.sites}
        findSite={findSite}
      />

      {/* Notification Popup */}
      {appData.notifyFix && (
        <NotificationPopup
          category={appData.notifyFix}
          sites={clientData.sites}
          findSite={findSite}
        />
      )}

      <Footer />
    </div>
  );
}
