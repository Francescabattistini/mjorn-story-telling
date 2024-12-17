import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchUserData(token);
  }, []);

  const fetchUserData = async (token) => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3005/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError("Error fetching user data");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("userRole");

    navigate("/login");
  };

  if (isLoading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col className="d-flex justify-content-between align-items-center">
          <h2>Welcome to Admin Dashboard</h2>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Profile Information</Card.Title>
              <Card.Text>
                <strong>Email:</strong> {userData?.email}
                <br />
                <strong>Role:</strong> {userData?.role}
                <br />
                <strong>Status:</strong> Active
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Quick Actions</Card.Title>
              <div className="d-grid gap-2">
                <Button variant="primary" className="mb-2">
                  Create New Event
                </Button>
                <Button variant="outline-primary" className="mb-2">
                  View All Events
                </Button>
                <Button variant="outline-primary">Manage Users</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Recent Activity</Card.Title>
              <Card.Text>
                <ul className="list-unstyled">
                  <li>✓ Last login: {new Date().toLocaleDateString()}</li>
                  <li>✓ Events created this month: 0</li>
                  <li>✓ Total users: 0</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
