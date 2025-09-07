/**
 * v0 by Vercel.
 * @see https://v0.app/t/8YMiVEiEQXe
 * Documentation: https://v0.app/docs#integrating-generated-code-into-your-nextjs-app
 */
/**
 * v0 by Vercel.
 */
"use client"

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer"
import React from "react"
import { usePathname, useRouter } from "next/navigation"
import i18n from "@/i18n"

const languages = [
  { code: "en", label: "English" },
  { code: "ua", label: "Українська" },
  { code: "de", label: "Deutsch" },
  { code: "pl", label: "Polski" },
  { code: "ru", label: "Русский" },
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)

    const segments = pathname.split("/").filter(Boolean)

    if (languages.some(l => l.code === segments[0])) {
      segments[0] = lng
    } else {
      segments.unshift(lng)
    }

    router.push("/" + segments.join("/"))
  }

  return (
    <React.Fragment>
      {/* Desktop Dropdown */}
      <div className="hidden sm:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <GlobeIcon className="h-5 w-5" />
              <span>{i18n.language.toUpperCase()}</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            {languages.map(lang => (
              <DropdownMenuItem
                key={lang.code}
                className="flex items-center justify-between"
                onClick={() => changeLanguage(lang.code)}
              >
                <span>{lang.label}</span>
                {i18n.language === lang.code && <CheckIcon className="h-5 w-5" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Drawer */}
      <div className="sm:hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <GlobeIcon className="h-5 w-5" />
              <span>{i18n.language.toUpperCase()}</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="grid gap-4 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Select Language</h3>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <XIcon className="h-5 w-5" />
                  </Button>
                </DrawerClose>
              </div>
              <div className="grid gap-2">
                {languages.map(lang => (
                  <Button
                    key={lang.code}
                    variant={i18n.language === lang.code ? "default" : "ghost"}
                    className="justify-start gap-2"
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <GlobeIcon className="h-5 w-5" />
                    <span>{lang.label}</span>
                    {i18n.language === lang.code && <CheckIcon className="h-5 w-5 ml-auto" />}
                  </Button>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </React.Fragment>
  )
}

/* Icons */
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
