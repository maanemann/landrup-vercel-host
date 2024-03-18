
'use client'

import Aktivitet from "@/components/Aktivitet";

const AktiviteterComp = ({ filtreredeAktiviteter }) => {
  return ( 
    <div className="
        grid gap-8 pb-16
      ">
        {/* Mere om `map` > *1* */}
        { filtreredeAktiviteter && filtreredeAktiviteter.map((aktivitet) => (
          <Aktivitet
            key={aktivitet.id} assetUrl={aktivitet.asset.url}
            name={aktivitet.name} id={aktivitet.id}
            minAge={aktivitet.minAge} maxAge={aktivitet.maxAge}
          />
        )) }

      </div>
   );
}

export default AktiviteterComp;

// Read more.. :
// *1* : ´map´ tager en callback funktion som argument, og denne funktion kan tage tre argumenter: det aktuelle element, index og det oprindelige array. Her er kun brugt det første argument, da API'en har sit eget index, og vi ikke skal referere til det oprindelige array. React bruger index / key til at opdatere DOM korrekt.