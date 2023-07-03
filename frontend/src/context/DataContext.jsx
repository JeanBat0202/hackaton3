// import { createContext, useContext, useState } from "react";

// const DataContext = createContext();

// export default DataContext;

// function DataContextProvider({ children }) {
//   const [marque, setMarque] = useState("");
//   const [model, setModel] = useState("");
//   const [stockage, setStockage] = useState("");
//   const [ram, setRam] = useState("");
//   const [etat, setEtat] = useState("");
//   const [image, setImage] = useState("");

//   return (
//     <DataContext.Provider
//       value={{
//         marque,
//         setMarque,
//         model,
//         setModel,
//         stockage,
//         setStockage,
//         ram,
//         setRam,
//         etat,
//         setEtat,
//         image,
//         setImage,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// }

// const useDataContext = () => useContext(DataContext);
// export { DataContextProvider, useDataContext };
