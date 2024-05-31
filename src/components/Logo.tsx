import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="hover:scale-105 transition" data-logo='logo' href="/">
      <Image
        priority
        width={140}
        height={37}
        className="dark:invert"
        src="/svg/logo.svg"
        alt="Logo M-Fast"
        style={{ height: 'auto', width: 'auto' }}
      />
    </Link>
  );
};