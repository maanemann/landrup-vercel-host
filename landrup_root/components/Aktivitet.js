import Image from "next/image";

const Aktivitet = () => {
  return ( 
      <figure className="relative">
        <Image src="/"
          alt="aktivitet" width="356" height="344" className="
            w-full
            rounded-tl-4xl rounded-tr-4xl rounded-bl-4xl
            bg-fuchsia-950
        "/>
        <figcaption className="
          absolute w-full bottom-0
          p-5 pl-7 rounded-bl-4xl rounded-tr-4xl
          text-themeDark bg-themeBgBright/80
        ">
          <h2>Titel</h2>
          <p>Aldersgruppe</p>
        </figcaption>
      </figure>
   );
}
 
export default Aktivitet;