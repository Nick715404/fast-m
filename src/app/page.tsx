import { CustomSwiper } from "@/components";
import { Courses, InfoBlocks } from "@/sections/Home";

export default function HomePage() {
  return (
    <main>
      <CustomSwiper />
      <InfoBlocks />
      <Courses />
    </main>
  );
};