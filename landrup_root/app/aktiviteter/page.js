
'use client'

import Drawer from "@/components/Drawer";
import { H1A } from "@/components/Headings";
import { useApiContext } from "@/context";
import AktiviteterComp from "@/components/AktiviteterComp";

const Aktiviteter = () => {
  const { aktiviteterData, apiError } = useApiContext();

  return ( <>

    <Drawer />

    <main className="p-8">
      <H1A>Aktiviteter</H1A>

      { apiError && <div className="text-red-500">
        <p>{ apiError.forklaring }</p>
        <p>{ apiError.fejlbesked }</p>
      </div>}

      <AktiviteterComp filtreredeAktiviteter={aktiviteterData} />
    </main>
  </> );
}
 
export default Aktiviteter;

