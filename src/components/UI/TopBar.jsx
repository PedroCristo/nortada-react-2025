import PropTypes from "prop-types";

function TopBar({ shedule, lang,  phone_number }) {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center">
            <span>{phone_number}</span>
          </i>
          <i className="bi bi-clock d-flex align-items-center ms-4">
            <span> {shedule} </span>
          </i>
        </div>

        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>En</li>
            <li>
              <a href="#">De</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

TopBar.propTypes = {
  shedule: PropTypes.string.isRequired, // `shedule` must be a string and is required
  phone_number: PropTypes.string.isRequired, // `shedule` must be a string and is required
  lang: PropTypes.string, // `lang` must be a string, but it's optional
};

export default TopBar;
