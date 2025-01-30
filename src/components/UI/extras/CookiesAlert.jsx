import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// CookieAlert Component
function CookieAlert({
  message,
  acceptButtonText,
  declineButtonText,
  onAccept,
  onDecline,
  policy_name,
  policy_url
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem("cookiesAccepted");
    if (!hasAccepted) {
      setIsVisible(true); // Show the alert if cookies haven't been accepted/declined
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true"); // Store acceptance in localStorage
    setIsVisible(false); // Hide the alert box
    onAccept();
  };

  const handleDecline = () => {
    onDecline();
    window.location.href = "https://www.google.com"; // Redirect to Google
  };

  if (!isVisible) return null;

  return (
    <div className="alert-box container">
      <p>{message} <span><Link className="custom-link" to={policy_url}>{policy_name}</Link></span></p>
      <div className="button-container">
        <button className="btn" onClick={handleAccept}>
          {acceptButtonText}
        </button>
        <button className="btn" onClick={handleDecline}>
          {declineButtonText}
        </button>
      </div>
    </div>
  );
}

// PropTypes for validation
CookieAlert.propTypes = {
  message: PropTypes.string.isRequired,
  policy_name: PropTypes.string.isRequired,
  policy_url: PropTypes.string.isRequired,
  acceptButtonText: PropTypes.string.isRequired,
  declineButtonText: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
};

export default CookieAlert;



