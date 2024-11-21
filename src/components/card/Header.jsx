import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  const logo = "/img/logo.png";
  return (
    <Container fluid className="w-75">
      <Row className="align-items-center text-center g-0">
        <Col xs={12} md={3} className="mb-3 mb-md-0">
          <h1 className="responsive-text me-md-n5 justify-content-space-around">
            Mjorn
          </h1>
        </Col>
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <img
            src={logo}
            alt="Logo MjornStoryTelling"
            className="img-fluid responsive-logo"
          />
        </Col>
        <Col xs={12} md={3}>
          <h1 className="responsive-text ms-md-n5">Storytelling</h1>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Header;
