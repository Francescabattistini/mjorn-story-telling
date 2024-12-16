import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="justify-content-center">
          {/* Company Info */}
          <Col
            xs={12}
            md={4}
            className="text-center text-md-start mb-3 mb-md-0"
          >
            <h4 className="fs-4 mb-2">Mjorn StoryTelling</h4>
            <p className="mb-0">Via Roma,123</p>
            <p className="mb-0">12345 L'aquila, Italia</p>
            <p className="mb-0">Tel: +39 123 456 7890</p>
            <p>Email: mjorninfo@gmail.com</p>
          </Col>
          {/* Quick Links */}
          <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <h4 className="fs-4 mb-2">Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/Eventi" className="text-light text-decoration-none">
                  Eventi
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contattaci
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="text-center text-md-end">
            <h4 className="fs-4 mb-2">Seguici anche su:</h4>
            <div className="mb-2">
              <a
                href="https://www.facebook.com/mjornstorytelling"
                className="text-light me-4 text-decoration-none social-icon"
                target="_blank"
                style={{ fontSize: "2rem" }}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/mjornstorytelling/"
                className="text-light me-4 text-decoration-none social-icon"
                target="_blank"
                style={{ fontSize: "2rem" }}
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <hr className="bg-light" />
            <p className="mb-0">
              © {currentYear} Mjorn StoryTelling. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
