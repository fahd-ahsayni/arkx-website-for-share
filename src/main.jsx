import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactLenis } from "lenis/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReactLenis root>
      <Router>
        <App />
      </Router>
    </ReactLenis>
  </React.StrictMode>
);
