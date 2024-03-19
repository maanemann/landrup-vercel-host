
'use client'

import Drawer from "@/components/Drawer";
import { useApiContext } from "@/context";
import { H1A } from "@/components/Headings";

const Kalender = () => {
  const { aktiviteterData, error } = useApiContext();

  return (<>
    
    <Drawer />

    <main className="p-8">
      <H1A>Aktiviteter</H1A>

      { error && <p className="text-red-500">{error}</p> }
    </main>
  </>);
}
 
export default Kalender;
