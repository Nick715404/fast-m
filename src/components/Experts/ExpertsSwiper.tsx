'use client';

import 'swiper/css/bundle';
import { HomePageData } from '@/constants/data';

import { Swiper, SwiperSlide } from 'swiper/react'
import { ExpertsSwiperItem } from './ExpertsSwiperItem';

export function ExpertsSwiper() {
  const { speakers } = HomePageData;

  return (
    <Swiper spaceBetween={30} slidesPerView={4}>
      {
        speakers.map((speaker) => (
          <SwiperSlide key={speaker.id}>
            <ExpertsSwiperItem data={speaker} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}