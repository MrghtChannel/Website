'use client';

import { CookieIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export function CookieConsent({
  variant = "default",
  mode = false,
  onAcceptCallback = () => {},
  onDeclineCallback = () => {},
}) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => setHide(true), 700);
    onAcceptCallback();
  };

  const decline = () => {
    setIsOpen(false);
    setTimeout(() => setHide(true), 700);
    onDeclineCallback();
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true") && !mode) {
        setIsOpen(false);
        setTimeout(() => setHide(true), 700);
      }
    } catch (error) {
      console.error("Error checking cookie consent:", error);
    }
  }, []);

  return variant === "default" ? (
    <div
      className={cn(
        "fixed z-200 bottom-0 right-0 sm:right-4 p-4 sm:p-0 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div className="dark:bg-card bg-background rounded-lg sm:rounded-md border border-border shadow-lg">
        <div className="grid gap-2">
          <div className="border-b border-border h-12 sm:h-14 flex items-center justify-between p-3 sm:p-4">
            <h1 className="text-base sm:text-lg font-medium">{t("cookies.title")}</h1>
            <CookieIcon className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem]" />
          </div>
          <div className="p-3 sm:p-4">
            <p className="text-xs sm:text-sm font-normal text-start text-muted-foreground">
              {t("cookies.description")}
              <br /><br />
              <span className="text-xs">
                {t("cookies.agree_text")}{" "}
                <span className="font-medium text-black dark:text-white">
                  {t("cookies.accept")}
                </span>
              </span>
              <br />
              <Link href="/cookies" className="text-xs underline">
                {t("cookies.learn_more")}
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-2 p-3 sm:p-4 sm:py-5 border-t border-border dark:bg-background/20">
            <Button onClick={accept} variant="default" className="w-full">
              {t("cookies.accept")}
            </Button>
            <Button onClick={decline} variant="outline" className="w-full">
              {t("cookies.decline")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : variant === "small" ? (
    <div
      className={cn(
        "fixed z-200 bottom-0 right-0 sm:right-4 p-4 sm:p-0 w-full sm:max-w-md duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div className="m-0 sm:m-3 dark:bg-card bg-background border border-border rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-3">
          <h1 className="text-base sm:text-lg font-medium">{t("cookies.title")}</h1>
          <CookieIcon className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem]" />
        </div>
        <div className="p-3 -mt-2">
          <p className="text-xs sm:text-sm text-left text-muted-foreground">
            {t("cookies.description")}
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-2 p-3 mt-2 border-t">
          <Button onClick={accept} className="w-full">
            {t("cookies.accept")}
          </Button>
          <Button onClick={decline} className="w-full" variant="outline">
            {t("cookies.decline")}
          </Button>
        </div>
      </div>
    </div>
  ) : variant === "minimal" ? (
    <div
      className={cn(
        "fixed z-200 bottom-0 right-0 sm:right-4 p-4 sm:p-0 w-full sm:max-w-[300px] duration-700",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden"
      )}
    >
      <div className="m-0 sm:m-3 dark:bg-card bg-background border border-border rounded-lg shadow-lg">
        <div className="p-3 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <CookieIcon className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm font-medium">{t("cookies.title")}</span>
          </div>
        </div>
        <div className="p-3">
          <p className="text-[11px] sm:text-xs text-muted-foreground">
            {t("cookies.description")}
          </p>
          <div className="grid grid-cols-2 items-center gap-2 mt-3">
            <Button onClick={accept} variant="default" className="w-full">
              {t("cookies.accept")}
            </Button>
            <Button onClick={decline} variant="ghost" className="w-full">
              {t("cookies.decline")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
