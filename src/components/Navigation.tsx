import { links } from "@/constants/data";
import Link from "next/link";

export function Navigation() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {links.map((link, index) => (
          <Link key={index} href={link.href}>{link.label}</Link>
        ))}
      </ul>
    </nav>
  );
};