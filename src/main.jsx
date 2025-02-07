import React from "react";
import ReactDOM from "react-dom/client";
import './main.css'
import './responsive.css'
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import BackTop from "./components/UI/extras/BackTop.jsx";
import Preloader from "./components/UI/extras/Preloader.jsx";
import ScrollToTop from "./components/UI/extras/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
      <BackTop />
      {/* <Preloader /> */}
    </Router>
  </React.StrictMode>
);