import React from "react";
import ReactDOM from "react-dom/client";
import './main.css'
import './responsive.css'
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import BackToTop from "./components/UI/extras/backToTop.jsx";
import Preloader from "./components/UI/extras/Preloader.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
      <BackToTop />
      <Preloader />
    </Router>
  </React.StrictMode>
);