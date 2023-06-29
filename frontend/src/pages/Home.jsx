import "./Home.css";
import { Link } from "react";

function Home() {
  return (
    <>
      <div className="titre">
        <h1>Commencer l'enregistrement de nouveaux téléphones</h1>
      </div>
      <div className="button-container">
        <Link to="/register">
          <button type="button" className="blue-button">
            <p>Identification</p>
          </button>
        </Link>
      </div>
      <img
        src="src/assets/Images/image-home.png"
        alt="telephone"
        className="image"
      />
    </>
  );
}

export default Home;
