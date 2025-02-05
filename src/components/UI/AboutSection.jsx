import PropTypes from "prop-types";

function AboutSection({
  paragraph_1,
  paragraph_2,
  paragraph_3,
  paragraph_4,
  paragraph_5,
  paragraph_6,
  section_title,
}) {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <h3 className="section-title">{section_title}</h3>
        <div className="row">
          <div
            className="col-lg-5 order-1 order-lg-2"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="about-img">
              <img src="/images/extras/nortada_12.jpg" alt="" />
            </div>
            <div className="about-img mt-4 display-none-991">
              <img src="/images/extras/nortada_6.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-7 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>{paragraph_1}</p>
            <p>{paragraph_2}</p>
            <p>{paragraph_3}</p>
            <p>{paragraph_4}</p>
            <p>{paragraph_5}</p>
            <p>{paragraph_6}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// PropTypes definition
AboutSection.propTypes = {
  paragraph_1: PropTypes.string.isRequired,
  paragraph_2: PropTypes.string.isRequired,
  paragraph_3: PropTypes.string.isRequired,
  paragraph_4: PropTypes.string.isRequired,
  paragraph_5: PropTypes.string.isRequired,
  paragraph_6: PropTypes.string.isRequired,
  section_title: PropTypes.string.isRequired,
};

export default AboutSection;
