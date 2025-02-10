import PropTypes from "prop-types";
import FormSection from "./FormSection";

function ContactSection({
  section_title,
  sub_title,
  location_title,
  location,
  openHours_title,
  openHours,
  email_title,
  email,
  phone_title,
  phone,
  phone_note,
  form_error,
  FormData, // Accept FormData as a prop
}) {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{section_title}</h2>
          <p className="fst-italic">{sub_title}</p>
        </div>
      </div>

      <div data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83679.40463173686!2d-9.468106986593197!3d38.792262466641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1edc667bf6f6d3%3A0x9dbb65b8847558fb!2sRestaurante%20Nortada!5e0!3m2!1sen!2sie!4v1737377905084!5m2!1sen!2sie"
          width="100%"
          height="300"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurante Nortada Location"
        />
      </div>

      <div className="container" data-aos="fade-up">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>{location_title}:</h4>
                <p>{location}</p>
              </div>

              <div className="open-hours">
                <i className="bi bi-clock"></i>
                <h4>{openHours_title}:</h4>
                <p>{openHours}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>{email_title}:</h4>
                <p>{email}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>{phone_title}:</h4>
                <p>{phone}</p>
                <p>{phone_note}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            {FormData && FormData.length > 0 ? (
              FormData.map((item) => (
                <FormSection
                  key={item.id}
                  recaptcha_menssage={item.recaptcha_menssage}
                  form_name={item.form_name}
                  form_email={item.form_email}
                  form_subject={item.form_subject}
                  form_message={item.form_message}
                  form_sent_menssage={item.form_sent_menssage}
                  form_btn={item.form_btn}
                  recaptcha_lang={item.recaptcha_lang}
                />
              ))
            ) : (
              <div className="d-flex justify-content-center align-items-center">
                <p className="p-5 mt-5">{form_error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Adding PropTypes
ContactSection.propTypes = {
  section_title: PropTypes.string.isRequired,
  sub_title: PropTypes.string.isRequired,
  location_title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  openHours_title: PropTypes.string.isRequired,
  openHours: PropTypes.string.isRequired,
  email_title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_title: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  phone_note: PropTypes.string.isRequired,
  form_error: PropTypes.string.isRequired,
  FormData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      recaptcha_menssage: PropTypes.string.isRequired,
      form_name: PropTypes.string.isRequired,
      form_email: PropTypes.string.isRequired,
      form_subject: PropTypes.string.isRequired,
      form_message: PropTypes.string.isRequired,
      form_sent_menssage: PropTypes.string.isRequired,
      form_btn: PropTypes.string.isRequired,
      recaptcha_lang: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactSection;
