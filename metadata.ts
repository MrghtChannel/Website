import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MrghtChannel | Portfolio",
  description: "MrghtChannel | Portfolio",
  openGraph: {
    title: "MrghtChannel | Portfolio",
    description: "MrghtChannel | Portfolio",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,         
        height: 630,
        alt: "MrghtChannel Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MrghtChannel | Portfolio",
    description: "MrghtChannel | Portfolio",
    images: ["/og-image.jpg"],
  },
};
