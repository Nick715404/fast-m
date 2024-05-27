import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="hover:scale-110 tranition" data-logo='logo' href="/">
      <Image width={140} height={37} src='/svg/logo.svg' alt="Logo M-Fast" />
    </Link>
  );
};