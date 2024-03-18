
'use client'

import Drawer from "@/components/Drawer";
import { H1A } from "@/components/Headings";
import { useApiContext } from "@/context";
import AktiviteterComp from "@/components/AktiviteterComp";

const Aktiviteter = () => {
  const { aktiviteterData, error } = useApiContext();

  return ( <>

    <Drawer />

    <main className="p-8">
      <H1A>Aktiviteter</H1A>

      { error && <p className="text-red-500">{error}</p> }

      <AktiviteterComp filtreredeAktiviteter={aktiviteterData} />
    </main>
  </> );
}
 
export default Aktiviteter;

