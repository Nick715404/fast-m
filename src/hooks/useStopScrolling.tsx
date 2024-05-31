'use client';

import { useEffect } from "react";

export function useStopScrolling() {
  const set = () => document.body.classList.add('overflow-hidden');
  const remove = () => document.body.classList.remove('overflow-hidden');

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  return { set, remove, };
};