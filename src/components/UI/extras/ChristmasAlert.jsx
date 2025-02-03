import React, { useState } from "react";
import PropTypes from "prop-types";

function ChristmasMessage({  message, opacityStyle, positionStyle, widthStyle }) {
  const [isMenuActive, setIsMenuActive] = useState(false);



  const hideChristmasMessage = () => {
    setIsMenuActive(true); // Add 'active' class when hiding message
  };

  return (
    <div
      id="ChristmasMessage"
      style={{
        opacity: opacityStyle,
        position: positionStyle,
        width: widthStyle,
      }}
      className={`set-bg d-flex justify-content-center align-items-center ${isMenuActive ? "active" : ""}`}
    >
        <div className="title-box">
          <i className="bi bi-x-lg text-danger mb-5" style={{opacity: opacityStyle,}} onClick={hideChristmasMessage}></i>
          <h4>{message}</h4>
        </div>
    </div>
  );
}

// PropTypes
ChristmasMessage.propTypes = {
  message: PropTypes.string,
  opacityStyle: PropTypes.string,
  positionStyle: PropTypes.string,
  widthStyle: PropTypes.string,
};


export default ChristmasMessage;


