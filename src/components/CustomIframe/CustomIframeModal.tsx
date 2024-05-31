'use client';

import { VideoModal } from "../Modals";
import { Fragment, useState } from "react";
import Image from "next/image";

export function CustomIframeModal() {
  const [modal, setModal] = useState<boolean>(false);
  const handleOpen = () => setModal(true);

  return (
    <Fragment>
      <button onClick={handleOpen} className="absolute z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-16 h-16 rounded-full bg-white flex items-center justify-center hover:scale-105 transition"
      >
        <Image
          width={24}
          height={24}
          src="/svg/play-btn.svg"
          alt="Запустить видео"
          className="ml-[6px]"
        />
      </button>
      {modal && <VideoModal status={modal} setStatus={setModal} />}
    </Fragment>
  );
};