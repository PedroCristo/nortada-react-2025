import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import applyScrollEffect from "../../js/scroll-header";

function Header({ HeaderNavDataPt }) {
  const location = useLocation();

  // Run the scroll effect logic when the component is mounted
  useEffect(() => {
    applyScrollEffect();
  }, []);

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

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            {HeaderNavDataPt.map((item) => (
              <li key={item.id}>
                <Link
                  className={`nav-link scrollto ${
                    location.pathname === item.navLink ? "nav-active active" : ""
                  }`}
                  to={item.navLink}
                >
                  {item.navName}
                </Link>
              </li>
            ))}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
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

