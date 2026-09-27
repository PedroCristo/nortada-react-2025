import React, { useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

function ChristmasMessage({
  message,
  opacityStyle,
  positionStyle,
  widthStyle,
}) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const location = useLocation();

  const hideChristmasMessage = () => {
    setIsMenuActive(true);
  };

  // Only show on the home page
  if (location.pathname !== "/" && location.pathname !== "/home-en") {
    return null;
  }

  return (
    <div
      id="ChristmasMessage"
      style={{
        opacity: opacityStyle,
        position: positionStyle,
        width: widthStyle,
      }}
      className={`set-bg d-flex justify-content-center align-items-center ${
        isMenuActive ? "active" : ""
      }`}
    >
      <div className="title-box">
        <i
          className="bi bi-x-lg text-danger mb-5"
          style={{ opacity: opacityStyle }}
          onClick={hideChristmasMessage}
        ></i>

        <h4 className="text-white">{message}</h4>
      </div>
    </div>
  );
}

ChristmasMessage.propTypes = {
  message: PropTypes.string,
  opacityStyle: PropTypes.string,
  positionStyle: PropTypes.string,
  widthStyle: PropTypes.string,
};

export default ChristmasMessage;