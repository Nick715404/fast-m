import { homePageCoursesData } from "@/constants/data";
import CourseItem from "./CourseItem";
import { Fragment } from "react";
import Link from "next/link";

export function CoursesList() {
  return (
    <div className="flex flex-wrap gap-8">
      {
        homePageCoursesData.map((course) => (
          <Fragment key={course.id}>
            <CourseItem data={course.card} />
          </Fragment>
        ))
      }
      <div className="border border-[#F7F7F7] rounded-[32px] w-[45%] p-10 text-center flex items-center justify-center flex-col">
        <h3 className="font-bold text-[28px] leading-8">Какой выбрать?</h3>
        <Link className="font-medium text-lg p-4" href={'#'}>Сравнить курсы</Link>
      </div>
    </div>
  )
}