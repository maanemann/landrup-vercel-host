
import bg from '@/public/baggrund.png'
// import Image from 'next/image'

const BgImage = () => {
  return (
    <div className='
      fixed overflow-hidden
      w-full h-full
      col-span-1 row-span-1
    '>
      <img src="/baggrund.png"
       alt="baggrund"
        className='
          object-cover
          w-full h-full
        '
      />
    </div>
  );
}
 
export default BgImage;