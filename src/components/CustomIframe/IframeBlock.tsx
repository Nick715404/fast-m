import Image from "next/image";

export function IframeBlock() {
  return (
    <div className="relative w-full aspect-[3.2/1] rounded-3xl overflow-hidden mb-11 before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-black before:opacity-60 before:z-50">
      <Image
        fill
        src='/png/iframe-bg.png'
        alt="Видео нашего процесса обучения"
      />
    </div>
  )
}