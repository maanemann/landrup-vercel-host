
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const apiContext = createContext();

export function ApiWrapper({ children }) {
  const [aktiviteterData, setAktiviteterData] = useState(null);
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
        console.error('Error fetching aktiviteter:', error.message);
        setError(error.message);
      }
    };

    fetchData();
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


// Read more.. :
// *1* : ´map´ tager en callback funktion som argument, og denne funktion kan tage tre argumenter: det aktuelle element, index og det oprindelige array. Her er brugt de første to argumenter. Index er en nul-baseret værdi, som repræsenterer det aktuelle element i array'et, hvilket react bruger til at opdatere DOM korrekt.

