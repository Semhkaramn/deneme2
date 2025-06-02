import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cevdet | Güvenilir Siteler",
  description: "En güvenilir bahis siteleri ve casino oyunları. Güvenli ödeme, hızlı para çekme, 7/24 destek. Cevdet ile kazanmanın keyfini çıkarın!",
  keywords: "bahis, casino, güvenilir siteler, online bahis, spor bahis, canlı casino",
  robots: "index, follow",
  openGraph: {
    title: "Cevdet | Güvenilir Siteler",
    description: "En güvenilir bahis siteleri ve casino oyunları",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
