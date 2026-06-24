import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function HeroSection({
  title,
  sub_title,
  btn_menu_link,
  btn_menu,
  btn_booking,
}) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="d-flex align-items-center position-relative"
    >
      {/* PARALLAX BACKGROUND */}
      <div
        className="hero-bg"
        style={{
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />

      <div
        className="container position-relative text-center text-lg-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-lg-8">
            <h1 className="mb-2">
              <span className="title-brand">{title}</span>
            </h1>

            <h2>{sub_title}</h2>

            <div className="btns">
              <Link to={btn_menu_link} className="btn-menu animated fadeInUp scrollto">
                {btn_menu}
              </Link>

              <Link to="tel:+351219291516" className="btn-book animated fadeInUp scrollto">
                {btn_booking}
              </Link>
            </div>
          </div>

          <div className="col-lg-4">
            <img
              className="hero-img"
              src="/images/extras/guia_michelin.png"
              alt="Michelin Guide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  sub_title: PropTypes.string.isRequired,
  btn_menu_link: PropTypes.string.isRequired,
  btn_menu: PropTypes.string.isRequired,
  btn_booking_link: PropTypes.string.isRequired,
  btn_booking: PropTypes.string.isRequired,
};

export default HeroSection;
