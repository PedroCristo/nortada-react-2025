import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import applyScrollEffect from "../../js/scroll-header";
import ChristmasMessage from "./extras/ChristmasAlert";

function Header({ HeaderNavDataPt, initialVisibility, christmasData, lang1, lang2, langUrl  }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    applyScrollEffect();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-box">
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <a href="/" className="logo me-auto me-lg-0">
            <img
              src="/images/extras/nortada_logo_no_bg.png"
              alt="Nortada Logo"
              className="img-fluid"
            />
          </a>
          <nav
            id="navbar"
            className={`navbar order-last order-lg-0 navbar-mobile`}
          >
            <ul className={menuOpen ? "active" : ""}>
              <i className="bi bi-x mobile-nav-toggle" onClick={toggleMenu}></i>
              <i
                className={`bi ${
                  menuOpen ? "bi-x active" : "bi-list"
                } mobile-nav-toggle`}
                onClick={toggleMenu}
              ></i>
              {HeaderNavDataPt.map((item) => (
                <li key={item.id}>
                  <Link
                    className={`nav-link scrollto ${
                      location.pathname === item.navLink
                        ? "nav-active active"
                        : ""
                    }`}
                    to={item.navLink}
                    onClick={toggleMenu}
                  >
                    {item.navName}
                  </Link>
                </li>
              ))}
              <li className="languages d-flex align-items-center">
                <span className="interactive-color languages-mobile">{lang1} / </span>
                <span><Link className="languages-mobile" to={langUrl}>{lang2}</Link>
                </span>
              </li>
              <img
                src="/images/extras/nortada_logo_no_bg.png"
                alt="Nortada Logo"
                className="img-fluid mt-2 logo-menu-mobile"
              />
            </ul>
            <i
              className={`bi ${
                menuOpen ? "mobile-nav-toggle active" : "bi-list"
              } mobile-nav-toggle`}
              onClick={toggleMenu}
            ></i>
          </nav>
        </div>
      </header>

      {/* Pass the translated Christmas message data */}
      <ChristmasMessage
        initialVisibility={initialVisibility}
        {...christmasData}
      />
    </div>
  );
}

// PropTypes
Header.propTypes = {
  HeaderNavDataPt: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      navName: PropTypes.string.isRequired,
      navLink: PropTypes.string.isRequired,
    })
  ).isRequired,
  initialVisibility: PropTypes.bool,
  christmasData: PropTypes.object.isRequired, // Ensure it's required
};

export default Header;
