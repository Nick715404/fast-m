import "./globals.css";

import type { Metadata } from "next";
import { Header } from "@/components";
import { ThemeProvider } from "@/utils/providers";
import dynamic from "next/dynamic";

const SpecialOffer = dynamic(() => import('../components/SpecialOffer/SpecialOffer').then((res) => res.SpecialOffer), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Fast-M | Деньги для вас",
  description: "Живем живем",
};

type Props = { children: Readonly<React.ReactNode> };

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ru">
      <body>
        <ThemeProvider>
          <SpecialOffer />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};