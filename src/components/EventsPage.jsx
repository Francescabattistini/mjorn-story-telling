import React, { useState, useEffect } from "react";
import EventCard from "../components/card/eventCard";
import { Container, Row, Col, Alert } from "react-bootstrap";

const EventsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const token = localStorage.getItem("token");

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

  // Add delete handler
  const handleDelete = async (eventoId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const response = await fetch(
          `http://localhost:3005/eventi/${eventoId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          // Remove the deleted event from the state
          setData(data.filter((event) => event.id !== eventoId));
          setSuccessMessage("Event deleted successfully");
          // Clear success message after 3 seconds
          setTimeout(() => setSuccessMessage(null), 3000);
        } else {
          throw new Error("Failed to delete event");
        }
      } catch (error) {
        setError("Error deleting event");
        // Clear error message after 3 seconds
        setTimeout(() => setError(null), 3000);
      }
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="d-flex flex-column align-items-center p-2">
      {successMessage && (
        <Alert variant="success" className="w-100">
          {successMessage}
        </Alert>
      )}
      {error && (
        <Alert variant="danger" className="w-100">
          {error}
        </Alert>
      )}
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
                onDelete={handleDelete}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default EventsPage;
