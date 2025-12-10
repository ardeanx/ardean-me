import { siteConfig } from '@/config/site';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './global.css';
import ProgressProvider from '@/components/ProgressProvider';

export const metadata: Metadata = {
  authors: [
    {
      name: "Ardean Bima Saputra",
      url: "https://ardean.me",
    },
  ],
  creator: "Ardean Bima Saputra",
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    description: siteConfig.description,
    images: [
      {
        alt: siteConfig.name,
        height: 630,
        url: siteConfig.url,
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: siteConfig.name,
    title: siteConfig.name,
    type: "website",
    url: siteConfig.url,
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ardeanbimasptra",
    description: siteConfig.description,
    images: [siteConfig.url],
    title: siteConfig.name,
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#fff' },
  ],
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ProgressProvider />
        <RootProvider
        > <Toaster />
          <Analytics />
          <SpeedInsights />{children}</RootProvider>
      </body>
    </html>
  );
}
