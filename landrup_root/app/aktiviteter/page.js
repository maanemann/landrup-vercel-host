import Aktivitet from "@/components/Aktivitet";
import Drawer from "@/components/Drawer";
import { H1A } from "@/components/Headings";

const Aktiviteter = () => {
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
