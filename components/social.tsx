"use client";

import { ArrowUpRight } from "lucide-react";
import { useSocialLinks, SocialItem } from "@/lib/social";
import { useTranslation } from "react-i18next";

const Social = () => {
  const socialLinks = useSocialLinks();
  const { t } = useTranslation();

  return (
    <section className="py-32">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mb-5 text-2xl font-semibold md:text-3xl">
          {t("social.title")}
        </h2>
        <p className="font-medium text-muted-foreground md:text-xl">
          {t("social.description")}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {socialLinks.map((item: SocialItem) => (
          <a
            key={item.name}
            className="group rounded-md border border-border p-6 transition-all hover:bg-accent flex flex-col h-full"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-between gap-4">
              <item.icon className="size-5 text-primary" />
              <ArrowUpRight className="size-4 -translate-x-2 translate-y-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </div>
            <div className="mt-4 flex-1">
              <h3 className="mb-1 font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Social;
