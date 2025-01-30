import { useEffect } from "react"; // Import useEffect from React
import { Routes, Route } from "react-router-dom";
import "./js/main.js"; // Your custom JS file
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import HomePt from "./pages/pt/HomePt.jsx";
import MenuPt from "./pages/pt/MenuPt.jsx";
import PrivacyCokkiesPolicyPt from "./pages/pt/PrivacyCookiesPolicyPt.jsx";
import PageNotFound from "./pages/error/404.jsx";
import HomeEn from "./pages/en/HomeEn.jsx";

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,  // Animation duration (in ms)
      easing: 'ease-in-out',  // Animation easing function
      once: true,  // Animation triggers only once
      mirror: false,  // Don't animate when the element scrolls back into view
    });

    // Optionally, refresh AOS after updates
    window.addEventListener('resize', AOS.refresh);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', AOS.refresh);
    };
  }, []); // The empty dependency array ensures this runs only once when the component is mounted

  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePt />} />
        <Route path="menu-pt" exact element={<MenuPt />} />
        <Route path="política-de-privacidade-e-cookies" exact element={<PrivacyCokkiesPolicyPt />} />
        <Route path="*" exact element={<PageNotFound />} />
        <Route path="home-en" exact element={<HomeEn />} />
      </Routes>
    </>
  );
}

export default App;
