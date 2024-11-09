import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";

// Crea el root con el elemento del DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el contenido dentro del root
root.render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>
);
