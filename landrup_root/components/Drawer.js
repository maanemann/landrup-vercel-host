
import { BiHomeAlt } from "react-icons/bi";
import { FiSearch, FiCalendar } from "react-icons/fi";
import Link from "next/link";

const Icon = ({ link, children, title }) => {
  return (
    <li className="
      w-10 aspect-square grid
      clipCircleCss bg-black
    ">
    <Link href={ link } title={ title } className="
      w-[2.39rem] aspect-square grid m-auto
      clipCircleCss bg-themeBright
    ">
      { children }
    </Link></li>
  );
}

export {Icon};

const Drawer = () => {
  return ( 
    <nav className="
      fixed bottom-0 bg-themeBright
    ">
      <ul className="
        flex w-screen justify-between
        px-6 py-3
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