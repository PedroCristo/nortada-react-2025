function ChristmasMessage() {
  return (
    <div
      id="ChristmasMessage"
      className="set-bg d-flex justify-center aligh-items center"
    >
      <div className="toggler" onClick={toggleMenu}>
        {isActive ? (
          <i className={`fa fa-times ${isActive ? "active" : ""}`}></i>
        ) : (
          <i className="fa fa-bars"></i>
        )}
      </div>
      {isChristmasVisible && (
        <div
          style={{
            display: christmasStyle,
            opacity: opacityStyle,
            position: positionStyle,
            width: widthStyle,
          }}
          className="christmas"
        >
          <h4>{message}</h4>
          <i className="fa fa-times" onClick={hideChristmasMessage}></i>
        </div>
      )}
    </div>
  );
}

export default ChristmasMessage;
