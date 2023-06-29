// import React, { useState, useEffect } from "react";
// import { useDataContext } from "../context/DataContext";

// export default function ResultSearch() {
//     const { marque, model, stockage, ram, etat } = useDataContext();
//     const [imagePhone, setImagePhone] = useState();

//   const getPicSmartphone = () => {
//     fetch(`${import.meta.env.VITE_BACKEND_URL}/api/smartphones/${id}`)
//       .then((resp) => resp.json())
//       .then((data) => setImagePhone(data));
//   };

//   useEffect(() => {
//     getPicSmartphone();
//   }, []);

//   return (
//     <div>
//       <p>{marque}</p>
//     </div>
//   );
// }
