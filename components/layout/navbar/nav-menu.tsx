"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { useTranslation } from "react-i18next"; 

const NavigationMenu = NavigationMenuPrimitive.Root;
const NavigationMenuList = NavigationMenuPrimitive.List;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuLink = NavigationMenuPrimitive.Link;

export const NavMenu = (props: NavigationMenuProps & { isMobile?: boolean }) => {
  const { isMobile, ...rest } = props;
  const { t } = useTranslation(); 

  return (
    <NavigationMenu {...rest}>
      <NavigationMenuList
        className={`flex flex-col gap-2 ${
          !isMobile ? "md:flex-row md:gap-6" : ""
        }`}
      >
        {!isMobile && (
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className={`block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors ${
                  !isMobile ? "rounded-lg" : ""
                }`}
              >
                {t("nav.home")} 
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/blog"
              className={`block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors ${
                !isMobile ? "rounded-lg" : ""
              }`}
            >
              {t("nav.blog")} 
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/about"
              className={`block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors ${
                !isMobile ? "rounded-lg" : ""
              }`}
            >
              {t("nav.about")} 
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className={`block px-4 py-2 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors ${
                !isMobile ? "rounded-lg" : ""
              }`}
            >
              {t("nav.contact")} 
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
