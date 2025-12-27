import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PortfolioProvider } from "./Context/PortfolioProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css"; // <-- tailwind CSS import

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter  basename="/portfolio/">
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>
  </BrowserRouter>
  
);
