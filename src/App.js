import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import About from "./components/About";
import EventsPage from "./components/EventsPage";
import Contatti from "./components/Contatti";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/HomePage";
import Header from "./components/card/Header";
import CreateEvent from "./components/CreateEvent";
import { AuthProvider } from "./components/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <header>
            <MyNavbar />
            <Header />
          </header>

          <main className="pt-3">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<LoginPage />} />

              {/* Protected Routes */}
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/eventi"
                element={
                  <ProtectedRoute>
                    <EventsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/contatti"
                element={
                  <ProtectedRoute>
                    <Contatti />
                  </ProtectedRoute>
                }
              />

              {/* Admin Only Routes */}
              <Route
                path="/createvent"
                element={
                  <ProtectedRoute adminOnly={true}>
                    <CreateEvent />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
