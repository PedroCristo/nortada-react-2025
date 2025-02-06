import React from "react";
import PropTypes from "prop-types";

const PressSection = ({ data }) => {
  const [title, ...contentItems] = data; // Assume the first object in the array contains the section title.

  return (
    <section id="press-section" className="press-section">
      <div className="container" data-aos="fade-up">
        {/* Section Title */}
        <div className="section-title">
          <h2>{title.section_title}</h2>
          <p className="fst-italic">{title.section_sub_title}</p>
        </div>
        {/* Dynamic Content */}
        <div className="row">
          {contentItems.map((item, index) => (
            <div className="col-md-6" key={index}>
              <p>
                {" "}
                <i className="bi bi-quote"></i> {item.content}{" "}
                <i className="bi bi-quote"></i>{" "}
              </p>
              <img src={item.img_url} alt={item.section_title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// PropTypes definition
PressSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      section_title: PropTypes.string,
      section_sub_title: PropTypes.string,
      content: PropTypes.string,
      img_url: PropTypes.string,
    })
  ).isRequired,
};

export default PressSection;
