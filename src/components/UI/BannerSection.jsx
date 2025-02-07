import PropTypes from "prop-types";

function BannerSection({ banner_title, banner_content, banner_bg }) {
  return (
    <div
      id="banner"
      className={`set-bg container-fluid d-flex justify-content-center align-items-center text-center ${banner_bg}`}
    >
      <div className="row">
        <div className="col-md-12" data-aos="fade-up">
          <h3 className="title-brand interactive-color">{banner_title}</h3>
          <p className="fst-italic">{banner_content}</p>
        </div>
      </div>
    </div>
  );
}

BannerSection.propTypes = {
  banner_title: PropTypes.string.isRequired,
  banner_content: PropTypes.string.isRequired,
  banner_bg: PropTypes.string, // Optional, add `isRequired` if needed
};

export default BannerSection;
