import { CoursesList } from "./CoursesList";

export function Courses() {
  return (
    <section className="mb-36">
      <div className="container">
        <h2 className="text-5xl mb-11 font-bold">Курсы</h2>
        <CoursesList />
      </div>
    </section>
  )
}