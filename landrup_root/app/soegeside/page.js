
'use client'

import Drawer from "@/components/Drawer";
import { useApiContext } from "@/context";
import { useState } from "react";
import { H1A } from "@/components/Headings";
import { FiSearch } from "react-icons/fi";
import AktiviteterComp from "@/components/AktiviteterComp";

const Soegeside = () => {
  const [ searchTerm, setSearchTerm ] = useState("");
  const { aktiviteterData, error } = useApiContext();

  const searchResults = searchTerm !== ""
    ? aktiviteterData.filter((aktivitet) => {
      // (filteret gøres case-insensitive ved at konvertere alle strings til lowercase) :
      return aktivitet.name.toLowerCase().includes(searchTerm.toLowerCase())
      || aktivitet.description.toLowerCase().includes(searchTerm.toLowerCase())
    })
    : [];

    console.log(searchResults);

  return ( <>

    <Drawer />

    <main className="m-8">

      <H1A>Søg</H1A>

      { error && <p className="text-red-500">{error}</p> }

      {/*når value ændres, reflekteres det i searchTerm (state ↑) : */}
      <div className="relative">
        <input
          // searchTerm som value gør dette til et "controlled component" (form element in react hvis value kontrolleres af state), og sikrer at input er 'i sync' med searchTerm (men det virker også uden) :
          type="text" value={searchTerm}
          // dette "controlled component" er i sync med searchTerm med `onChange` :
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            block -mt-5 border-none outline-none
            w-full leading-[3rem] bg-neutral-300/30 text-xl
            text-themeBright px-4
          "
        ></input>

        {/* ↓ Tjek den her CSS ↓ */}
        <FiSearch className="
          absolute top-1/2 -translate-y-1/2 right-4
          block text-2xl
          text-themeBright
          pointer-events-none
        " />
      </div>

      <div className="mt-14">
        <AktiviteterComp filtreredeAktiviteter={searchResults} />
      </div>

      { searchTerm === "" && (
        <p className="text-center text-2xl">
          Søg efter en aktivitet i søgefeltet ↑
        </p>
      )}

      { searchResults.length === 0 && searchTerm !== "" && (
        <p className="text-center text-2xl">
          Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.
        </p>
      )}
    </main>
  </> );
}

export default Soegeside;

