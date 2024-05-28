import { Marque } from "../";
import classNames from "classnames";

type TMarqueBoxProps = {
  rotate: string,
  className?: string,
  isInverse?: boolean
}

export function MarqueBox({ rotate, className, }: TMarqueBoxProps) {
  return (
    <div className={`${classNames(className)} rotate-[${rotate}deg] whitespace-nowrap`}>
      <Marque className="bg-yellow inline-block animate-slide" />
      <Marque className="bg-yellow inline-block animate-slide" />
    </div>
  );
};