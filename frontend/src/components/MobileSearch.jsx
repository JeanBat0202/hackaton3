// import { useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../context/DataContext";
import "./MobileSearch.css";

export default function MobileSearch() {
  // const [marque, setMarque] = useState();
  // const [model, setModel] = useState();
  // const [stockage, setStockage] = useState();
  // const [ram, setRam] = useState();
  // const [etat, setEtat] = useState();

  const {
    marque,
    model,
    // stockage,
    // ram,
    // etat,
    setMarque,
    setModel,
    setStockage,
    setRam,
    setEtat,
  } = useDataContext();

  const handleMarque = (e) => {
    setMarque(e.target.value);
  };

  const handleModel = (e) => {
    setModel(e.target.value);
  };

  const handleStockage = (e) => {
    setStockage(e.target.value);
  };

  const handleRam = (e) => {
    setRam(e.target.value);
  };

  const handleEtat = (e) => {
    setEtat(e.target.value);
  };

  return (
    <section>
      <div className="specs-container">
        <h2 className="caracteristique">
          Quelles sont les caractéristiques du téléphone ?
        </h2>

        <form className="selectors">
          <label htmlFor="marque">Marque:</label>
          <select id="select" value={marque} onChange={handleMarque}>
            <option>-Select-</option>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>

          <label htmlFor="modele">Modèle:</label>
          <select id="select" value={model} onChange={handleModel}>
            <option>-Select-</option>
            <option value="Iphone6">Iphone6</option>
            <option value="GalaxyA6">GalaxyA6</option>
            <option value="RedmiNote7">RedmiNote7</option>
          </select>

          <label htmlFor="couleur">Couleur:</label>
          <select id="select">
            <option>-Select-</option>
            <option value="Blanc">Blanc</option>
            <option value="Noir">Noir</option>
            <option value="Bleu">Bleu</option>
          </select>
        </form>
        <div id="capacite-stockage">
          <h3>Choisissez une capacité de stockage :</h3>
          <button type="button" value="8" onClick={handleStockage}>
            8Go
          </button>
          <button type="button" value="16" onClick={handleStockage}>
            16Go
          </button>
          <button type="button" value="32" onClick={handleStockage}>
            32Go
          </button>
          <button type="button" value="64" onClick={handleStockage}>
            64go
          </button>
          <button type="button" value="128" onClick={handleStockage}>
            128go
          </button>
          <button type="button" value="256" onClick={handleStockage}>
            256Go
          </button>
        </div>
        <div id="ram">
          <h3>Choisissez la RAM du téléphone :</h3>
          <button type="button" value="1" onClick={handleRam}>
            1
          </button>
          <button type="button" value="2" onClick={handleRam}>
            2
          </button>
          <button type="button" value="3" onClick={handleRam}>
            3
          </button>
          <button type="button" value="4" onClick={handleRam}>
            4
          </button>
          <button type="button" value="6" onClick={handleRam}>
            6
          </button>
          <button type="button" value="8" onClick={handleRam}>
            8
          </button>
          <button type="button" value="12" onClick={handleRam}>
            12
          </button>
          <button type="button" value="16" onClick={handleRam}>
            16
          </button>
        </div>

        <div id="etat">
          <h3>État du téléphone :</h3>
          <button type="button" value="Correct" onClick={handleEtat}>
            Correct
          </button>
          <button type="button" value="Bon état" onClick={handleEtat}>
            Bon état
          </button>
          <button type="button" value="Très bon état" onClick={handleEtat}>
            Très bon état
          </button>
        </div>

        <div className="container-buttons">
          <div id="retour">
            <button type="button">Retour</button>
          </div>
          <div id="validation">
            <Link to="/result">
              <button type="button">Valider</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
