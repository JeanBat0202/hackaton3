import React, { useState } from "react";
import "./login.css";
// import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
// import { useUserContext } from "../contexts/UserContext";

export default function Login() {
  //   const { setIdPatient } = useUserContext();
  //   const navigate = useNavigate();
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [identifiant, setIdentifiant] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeIdentifiant = (e) => {
    setIdentifiant(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //     // Ici vous pouvez effectuer une action telle qu'envoyer les données à un serveur
    //     if (!mail || !password) {
    //       // alert("You must provide an email and a password !");
    //     } else {
    //       fetch(`${import.meta.env.VITE_BACKEND_URL}/api/${utilisateur}/login`, {
    //         method: "POST",
    //         credentials: "include",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //           mail,
    //           password,
    //         }),
    //       })
    //         .then((res) => {
    //           return res.json();
    //         })
    //         .then((data) => {
    //           console.warn(data.id);
    //           navigate(`/${utilisateur}/${data.id}`);
    //           if (utilisateur === "patients") {
    //             setIdPatient(data.id);
    //           } else {
    //             setIdDoctor(data.id);
    //           }
    //           if (data.role) {
    //             setRole(data.role);
    //           }
    //         })
    //         .catch((err) => {
    //           console.error(err);
    //           // alert("Error to login please try again !");
    //         });
  };
  // Réinitialiser les valeurs du formulaire
  //     setMail("");
  //     setPassword("");
  //   };

  return (
    <div className="box">
      <div className="titre">
        <h1>Connexion</h1>
      </div>
      <form className="form" name="connexion" onSubmit={handleSubmit}>
        {/* <label htmlFor="identifiant" className="identifiant">
          Identifiant
        </label> */}
        <input
          className="case identifiant"
          placeholder="identifiant"
          type="text"
          name="identifiant"
          required
          value={identifiant}
          onChange={handleChangeIdentifiant}
        />

        {/* <label
          className="mdp"
          //   "font-bold text-white text-base mt-6"
          htmlFor="password"
        >
          Mot de passe
        </label> */}
        <label className="mdp">
          <input
            className="case mdp"
            placeholder="mdp"
            type={passwordIsVisible ? "text" : "password"}
            name="password"
            required
            value={password}
            onChange={handleChangePassword}
          />

          {!passwordIsVisible ? (
            <svg
              className="svg"
              onClick={() => setPasswordIsVisible(!passwordIsVisible)}
              type="button"
              src="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
              <path d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2 2-.916 2-2-.916-2-2-2z" />
            </svg>
          ) : (
            <svg
              onClick={() => setPasswordIsVisible(!passwordIsVisible)}
              type="button"
              className="svg"
              // "absolute right-2 bottom-1 fill-black"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.073 12.194 4.212 8.333c-1.52 1.657-2.096 3.317-2.106 3.351L2 12l.105.316C2.127 12.383 4.421 19 12.054 19c.929 0 1.775-.102 2.552-.273l-2.746-2.746a3.987 3.987 0 0 1-3.787-3.787zM12.054 5c-1.855 0-3.375.404-4.642.998L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.298-3.298c2.638-1.953 3.579-4.637 3.593-4.679l.105-.316-.105-.316C21.98 11.617 19.687 5 12.054 5zm1.906 7.546c.187-.677.028-1.439-.492-1.96s-1.283-.679-1.96-.492L10 8.586A3.955 3.955 0 0 1 12.054 8c2.206 0 4 1.794 4 4a3.94 3.94 0 0 1-.587 2.053l-1.507-1.507z" />
            </svg>
          )}
        </label>
        <button
          className="submit"
          //   "mx-auto bg-rose-400 text-white font-bold text-2xl mt-14 rounded-lg w-40 h-10 md:w-52 md:h-12 "
          type="submit"
        >
          Valider
        </button>
      </form>
    </div>
  );
}
// Connexion.propTypes = { utilisateur: PropTypes.string.isRequired };
