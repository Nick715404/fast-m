import { CustomSwiper, Experts } from "@/components";
import { Courses, HowWeStudy, InfoBlocks } from "@/sections/Home";

export default function HomePage() {
  return (
    <main>
      <CustomSwiper />
      <InfoBlocks />
      <Courses />
      <HowWeStudy />
      <Experts />
    </main>
  );
};