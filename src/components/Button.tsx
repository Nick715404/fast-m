import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes } from 'react';

type ButtonBaseProps = {
  size: 's' | 'm' | 'l',
  mode?: 'light' | 'dark',
  children: string,
};

type ButtonLinkProps = ButtonBaseProps & Omit<LinkProps, 'passHref'> & { as: 'link' };
type ButtonButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as: 'button' };
type ButtonProps = ButtonLinkProps | ButtonButtonProps;

export function Button({ size, mode, as, children, ...rest }: ButtonProps) {
  const light = 'bg-yellow hover:bg-black hover:text-white active:bg-black active:text-white';
  const dark = 'bg-black text-white hover:bg-yellow hover:text-black active:bg-yellow active:text-black';

  type TSizesTypes = {
    small: string,
    medium: string,
    large: string,
  };

  const sizes: any = {
    small: 'px-7 py-4',
    medium: 'px-9 py-5',
    large: 'px-11 py-6',
  };

  const sizeMap: any = {
    s: 'small',
    m: 'medium',
    l: 'large',
  };

  const sizeClass: any = sizes[sizeMap[size]];

  if (as === 'link') {
    return <Link className={`
    ${mode === 'dark' ? dark : light}
    transition
    cursor-pointer 
    rounded-2xl
    ${sizeClass}
    text-sm
    `}
      {...(rest as LinkProps)}
    >
      {children}
    </Link>;
  };

  return (
    <button className={`
      ${mode === 'dark' ? dark : light}
      transition
      cursor-pointer 
      rounded-2xl
      ${sizeClass}
      text-sm
      `}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};