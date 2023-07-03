// import React, { useState, useEffect } from "react";
// import { useDataContext } from "../context/DataContext";
// import "./Result.css";

// export default function ResultSearch() {
//   const { marque, model, stockage, ram, etat } = useDataContext();
//   const [price, setPrice] = useState(0);

//   useEffect(() => {
//     setPrice(getPrice());
//   }, []);
//   function getPrice() {
//     let ValS = 0;
//     let ValM = 0;
//     let ValE = 0;

//     if (stockage === "8") {
//       ValS = 5;
//     } else if (stockage === "16") {
//       ValS = 15;
//     } else if (stockage === "32") {
//       ValS = 20;
//     } else if (stockage === "64") {
//       ValS = 30;
//     } else if (stockage === "128") {
//       ValS = 40;
//     } else if (stockage === "256") {
//       ValS = 50;
//     }

//     if (ram === "1") {
//       ValM = 2;
//     } else if (ram === "2") {
//       ValM = 4;
//     } else if (ram === "3") {
//       ValM = 6;
//     } else if (ram === "4") {
//       ValM = 8;
//     } else if (ram === "6") {
//       ValM = 10;
//     } else if (ram === "8") {
//       ValM = 12;
//     } else if (ram === "12") {
//       ValM = 14;
//     } else if (ram === "16") {
//       ValM = 16;
//     }

//     if (etat === "Correct") {
//       ValE = 100;
//     } else if (etat === "Bon état") {
//       ValE = 200;
//     } else if (etat === "Très bon état") {
//       ValE = 300;
//     }
//     const prix = ValE + ValM + ValS;

//     return prix;
//   }

//   return (
//     <div className="general">
//       <div className="tel">
//         <p>
//           {marque} - {model}
//         </p>
//       </div>

//       <div className="telcapacite">
//         <div className="stockage">
//           <p id="stock">Capacité de stockage: {stockage}Go</p>
//           <img id="check" src="/src/assets/validation.png" alt="img" />
//         </div>

//         <div className="raminage">
//           <p id="ram">RAM: {ram}Go</p>
//           <img id="check" src="/src/assets/validation.png" alt="img" />
//         </div>

//         <p id="etattel">{etat}</p>
//       </div>

//       <div>
//         <p>Prix: {price}e</p>
//       </div>
//     </div>
//   );
// }
