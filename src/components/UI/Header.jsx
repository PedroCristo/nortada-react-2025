import { HashLink as Link } from "react-router-hash-link";
import React, { useEffect } from "react";
import applyScrollEffect from "../../js/scroll-header";

function Header() {
  // Run the scroll effect logic when the component is mounted
  useEffect(() => {
    applyScrollEffect();
  }, []);

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <a href="index.html" className="logo me-auto me-lg-0">
          <img
            src="/images/extras/nortada_logo_no_bg.png"
            alt="Nortada Logo"
            className="img-fluid"
          />
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link className="nav-link scrollto active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" smooth to="#about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" smooth to="#gallery">
                Gallery
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" smooth to="#contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="menu-pt">
                Menu
              </Link>
            </li>
            {/* 
              Uncomment the following block for a dropdown menu example
              <li className="dropdown">
                <a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#">Drop Down 1</a></li>
                  <li className="dropdown">
                    <a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Drop Down 2</a></li>
                  <li><a href="#">Drop Down 3</a></li>
                  <li><a href="#">Drop Down 4</a></li>
                </ul>
              </li> 
            */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* End of .navbar */}

        <a
          href="tel:+351219291516"
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          Book a table
        </a>
      </div>
    </header>
  );
}

export default Header;
