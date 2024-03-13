
import BasicButton from '@/components/BasicButton';
import bg from '@/public/baggrund.png'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return ( <>
    <main className='grid'>
      {/* Containeren til et `Image` med `fill` skal have position og overflow hidden : */}
      <div className='
        fixed overflow-hidden
        w-full h-full
        col-span-1 row-span-1
      '>
        <Image src={bg} alt="baggrund"
        fill style={{ objectFit: 'cover' }}
        placeholder='blur' />
      </div>
      <div className='col-span-1 row-span-1 fixed'>
        <h1 className='text-gray-700'>Landrup
          <span>Dans</span>
        </h1>
      </div>
      <Link href="/aktiviteter">
        <BasicButton>Kom i gang</BasicButton>
      </Link>
    </main>
  </> );
}
