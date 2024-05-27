import React from 'react';
import classNames from 'classnames';

type TMarqueProps = {
  className?: string,
}

export function Marque({ className }: TMarqueProps) {
  return (
    <div className={classNames(className)}>
      {
        [...Array(6)].map((_, index) => (
          <span className="inline-block font-bold text-xl px-6 py-1" key={index}>Черная пятница</span>
        ))
      }
    </div>
  );
};