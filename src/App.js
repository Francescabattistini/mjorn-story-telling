import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import EventsPage from "./components/EventsPage";
import Home from "./components/HomePage";
import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/card/Header";
import Contatti from "./components/Contatti";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <MyNavbar />
          <Header />
        </header>

        <main className="pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/eventi" element={<EventsPage />} />
            <Route path="/contatti" element={<Contatti />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
