"use client";

import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { title: t("contact.footer.about"), href: "/about" },
    { title: t("contact.footer.contact"), href: "/contact" },
    { title: t("contact.footer.blog"), href: "/blog" },
    { title: t("contact.footer.help"), href: "https://t.me/+zE_HNLW6iXpmZGIy" },
  ];

  return (
    <footer className="bg-background">
      <div className="max-w-screen-xl mx-auto px-6 xl:px-0 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Logo />
          <nav>
            <ul className="flex flex-wrap gap-4">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="my-6" />

        <span className="text-muted-foreground text-sm block text-center sm:text-left">
          &copy; {new Date().getFullYear()}{" "}
          <Link
            href="https://x.com/MrghtChannel"
            className="hover:text-foreground transition-colors"
          >
            MrghtChannel
          </Link>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
