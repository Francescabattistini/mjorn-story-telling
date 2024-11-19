import React, { useState, useEffect } from "react";
import EventCard from "../components/eventCard";
/* function fetchFakeEvents(params) {
    const data = [
      {
        id: "1",
        nome: "eventouno",
        data: "2024-12-01",
        luogo: "roma",
        testo: "ciao amici",
        img: "url",
      },
      {
        id: "2",
        nome: "eventodue",
        data: "2024-10-01",
        luogo: "cesena",
        testo: "ciao amici",
        img: "url",
      },
      {
        id: "3",
        nome: "eventotre",
        data: "2024-09-01",
        luogo: "milano",
        testo: "ciao amici",
        img: "url",
      },
      {
        id: "4",
        nome: "eventoquattro",
        data: "2024-01-01",
        luogo: "napoli",
        testo: "ciao amici",
        img: "url",
      },
    ];
    return data;
  } */

const Eventi = () => {
  // Crea uno stato per memorizzare i dati degli eventi
  const [eventi, setEventi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEventi = async () => {
    try {
      const response = await fetch("http://localhost:3001/eventi");
      if (!response.ok) {
        throw new Error("Errore durante il recupero dei dati");
      }
      const data = await response.json();
      setEventi(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventi();
  }, []);
  if (loading) {
    return <div>Caricamento...</div>;
  }
  if (error) {
    return <div>Errore: {error}</div>;
  }

  // Renderizza gli eventi quando i dati sono disponibili
  return (
    <div>
      <h1>Eventi</h1>
      <div>
        {eventi.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            data={event.data}
            luogo={event.luogo}
            testo={event.testo}
            img={event.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Eventi;
