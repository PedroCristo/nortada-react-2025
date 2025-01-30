import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Footer = ({
  copy_1,
  copy_2,
  policy_url,
  policy_name,
  cookies_url,
  cookies_name,
}) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="social-links mt-3">
                <a
                  href="https://www.facebook.com/nortada.restaurante/?eid=ARD4QUOYIp_D_21ssyT-e9VcR7E3GEwT53lw9mEl18HsJrn9GgwVf-jW_gO76qsVv"
                  target="_blank"
                  className="facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/nortada_restaurante/"
                  target="_blank"
                  className="instagram"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-end">
              <div className="copyright">
                <i className="bi bi-shield-lock"></i> Copyright |{" "}
                <strong>
                  <span>{copy_1} |</span>
                </strong>
                {copy_2} | 2024 - {currentYear}
              </div>
            </div>
            <div className="policy-links d-flex justify-content-end align-items-end">
              <span className="mr-5 mt-2"> <Link  className="custom-link" to={policy_url}>{policy_name}</Link></span>&nbsp; |&nbsp;
              <span className="ml-5 mt-2"> <Link  className="custom-link" to={cookies_url}>{cookies_name}</Link></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  copy_1: PropTypes.string.isRequired,
  copy_2: PropTypes.string.isRequired,
  policy_url: PropTypes.string.isRequired,
  policy_name: PropTypes.string.isRequired,
  cookies_url: PropTypes.string.isRequired,
  cookies_name: PropTypes.string.isRequired,
};

export default Footer;
