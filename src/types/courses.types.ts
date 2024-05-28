export type TCoursesCard = {
  title: string,
  subTitle: string,
  imgPath: string,
  duration: string,
  href: string,
}

export type TCoursesLink = {
  id: number,
  card: TCoursesCard,
}