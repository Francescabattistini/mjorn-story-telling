import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefono: "",
    message: "",
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target; // Corretto "nome" in "name"
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("Form submitted:", formData);
      setFormData({
        name: "",
        email: "",
        telefono: "",
        message: "",
      });
    }

    setValidated(true);
  };

  return (
    <Container fluid className="w-75 my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4 oranget">Contact Us</h2>
          <hr className="mb-4" />

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Inserisci il tuo nome"
                name="name" // Allineato con lo stato
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Per favore scrivi il tuo nome!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Inserisci la tua email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Inserisci una email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Per favore inserisci una Email
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTelephone">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                required
                type="tel"
                placeholder="Inserisci un numero di telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                pattern="[0-9]{10}"
              />
              <Form.Control.Feedback type="invalid">
                Si prega di fornire un numero di telefono valido di 10 cifre.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Messaggio</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={4}
                placeholder="Inserisci un messaggio"
                name="message" // Allineato con lo stato
                value={formData.message}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Perfavore scrivi un messaggio!
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "#b56006",
                  borderColor: "#b56006",
                  transition: "all 0.3s ease",
                }}
                className="custom-button"
              >
                Invio messaggio
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contatti;
