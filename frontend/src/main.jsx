import React from "react";
import ReactDOM from "react-dom/client";
import userReducer, { initialState } from "./reducer/userReducer";
import { UserContextProvider } from "./context/UserContext";
import { DataContextProvider } from "./context/DataContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <UserContextProvider reducer={userReducer} initialState={initialState}>
        <App />
      </UserContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);
