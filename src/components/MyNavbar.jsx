import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const MyNavbar = () => {
  const { isAuth, userRole, logout } = useAuth();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Nav.Link as={Link} to="/">
          <h1 className="fs-4 me-5">MjornStoryTelling</h1>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-dark">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/eventi">
              Eventi
            </Nav.Link>
            <Nav.Link as={Link} to="/contatti">
              Contatti
            </Nav.Link>
            {isAuth && userRole?.toLowerCase() === "admin" && (
              <Nav.Link as={Link} to="/createvent">
                Crea Evento
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {!isAuth ? (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            ) : (
              <Nav.Link
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
