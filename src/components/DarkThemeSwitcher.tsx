import { Button } from "./Button";
import classNames from "classnames";

type TThemeSwitcher = {
  className?: string,
  onClick?: () => void,
  theme: boolean,
};

export function ThemeSwitcher({ className, onClick, theme }: TThemeSwitcher) {
  return (
    <button onClick={onClick} className={classNames(className)}>
      {theme ? 'LHT' : 'DRK'}
    </button>
  );
};