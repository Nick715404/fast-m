import 'swiper/css/bundle';
import './Swiper.styles.scss';

import { TSwiperSlide } from '@/types';
import { CustomSlide } from './CustomSlide';
import SwiperNavigation from './SwiperNavigation';

import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

type TOwnSwiperProps = {
  slides: TSwiperSlide[],
}

export function FullSwiper({ slides }: TOwnSwiperProps) {
  return (
    <Swiper
      loop
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      pagination
      autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
    >
      {
        slides.map((item, index) => (
          <SwiperSlide key={index}>
            <CustomSlide data={item} />
          </SwiperSlide>
        ))
      }
      <SwiperNavigation />
    </Swiper>
  );
};