import React from "react";
import { Card, Button } from "react-bootstrap";

const EventCard = ({ id, nome, data, luogo, testo, img }) => {
  return (
    <Card key={id} className="mt-4 h-100 d-flex flex-column">
      <Card.Img src={img || "https://via.placeholder.com/150"} alt={nome} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-center pt-2 oranget">
          <h3>{nome}</h3>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted text-center">
          <strong>Data:</strong> {data} <strong>Luogo:</strong> {luogo}
        </Card.Subtitle>
        <Card.Text className="text-center">{testo}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
