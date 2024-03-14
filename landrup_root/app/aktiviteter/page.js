
'use client'

import Aktivitet from "@/components/Aktivitet";
import Drawer from "@/components/Drawer";
import { H1A } from "@/components/Headings";
import { useApiContext } from "@/context";

const Aktiviteter = () => {
  const { aktiviteterData, error } = useApiContext();

  return ( <>
    <main className="p-8">
      <H1A>Aktiviteter</H1A>
      <div className="
        grid gap-8 pb-16
      ">
        { error && <p className="text-red-500">{error}</p> }

        {/* Mere om `map` > *1* */}
        { aktiviteterData && aktiviteterData.map((aktivitet) => (
          <Aktivitet
            key={aktivitet.id} assetUrl={aktivitet.asset.url}
            name={aktivitet.name}
            minAge={aktivitet.minAge} maxAge={aktivitet.maxAge}
          />
        )) }

      </div>
    </main>
    <Drawer />
  </> );
}
 
export default Aktiviteter;


// Read more.. :

// *1* : ´map´ tager en callback funktion som argument, og denne funktion kan tage tre argumenter: det aktuelle element, index og det oprindelige array. Her er kun brugt det første argument, da API'en har sit eget index, og vi ikke skal referere til det oprindelige array. React bruger index / key til at opdatere DOM korrekt.

