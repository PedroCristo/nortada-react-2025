import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Ensure to import Link if using react-router

function TopBar({ time_shedule, dynamically_schedule, lang1, lang2, langUrl, phone_number }) {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center">
            <span>{phone_number}</span>
          </i>
          <i className="bi bi-clock d-flex align-items-center ms-4">
            <span>{time_shedule}</span>
          </i> 
          <div className="schedule ms-4" style={{ color: dynamically_schedule.color }}>
            {dynamically_schedule.message}
          </div>
          <div>
          </div>
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
  time_shedule: PropTypes.string, 
  dynamically_schedule: PropTypes.shape({
    color: PropTypes.string,
    message: PropTypes.string,
  }).isRequired, // Expecting an object with `color` and `message`
  phone_number: PropTypes.string.isRequired,
  lang1: PropTypes.string,
  lang2: PropTypes.string,
  langUrl: PropTypes.string,
};

export default TopBar;
