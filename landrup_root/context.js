
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const apiContext = createContext();

export function ApiWrapper({ children }) {
  // Det er vigtigt at initialisere state med en tom array, da der bruges `find` metode i `Aktivitetsdetaljer`, hvilket er en array metode, som forventer en array :
  const [aktiviteterData, setAktiviteterData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const aktiviteterUrl = `http://localhost:4000/api/v1/activities`;
      try {
        const res = await fetch(aktiviteterUrl);

        if (!res.ok) {
          throw new Error(`HTTP fejl.. status: ${res.status}`);
        };

        const data = await res.json();

        setAktiviteterData(data);
        
      } catch (error) {
        // console.error('Error fetching aktiviteter:', error.message);
        setError(error.message);
      }
    };

    fetchData();
    // Dependency array sikrer at `useEffect` kun kører ved mount / unmount, ikke ved re-rendering, hvilket sker ved state update (effekten kører og opdaterer states > re-render > effekten kører ... > INFINITE LOOP). Der bruges ingen eksterne variabler i effekten, derfor tomt depency array (hvis der gjorde, skulle den køre når de ændres)
  }, []);

  return(
    <apiContext.Provider value={{ aktiviteterData, error }}>
      { children }
    </apiContext.Provider>
  )
};

export function useApiContext() {
  return useContext(apiContext);
}

