import React from "react";
import ReactDOM from "react-dom/client"; // Importa 'react-dom/client' en lugar de 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Usa createRoot en lugar de render

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
