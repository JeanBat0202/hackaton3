import "./Home.css";
import { useUserContext } from "../context/UserContext";

function Home() {
  const [{ user }] = useUserContext();
  return (
    <>
      {user ? <h1>Bonjour {user.firstname}</h1> : null}
      <div className="titre">
        <h1>Commencer l'enregistrement de nouveaux téléphones</h1>
      </div>
      <div className="button-container">
        <button type="button" className="blue-button">
          <p>Identification</p>
        </button>
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
