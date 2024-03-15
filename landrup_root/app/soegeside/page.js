
'use client'

import Drawer from "@/components/Drawer";
import { useApiContext } from "@/context";
import Link from "next/link";
import { useState } from "react";

const Soegeside = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { aktiviteterData, error } = useApiContext();

  const searchResults = searchTerm !== ""
    ? aktiviteterData.filter((aktivitet) => {
      // filteret gøres case-insensitive ved at konvertere alle strings til lowercase :
      return aktivitet.name.toLowerCase().includes(searchTerm.toLowerCase())
      || aktivitet.description.toLowerCase().includes(searchTerm.toLowerCase())
    })
    // Hvis søgefeltet er tomt vises ingenting (tom array) :
    : [];

  return ( <>

    <Drawer />

    <main className="m-8">
      {/* når value ændres, reflekteres det i searchTerm (state ↑) : */}
      <input
        // searchTerm som value gør dette til et "controlled component" (form element in react hvis value kontrolleres af state), og sikrer at input er 'i sync' med searchTerm (men det virker også uden) :
        type="text" value={searchTerm}
        // dette "controlled component" er i sync med searchTerm med `onChange` :
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>

      {/* Søgeresultater.. (index er nødvendig for at react har en id at gå efter til hver item) : */}
      <ul className="mt-8">
        { searchResults.map((aktivitet, index) => (
          <li key={index} className="mb-4">
            <Link href={`/aktiviteter/${aktivitet.id}`} />
            <h2 className="text-2xl">
              { aktivitet.name }
            </h2>
            <p>{ aktivitet.description }</p>
          </li>
        )) }
      </ul>
    </main>
  </> );
}

export default Soegeside;

