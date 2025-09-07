import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.jpg"
        alt="Logo"
        width={32}
        height={32}
        priority
        className="rounded-[80px]"
      />
    </Link>
  );
};
