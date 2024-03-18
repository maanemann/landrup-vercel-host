
import bg from '@/public/baggrund.png'
import Image from 'next/image'

const BgImage = () => {
  return (
    <div className='
      fixed overflow-hidden
      w-full h-full
      col-span-1 row-span-1
    '>
      <Image src={bg} alt="baggrund"
      fill style={{ objectFit: 'cover' }}
      placeholder='blur' priority />
    </div>
  );
}
 
export default BgImage;