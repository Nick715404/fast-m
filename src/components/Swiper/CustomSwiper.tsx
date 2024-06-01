'use client';

import { swiperData } from "@/constants/data";
import { FullSwiper } from './FullSwiper';

export function CustomSwiper() {
  return (
    <section className="mb-36">
      <div className="container">
        <div className="relative">
          <FullSwiper slides={swiperData} />
        </div>
      </div>
    </section>
  );
};