import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    nome: "",
    data: "",
    luogo: "",
    testo: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3005/eventi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        setSuccess("Evento creato con successo !");
        setEventData({ nome: "", data: "", luogo: "", testo: "" });
      } else {
        setError("fallimento creazione evento ");
      }
    } catch (err) {
      setError("errore creazione evento");
    }
  };

  return (
    <Container className="mt-5">
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome Evento</Form.Label>
          <Form.Control
            type="text"
            value={eventData.name}
            onChange={(e) =>
              setEventData({ ...eventData, nome: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>data</Form.Label>
          <Form.Control
            type="date"
            value={eventData.date}
            onChange={(e) =>
              setEventData({ ...eventData, data: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Luogo</Form.Label>
          <Form.Control
            type="text"
            value={eventData.luogo}
            onChange={(e) =>
              setEventData({ ...eventData, luogo: e.target.value })
            }
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>testo</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={eventData.testo}
            onChange={(e) =>
              setEventData({ ...eventData, testo: e.target.value })
            }
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Create Event
        </Button>
      </Form>
    </Container>
  );
};

export default CreateEvent;
