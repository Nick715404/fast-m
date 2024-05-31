import { useStopScrolling } from "@/hooks";
import Image from "next/image";

type VideoModalProps = {
  status: boolean,
  setStatus: (e: boolean) => void,
}

export function VideoModal({ setStatus, status }: VideoModalProps) {
  const { set, remove } = useStopScrolling();

  const handleClick = () => {
    remove();
    setStatus(false);
  }

  return (
    <div className="fixed w-full h-full top-0 left-0 bg-black-transparent z-50">
      <div id="modal" className="fixed w-3/4 aspect-video top-[50%] left-[50%] bg-white -translate-x-[50%] -translate-y-[50%] rounded-3xl">
        <button onClick={handleClick} className="absolute flex items-center justify-center bg-gray-light top-12 right-9 -translate-y-1/2 w-8 h-8 rounded-full hover:bg-yellow transition shadow-lg">
          <Image width={16} height={16} src="/svg/close.svg" alt="Закрыть специальное предложение" />
        </button>
      </div>
    </div>
  );
};