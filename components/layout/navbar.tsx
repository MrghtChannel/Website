import { Logo } from "@/components/logo";
import { NavMenu } from "./navbar/nav-menu";
import { NavigationSheet } from "../ui/navigation-sheet";
import { ModeToggle } from "@/components/themetoggle";
import LanguageSwitcher from "@/components/languageswitcher";

const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />
        <NavMenu className="hidden md:block" />
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ModeToggle />
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
