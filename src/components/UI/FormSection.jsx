import PropTypes from "prop-types";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function FormSection({
  recaptcha_menssage,
  form_name,
  form_email,
  form_subject,
  form_message,
  form_sent_menssage,
  form_btn,
  recaptcha_lang
}) {
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleRecaptchaChange = () => {
    setIsRecaptchaChecked(true);
    setAlertMessage(""); // Clear any previous alert message
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRecaptchaChecked) {
      e.target.submit();
    } else {
      setAlertMessage(recaptcha_menssage); // Use the passed prop
    }
  };

  return (
    <form
      action="https://formsubmit.co/rnortada@sapo.pt"
      method="post"
      role="form"
      className="email-form"
      onSubmit={handleSubmit}
    >
     <input type="hidden" name="_next" value="https://restaurantenortada.com/"></input>
      <div className="row">
        <div className="col-md-6 form-group">
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder={form_name}
            required
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder={form_email}
            required
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          placeholder={form_subject}
          required
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          rows="8"
          placeholder={form_message}
          required
        ></textarea>
      </div>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">{form_sent_menssage}</div>
      </div>
      <div className="text-left row">
        <div className="col-md-6">
        <button type="submit" className="btn">{form_btn}</button>
        </div>
        <div className="col-md-6">
      <ReCAPTCHA
        // sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        sitekey={"6Lfsr84qAAAAAFtyUbI1a8jXj7YOaxzZ6NQVZdL8"}
        onChange={handleRecaptchaChange}
        hl={recaptcha_lang}
      />
      {alertMessage && (
        <h6 className="alert alert-danger mt-3">{alertMessage}</h6>
      )}
        </div>
      </div>
    </form>
  );
}

// PropTypes for validation
FormSection.propTypes = {
  form_name: PropTypes.string.isRequired,
  form_email: PropTypes.string.isRequired,
  form_subject: PropTypes.string.isRequired,
  form_message: PropTypes.string.isRequired,
  form_sent_menssage: PropTypes.string.isRequired,
  form_btn: PropTypes.string.isRequired,
  recaptcha_menssage: PropTypes.string.isRequired,
  recaptcha_lang: PropTypes.string.isRequired
};

export default FormSection;
