import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import applyScrollEffect from "../../js/scroll-header";

function Header({ HeaderNavDataPt }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Run the scroll effect logic when the component is mounted
  useEffect(() => {
    applyScrollEffect();
  }, []);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <a href="/" className="logo me-auto me-lg-0">
          <img
            src="/images/extras/nortada_logo_no_bg.png"
            alt="Nortada Logo"
            className="img-fluid"
          />
        </a>
        <nav id="navbar" className={`navbar order-last order-lg-0 navbar-mobile`}>
          {/* Toggle Class for Opening Menu */}
          <ul className={menuOpen ? "active" : ""}>
            <i className="bi bi-x mobile-nav-toggle" onClick={toggleMenu}></i>
            <i className={`bi ${menuOpen ? "bi-x active" : "bi-list"} mobile-nav-toggle`} onClick={toggleMenu}></i>
            {HeaderNavDataPt.map((item) => (
              <li key={item.id}>
                <Link
                  className={`nav-link scrollto ${
                    location.pathname === item.navLink ? "nav-active active" : ""
                  }`}
                  to={item.navLink}
                  onClick={toggleMenu} // Close menu on link click
                >
                  {item.navName}
                </Link>
              </li>
            ))}
            <img
              src="/images/extras/nortada_logo_no_bg.png"
              alt="Nortada Logo"
              className="img-flui mt-2 logo-menu-mobile"
            />
          </ul>
          {/* Hamburger Menu Button */}
          <i className={`bi ${menuOpen ? "mobile-nav-toggle active" : "bi-list"} mobile-nav-toggle`} onClick={toggleMenu}></i>
        </nav>
        {/* End of .navbar */}
      </div>
    </header>
  );
}

// PropTypes definition
Header.propTypes = {
  HeaderNavDataPt: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      navName: PropTypes.string.isRequired,
      navLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
