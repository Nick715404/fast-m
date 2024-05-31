'use client';

import 'swiper/css/bundle';
import './Swiper.styles.scss';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

type MobileSwiperProps = {
  children: React.ReactNode,
  data: unknown,
}

export function MobileSwiper({ children }: MobileSwiperProps) {
  return (
    <Swiper>
      
    </Swiper>
  );
};