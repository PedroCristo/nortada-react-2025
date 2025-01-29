import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Ensure to import Link if using react-router

function TopBar({ shedule, lang1, lang2, langUrl, phone_number }) {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center">
            <span>{phone_number}</span>
          </i>
          <i className="bi bi-clock d-flex align-items-center ms-4">
            <span>{shedule}</span>
          </i>
        </div>

        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>{lang1}</li>
            <li>
              <Link to={langUrl}>{lang2}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

TopBar.propTypes = {
  schedule: PropTypes.string, // `schedule` must be a string and is required
  phone_number: PropTypes.string.isRequired, // `phone_number` must be a string and is required
  lang1: PropTypes.string, // `lang1` must be a string, but it's optional
  lang2: PropTypes.string, // `lang2` must be a string, but it's optional
  langUrl: PropTypes.string, // `langUrl` must be a string, but it's optional
};

export default TopBar;
