import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Navbar from "./components/Navbar";
import MobileSearch from "./components/MobileSearch";
import ResultSearch from "./components/ResultSearch";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/register" element={<MobileSearch />} />
        <Route path="/result" element={<ResultSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
