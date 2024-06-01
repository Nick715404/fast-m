import { TSpeaker } from "@/types/speakers.types"
import Image from "next/image";

type ExpertsSwiperItemProps = { data: TSpeaker, };

export function ExpertsSwiperItem({ data }: ExpertsSwiperItemProps) {
  return (
    <div>
      <Image width={270} height={380} src={data.img} alt={data.name} className="mb-5" />
      <h3 className="font-bold text-2xl mb-3">{data.name}</h3>
      <p className="text-text-second">{data.descr}</p>
    </div>
  )
}