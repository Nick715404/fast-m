import { HomePage } from "@/constants/data";

const { tabs } = HomePage;
type Props = { data: typeof tabs[0], };

export function InfoBlockItem({ data }: Props) {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold text-4xl">{data.title}</h3>
      <p className="">{data.text}</p>
    </div>
  );
};