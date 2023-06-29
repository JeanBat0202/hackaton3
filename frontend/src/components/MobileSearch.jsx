import "./MobileSearch.css";

export default function MobileSearch() {
  return (
    <section>
      <div className="specs-container">
        <h2>Quelles sont les caractéristiques du téléphone ?</h2>
        <form className="selectors">
          <label htmlFor="marque">Marque:</label>
          <select id="select">
            <option value="marque1">Marque 1</option>
            <option value="marque2">Marque 2</option>
            <option value="marque3">Marque 3</option>
          </select>

          <label htmlFor="modele">Modèle:</label>
          <select id="select">
            <option value="modele1">Modèle 1</option>
            <option value="modele2">Modèle 2</option>
            <option value="modele3">Modèle 3</option>
          </select>

          <label htmlFor="couleur">Couleur:</label>
          <select id="select">
            <option value="couleur1">Couleur 1</option>
            <option value="couleur2">Couleur 2</option>
            <option value="couleur3">Couleur 3</option>
          </select>
        </form>
        <div id="capacite-stockage">
          <h3>Choisissez une capacité de stockage :</h3>
          <button type="button"> 8Go</button>
          <button type="button"> 16Go </button>
          <button type="button">32Go </button>
          <button type="button"> 64go </button>
          <button type="button"> 128go </button>
          <button type="button"> 256 Go</button>
        </div>
        <div id="ram">
          <h3>Choisissez la RAM du téléphone :</h3>
          <button type="button"> 1</button>
          <button type="button"> 2 </button>
          <button type="button">3 </button>
          <button type="button"> 4 </button>
          <button type="button"> 6</button>
          <button type="button"> 8 </button>
          <button type="button"> 12 </button>
          <button type="button"> 16 </button>
        </div>
        <div id="etat">
          <h3>État du téléphone :</h3>
          <button type="button"> Correct</button>
          <button type="button"> Bon état </button>
          <button type="button">Très bon état </button>
        </div>
        <div className="container-buttons">
          <div id="retour">
            <button type="button"> Retour </button>
          </div>
          <div id="validation">
            <button type="button"> Valider </button>
          </div>
        </div>
      </div>
    </section>
  );
}
