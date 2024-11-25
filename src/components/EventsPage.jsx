import React, { useState, useEffect } from "react";
import EventCard from "../components/card/eventCard";
import { Container, Row, Col } from "react-bootstrap";

const EventsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  console.log(token);
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3005/eventi", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Errore nella fetch: ${response.status}`);
      }

      const events = await response.json();
      setData(events);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Errore: {error}</div>;
  }

  return (
    <div className="d-flex flex-column align-items-center p-2">
      <h1 className="orangeText text-center">
        Eventi <br />
        Mjorn StroyTelling
      </h1>
      <Container fluid>
        <Row className="justify-content-center g-3">
          {data.map((event) => (
            <Col
              xs={10}
              sm={10}
              md={4}
              lg={4}
              key={event.id}
              className="d-flex justify-content-center"
            >
              <EventCard
                id={event.id}
                nome={event.nome}
                data={event.dataEvento}
                luogo={event.luogo}
                testo={event.testo}
                img={event.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EventsPage;
