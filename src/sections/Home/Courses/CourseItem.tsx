import { TCoursesCard } from "@/types/courses.types"
import Image from "next/image"
import Link from "next/link"

type Props = { data: TCoursesCard, }

export default function CourseItem({ data }: Props) {
  return (
    <div className="flex items-center justify-between gap-2 bg-gray-light rounded-[32px] p-10 w-[45%]">
      <div className="w-[80%]">
        <span className="block text-base px-3 py-1 bg-yellow w-fit mb-4">{data.duration}</span>
        <h3 className="font-bold text-[28px] leading-8 mb-3">{data.title}</h3>
        <p className="text-text-second leading-6 mb-6">{data.subTitle}</p>
        <Link className="p-4" href={data.href}>Подробнее</Link>
      </div>
      <div className="max-w-[140px] w-[90%]">
        <Image
          width={200}
          height={200}
          src={data.imgPath}
          alt={data.title}
        />
      </div>
    </div>
  )
}