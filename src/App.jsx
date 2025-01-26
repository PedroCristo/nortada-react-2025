import { Routes, Route } from "react-router-dom";
import "./js/main.js"
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePt from "./pages/pt/HomePt.jsx";
import MenuPt from "./pages/pt/MenuPt.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePt />} />
        <Route path="menu-pt" exact element={<MenuPt />} />
      </Routes>
    </>
  );
}

export default App;
