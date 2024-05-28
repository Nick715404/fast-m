import { TSwiperSlide } from "@/types";
import { Button } from "../index";
import Image from "next/image";

type TSlideProps = {
  data: TSwiperSlide,
}

export function CustomSlide({ data }: TSlideProps) {
  return (
    <div className="relative flex items-center px-16 py-28 bg-gray-light rounded-[48px] min-h-[568px] overflow-hidden">
      <div className="flex flex-col w-[50%]">
        <h1 className="font-bold text-5xl mb-5">{data.title}</h1>
        <p className="text-xl mb-12">{data.subTitle}</p>
        <div className="block">
          <Button as='link' href={data.href} mode="light" size="m">Выбрать курс</Button>
        </div>
      </div>
      <div className={data.image === '/png/swiper-1.png' ? "absolute bottom-34 -right-32 w-[50%]" : "absolute bottom-0 -right-32 w-[50%]"}>
        <Image
          className={data.image === '/png/swiper-1.png' ? 'scale-[1.8]' : 'scale-[1.1]'}
          priority
          width={350}
          height={330}
          src={data.image}
          alt={data.title}
          style={{ height: 'auto', width: 'auto' }}
        />
      </div>
    </div>
  );
};