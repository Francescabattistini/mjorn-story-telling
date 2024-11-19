import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.png";
const Home = () => {
  return (
    <Container class="text-center">
      <Row>
        <Col className="homepagecolumn">
          <h1>Mjorn</h1>
        </Col>
        <Col className="homepagecolumn">
          <img src={logo} alt="Logo MjornStoryTelling" className="img-small" />
        </Col>
        <Col className="homepagecolumn">
          <h1>StoryTelling</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
