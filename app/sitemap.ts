import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "de", "ru", "pl", "uk"];
  const pages = ["", "/about", "/contact", "/cookies"];

  const baseUrl = "https://mrghtchannel.vercel.app";

  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 1 : 0.5,
    }))
  );
}
