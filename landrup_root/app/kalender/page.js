
'use client'

import Drawer from "@/components/Drawer";
import { useApiContext } from "@/context";
import { H1A } from "@/components/Headings";
import Link from "next/link";

const Kalender = () => {
  const { aktiviteterData, error } = useApiContext();

  return (<>
    
    <Drawer />

    <main className="p-8">
      <H1A>Kalender</H1A>

      { error && <p className="text-red-500">{error}</p> }

      <div className="text-center text-2xl mt-24 grid gap-4">
        <p>
          Du er ikke tilmeldt nogen aktiviteter.
        </p>
        <p>
        <Link href="/aktiviteter" className="border-b-2 pb-1">
          Gå til Aktiviteter
        </Link>
        </p>
      </div>
    </main>
  </>);
}
 
export default Kalender;
