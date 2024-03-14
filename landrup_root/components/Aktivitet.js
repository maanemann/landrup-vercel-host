import Image from "next/image";

const Aktivitet = ({ assetUrl, name, minAge, maxAge }) => {
  return ( 
      <figure className="relative">
        <Image src={ assetUrl }
          alt={ name } width="356" height="344" className="
            w-full h-[344px] object-cover
            rounded-tl-4xl rounded-tr-4xl rounded-bl-4xl
            bg-fuchsia-950
        "/>
        <figcaption className="
          absolute w-full bottom-0
          p-5 pl-7 rounded-bl-4xl rounded-tr-4xl
          text-themeDark bg-themeBgBright/80
        ">
          <h2>{ name }</h2>
          <p>{ minAge}-{ maxAge } år</p>
        </figcaption>
      </figure>
   );
}
 
export default Aktivitet;