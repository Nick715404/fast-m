'use client';

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Marque } from "..";
import { MarqueBox } from "./MarqueBox";
import { useLocalStorage } from "@/hooks";

export function SpecialOffer() {
  const [open, setOpen] = useState<string>('opened');
  const { setStorage, getFromStorage } = useLocalStorage({ key: 'specialOfferStatus' });

  const handleClick = () => {
    setStorage('closed');
    setOpen('closed');
  };

  useEffect(() => {
    const status = getFromStorage();
    if (status) setOpen(status);
  }, [])

  return (
    <>
      {
        open === 'opened' &&
        <div className="relative bg-black">
          <div className="container overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="relative w-[30%] pb-16">
                <MarqueBox rotate="-8" className="absolute top-[6rem] -left-[25rem] w-full" />
                <MarqueBox rotate="8" className="absolute -top-7 -left-[7rem] w-full" />
              </div>
              <span className="font-bold text-white text-xl">–30% на все курсы</span>
            </div>
          </div>
          <button onClick={handleClick} className="absolute flex items-center justify-center bg-white right-9 top-[50%] -translate-y-1/2 w-8 h-8 rounded-full hover:bg-yellow transition">
            <Image width={16} height={16} src="/svg/close.svg" alt="Закрыть специальное предложение" />
          </button>
        </div>
      }
    </>
  );
};