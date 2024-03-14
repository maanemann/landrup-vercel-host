
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
        // console.error('Error fetching aktiviteter:', error.message);
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

