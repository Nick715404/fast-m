'use client';

type TUseLocalStorage = {
  key: string,
}

export function useLocalStorage({ key }: TUseLocalStorage) {

  const setStorage = (value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    }
    catch (error) {
      console.log(error);
    }
  };

  const getFromStorage = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    }
    catch (error) {
      console.log(error);
    }
  }

  return { setStorage, getFromStorage };
}