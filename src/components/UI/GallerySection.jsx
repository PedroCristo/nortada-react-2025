import PropTypes from "prop-types";
import galleryDataImages from "../../data/global/gallery-images";
import React, { useEffect } from 'react';
import initializeGalleryFeatures from '../../js/gallery-light-box';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'glightbox/dist/css/glightbox.css'; // Import GLightbox styles

function GallerySection({ gallery_title, gallery_sub_title }) {

  useEffect(() => {
    initializeGalleryFeatures();
  }, []);
  return (
    <section id="gallery" className="gallery">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{gallery_title}</h2>
          <p className="fst-italic">{gallery_sub_title}</p>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {galleryDataImages.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a
                  href={item.image_url_desktop} // Full-size image for the lightbox
                  className="gallery-lightbox"
                  data-gall="gallery-item"
                >
                  <img
                    src={item.image_url_desktop} // Thumbnail or smaller image
                    alt={item.altText || `Gallery image ${index + 1}`} // Fallback for alt text
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

GallerySection.propTypes = {
  gallery_title: PropTypes.string,
  gallery_sub_title: PropTypes.string,
};

export default GallerySection;


