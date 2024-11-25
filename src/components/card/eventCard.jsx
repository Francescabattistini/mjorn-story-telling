import React from "react";
import { Card } from "react-bootstrap";

const EventCard = ({ id, nome, data, luogo, testo, img }) => {
  return (
    <Card key={id} className="event-card mt-4 h-100 d-flex flex-column">
      <div className="card-img-container">
        <img src={img || "https://via.placeholder.com/150"} alt={nome} />
      </div>
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
