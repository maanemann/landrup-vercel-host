
'use client'

import BasicButton from "@/components/BasicButton";
import BgImage from "@/components/BgImage";
import { H1C } from "@/components/Headings";
import { useEffect, useState } from "react";
import { useLoginContext } from "@/context";
import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";

// Indhold:
// # Login
// ## submitEvent: validering
// ## loginRequest: credentials check & brugerdata
// ## InputField: komponent til inputfelterne

// # Login
const Login = () => {
  const {
    setLoggedIn, setUserId, setToken,
    setFirstname, setLastname,
    setAge, setRole, setActivities,
    firstname, lastname, age, role, activities,
  } = useLoginContext();
  const router = useRouter();

  const [responseMessage, setResponseMessage] = useState(null);
  const [brugernavnFejl, setBrugernavnFejl] = useState(null);
  const [adgangskodeFejl, setAdgangskodeFejl] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    firstname &&
    console.log(firstname, lastname, age, role, activities)
  }, [firstname]);

  // ## submitEvent: validering
  const submitEvent = (e) => {
    // For at undgå formens default submit action (refresh) :
    e.preventDefault();

    // `event` er brugerens interaktion (submit), `target` er formen, etc.
    // ~~ const form = e.target;
    const brugernavn = e.target.brugernavn.value;
    const adgangskode = e.target.adgangskode.value;

    if (!brugernavn || !adgangskode) {
      !brugernavn
        ? setBrugernavnFejl("Brugernavn mangler")
        : setBrugernavnFejl(null);

      !adgangskode
        ? setAdgangskodeFejl("Adgangskode mangler")
        : setAdgangskodeFejl(null);

      // Hvis der hænger en fejlbesked fra en tidligere submit.. :
      setResponseMessage(null);
      
      // `Return` stopper funktionen her, hvis betingelsen er opfyldt, så resten ikke eksekveres :
      return
    }
    
    // Nulstiller potentielle gamle fejlbeskeder :
    setBrugernavnFejl(null);
    setAdgangskodeFejl(null);
    setResponseMessage(null);
    // Og viser en loading besked :
    setLoading("loading...");

    // Jeg laver her et objekt til credentials :
    const credentials = {
      // I API'en forventes `username` og `password` :
      username: brugernavn,
      password: adgangskode
    };

    // Funktionen med fetch request kaldes, og `credentials` sendes med :
    loginRequest(credentials);
  }




  // ## loginRequest: credentials check & brugerdata
  const loginRequest = (credentials) => {

    fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })

    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      // Response fra serveren, `.json()` = læs som json, konverteres til js objekt :
      return response.json();
    })

    .then(data => {
      setToken(data.token);

      // Fetch #2 – brugerinfo :
      return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${data.userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${data.token}`
        }
      });
    })

    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })

    .then(userInfo => {
      console.log("Hej",userInfo.firstname,"– her er din data:",userInfo);

      setLoading(null);
      setLoggedIn(true);                  setUserId(userInfo.id);
      setFirstname(userInfo.firstname);   setLastname(userInfo.lastname);
      setAge(userInfo.age);               setRole(userInfo.role);
      setActivities(userInfo.activities);
      // Cookies.set('loggedIn', true);

      setResponseMessage(
        <p> Yes, du loggede ind! 😎 </p>
        );

      // Navigerer brugeren videre med nextjs router :
      router.push("/kalender");
    })

    .catch(error => {
      let fejlbesked;

      // Fejlkoden 401 ståf for "Unauthorized", altså forkert brugernavn / adgangskode :
      if (error.message === "401") {
        fejlbesked = "Forkert brugernavn eller adgangskode";
      } else {
        fejlbesked = <p> Ups, noget gik galt: {error.message} </p>;
      }

      setLoading(null);
      setResponseMessage(fejlbesked);
    });
  }




  // ## InputField: komponent til inputfelterne
  const InputField = ({ name, placeholder }) => {
    return (
      <div>
        {/* Her demonstrerer jeg både en løsning med props og en med ternary operator : */}
        <input type={ name === "adgangskode" ? "password" : "text" }
          name={name} placeholder={placeholder}
          className="
            leading-[3.125rem] w-full
            text-themeBg
            px-6 mt-4 border-none outline-none
        "/>
      </div>
    );
  }

  return (
    <main>
      <BgImage />
      <div className="
        fixed w-[757px] h-[480px]
        min-w-[200vw]
        top-[16vh] -rotate-[27deg]
        left-1/2 -translate-x-1/2
        bg-themeBg/50
      "/>
      <div className="
        fixed top-[32vh]
        left-1/2 -translate-x-1/2
        w-[332px]
      ">
        <H1C>Log ind</H1C>
        <form onSubmit={submitEvent}>
          <InputField
            name="brugernavn" placeholder="brugernavn"
          />
          <InputField
            name="adgangskode" placeholder="adgangskode"
          />
          <button className="block mx-auto mt-8">
            <BasicButton>Log ind</BasicButton>
          </button>

        </form>
      </div>
      { (brugernavnFejl || adgangskodeFejl || responseMessage || loading) && 
        <div className="
          fixed top-[100vh] -translate-y-full w-full
          text-center text-white text-xl leading-10
          bg-themeBg/95 px-7 py-10
        ">
          { loading && <div>{loading}</div> }
          { brugernavnFejl && <div>{brugernavnFejl}</div> }
          { adgangskodeFejl && <div>{adgangskodeFejl}</div> }
          { responseMessage && <div>{responseMessage}</div> }
        </div>
      }
    </main>
  );
}
 
export default Login;
