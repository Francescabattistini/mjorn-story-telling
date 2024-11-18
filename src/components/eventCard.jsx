const EventCard = ({ id, nome, data, luogo, testo, img }) => {
  return (
    <div
      key={id}
      style={{
        marginBottom: "20px",
        padding: "10px",
        border: "1px solid #ccc",
      }}
    >
      <h2>{nome}</h2>
      <p>
        <strong>Data:</strong> {data}
      </p>
      <p>
        <strong>Luogo:</strong> {luogo}
      </p>
      <p>{testo}</p>
      <img src={img} alt={nome} style={{ width: "100px", height: "100px" }} />
    </div>
  );
};
export default EventCard;
