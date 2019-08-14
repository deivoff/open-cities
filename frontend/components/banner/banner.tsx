import React, { useState, useEffect } from 'react';
import Media from 'react-media';
import cn from 'classnames';
import { getRandomInt, getRandomNormal } from './utils';

const css = require('./banner.styl');

export interface IDot {
  duration: number;
}

interface IDotProperies {
  x: string;
  y: string;
  radius: number;
}

const getRandomCircle = (): IDotProperies => {
  const randomIntOrNormal = Math.random() > 0.33;
  return {
    x: `${randomIntOrNormal ? getRandomInt(0, 100) : getRandomNormal(10, 80)}%`,
    y: `${randomIntOrNormal ? getRandomInt(0, 100) : getRandomNormal(35, 90)}%`,
    radius: getRandomInt(8, 16)
  };
};

const DotCreate = ({ duration }: IDot) => {
  const [{ x, y, radius }, setCircle] = useState(getRandomCircle());

  useEffect(() => {
    const interval = setInterval(() => {
      setCircle(getRandomCircle());
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <circle
      className='innerCircle'
      cx={x}
      cy={y}
      r='0'
      fill='#38CDBE'
      stroke='#38CDBE'
      strokeWidth='3'
    >
      <animate
        attributeType='SVG'
        attributeName='r'
        begin='0s'
        dur={`${duration}s`}
        repeatCount='indefinite'
        from='0'
        to={radius}
      />
      <animate
        attributeType='CSS'
        attributeName='stroke-width'
        begin='0s'
        dur={`${duration}s`}
        repeatCount='indefinite'
        from='5'
        to='1'
      />
      <animate
        attributeType='CSS'
        attributeName='opacity'
        begin='0s'
        dur={`${duration}s`}
        repeatCount='indefinite'
        from='1'
        to='0'
      />
    </circle>
  );
};

export const Banner = ({ dots }: any) => {
  const [{ width, height }, setSize] = useState({
    width: 325,
    height: 425
  });

  return (
    <section className={cn(css.banner)}>
      <div className={css.description}>
        <h1 className={css.title}>
          Сервис геоаналитики по&nbsp;открытым данным
        </h1>
        <p className={css.text}>
          Более подробное описательное предложение о роде и виде занятий для
          этого. И ниже призыв присоединиться к системе, все по шаблону
        </p>
      </div>
      <div className={css.decorative}>
        <Media
          query='(max-width: 1200px)'
          onChange={matches =>
            matches
              ? setSize({ width: 1888, height: 904 })
              : setSize({ width: 1888, height: 904 })
          }
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='73.5 47.5 1888 904'
          width={width}
          height={height}
        >
          <defs>
            <clipPath id='a'>
              <rect width={1888} height={904} x='73.5' y='47.5' />
            </clipPath>
          </defs>
          <g
            fill='none'
            stroke='rgba(238, 238, 238, 0.5)'
            strokeLinecap='square'
            strokeMiterlimit='3'
            clipPath='url(#a)'
          >
            <path
              strokeWidth='3'
              d='M817 218c-31.701-6.844-87.333-35.667-105-12-18 24.667-86.667 113.667-89 122-2.333 8.333-23.333 158-10 178 13.333 20 33.333 42 36 52 2.667 10 8.375 23.75 16 34s110.5 52.5 165 82c92.631 50.14 311 222.5 330 220s91.5-67 83-111c-8.186-42.373-23.434-86.147 23-123 31.5-25 47.969-59.008 30-81-33.5-41-50.667-152.667-36-170 14.667-17.333 15.333-36.333 11-60s-6.552-90.758-43-121c-36.448-30.242-113-36.5-138-54-18.18-12.726-59.474-34.474-78-53-22-22-90.333-79.333-119-5s-32 111.5-76 102zm334 673q10.547 6.313 29 59m-400 0q46-98 47-119c1-21 10-54 6-84s2-38-6-58-10-15.25-8-29 22.5-64.375 20-74c-5.204-20.036 2.75-22.25 12-20s83.333-73.667 87-79c3.667-5.333 21.906-111.531 20-115-1.906-3.469-28-11.25-37-18s150.25-101 163-112 22-23.25 30-43q8-19.75 60-150M75 777q112.5-.5 140-5c27.5-4.5 299-67.5 330-77q31-9.5 119-47 90.313-49.062 101-55c10.688-5.937 40.5-21.187 57-13q16.5 8.188 17 7m1121-234q-115.5 38-141 55c-25.5 17-91.5 57.5-112 62s-108 8.5-131 3-591.562-91.187-605-96q-13.437-4.812-14-6M843 216c7.5 3.75 13.125.5 24 7s28.625 20 28 29-5.375 63.25 0 68 24.625 9.625 27 16q2.375 6.375-1 17m433 597c-2.875-6.875-14.25-42.5-23-53q-8.75-10.5-57-75-33.625-36.422-48-42c-14.375-5.578-166.73-116.873-215-144-40.333-22.667-198.094-201.937-208-201-9.906.938-58.5 53.5-94 44s-170-9.5-200-33-123-115.333-147-129c-24-13.667-72.667-35.667-91-56s-82-95.25-196-93'
              vectorEffect='non-scaling-stroke'
            />
            <path
              strokeWidth='2'
              d='M987 777q79.5-103.5 82-114c2.5-10.5 2.5-29-10-43S951.75 516 945 510s-27.875-33-73-39m-5 226l23-34q59 26 73 34t142 101l-31 43m-39-453q3.75 12.75 3 19c-.75 6.25-13 96.625-17 100s-77.375 72.875-81 82-17.509 30.488-19 33q-2.578 4.344-31 41m-32-176q12.25-12.125 14-16c1.75-3.875-6-51.5-5-56s1.625-8 8-15q6.375-7 46-47m9 385q64.667-97.333 75-107 10.333-9.667 33-32m-15-99q12.5 5.75 19 6c6.5.25 31.5 1.75 39 4s72.75-12.25 80-14q7.25-1.75 99-11m-191 175c9-1.5 11.5-10 20-4s87 72 97 77q10 5 48 5m-64-244c2 12.5 0 24 4 32s10.5 11.5 10 23 0 100.5-4 107q-4 6.5-35 46m37-54c12.375 10.5 11.5 15 17 15h64M896 378c8.5 9.375 9.75 11.25 11 18s-.625 20 2 22 17.5-11.125 26-10q8.5 1.125 18 3m241 0c-4.5-6-7-18.375-14-21s-17-.375-21-9-4-26.375-16-28-33.25 2.125-44-5-40.375-52.75-49-56q-8.625-3.25-32-7l-12 98m-35-7c4.375-6.625 1.75-12.25 10-19q8.25-6.75 30-18'
              vectorEffect='non-scaling-stroke'
            />
            <path
              d='M861 583l-22 4m40 92l91 62M858 563q16.625 93.563 19 95 2.375 1.438 13 5m215 135q11.75 10 14 9c2.25-1 20.5-25.75 19-28q-50-37.25-52-41c-2-3.75-17-22-21-20s-2.25 5-5 3q-2.75-2-19-15-10.312-6.625-13-8c-2.687-1.375-2.562 2.313-5 4-2.437 1.688-16.5-.937-22 0-5.5.938-33.312 41.25-34 44q-.687 2.75 29 17m31-65q-114.75-85.625-122-89c-7.25-3.375-69.062 19.016-75 16-5.937-3.016-58.5-17.5-61-23s2-7.75 0-11-68.667-78.667-66-86q2.667-7.333 4-53m149 238l-14-66m8 38l26-6m62-169q7.667-3 12 0c4.333 3 100.667 96.333 99 100q-1.667 3.667-11 12m-15-99q-25.062-7.953-31-5-5.937 2.953-20 13m10-7q-13.562-13.047-16-11-2.437 2.047-53 55m137 148L904 588l73-75m-73 75q-26.297-17.625-29-21c-2.703-3.375-8.672-14.062-13-18-4.328-3.937-71.5-63.25-76-69s-33.75-60.75-40-63-17.5-8.5-28-23-26-51.5-33-52-15 3-21 0q-6-3-26-38m122 132q-8.625 12.125-14 11c-5.375-1.125-10.625-3.75-17 0q-6.375 3.75-22 5-19.875-8.75-16-8c3.875.75-55.75-4-58-8s-.875-12.375-10-17q-9.125-4.625-255-99m693 402c-4.5 5.5-4.25 5.25-9 8s-9.5.75-17 17m15-241q.438 1.5 0 2-6.851 7.83-23 17l-31 33q-1.125.75-35 35m-93-116l56 56m-108-87l58-45m32-33l50 21m-37 25q-2.687-4.125-1-9 1.688-4.875 10-27m6-38l43 21m-16-39l20 35m-9-42l20 35M778 648q31.625-87.75 38-96t51-55l11-25m-44-9l-30 34m134 95q-88.5-89.5-94-89t-31 2m32-2l12-15m45-9q.667 15.333-4 21t-24 28m105 83l36-36 12-12m-16 63l-42-41m19-19q82.563 74.813 81 77-1.562 2.188-16 19m-249-84q-41.937-14.375-46-20c-4.062-5.625-23-23.333-23-30q0-6.667 3-51m-3 52l-10 9m-81 12q4.375-21.25 7-25c2.625-3.75 40.375-13.875 47-12q6.625 1.875 119 38m111 128l24-36'
              vectorEffect='non-scaling-stroke'
            />
          </g>
          {dots.map(({ duration }: IDot, i: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <DotCreate key={`dot_${i}`} duration={duration} />
          ))}
        </svg>
      </div>
    </section>
  );
};
