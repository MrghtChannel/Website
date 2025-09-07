'use client';

import GrindBg from "@/components/hero/gridbackground";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from '@/components/ui/shadcn-io/terminal';

export default function Page() {
  return (
    <GrindBg>
      <div className="flex items-center justify-center min-h-screen">
        <Terminal className="w-[90%] max-w-[900px] h-[600px] text-lg md:text-xl p-6">
          <AnimatedSpan delay={0}>
            {"\n".repeat(2)}
            {" ".repeat(15)}MrghtChannel
          </AnimatedSpan>

          <TypingAnimation delay={1000} duration={30}>
            {`
            👩‍💻 About Me
            I am a software developer with experience in creating websites
            and bots for Telegram and Discord. I work with PHP, Java, Python,
            HTML, JavaScript, TypeScript, and various frameworks.
            `}
          </TypingAnimation>

          <TypingAnimation delay={9000} duration={30}>
            {`
            🛠 Languages & Tools:
            PHP | Java | JavaScript | TypeScript | Python | HTML | CSS
            React | Next.js | Vite | MDX | Prisma | Node.js
            MySQL | MongoDB | Redis | PostgreSQL | Git
            `}
          </TypingAnimation>
        </Terminal>
      </div>
    </GrindBg>
  );
}