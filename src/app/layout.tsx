import "./globals.css";

import { Header } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fast-M | Деньги для вас",
  description: "Живем живем",
};

type Props = { children: Readonly<React.ReactNode> };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};