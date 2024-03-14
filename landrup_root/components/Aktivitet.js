import Image from "next/image";
import Link from "next/link";

const Aktivitet = ({ assetUrl, name, minAge, maxAge, id }) => {
  return ( 
    <Link href={`/aktiviteter/${ id }`}>
    {/* as={`/aktiviteter/${name}`}> */}
      <figure className="relative">
        <div className="w-full h-[344px] relative">
          <Image src={ assetUrl }
            alt={ name } fill className="
              object-cover
              rounded-tl-4xl rounded-tr-4xl rounded-bl-4xl
              bg-fuchsia-950
          "/>
        </div>
        <figcaption className="
          absolute w-full bottom-0
          p-5 pl-7 rounded-bl-4xl rounded-tr-4xl
          text-themeDark bg-themeBgBright/80
        ">
          <h2>{ name }</h2>
          <p>{ minAge}-{ maxAge } år</p>
        </figcaption>
      </figure>
    </Link>
   );
}
 
export default Aktivitet;