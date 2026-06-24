import React, { useEffect, useState } from "react";

function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div id="preloader">
      <div className="preloader-wrapper">
        <div className="spinner"></div>

        <img
          src="/images/extras/nortada_logo_no_bg.png"
          alt="Nortada Logo"
          className="preloader-logo"
          
        />
      </div>
    </div>
  );
}

export default Preloader;