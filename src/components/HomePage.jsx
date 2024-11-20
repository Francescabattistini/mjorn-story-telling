import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const logo = "/img/logo.png";
  return (
    <Container fluid>
      <Row className="align-items-center text-center">
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <h1 className="responsive-text">Mjorn</h1>
        </Col>
        <Col xs={12} md={4} className="mb-3 mb-md-0">
          <img
            src={logo}
            alt="Logo MjornStoryTelling"
            className="img-fluid responsive-logo"
          />
        </Col>
        <Col xs={12} md={4}>
          <h1 className="responsive-text">StoryTelling</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
