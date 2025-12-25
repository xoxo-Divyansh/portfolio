import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PortfolioProvider } from "./Context/PortfolioProvider.jsx";
import "./index.css"; // <-- tailwind CSS import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>
);
