'use client';

import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Preloader from "@/components/preloader";
import Social from "@/components/social";
import "@/globals.css";

import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from '@/components/ui/animated-cursor';

import { CookieConsent } from "@/components/cookie-consent";
import { metadata } from "@/metadata";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderFinish = () => {
    setIsLoading(false);
  };

  const Content = (
    <>
      <NavBar />
      {children}
      <Social />
      <Footer />
    </>
  );

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={metadata.description ?? undefined} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        {metadata.openGraph.images.map((image, index) => (
          <meta
            key={index}
            property="og:image"
            content={`${metadata.url}${image.url}`}
          />
        ))}
        {metadata.openGraph.images.map((image, index) => (
          <meta key={`og:image:width:${index}`} property="og:image:width" content={String(image.width)} />
        ))}
        {metadata.openGraph.images.map((image, index) => (
          <meta key={`og:image:height:${index}`} property="og:image:height" content={String(image.height)} />
        ))}
        {metadata.openGraph.images.map((image, index) => (
          <meta key={`og:image:alt:${index}`} property="og:image:alt" content={image.alt} />
        ))}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        {metadata.twitter.images.map((image, index) => (
          <meta
            key={`twitter:image:${index}`}
            name="twitter:image"
            content={`${metadata.url}${image}`}
          />
        ))}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isLoading ? (
            <Preloader onFinish={handlePreloaderFinish} />
          ) : isMobile ? (
            Content
          ) : (
            <CursorProvider>
              <Cursor>
                <svg
                  className="w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="currentColor"
                    d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
                  />
                </svg>
              </Cursor>
              <CursorFollow>
                <div className="bg-blue-500 px-2 py-1 rounded-lg shadow-lg w-12 h-12 flex items-center justify-center">
                  <img
                    src="/rickroll.gif"
                    alt="Designer"
                    className="w-full h-full object-contain"
                  />
                </div>
              </CursorFollow>
              {Content}
            </CursorProvider>
          )}

          {!isLoading && (
            <CookieConsent
              variant="default"
              onAcceptCallback={() => {
                console.log("Cookies accepted");
              }}
              onDeclineCallback={() => {
                console.log("Cookies declined");
              }}
            />
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}