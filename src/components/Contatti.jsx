import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Contatto = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: "",
  });

  const [mostraSuccesso, setMostraSuccesso] = useState(false);
  const [errori, setErrori] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (errori[name]) {
      setErrori((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuoviErrori = {};
    if (!formData.nome.trim()) {
      nuoviErrori.nome = "Il nome è obbligatorio";
    }
    if (!formData.email.trim()) {
      nuoviErrori.email = "L'email è obbligatoria";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nuoviErrori.email = "L'email non è valida";
    }

    if (Object.keys(nuoviErrori).length > 0) {
      setErrori(nuoviErrori);
      return;
    }
    console.log("Modulo inviato:", formData);

    // Resetta tutto
    setFormData({
      nome: "",
      email: "",
      telefono: "",
      messaggio: "",
    });
    setErrori({});
    setMostraSuccesso(true);

    setTimeout(() => {
      setMostraSuccesso(false);
    }, 3000);
  };

  return (
    <Container fluid className="w-75 my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <h1 className="text-center mb-4 oranget fs-1 mb-5">Contattaci</h1>

          {mostraSuccesso && (
            <Alert variant="success" className="mb-4">
              Messaggio inviato con successo!
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                isInvalid={!!errori.nome}
              />
              <Form.Control.Feedback type="invalid">
                {errori.nome}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci la tua email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errori.email}
              />
              <Form.Control.Feedback type="invalid">
                {errori.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTelefono">
              <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Inserisci il tuo numero di telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessaggio">
              <Form.Label>Messaggio</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Inserisci il tuo messaggio"
                name="messaggio"
                value={formData.messaggio}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-grid gap-2 mb-5">
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
                Invia Messaggio
              </Button>
              <hr />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contatto;
