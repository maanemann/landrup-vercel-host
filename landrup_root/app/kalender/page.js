
'use client'

import Drawer from "@/components/Drawer";
import { useLoginContext } from "@/context";
import { H1A } from "@/components/Headings";
import Link from "next/link";

const Kalender = () => {
  const { activities, role } = useLoginContext();

  return (<>
    
    <Drawer />

    <main className="p-8">
      <H1A>Kalender</H1A>

      { activities.length === 0
        ? <div className="text-center text-2xl mt-24 grid gap-4">
            <p>
              Du er ikke tilmeldt nogen aktiviteter.
            </p>
            <p>
            <Link href="/aktiviteter" className="border-b-2 pb-1">
              Gå til Aktiviteter
            </Link>
            </p>
          </div>

        : activities.map(aktivitet => {
            let activityLink;
            role === "instructor"
              ? activityLink = "/kalender-hold"
              : activityLink = `/aktiviteter/${aktivitet.id}`;
            return( <Link href={activityLink} key={aktivitet.id}
              className="
                block mb-6 px-8 py-5 text-themeDark bg-themeBright rounded-xl
              ">
                <p className="text-4xl mb-0.5 truncate">
                  {aktivitet.name}
                </p>
                <p className="inline-block capitalize">{aktivitet.weekday} &nbsp; </p>
                <p className="inline-block">{aktivitet.time}</p>
            </Link> )
          })
      }
    </main>
  </>);
}

export default Kalender;
