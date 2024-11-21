import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container fluid className="w-75">
      <Row className="mt-4 justify-content-center">
        <Col xs={12} className="mb-4 mb-md-0">
          <h1 className="d-flex justify-content-center oranget mb-3 fs-1">
            Come iniziò e chi siamo
          </h1>
        </Col>
      </Row>

      <Row className="mt-4 justify-content-center">
        <Col xs={12} className="mb-4 mb-md-0">
          <div className="image-container">
            <img
              src="/img/dragon.jpg"
              alt="Description"
              className="img-fluid rounded"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div className="content-text text-center">
            <h2 className="mb-3"> Mjorn?</h2>
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
            <h2 className="mb-3">Ti racconteremo una fantastica storia...</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              qui ipsam reiciendis eius optio exercitationem sint. At ducimus
              nemo nam, autem repudiandae architecto temporibus molestiae
              possimus quae velit accusamus fugit! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Magnam qui ipsam reiciendis eius
              optio exercitationem sint. At ducimus nemo nam, autem repudiandae
              architecto temporibus molestiae possimus quae velit accusamus
              fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magnam qui ipsam reiciendis eius optio exercitationem sint. At
              ducimus nemo nam, autem repudiandae architecto temporibus
              molestiae possimus quae velit accusamus fugit! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Magnam qui ipsam reiciendis
              eius optio exercitationem sint. At ducimus nemo nam, autem
              repudiandae architecto temporibus molestiae possimus quae velit
              accusamus fugit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magnam qui ipsam reiciendis eius optio
              exercitationem sint. At ducimus nemo nam, autem repudiandae
              architecto temporibus molestiae possimus quae velit accusamus
              fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magnam qui ipsam reiciendis eius optio exercitationem sint. At
              ducimus nemo nam, autem repudiandae architecto temporibus
              molestiae possimus quae velit accusamus fugit! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Magnam qui ipsam reiciendis
              eius optio exercitationem sint. At ducimus nemo nam, autem
              repudiandae architecto temporibus molestiae possimus quae velit
              accusamus fugit! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magnam qui ipsam reiciendis eius optio
              exercitationem sint. At ducimus nemo nam, autem repudiandae
              architecto temporibus molestiae possimus quae velit accusamus
              fugit!
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="content-text text-center">
            <h2 className="mb-3"> Ti attende un avvenutra! </h2>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
