import React from "react";
import EventCard from "../components/eventCard";
const EventsPage = () => {
  function fetchFakeEvents(params) {
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
  }
  const data = fetchFakeEvents();
  return (
    <div>
      <h1>Eventi</h1>
      <div>
        {data.map((event) => (
          <EventCard
            key={event.id}
            id={event.id}
            data={event.data}
            luogo={event.luogo}
            testo={event.testo}
            img={event.img}
          ></EventCard>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
