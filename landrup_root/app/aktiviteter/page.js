
'use client'

import Aktivitet from "@/components/Aktivitet";
import Drawer from "@/components/Drawer";
import { H1A } from "@/components/Headings";
import { useApiContext } from "@/context";

const Aktiviteter = () => {
  const { aktiviteterData, error } = useApiContext();

  console.log(aktiviteterData);

  return ( <>
    <main className="p-8">
      <H1A>Aktiviteter</H1A>
      <div className="
        grid gap-8 pb-16
      ">
        <Aktivitet />
        <Aktivitet />
      </div>
    </main>
    <Drawer />
  </> );
}
 
export default Aktiviteter;
