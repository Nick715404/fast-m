'use client';

import { links } from "@/constants/data";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function Navigation() {
  const session = useSession();

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {links.map((link, index) => (
          <Link className="hover:scale-105 transition dark:text-dark-white" key={index} href={link.href}>
            {link.label}
          </Link>
        ))}
        {session.data && <Link className="hover:scale-105 transition dark:text-dark-white" href="/profile">
          Профиль
        </Link>}
      </ul>
    </nav>
  );
};