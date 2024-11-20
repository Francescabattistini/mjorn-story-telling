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
            <h5>Company Name</h5>
            <p className="mb-0">Via Example, 123</p>
            <p className="mb-0">12345 L'aquila, Italia</p>
            <p className="mb-0">Tel: +39 123 456 7890</p>
            <p>Email: mjornstorytelling@gmaial.com</p>
          </Col>
          {/* Quick Links */}
          <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/Eventi" className="text-light text-decoration-none">
                  Eventi
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} className="text-center text-md-end">
            <h5>Follow Us</h5>
            <div className="mb-2">
              <a
                href="https://www.facebook.com/mjornstorytelling"
                className="text-light me-4 text-decoration-none social-icon"
                style={{ fontSize: "2rem" }}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/mjornstorytelling/"
                className="text-light me-4 text-decoration-none social-icon"
                style={{ fontSize: "2rem" }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
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
