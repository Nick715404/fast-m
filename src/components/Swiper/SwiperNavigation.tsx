'use client';

import { useSwiper } from "swiper/react";

type Props = {}

export default function SwiperNavigation({ }: Props) {
  const swiper = useSwiper();

  const handleNext = () => swiper.slideNext();
  const handlePrev = () => swiper.slidePrev();

  return (
    <>
      <button onClick={handleNext} className="bg-yellow rounded-full w-12 h-12 flex items-center justify-center absolute top-[16rem] -right-24 z-50">
        next
      </button>
      <button onClick={handlePrev} className="bg-yellow rounded-full w-12 h-12 flex items-center justify-center absolute top-[16rem] -left-24 z-50">
        prev
      </button>
    </>
  )
}