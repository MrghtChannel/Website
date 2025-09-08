'use client';

import GrindBg from "@/components/background/gridbackground";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from '@/components/ui/shadcn-io/terminal';

export default function Page() {
  return (
    <GrindBg>
      <div className="flex items-center justify-center min-h-screen px-2">
        <Terminal
          className="
            w-full max-w-[900px]
            h-[70vh] sm:h-[500px] md:h-[600px]
            text-sm sm:text-base md:text-lg lg:text-xl
            p-3 sm:p-4 md:p-6
            rounded-xl sm:rounded-2xl
          "
        >
          <AnimatedSpan delay={0}>
            {"\n".repeat(2)}
            {" ".repeat(5)}MrghtChannel
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