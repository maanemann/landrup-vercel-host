
// 'use client'

import BasicButton from '@/components/BasicButton';
import BgImage from '@/components/BgImage';
import { roboto, racingSansOne } from '@/app/layout';
import Link from 'next/link';

export default function Home() {
  return ( <>
    <main className='grid'>
      {/* Containeren til et `Image` med `fill` skal have position og overflow hidden : */}
      <BgImage />
      <div className='
        col-span-1 row-span-1 fixed
        mt-[50vh]
      '>
        <h1 className={`
          text-themeBg
          text-4xl uppercase
          ${roboto.className}
          pl-10 pr-5
          landrupCss
        `}>
          Landrup
          <span className={`
            block
            text-fuchsia-500
            text-7xl -mt-4
            ${racingSansOne.className}
            dansCss
          `}
          >Dans</span>
        </h1>
        <div className='
          border-t-[1rem] border-fuchsia-800
          shadow-[.2rem_.2rem_.2rem_0_#00000050]
        ' />
      </div>
      <Link href="/aktiviteter" className='
        fadeInCss
        fixed bottom-14 left-1/2 -translate-x-1/2
      '>
        <BasicButton>Kom i gang</BasicButton>
      </Link>
    </main>
  </> );
}
