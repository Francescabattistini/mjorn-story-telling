import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Alert,
  Row,
  Col,
  Card,
} from "react-bootstrap";

const CreateEvent = ({ onEventCreated }) => {
  const [eventData, setEventData] = useState({
    nome: "",
    data: "",
    luogo: "",
    testo: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const token = localStorage.getItem("token");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3005/eventi", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const newEvent = await response.json();
      if (onEventCreated) {
        onEventCreated(newEvent);
      }

      setSuccessMessage("Event created successfully");
      setEventData({
        nome: "",
        data: "",
        luogo: "",
        testo: "",
      });
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      setError("Error creating event");
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <Card className="mb-4">
            <Card.Body>
              {successMessage && (
                <Alert variant="success">{successMessage}</Alert>
              )}
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome Evento</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={eventData.nome}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Data</Form.Label>
                  <Form.Control
                    type="date"
                    name="data"
                    value={eventData.data}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Luogo</Form.Label>
                  <Form.Control
                    type="text"
                    name="luogo"
                    value={eventData.luogo}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Descrizione</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="testo"
                    value={eventData.testo}
                    onChange={handleInputChange}
                    required
                    rows={3}
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Crea Evento
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateEvent;
