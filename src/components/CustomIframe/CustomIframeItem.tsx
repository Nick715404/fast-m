import { TEducation } from "@/types/education.types";

type Props = { data: TEducation, };

export function CustomIframeItem({ data }: Props) {
  return (
    <div className="w-[22%]">
      <span className="text-yellow font-bold text-5xl">{data.id}</span>
      <div id="separator" className="border border-black mt-4 mb-8 h-[1px]" />
      <h3 className="font-medium text-[28px] leading-8 mb-3">{data.title}</h3>
      <p className="text-text-second text-lg leading-6">{data.desc}</p>
    </div>
  )
}