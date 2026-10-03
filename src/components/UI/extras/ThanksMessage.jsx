import React from "react";
import { Link } from "react-router-dom";

function ThanksMessage({
  thanks_title,
  thanks_message,
  thanks_button_text,
}) {
  return (
    <div className="thanks-page set-bg min-vh-100 d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <h1 className="interactive-color">{thanks_title}</h1>

            <h5 className="text-white mt-3 mb-5">{thanks_message}</h5>

            <Link to="/" className="btn btn-primary text-grey mt-3">
              {thanks_button_text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThanksMessage;