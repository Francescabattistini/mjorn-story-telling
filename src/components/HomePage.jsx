import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid className="w-75">
      <Row className="mt-4 justify-content-center">
        <Col xs={12} className="d-flex justify-content-center">
          <div className="video-wrapper">
            <iframe
              className="centered-video"
              src="https://www.youtube.com/embed/IzyeT72Wpgg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>

      <Row className="mt-5 align-items-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <img
            src="/img/mappau.png"
            alt="Description"
            className="img-fluid rounded"
          />
        </Col>
        <Col xs={12} md={6}>
          <div className="content-text">
            <h2 className="mb-3">Una regione da esplorare</h2>
            <p>
              C’è uno strano benessere che si prova quando si parte per un’
              avventura. Il gioco di ruolo è anche questo: liberare e liberarsi
              dalle catene della banalità.
            </p>
          </div>
        </Col>
      </Row>
      <Row className="mt-5 align-items-center">
        <Col xs={12} md={6}>
          <div className="content-text">
            <h2 className="mb-3">Una regione da esplorare</h2>
            <p>
              C’è uno strano benessere che si prova quando si parte per un’
              avventura. Il gioco di ruolo è anche questo: liberare e liberarsi
              dalle catene della banalità.
            </p>
          </div>
        </Col>
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <img
            src="/img/wonted.jpg"
            alt="Description"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
      <Row className="mt-5 align-items-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <img
            src="/img/figth.jpg"
            alt="Description"
            className="img-fluid rounded"
          />
        </Col>
        <Col xs={12} md={6}>
          <div className="content-text">
            <h2 className="mb-3">Una regione da esplorare</h2>
            <p>
              C’è uno strano benessere che si prova quando si parte per un’
              avventura. Il gioco di ruolo è anche questo: liberare e liberarsi
              dalle catene della banalità.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="content-text text-center">
            <h2 className="mb-3">Breve descrizione </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
              exercitationem fugit error consectetur incidunt vitae saepe. Eius
              mollitia minus, eligendi molestias fugiat autem rem nobis
              dignissimos. Maiores provident enim distinctio!
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="content-text text-center">
            <h2 className="mb-3 ">INIZIA L'AVVENTURA...</h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
