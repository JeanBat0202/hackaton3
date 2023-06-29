import "./MobileSearch.css";

export default function MobileSearch() {
  return (
    <section>
      <div className="specs-container">
        <h2 className="caracteristique">
          Quelles sont les caractéristiques du téléphone ?
        </h2>

        <form className="selectors">
          <label htmlFor="marque">Marque:</label>
          <select id="select">
            <option value="marque1">Apple</option>
            <option value="marque2">Samsung</option>
            <option value="marque3">Xiaomi</option>
          </select>

          <label htmlFor="modele">Modèle:</label>
          <select id="select">
            <option value="modele1">iPhone6</option>
            <option value="modele2">GalaxyA6</option>
            <option value="modele3">RedmiNote7</option>
          </select>

          <label htmlFor="couleur">Couleur:</label>
          <select id="select">
            <option value="couleur1">Noir</option>
            <option value="couleur2">Blanc</option>
          </select>
        </form>

        <div id="caracteristiques">
          <h3>Capacité de stockage</h3>
          <button type="button"> 8 Go</button>
          <button type="button"> 16 Go </button>
          <button type="button">32 Go </button>
          <button type="button"> 64 go </button>
          <button type="button"> 128 go </button>
          <button type="button"> 256 Go</button>
        </div>

        <div id="caracteristiques">
          <h3>RAM</h3>
          <button type="button"> 1</button>
          <button type="button"> 2 </button>
          <button type="button"> 3 </button>
          <button type="button"> 4 </button>
          <button type="button"> 6</button>
          <button type="button"> 8 </button>
          <button type="button"> 12 </button>
          <button type="button"> 16 </button>
        </div>

        <div id="etat">
          <h3>État du téléphone</h3>
          <button type="button"> Correct</button>
          <button type="button"> Bon état </button>
          <button type="button">Très bon état </button>
        </div>

        <div className="container-buttons">
          <button id="retour" type="button">
            {" "}
            Retour{" "}
          </button>
          <button id="valider" type="button">
            {" "}
            Valider{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
