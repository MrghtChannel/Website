'use client';

import GrindBg from "@/components/background/gridbackground";
import HeroLogo from "@/components/hero/herologo";
import Scrollingtext from "@/components/hero/scrollingtext";

export default function Page() {
  return (
    <>
      <GrindBg>
        <HeroLogo />
        <Scrollingtext />
      </GrindBg>
    </>
  );
}
