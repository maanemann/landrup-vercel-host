
'use client'

import BasicButton from "@/components/BasicButton";
import BgImage from "@/components/BgImage";
import { H1C } from "@/components/Headings";
import { useState } from "react";
import { useLoginContext } from "@/context";
import { useRouter } from "next/navigation";

// Indhold:
// # Login
// ## submitEvent: validering
// ## loginRequest: fetch request og respons
// ## InputField: komponent til inputfelterne

// # Login
const Login = () => {
  const { setLoggedIn } = useLoginContext();
  const router = useRouter();

  const [responseMessage, setResponseMessage] = useState(null);
  const [brugernavnFejl, setBrugernavnFejl] = useState(null);
  const [adgangskodeFejl, setAdgangskodeFejl] = useState(null);

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

    // Jeg laver her et objekt til credentials :
    const credentials = {
      // I API'en forventes `username` og `password` :
      username: brugernavn,
      password: adgangskode
    };

    // Funktionen med fetch request kaldes, og `credentials` sendes med :
    loginRequest(credentials);
  }

  // ## loginRequest: fetch request og respons
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
      // Response fra serveren, forhåbentlig med token. `.json()` fortæller at det skal læses som json og konverteres til et js objekt :
      return response.json();
    })

    .then(data => {
      console.log("Returneret data fra serveren:", data);

      setResponseMessage(
        <p> Yes, du loggede ind! 😎 </p>
      );

      setLoggedIn(true);

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
      { (brugernavnFejl || adgangskodeFejl || responseMessage) && 
        <div className="
          fixed top-[100vh] -translate-y-full w-full
          text-center text-white text-xl leading-10
          bg-themeBg/95 px-7 py-10
        ">
          { brugernavnFejl && <div>{brugernavnFejl}</div> }
          { adgangskodeFejl && <div>{adgangskodeFejl}</div> }
          { responseMessage && <div>{responseMessage}</div> }
        </div>
      }
    </main>
  );
}
 
export default Login;
