import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // THIS MUST point to your App.tsx
import "./index.css"; // Tailwind included

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
