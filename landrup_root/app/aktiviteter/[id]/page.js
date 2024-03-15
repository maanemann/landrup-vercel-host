
'use client'

import BasicButton from "@/components/BasicButton";
import Drawer from "@/components/Drawer";
import { H1B } from "@/components/Headings";
import { useLoginContext, useApiContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Aktivitetsdetaljer = ({ params }) => {
  const { loggedIn } = useLoginContext();
  const { aktiviteterData, error } = useApiContext();
  const [denneAktivitet, setDenneAktivitet] = useState(null);

  useEffect(() => {
    if (aktiviteterData) {
      // med ´find´ metoden findes aktiviteten med `id` svarende til `prams.id`, og `params.id` konverteres fra string til tal med `Number()` (frem for `==` (loose equality), som er mindre præcist) :
      const aktivitet = aktiviteterData.find(aktivitet => aktivitet.id === Number(params.id));
      setDenneAktivitet(aktivitet);
    }
  // Der lyttes efter data fra `aktiviteterData` i dependency array'et :
  }, [aktiviteterData]);

  return denneAktivitet ? ( <>
      <Drawer />
      
      <div className="relative">
        <div className="relative w-full h-[489px]">
          <Image
            src={denneAktivitet.asset.url} alt={ denneAktivitet.name }
            fill priority className="
              object-cover
              bg-fuchsia-950
          "/>
        </div>

        { loggedIn && (
          <button className='
            absolute bottom-8 right-8
          '>
            <BasicButton>( dynamisk tekst )</BasicButton>
          </button>
        )}

      </div>
      <div className="px-8 pt-6 pb-16">
        <H1B>
          { denneAktivitet.name }
        </H1B>
        <div className="mb-2">
          <p className="inline-block">
            { denneAktivitet.minAge }-{ denneAktivitet.maxAge } år
            &nbsp; · &nbsp;
          </p>
          <p className="inline-block">
            { denneAktivitet.weekday }
            &nbsp;
          </p>
          <p className="inline-block">
            { denneAktivitet.time }
          </p>
        </div>
        <p>
          { denneAktivitet.description }
        </p>
      </div>
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

