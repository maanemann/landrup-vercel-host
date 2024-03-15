
'use client'

import BasicButton from "@/components/BasicButton";
import Drawer from "@/components/Drawer";
import { useApiContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Aktivitetsdetaljer = ({ params }) => {
  const { aktiviteterData, error } = useApiContext();
  const [denneAktivitet, setDenneAktivitet] = useState(null);

  useEffect(() => {
    if (aktiviteterData) {
      // med ´find´ metoden findes aktiviteten med `id` svarende til `prams.id`, og `params.id` konverteres fra string til tal med `Number()` (frem for `==` (loose equality), som er mindre præcist) :
      const aktivitet = aktiviteterData.find(aktivitet => aktivitet.id === Number(params.id));
      setDenneAktivitet(aktivitet);
    }
  // Der lyttes efter data fra `aktiviteterData` i dependency array'et :
  } , [aktiviteterData]);

  return denneAktivitet ? (
    <>
      <div className="relative">
        <div className="relative w-full h-[489px]">
          <Image
            src={denneAktivitet.asset.url} alt={ denneAktivitet.name }
            fill priority className="
              object-cover
              bg-fuchsia-950
          "/>
        </div>
        <button className='
          absolute bottom-8 right-8
        '>
          <BasicButton>( dynamisk tekst )</BasicButton>
        </button>
      </div>
      <h1>{ denneAktivitet.name }</h1>
      <p>{ denneAktivitet.weekday }</p>
      <p>{ denneAktivitet.time }</p>
      <p>{ denneAktivitet.minAge }-{ denneAktivitet.maxAge } år</p>
      <p>{ denneAktivitet.description }</p>
      <Drawer />
    </>
  ) : ( <>
    { error
      ? <h1 className="text-xl mx-4 my-12 text-red-500">{error}</h1>
      : <h1 className="text-xl mx-4 my-12 text-themeBgBright">
        Still loading...
      </h1>
    }
  </> );
}

export default Aktivitetsdetaljer;

