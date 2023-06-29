import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/acceuil" element={<Home />} />
          <Route path="/" element={<Connexion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
