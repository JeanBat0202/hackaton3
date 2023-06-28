import { FaBars } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [sidebar, setSideBar] = useState(false);
  const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <header className="headerContainer">
        <FaBars
          className="imageBugerMenu"
          onClick={() => {
            showSidebar();
          }}
        />
      </header>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="nav-text">Ajouter</li>
          <li className="nav-text">Paramètres</li>
          <li className="nav-text">FAQ</li>
          <li className="nav-text">Connexion</li>
        </ul>
      </nav>
    </>
  );
}
