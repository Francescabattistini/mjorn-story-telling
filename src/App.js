import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import EventsPage from "./pages/EventsPage";
import Home from "./components/HomePage";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <MyNavbar />
        </header>

        <main className="pt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventi" element={<EventsPage />} />
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
