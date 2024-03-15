
import { BiHomeAlt } from "react-icons/bi";
import { FiSearch, FiCalendar } from "react-icons/fi";
import Link from "next/link";

const Icon = ({ link, children, title }) => {
  return (
    <li>
    <Link href={ link } title={ title } className="
      w-10 aspect-square grid m-auto
      rounded-full bg-themeBright border border-themeDark
    ">
      { children }
    </Link></li>
  );
}

export {Icon};

const Drawer = () => {
  return ( 
    <nav className="
      z-10 fixed bottom-0 bg-themeBright
    ">
      <ul className="
        flex w-screen justify-between
        px-8 py-3
      ">
        <Icon link="/aktiviteter" title="Hjem">
          <BiHomeAlt className="
            block m-auto text-2xl
            text-themeDark
          " />
        </Icon>
        <Icon link="/soegeside" title="Søg">
          <FiSearch className="
            block m-auto text-2xl
            text-themeDark
          " />
        </Icon>
        <Icon link="/kalender" title="Kalender">
          <FiCalendar className="
            block m-auto text-2xl
            text-themeDark
          " />
        </Icon>
      </ul>
    </nav>
   );
}
 
export default Drawer;