
import { BiHomeAlt } from "react-icons/bi";
import { FiSearch, FiCalendar } from "react-icons/fi";
import Link from "next/link";
import { useLoginContext } from "@/context";
import Cookies from "js-cookie";

const Icon = ({ link, children, title, classExt }) => {
  return (
    <li>
    <Link href={ link } title={ title } className={`
      w-10 aspect-square grid m-auto
      rounded-full bg-themeBright border border-themeDark
      ${ classExt }
    `}>
      { children }
    </Link></li>
  );
}

const Drawer = () => {

  const { loggedIn, setLoggedIn } = useLoginContext();

  return ( <>
    { loggedIn &&
      <button
        onClick={() => {
          setLoggedIn(false)
          // Cookies.remove('loggedIn');
          // ~~ localStorage.setItem('loggedIn', JSON.stringify(false));
        }}
        className="
          fixed top-9 right-8 z-10 px-4 leading-8
          text-[1rem] tracking-wider
          bg-themeBg rounded-full
        "
      >
        Log ud
      </button>
    }

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
        { loggedIn
          ? <Icon link="/kalender" title="Kalender">
            <FiCalendar className="
              block m-auto text-2xl
              text-themeDark
            " />
          </Icon>
          : <Icon link="/login" title="Log in">
            <FiCalendar className="
              block m-auto text-2xl
              text-themeDark
            " />
          </Icon>
        }
      </ul>
    </nav>
  </> );
}
 
export default Drawer;