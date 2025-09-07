import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MrghtChannel | Portfolio",
  description: "MrghtChannel | Portfolio",
  openGraph: {
    title: "MrghtChannel | Portfolio",
    description: "MrghtChannel | Portfolio",
    url: "https://mrghtchannel.vercel.app/",
    site_name: "MrghtChannel",
    images: [
      {
        url: "https://mrghtchannel.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MrghtChannel Portfolio",
      },
    ],
    locale: "en_US",
    alternateLocale: ["uk_UA", "de_DE", "pl_PL", "ru_RU"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MrghtChannel | Portfolio",
    description: "Explore the creative portfolio of MrghtChannel, showcasing innovative projects and skills.",
    images: ["https://mrghtchannel.vercel.app/og-image.jpg"],
    site: "@MrghtChannel",
  },
};
